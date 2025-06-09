import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    const client = await clientPromise
    const db = client.db()

    const admin = await db.collection('admins').findOne({ email })
    if (!admin) {
      return NextResponse.json({ message: 'Admin user not found' }, { status: 404 })
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password)
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
    }

    // Create JWT token with role
    const token = jwt.sign(
      { email: admin.email, id: admin._id, role: 'admin' },
      JWT_SECRET,
      { expiresIn: '1h' }
    )

    // Set JWT as a secure HttpOnly cookie
    const response = NextResponse.json({ message: 'Login successful' })
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: false,
    //   secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60, // 1 hour
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}

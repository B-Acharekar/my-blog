import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = process.env.JWT_SECRET || 'your_fallback_secret'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  console.log('🧪 Token from cookies:', token)

  if (!token) {
    console.log('❌ No token found. Redirecting to login.')
    return NextResponse.redirect(new URL('/admin/sign-in', req.url))
  }

  try {
    const secret = new TextEncoder().encode(JWT_SECRET)

    const { payload } = await jwtVerify(token, secret)
    console.log('✅ JWT Decoded:', payload)

    if (payload.role !== 'admin') {
      console.log('❌ Role is not admin.')
      throw new Error('Unauthorized')
    }

    return NextResponse.next()
  } catch (err) {
    console.log('❌ JWT Verification Failed:', err)
    return NextResponse.redirect(new URL('/admin/sign-in', req.url))
  }
}

export const config = {
  matcher: ['/admin/dashboard/:path*'],
}

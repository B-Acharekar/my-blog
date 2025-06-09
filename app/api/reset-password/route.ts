// app/api/reset-password/route.ts
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { token, password } = await req.json();

    if (!token || !password || password.length < 6) {
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    // Find user by token (adjust this query depending on how you store/reset tokens)
    const user = await db.collection('users').findOne({ resetToken: token });

    if (!user) {
      return NextResponse.json({ message: 'Invalid or expired token' }, { status: 400 });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update user password and remove/reset token
    const result = await db.collection('users').updateOne(
      { _id: user._id },
      {
        $set: { password: hashedPassword },
        $unset: { resetToken: "", resetTokenExpiry: "" }, // if you have expiry
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: 'Failed to reset password' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Reset password error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

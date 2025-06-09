// app/api/forgot-password/route.ts

import { sendResetEmail } from '@/lib/resend';
import crypto from 'crypto';
import clientPromise from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  const client = await clientPromise;
  const db = client.db();
  const users = db.collection('users');

  const user = await users.findOne({ email });

  if (!user) {
    // Always respond success (avoid leaking user existence)
    return NextResponse.json({ message: 'If user exists, email was sent' });
  }

  const token = crypto.randomBytes(32).toString('hex');
  const expiry = new Date(Date.now() + 1000 * 60 * 15); // 15 min

  await users.updateOne(
    { email },
    { $set: { resetToken: token, resetTokenExpiry: expiry } }
  );

  await sendResetEmail(email, token);

  return NextResponse.json({ message: 'Reset link sent if email exists' });
}

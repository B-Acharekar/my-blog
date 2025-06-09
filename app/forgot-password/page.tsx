'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const res = await fetch('/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message || 'Request sent');
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="absolute top-4 left-4 flex items-center space-x-1 cursor-pointer text-lime-400 hover:text-lime-600">
        <Link href="/" className="flex items-center space-x-1">
          <FiArrowLeft size={20} />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>
      <div className="w-full max-w-md space-y-6 rounded-xl bg-slate-800 p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white">Forgot Password</h1>
        <p className="text-sm text-center text-gray-300">Enter your email to receive a reset link</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring-1"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-lime-500 px-4 py-2 text-white font-medium shadow hover:bg-lime-600 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        {message && (
          <div className="text-center text-sm text-lime-400 mt-4">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

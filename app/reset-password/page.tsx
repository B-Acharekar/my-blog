'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get('token') || '';

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!token) {
      setError('Invalid or missing token.');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token) {
      setError('Invalid or missing token.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Failed to reset password.');
        setLoading(false);
        return;
      }

      setSuccess('Password reset successful! Redirecting to sign in...');
      setTimeout(() => {
        router.push('/sign-in');
      }, 3000);
    } catch (err) {
      setError('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 px-4">
      <div className="absolute top-4 left-4 flex items-center space-x-1 cursor-pointer text-lime-400 hover:text-lime-600">
                <Link href="/" className="flex items-center space-x-1">
                    <FiArrowLeft size={20} />
                    <span className="text-sm font-medium">Back</span>
                </Link>
            </div>
      <div className="w-full max-w-md rounded-xl bg-slate-800 p-8 shadow-lg">
        <h1 className="mb-4 text-center text-2xl font-bold text-gray-100">Reset Password</h1>

        {error && (
          <p className="mb-4 rounded border border-red-600 bg-red-900 px-4 py-2 text-red-400">
            {error}
          </p>
        )}
        {success && (
          <p className="mb-4 rounded border border-green-600 bg-green-900 px-4 py-2 text-green-400">
            {success}
          </p>
        )}

        {!success && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                New Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Enter new password"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring-1"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                placeholder="Confirm new password"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring-1"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-lime-500 px-4 py-2 text-white font-medium shadow transition duration-200 hover:bg-lime-700 hover:shadow-md disabled:opacity-50"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/admin/sign-in', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.message || 'Login failed')
    } else {
      router.push('/admin/dashboard')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 py-12">
      {/* Back Button */}
      <div className="absolute top-4 left-4">
        <Link
          href="/"
          className="flex items-center text-lime-500 hover:text-lime-600 transition-colors duration-200"
        >
          <FiArrowLeft size={20} className="mr-1" />
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-slate-800 shadow-2xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Admin Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Admin Email
          </label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-lime-400 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-lime-500 hover:bg-lime-600 text-black font-semibold py-2 rounded-lg transition-colors duration-300"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

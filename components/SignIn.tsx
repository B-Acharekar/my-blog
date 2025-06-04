'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // simulate login
        setTimeout(() => {
            alert(`Signed in with ${email} / ${password}`);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center px-4 bg-slate-900">
            {/* Back arrow at top-left corner */}
            <div className="absolute top-4 left-4 flex items-center space-x-1 cursor-pointer text-lime-400 hover:text-lime-600">
                <Link href="/" className="flex items-center space-x-1">
                    <FiArrowLeft size={20} />
                    <span className="text-sm font-medium">Back</span>
                </Link>
            </div>

            {/* Main form */}
            <div className="w-full max-w-md space-y-6 rounded-xl bg-slate-800 p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-100">Sign in</h1>
                <p className="text-sm text-center text-gray-300">Welcome user, please sign in to continue</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="your@email.com"
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="*****"
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring-1"
                        />
                    </div>

                    <div className="text-right text-sm">
                        <Link
                            href="/forgot-password"
                            className="text-lime-400 hover:text-lime-200 hover:underline transition"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-md bg-lime-500 px-4 py-2 text-white font-medium shadow transition duration-200 hover:bg-lime-700 hover:shadow-md disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign in'}
                    </button>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-300">
                            Don&apos;t have an account?{' '}
                            <Link
                                href="/register"
                                className="font-semibold text-lime-400 hover:text-lime-200 hover:underline hover:underline-offset-4"
                            >
                                Register
                            </Link>
                        </p>
                    </div>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-300">
                            Are you{' '}
                            <Link
                                href="/admin/new-post"
                                className="font-semibold text-lime-500 transition duration-200 hover:text-lime-800 hover:underline hover:underline-offset-4"
                            >
                                Admin
                            </Link>
                            ?
                        </p>
                    </div>

                </form>
            </div>
        </div>
    );
}

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FiArrowLeft } from "react-icons/fi";

export default function SignUpForm() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || 'Signup failed');
            } else {
                alert('Signup successful! You can now sign in.');
                router.push('/sign-in')
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center px-4 bg-slate-900">
            <div className="absolute top-4 left-4 flex items-center space-x-1 cursor-pointer text-lime-400 hover:text-lime-600">
                <Link href="/" className="flex items-center space-x-1">
                    <FiArrowLeft size={20} />
                    <span className="text-sm font-medium">Back</span>
                </Link>
            </div>

            <div className="w-full max-w-md space-y-6 rounded-xl bg-slate-800 p-8 shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-100">Create Account</h1>
                <p className="text-sm text-center text-gray-300">Welcome! Please fill in the form to register.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="John Doe"
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring-1"
                        />
                    </div>

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

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">
                            Confirm Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="*****"
                            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-lime-400 focus:ring-lime-400 focus:outline-none focus:ring-1"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-lime-500 px-4 py-2 text-white font-medium shadow transition duration-200 hover:bg-lime-700 hover:shadow-md disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>

                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-300">
                            Already have an account?{' '}
                            <Link
                                href="/sign-in"
                                className="font-semibold text-lime-400 hover:text-lime-200 hover:underline hover:underline-offset-4"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

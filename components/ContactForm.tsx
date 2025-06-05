'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Add API call here if needed later
  }

  return (
    <main className="max-w-xl mx-auto p-10 bg-gradient-to-tr from-slate-700 to-slate-800 rounded-2xl shadow-2xl mt-12 mb-16">
      <h1 className="text-4xl font-extrabold mb-10 text-lime-500 text-center drop-shadow-lg">
        Contact Me
      </h1>

      {submitted ? (
        <div className="flex flex-col items-center text-green-700 bg-green-100 rounded-md p-8 space-y-4 shadow-md">
          <svg
            className="w-14 h-14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-xl font-semibold text-center">
            Thanks for reaching out! I will get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-gray-300 text-lg"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-lime-500 rounded-xl px-5 py-3 placeholder-lime-400
                shadow-lg focus:outline-none focus:ring-4 focus:ring-lime-400 focus:border-lime-600
                transition duration-300 ease-in-out"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-gray-300 text-lg"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-lime-500 rounded-xl px-5 py-3 placeholder-lime-400
                shadow-lg focus:outline-none focus:ring-4 focus:ring-lime-400 focus:border-lime-600
                transition duration-300 ease-in-out"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-gray-300 text-lg"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-slate-900 border border-lime-500 rounded-xl px-5 py-3 placeholder-lime-400
                shadow-lg focus:outline-none focus:ring-4 focus:ring-lime-400 focus:border-lime-600
                transition duration-300 ease-in-out resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-600 text-white font-extrabold px-7 py-4 rounded-2xl
              hover:bg-lime-700 focus:outline-none focus:ring-4 focus:ring-lime-500
              shadow-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            Send
          </button>
        </form>
      )}
    </main>
  );
}

'use client';

import Link from 'next/link';
import { FiEdit, FiUpload } from 'react-icons/fi';

export default function AdminDashboard() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
        Admin <span className="text-lime-400">Dashboard</span>
      </h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Blog Post Form */}
        <section className="group p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-lime-400 shadow-md hover:shadow-lime-500/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
            <FiEdit className="text-lime-400" />
            Create New Blog Post
          </h2>
          <p className="text-gray-400 mb-6">
            Start writing and managing your latest blog articles.
          </p>
          <Link
            href="/admin/new-post"
            className="inline-block text-lg font-semibold text-white group-hover:text-lime-400 transition-colors duration-200"
          >
            Go to <span className="text-lime-400">Blog Form</span> →
          </Link>
        </section>

        {/* Project Submission Form */}
        <section className="group p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-lime-400 shadow-md hover:shadow-lime-500/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-3 mb-4">
            <FiUpload className="text-lime-400" />
            Submit New Project
          </h2>
          <p className="text-gray-400 mb-6">
            Showcase and manage your latest development work.
          </p>
          <Link
            href="/admin/project-submission"
            className="inline-block text-lg font-semibold text-white group-hover:text-lime-400 transition-colors duration-200"
          >
            Go to <span className="text-lime-400">Project Form</span> →
          </Link>
        </section>
      </div>
    </main>
  );
}

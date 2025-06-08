'use client'

import Link from 'next/link'
import { FiEdit, FiUpload } from 'react-icons/fi'

export default function AdminDashboard() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">Admin Dashboard</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Blog Post Form */}
        <section className="group p-6 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 hover:border-lime-400 transition-all">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2 mb-4">
            <FiEdit className="text-lime-400" />
            Create New Blog Post
          </h2>
          <Link
            href="/admin/new-post"
            className="inline-block text-2xl font-bold text-white group-hover:text-lime-400 transition"
          >
            My<span className="text-lime-400">Blogs</span> Form →
          </Link>
        </section>

        {/* Project Submission Form */}
        <section className="group p-6 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 hover:border-lime-400 transition-all">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2 mb-4">
            <FiUpload className="text-lime-400" />
            Submit New Project
          </h2>
          <Link
            href="/admin/project-submission"
            className="inline-block text-2xl font-bold text-white group-hover:text-lime-400 transition"
          >
            My<span className="text-lime-400">Project</span> Form →
          </Link>
        </section>
      </div>
    </main>
  )
}

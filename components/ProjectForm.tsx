'use client'

import { useState } from 'react'

export default function ProjectForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    github: '',
    live: '',
    tags: '',
    collaborators: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    const payload = {
      ...formData,
      tags: formData.tags
        ? formData.tags.split(',').map((t) => t.trim()).filter(Boolean)
        : [],
      collaborators: formData.collaborators
        ? formData.collaborators.split(',').map((c) => c.trim()).filter(Boolean)
        : [],
      createdAt: new Date().toISOString(),
    }

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || 'Failed to submit project')
      }

      setSuccess('Project added successfully!')
      setFormData({
        title: '',
        description: '',
        github: '',
        live: '',
        tags: '',
        collaborators: '',
      })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-gray-900 rounded-xl shadow space-y-6"
      aria-live="polite"
    >
      <h2 className="text-2xl font-semibold mb-2 text-white">Add New Project</h2>

      <div>
        <label htmlFor="title" className="block mb-1 text-white font-medium">
          Project Title <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400 text-white"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block mb-1 text-white font-medium">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows={5}
          className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400 text-white resize-y"
          required
        />
      </div>

      <div>
        <label htmlFor="github" className="block mb-1 text-white font-medium">
          GitHub Link <span className="text-red-500">*</span>
        </label>
        <input
          id="github"
          name="github"
          value={formData.github}
          onChange={handleChange}
          placeholder="https://github.com/username/repo"
          className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400 text-white"
          required
          type="url"
          aria-describedby="githubHelp"
        />
        <small id="githubHelp" className="text-gray-400">
          Enter the full GitHub repository URL
        </small>
      </div>

      <div>
        <label htmlFor="live" className="block mb-1 text-white font-medium">
          Live Site (optional)
        </label>
        <input
          id="live"
          name="live"
          value={formData.live}
          onChange={handleChange}
          placeholder="https://your-live-site.com"
          className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400 text-white"
          type="url"
        />
      </div>

      <div>
        <label htmlFor="tags" className="block mb-1 text-white font-medium">
          Tags (comma-separated)
        </label>
        <input
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="e.g. React, Next.js, Open Source"
          className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400 text-white"
        />
      </div>

      <div>
        <label htmlFor="collaborators" className="block mb-1 text-white font-medium">
          Collaborators (comma-separated GitHub usernames)
        </label>
        <input
          id="collaborators"
          name="collaborators"
          value={formData.collaborators}
          onChange={handleChange}
          placeholder="e.g. user1, user2"
          className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-400 text-white"
        />
      </div>

      {error && <p className="text-red-500 font-semibold">{error}</p>}
      {success && <p className="text-green-500 font-semibold">{success}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded font-semibold text-white transition ${
          loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-lime-500 hover:bg-lime-600'
        }`}
      >
        {loading ? 'Submitting...' : 'Submit Project'}
      </button>
    </form>
  )
}

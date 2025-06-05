'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function NewPostForm() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [content, setContent] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, slug, description, coverImage, content }),
      headers: { 'Content-Type': 'application/json' },
    })
    alert('Post saved!')
  }

  return (
    <>
          <nav className="mb-8">
        <Link
          href="/"
          className="text-lime-600 hover:text-lime-700 font-medium transition"
        >
          Back to Blog
        </Link>
      </nav>
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-2xl mx-auto">
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border p-2" />
      <input placeholder="Slug (URL)" value={slug} onChange={(e) => setSlug(e.target.value)} className="w-full border p-2" />
      <input placeholder="Cover Image URL" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} className="w-full border p-2" />
      <textarea placeholder="Short description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border p-2" />
      <textarea placeholder="Content (Markdown)" value={content} onChange={(e) => setContent(e.target.value)} rows={10} className="w-full border p-2" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Publish</button>
    </form>
    </>
  )
}

'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function NewPostForm() {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState('')
  const [date, setDate] = useState('')
  const [published, setPublished] = useState(false)
  const [author, setAuthor] = useState('')
  const [readTime, setReadTime] = useState('')
  const [content, setContent] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const postData = {
      title,
      slug,
      shortDescription: description,
      content,
      coverImage,
      category,
      tags: tags.split(',').map((tag) => tag.trim()),
      date: date || new Date().toISOString(),
      published,
      author,
      readTime,
    }

    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      alert('Post saved!')
    } else {
      alert('Failed to save post.')
    }
  }

  return (
    <>
      <nav className="mb-8">
        <Link href="/" className="text-lime-600 hover:text-lime-700 font-semibold transition">
          ← Back to Blog
        </Link>
      </nav>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-6 rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-white mb-4">Create New Blog Post</h2>

        <div>
          <label className="block mb-1 font-semibold text-gray-400" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-slate-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-400" htmlFor="slug">
              Slug (URL)
            </label>
            <input
              id="slug"
              placeholder="post-slug-url"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full border border-slate-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-400" htmlFor="coverImage">
              Cover Image URL
            </label>
            <input
              id="coverImage"
              placeholder="https://example.com/image.jpg"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              className="w-full border border-slate-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-400" htmlFor="category">
              Category
            </label>
            <input
              id="category"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-slate-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-400" htmlFor="tags">
              Tags (comma separated)
            </label>
            <input
              id="tags"
              placeholder="tag1, tag2, tag3"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full border border-slate-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div className="flex items-center space-x-2 pt-6">
            <input
              id="published"
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="w-5 h-5 text-lime-600 rounded border-slate-800 focus:ring-lime-500"
            />
            <label htmlFor="published" className="text-gray-400 font-semibold select-none">
              Published
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-400" htmlFor="author">
              Author
            </label>
            <input
              id="author"
              placeholder="Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full border border-slate-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-400" htmlFor="readTime">
              Read Time (e.g. 4 min)
            </label>
            <input
              id="readTime"
              placeholder="Read Time"
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              className="w-full border border-slate-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>

          {/* <div>
            <label className="block mb-1 font-semibold text-gray-400" htmlFor="date">
              Publish Date
            </label>
            <input
              id="date"
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-slate-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div> */}
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-400" htmlFor="description">
            Short Description
          </label>
          <textarea
            id="description"
            placeholder="Brief summary of the post"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-slate-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            rows={3}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold text-gray-400" htmlFor="content">
            Content (Markdown)
          </label>
          <textarea
            id="content"
            placeholder="Write your post content here in Markdown"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-slate-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-lime-500"
            rows={10}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-lime-600 hover:bg-lime-700 transition text-white font-semibold py-3 rounded-md shadow-sm"
        >
          Publish Post
        </button>
      </form>
    </>
  )
}

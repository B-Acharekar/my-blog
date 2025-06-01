'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function NewPostForm() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, slug, content }),
      headers: { 'Content-Type': 'application/json' },
    });
    alert('Post saved!');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-2xl mx-auto">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2"
      />
      <input
        placeholder="Slug (url-path)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="w-full border p-2"
      />
      <textarea
        placeholder="Content (HTML or Markdown)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        className="w-full border p-2"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Publish</button>
      <Link href={`/`}>
            <button type="submit" className="bg-red-600 text-white mx-5 p-2 rounded hover:bg-red-900 hover:rounded-2xl">Back</button>
      </Link>
    </form>
  );
}

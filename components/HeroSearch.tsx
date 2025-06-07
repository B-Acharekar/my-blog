'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'

type Post = {
  title: string
  slug: string
}

export default function HeroSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState('')

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="relative w-full max-w-xl">
      {/* Input Wrapper */}
      <div className="relative w-full">
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lime-500 w-5 h-5 pointer-events-none" />
        <input
          type="search"
          aria-label="Search blog posts"
          placeholder="Search posts..."
          className="w-full rounded-full border border-gray-300 py-2.5 pl-11 pr-4 text-base focus:ring-2 focus:ring-blue-400 focus:outline-none dark:bg-slate-900 dark:text-white dark:border-gray-700"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Debug Count */}
      <div className="mt-2 text-sm text-gray-400 dark:text-gray-500">
        {filteredPosts.length} result{filteredPosts.length !== 1 ? 's' : ''}
      </div>

      {/* Suggestions */}
      {query.trim() !== '' && (
        <div className="mt-4 text-left space-y-2 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md max-h-48 overflow-y-auto border dark:border-gray-700">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              >
                <span className="text-blue-600 dark:text-blue-400">{post.title}</span>
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">No posts found.</p>
          )}
        </div>
      )}
    </div>
  )
}

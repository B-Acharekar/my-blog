'use client'

import React from 'react'

interface PostHeaderProps {
  title: string
  date: string
  author?: string
  coverImage?: string
}

function formatDate(dateString?: string) {
  if (!dateString) return 'Date Classified'
  const date = new Date(dateString)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PostHeader({ title, date, author, coverImage }: PostHeaderProps) {
  return (
    <>
      {coverImage && (
        <img
          src={coverImage}
          alt={title}
          className="w-full h-auto max-h-[420px] object-cover rounded-xl shadow mb-6"
        />
      )}
      <h1 className="mb-2 font-extrabold tracking-tight text-lime-600">{title}</h1>
      <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8">
        <time dateTime={date}>{formatDate(date)}</time>
        <span className="hidden sm:inline">•</span>
        <span>By {author || 'Anonymous'}</span>
      </div>
    </>
  )
}

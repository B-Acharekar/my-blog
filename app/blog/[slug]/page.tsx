import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FiArrowLeft } from 'react-icons/fi'

import { getPostBySlug } from '@/lib/post'
import Header from '@/components/Header'
import PostHeader from '@/components/PostHeader'
import PostContent from '@/components/PostContent'

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <nav className="mb-8">
          <Link href="/" className="text-lime-600 hover:text-lime-700 font-medium transition">
            <span className="flex items-center gap-x-1">
              <FiArrowLeft />
              Back to Overview
            </span>
          </Link>
        </nav>

        <article className="prose prose-lg dark:prose-invert prose-a:text-blue-600 prose-img:rounded-xl mx-auto">
          <PostHeader
            title={post.title}
            date={post.date}
            author={post.author}
            coverImage={post.coverImage}
          />
          <hr className="border-gray-300 dark:border-gray-700 mb-6" />
          <PostContent content={post.content} />
        </article>
      </main>
    </>
  )
}

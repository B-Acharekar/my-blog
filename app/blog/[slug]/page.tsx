import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import sanitizeHtml from 'sanitize-html'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/post'

function formatDate(dateString?: string) {
  if (!dateString) return 'Date Classified'
  const date = new Date(dateString)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Simple function to detect if content looks like HTML
function isHTML(content: string) {
  return /<\/?[a-z][\s\S]*>/i.test(content.trim())
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) return notFound()

  const contentIsHTML = isHTML(post.content)

  // Sanitize HTML if content is raw HTML
  const sanitizedHTML = contentIsHTML ? sanitizeHtml(post.content) : ''

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav className="mb-8">
        <Link href="/" className="text-lime-600 hover:text-lime-700 font-medium transition">
          ← Back to Blog
        </Link>
      </nav>

      <article className="prose prose-lg dark:prose-invert prose-a:text-blue-600 prose-img:rounded-xl mx-auto">
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-auto max-h-[420px] object-cover rounded-xl shadow mb-6"
          />
        )}

        <h1 className="mb-2 font-extrabold tracking-tight text-lime-600">{post.title}</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="hidden sm:inline">•</span>
          <span>By {post.author || 'Anonymous'}</span>
        </div>

        <hr className="border-gray-300 dark:border-gray-700 mb-6" />

        {contentIsHTML ? (
          // Render sanitized raw HTML safely
          <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
        ) : (
          // Render Markdown
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {post.content}
          </ReactMarkdown>
        )}
      </article>
    </main>
  )
}

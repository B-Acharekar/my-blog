// lib/post.ts
import clientPromise from './db'

export async function getAllPosts() {
  const client = await clientPromise
  const db = client.db()
  const posts = await db.collection('posts').find({}).sort({ date: -1 }).toArray()

  return posts.map((post) => ({
    title: post.title,
    slug: post.slug,
    shortDescription: post.shortDescription || '',
    content: post.content || '',
    coverImage: post.coverImage || '',
    category: post.category || '',
    tags: post.tags || [],
    date: post.date || null,
    published: post.published ?? false,
    author: post.author || '',
    readTime: post.readTime || '',
  }))
}

export async function getPostBySlug(slug: string) {
  const client = await clientPromise
  const db = client.db()
  const post = await db.collection('posts').findOne({ slug })

  if (!post) return null

  return {
    title: post.title,
    slug: post.slug,
    shortDescription: post.shortDescription || '',
    content: post.content || '',
    coverImage: post.coverImage || '',
    category: post.category || '',
    tags: post.tags || [],
    date: post.date || null,
    published: post.published ?? false,
    author: post.author || '',
    readTime: post.readTime || '',
  }
}

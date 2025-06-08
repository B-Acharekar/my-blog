import clientPromise from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const {
    title,
    slug,
    shortDescription,
    coverImage,
    content,
    category,
    tags,
    date,
    published,
    author,
    readTime,
  } = await req.json()

  const newPost = {
    title,
    slug,
    shortDescription: shortDescription || '',
    coverImage: coverImage || '',
    content,
    category: category || '',
    tags: tags || [],
    date: date ? new Date(date).toISOString() : new Date().toISOString(),
    published: published ?? false,
    author: author || 'Anonymous',
    readTime: readTime || '',
  }

  try {
    const client = await clientPromise
    const db = client.db()
    const posts = db.collection('posts')

    await posts.insertOne(newPost)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to save post:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}

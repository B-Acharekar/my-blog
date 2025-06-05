import clientPromise from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { title, slug, description, coverImage, content } = await req.json();

  const newPost = {
    title,
    slug,
    description: description || '',
    coverImage: coverImage || '',
    content,
    date: new Date().toISOString(),
  };

  try {
    const client = await clientPromise;
    const db = client.db(); // uses DB from connection string
    const posts = db.collection('posts');

    await posts.insertOne(newPost);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to save post:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

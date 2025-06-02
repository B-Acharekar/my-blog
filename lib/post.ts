import clientPromise from './db';

export async function getAllPosts() {
  const client = await clientPromise;
  const db = client.db();
  const posts = await db.collection('posts').find({}).sort({ date: -1 }).toArray();

  return posts.map((post) => ({
    title: post.title,
    slug: post.slug,
    date: post.date,
  }));
}

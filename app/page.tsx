// app/page.tsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/post';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <div className="text-xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </div>
              <div className="text-sm text-gray-500">{post.date}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

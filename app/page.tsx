// app/page.tsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/post'; // ✅ make sure it's "posts", not "post"

export default async function HomePage() {
  const posts = await getAllPosts(); // ✅ async if using DB or MDX parser

  return (
    <main className="max-w-3xl mx-auto p-6">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-4xl font-bold">My Blog</h1>
        <Link
          href="/admin/new-post"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Go to Admin Panel →
        </Link>
      </header>

      <section className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-blue-700 hover:underline">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500">{post.date}</p>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

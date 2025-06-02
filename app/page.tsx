// app/page.tsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/post';
import Header from '@/components/Header';

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <>
      <Header>
      </Header>
      <main className="max-w-3xl mx-auto p-6">
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
    </>
  );
}

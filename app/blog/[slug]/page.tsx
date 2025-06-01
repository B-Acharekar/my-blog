// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/post';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  // Optional: For static generation
  const posts = await import('@/lib/post').then((mod) => mod.getAllPosts());
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
const { slug } = await params;
const post = getPostBySlug(slug);


  if (!post) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-6">{post.date}</div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </main>
  );
}

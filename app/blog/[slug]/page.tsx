// app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/post';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';

function formatDate(dateString?: string) {
  if (!dateString) return 'Date Classified';
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

export async function generateStaticParams() {
  const posts = await import('@/lib/post').then(mod => mod.getAllPosts());
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;  // Await params first
  const { slug } = awaitedParams;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <>
      <Head>
        <title>{post.title} | My Blog</title>
        <meta name="description" content={post.content.slice(0, 160).replace(/<\/?[^>]+(>|$)/g, '')} />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-10 sm:px-8">
        <nav className="mb-6">
          <Link href="/" className="inline-block text-lime-600 hover:text-lime-700 font-medium transition-colors">
              ← Back to Blog
          </Link>
        </nav>

        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1 className="mb-4 font-extrabold tracking-tight text-lime-600">{post.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 text-sm mb-6 space-y-1 sm:space-y-0 sm:space-x-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.author || 'Anonymous'}</span>
          </div>

          <hr className="mb-8 border-gray-200 dark:border-gray-700" />

          <section
            dangerouslySetInnerHTML={{ __html: post.content || '<p>No content available.</p>' }}
          />
        </article>
      </main>
    </>
  );
}

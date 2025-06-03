// components/Posts.tsx
import { getAllPosts } from '@/lib/post';
import Link from 'next/link';

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <section className="space-y-8">
      {posts.map((post) => {
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        const formattedDate = post.date
          ? new Date(post.date).toLocaleDateString(undefined, options)
          : 'Classified';

        return (
          <article
            key={post.slug}
            className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold text-lime-600 hover:underline">
                {post.title}
              </h2>
            </Link>

            <div className="text-sm text-gray-500 mt-1 flex flex-wrap gap-x-4">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{post.author || 'Anonymous'}</span>
            </div>

            {post.content && (
              <p className="mt-3 text-gray-700 line-clamp-3">
                {post.content.length > 150
                  ? `${post.content.slice(0, 150)}...`
                  : post.content}
              </p>
            )}

            <div className="mt-3">
              <Link
                href={`/blog/${post.slug}`}
                className="text-lime-500 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
}

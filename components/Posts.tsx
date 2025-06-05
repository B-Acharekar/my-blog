
import { getAllPosts } from '@/lib/post';
import Link from 'next/link';

export default async function Posts() {
  const posts = await getAllPosts();

  function stripMarkdown(md: string): string {
    return md
      .replace(/[#_*`~>-]+/g, '') // remove markdown symbols
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') // [text](link) => text
      .replace(/\n+/g, ' ') // newlines to space
      .replace(/!\[.*?\]\(.*?\)/g, '') // remove image tags
      .trim();
  }

  return (
    <section className="w-full px-6 py-12">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-lime-500 mb-12 text-center tracking-wide">
          Latest Posts
        </h2>
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-3 
          auto-rows-fr 
          gap-x-8 
          gap-y-12
        "
        >
          {posts.map((post) => {
            const formattedDate = post.date
              ? new Date(post.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
              : 'Classified';

            return (
              <article
                key={post.slug}
                className="
                min-w-[300px] w-full 
                dark:bg-slate-800 
                bg-white
                border
                border-gray-100 
                dark:border-gray-700 
                rounded-3xl 
                shadow-xl 
                overflow-hidden 
                flex 
                flex-col 
                transition 
                transform 
                hover:scale-105 
                hover:shadow-2xl
                duration-300
              "
              >
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="
                    w-full 
                    h-48 
                    object-cover 
                    rounded-t-3xl 
                    transition 
                    duration-300 
                    hover:opacity-90
                  "
                    loading="lazy"
                  />
                </Link>
                <div className="flex flex-col flex-grow p-6 space-y-4">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-2xl font-semibold text-lime-400 hover:underline line-clamp-2 cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  {post.content && (
                    <p className="text-gray-900 dark:text-gray-300 text-base line-clamp-3 flex-grow">
                      {stripMarkdown(post.content)}
                    </p>
                  )}
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-xs text-gray-900 dark:text-gray-400">{formattedDate}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="
                      bg-lime-600 
                      hover:bg-lime-700 
                      text-white 
                      text-sm 
                      font-medium 
                      px-5 
                      py-2 
                      rounded-full 
                      transition 
                      duration-200
                      whitespace-nowrap
                    "
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );

}

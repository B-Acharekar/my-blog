// lib/posts.ts
export type Post = {
  title: string;
  slug: string;
  date: string;
  content: string;
};

const posts: Post[] = [
  {
    title: 'Getting Started with Dark Mode in Next.js',
    slug: 'dark-mode-nextjs',
    date: '2025-06-01',
    content: `
      <p>In this post, you'll learn how to implement a dark mode toggle in your Next.js app using Tailwind CSS and local storage.</p>
      <h2>1. Setup Tailwind</h2>
      <p>Enable dark mode in <code>tailwind.config.js</code>.</p>
    `,
  },
  {
    title: 'Using IntersectionObserver for Scroll Effects',
    slug: 'intersection-observer-scroll',
    date: '2025-05-29',
    content: `
      <p>Want to highlight sections as you scroll? Here's how to use IntersectionObserver with React.</p>
    `,
  }
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

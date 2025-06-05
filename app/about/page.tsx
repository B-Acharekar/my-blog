//about/page.tsx
import Header from "@/components/Header";

export default function About() {
  return (
    <>
    <Header/>
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>

      <p className="mb-4 text-lg leading-relaxed">
        Hi! I’m Bhushan Acharekar, a passionate engineering student and aspiring software developer. Currently, I’m entering my third year of engineering and continuously working on building my skills through projects and self-learning.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        I enjoy creating web applications using modern technologies like Next.js, React, and Electron. Some of my recent projects include a calculator app, a personal blog website, a financial web application, and a collaborative algorithm visualizer.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        My goal is to grow into a significant role in a tech company where I can contribute meaningfully, learn continuously, and solve impactful problems.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        When I’m not coding, I like exploring new tech trends, reading about cloud computing, and connecting with fellow developers.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Feel free to check out my projects and blog posts, and connect with me on social media!
      </p>
    </main>
    </>
  );
}

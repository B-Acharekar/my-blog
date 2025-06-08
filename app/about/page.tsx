"use client";

import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto p-5">
        {/* Heading */}
        <section className="text-center mt-12">
          <h1 className="text-5xl font-extrabold text-lime-600 drop-shadow-md">
            About Me
          </h1>
        </section>

        {/* Profile + Bio */}
        <motion.section
          className="mt-14 flex flex-col md:flex-row items-center md:items-start gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2l0aHVifGVufDB8fDB8fHww"
              alt="Bhushan Acharekar"
              className="rounded-full w-48 h-48 object-cover border-4 border-lime-500 shadow-lg"
            />
          </div>

          {/* Bio Text */}
          <div className="text-center md:text-left space-y-5 text-lg leading-relaxed prose prose-neutral max-w-none">
            <h2 className="text-2xl font-bold">Bhushan Acharekar</h2>
            <p className="text-gray-700 font-semibold">
              Student • Mumbai, India
            </p>
            <p>
              Hi! I’m Bhushan Acharekar, a passionate engineering student and aspiring software developer. Currently, I’m entering my third year of engineering and continuously working on building my skills through projects and self-learning.
            </p>

            <p>
              I enjoy creating web applications using modern technologies like Next.js, React, and Electron. Some of my recent projects include a calculator app, a personal blog website, a financial web application, and a collaborative algorithm visualizer.
            </p>

            <p>
              My goal is to grow into a significant role in a tech company where I can contribute meaningfully, learn continuously, and solve impactful problems.
            </p>

            <p>
              When I’m not coding, I like exploring new tech trends, reading about cloud computing, and connecting with fellow developers.
            </p>

            <p>
              Feel free to check out my projects and blog posts, and connect with me on social media!
            </p>
          </div>
        </motion.section>
      </main>
    </>
  );
}

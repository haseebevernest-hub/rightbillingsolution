"use client";

import { Blog } from "@/types/blog";
import { urlFor } from "@/sanity/lib/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { motion } from "framer-motion";
import ReadingProgress from "./readingProgress";
import { useRef } from "react";

interface Props {
  blog: Blog;
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-12 mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-10 mb-5">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-8 mb-4">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-6 space-y-2">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-neutral-900 dark:text-white">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 underline"
      >
        {children}
      </a>
    ),
  },
};

export default function BlogContent({ blog }: Props) {
  const containerRef = useRef(null);

  if (!blog?.content) {
    return <p className="text-center mt-20">No content available.</p>;
  }

  return (
    <>
      <ReadingProgress />

      <main
        ref={containerRef}
        className="relative min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 overflow-hidden"
      >
        <article className="px-6 md:px-10 pt-32 pb-24 max-w-4xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-12"
          >
            {blog.title}
          </motion.h1>

          {blog.mainImage && (
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative mb-20"
            >
              <img
                src={urlFor(blog.mainImage).width(1600).url()}
                alt={blog.title}
                className="rounded-3xl w-full object-cover shadow-2xl"
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="prose prose-lg md:prose-xl max-w-none dark:prose-invert">
              <PortableText
                value={blog.content}
                components={portableTextComponents}
              />
            </div>
          </motion.div>

        </article>
      </main>
    </>
  );
}
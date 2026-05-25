"use client";

import { Blog } from "@/types/blog";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
    >
      <Link href={`/resource-center/blogs/${blog.slug.current}`}>
        <motion.div
          whileHover={{ y: -6 }}
          className="group cursor-pointer"
        >
          {blog.mainImage && (
            <div className="overflow-hidden rounded-2xl mb-6">
              <motion.img
                src={urlFor(blog.mainImage).width(600).url()}
                alt={blog.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
            </div>
          )}

          <h2 className="text-2xl font-semibold mb-3 leading-snug group-hover:opacity-70 transition">
            {blog.title}
          </h2>

          {blog.excerpt && (
            <p className="text-gray-500 line-clamp-3 leading-relaxed">
              {blog.excerpt}
            </p>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
}
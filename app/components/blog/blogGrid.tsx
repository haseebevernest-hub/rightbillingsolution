"use client";

import { Blog } from "@/types/blog";
import BlogCard from "./blogCard";
import { motion } from "framer-motion";

interface Props {
  blogs: Blog[];
}

export default function BlogGrid({ blogs }: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.12 },
        },
      }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-14"
    >
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </motion.div>
  );
}
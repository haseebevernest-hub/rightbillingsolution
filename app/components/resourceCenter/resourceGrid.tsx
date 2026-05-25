"use client";

import ResourceCard from "./resourceCard";
import { motion } from "framer-motion";

const resources = [
  {
    title: "Case Studies",
    description:
      "Discover how organizations achieved measurable success using our solutions.",
    href: "/resource-center/caseStudy",
    gradient: "from-blue-500 to-emerald-500",
  },
  {
    title: "Blog",
    description:
      "Latest updates, product news, and expert perspectives from our team.",
    href: "/resource-center/blogs",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function ResourceGrid() {
  return (
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {resources.map((resource) => (
            <motion.div
  key={resource.title}
  variants={{
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <div className="h-full p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
    <ResourceCard {...resource} />
  </div>
</motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
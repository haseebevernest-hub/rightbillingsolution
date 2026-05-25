"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FrameworkCardProps {
  title: string;
  description: ReactNode;
  items: string[];
  delay?: number;
}

export default function FrameworkCard({
  title,
  description,
  items,
  delay = 0,
}: FrameworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {description}
      </p>

      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-gray-700"
          >
            <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

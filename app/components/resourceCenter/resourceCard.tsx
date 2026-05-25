"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  href: string;
  gradient: string;
}

export default function ResourceCard({
  title,
  description,
  href,
  gradient,
}: Props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="relative group"
    >
      <Link href={href}>
        <div className="relative h-full rounded-2xl p-px bg-linear-to-br from-blue-500/40 to-emerald-500/40 group-hover:from-blue-400 group-hover:to-emerald-400 transition-all duration-500">
          <div className="bg-blue-950/90 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/10">
            <div
              className={`inline-block px-4 py-1 text-sm font-medium rounded-full bg-linear-to-r ${gradient} text-white mb-6`}
            >
              {title}
            </div>

            <p className="text-blue-100 leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex items-center text-emerald-400 font-medium group-hover:translate-x-1 transition-transform duration-300">
              Explore
              <ArrowUpRight size={18} className="ml-2" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
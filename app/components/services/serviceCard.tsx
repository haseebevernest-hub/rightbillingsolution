"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  name: string;
  slug: string;
};

export default function ServiceCard({ name, slug }: Props) {
  return (
    <Link href={`/services/${slug}`} className="block h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="h-48 w-full rounded-xl border border-gray-200 bg-white 
                   flex items-center justify-center 
                   shadow-sm hover:shadow-xl 
                   transition-shadow duration-300"
      >
        <h3 className="text-lg font-semibold text-gray-900 text-center px-4">
          {name}
        </h3>
      </motion.div>
    </Link>
  );
}

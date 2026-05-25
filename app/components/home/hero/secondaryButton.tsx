"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface SecondaryButtonProps {
  href: string;
  label: string;
}

export default function SecondaryButton({
  href,
  label,
}: SecondaryButtonProps) {
  return (
    <Link href={href}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
      >
        {label}
      </motion.button>
    </Link>
  );
}

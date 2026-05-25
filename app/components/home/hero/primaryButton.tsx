"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  label: string;
}

export default function PrimaryButton({
  href,
  label,
}: PrimaryButtonProps) {
  return (
    <Link href={href}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:shadow-xl transition-shadow"
      >
        {label}
      </motion.button>
    </Link>
  );
}

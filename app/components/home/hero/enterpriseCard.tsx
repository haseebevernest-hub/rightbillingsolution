"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface EnterpriseCardProps {
  children: ReactNode;
}

export default function EnterpriseCard({ children }: EnterpriseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
    >
      {children}
    </motion.div>
  );
}

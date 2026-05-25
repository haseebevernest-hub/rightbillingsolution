"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BannerProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  children?: ReactNode;
}

export default function Banner({
  title,
  subtitle,
  bgImage,
  children,
}: BannerProps) {
  return (
    <div
      className="relative w-full h-56 md:h-64 lg:h-72 bg-center bg-cover flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl px-6 text-left"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-sm md:text-md text-gray-200">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-4">{children}</div>}
      </motion.div>
    </div>
  );
}

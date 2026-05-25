"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface IconCardProps {
  icon: string | StaticImageData;
  rectangle: React.ReactNode;
  bgColor?: string;
  alt?: string;
  className?: string;
}

const IconCard: React.FC<IconCardProps> = ({
  icon,
  rectangle,
  bgColor = "bg-white",
  alt = "icon",
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`relative w-72 ${className}`}
    >
      {/* Main Rectangle */}
      <div
        className={`relative h-20 rounded-2xl shadow-md 
                    flex items-center 
                    pl-16 pr-6   /* space for overlapping icon */
                    font-bold text-lg text-gray-900
                    ${bgColor}`}
      >
        {rectangle}
      </div>

      {/* Overlapping PNG */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-20">
        <Image
          src={icon}
          alt={alt}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
    </motion.div>
  );
};

export default IconCard;

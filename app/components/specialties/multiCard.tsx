"use client";

import { motion } from "framer-motion";
import IconCard from "../iconCard";
import Link from "next/link";
import { Specialty } from "@/data/specialties";

interface MultiCardProps {
  items: Specialty[];
}

const MultiCard: React.FC<MultiCardProps> = ({ items }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.15 }}
      className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-14
        mt-12
      "
    >
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/specialties/${item.slug}`}
          className="block"
        >
          <IconCard
            icon={item.icon}
            rectangle={<span>{item.title}</span>}
            bgColor={item.bgColor}
          />
        </Link>
      ))}
    </motion.div>
  );
};

export default MultiCard;

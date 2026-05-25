"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
  target: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export default function PricingCard({
  title,
  subtitle,
  target,
  features,
  cta,
  highlighted,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`p-8 rounded-2xl border ${
        highlighted
          ? "bg-linear-to-br from-neutral-800 to-neutral-900 border-emerald-600"
          : "bg-neutral-900 border-neutral-800"
      }`}
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-emerald-400 mt-2">{subtitle}</p>
      <p className="text-sm text-neutral-500 mt-3">{target}</p>

      <ul className="mt-6 space-y-3 text-neutral-300">
        {features.map((feature, i) => (
          <li key={i}>• {feature}</li>
        ))}
      </ul>

      <button className="mt-8 w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition">
        {cta}
      </button>
    </motion.div>
  );
}

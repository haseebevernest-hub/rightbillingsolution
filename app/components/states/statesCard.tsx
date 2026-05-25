"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { State } from "@/data/state";

type Props = {
  state: State;
};

export default function StateCard({ state }: Props) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => router.push(`/states/${state.slug}`)}
      className="cursor-pointer rounded-2xl border border-gray-200 p-6 shadow-md bg-white flex items-center gap-4 transition-all"
    >
      {/* Big State Code */}
      <div className="text-4xl font-bold text-gray-800">
        {state.code}
      </div>

      {/* Full Name */}
      <div className="text-xl text-gray-600">
        {state.name}
      </div>
    </motion.div>
  );
}

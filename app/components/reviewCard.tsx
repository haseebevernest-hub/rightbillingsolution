"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reviews } from "@/data/reviews";

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-screen min-h-100 px-6 py-16 bg-linear-to-r from-blue-50 to-green-50">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="relative bg-white shadow-2xl rounded-3xl p-10 md:p-16 border border-blue-100">

          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[index].id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center max-w-4xl mx-auto"
            >
              <img
                src={reviews[index].avatar}
                alt={reviews[index].name}
                className="w-20 h-20 rounded-full object-cover mb-6 border-4 border-green-100"
              />

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
                “{reviews[index].review}”
              </p>

              <h4 className="text-blue-600 font-semibold text-xl">
                {reviews[index].name}
              </h4>

              <span className="text-sm text-green-600">
                {reviews[index].role}
                {reviews[index].company && ` · ${reviews[index].company}`}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-10">
            <button
              onClick={prev}
              className="px-6 py-3 text-sm font-medium bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition"
            >
              ← Prev
            </button>

            <button
              onClick={next}
              className="px-6 py-3 text-sm font-medium bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition"
            >
              Next →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index
                    ? "bg-blue-500 scale-110"
                    : "bg-gray-300 hover:bg-green-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
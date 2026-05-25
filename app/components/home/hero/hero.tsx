"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12">

          {/* Left Column: Headline & Description */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Maximize Realized Revenue.<br/>
              <span className="text-blue-600">Safeguard Your EBITDA.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              In today’s healthcare landscape, <b>a 98% clean claim rate is no longer enough.</b>{" "}
              <br /> <br />
              At <b className="text-blue-600">Smart Billing Solutions</b>, we go beyond surface-level metrics. We partner with multi-specialty medical groups and health systems to deliver <b>AI-powered Revenue Integrity solutions</b> designed to strengthen financial performance, increase realized yield, and protect EBITDA.
            </p>
          </div>

          {/* Right Column: Metrics */}
          <div className="md:w-1/2 bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-wide text-gray-500">Realized Yield</p>
              <p className="mt-2 text-3xl md:text-4xl font-bold text-green-600">+$1.2M</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-wide text-gray-500">Cost-to-Collect</p>
              <p className="mt-2 text-3xl md:text-4xl font-bold text-blue-600">-18%</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-wide text-gray-500">Payer Variance</p>
              <p className="mt-2 text-3xl md:text-4xl font-bold text-purple-600">-4.2%</p>
            </div>
          </div>
        </div>

        {/* Buttons Below */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
          >
            Identify My Revenue Leakage
          </Link>
          <Link
            href="/portfolio-review"
            className="px-8 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-100 transition"
          >
            Portfolio Risk Review
          </Link>
        </div>

      </div>
    </section>
  );
}

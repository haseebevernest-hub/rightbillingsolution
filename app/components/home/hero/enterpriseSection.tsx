"use client";

import { motion } from "framer-motion";
import EnterpriseCard from "./enterpriseCard";

export default function EnterpriseSection() {
  return (
    <section className="w-full bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Moving the Needle for Health Systems
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Enterprise-backed results from organizations that expect <b>financial dominance</b>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Case Study Card */}
          <EnterpriseCard>
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                40-Provider Orthopedic Group
              </p>
              <p className="text-sm text-gray-500 mt-1">
Multi-location practice using Epic Systems                </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Cost-to-Collect</p>
                  <p className="text-2xl font-bold text-green-600">-18%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">EBITDA Impact</p>
                  <p className="text-2xl font-bold text-blue-600">+$1.2M</p>
                </div>
              </div>

              <p className="mt-8 text-gray-700 leading-relaxed">
              Through deployment of our AI-powered <b>payer variance tracking</b>
               and automated <b>appeal workflow automation</b>, this group recovered $1.2M in
               previously unidentified <b> algorithmic downcoding</b> within 12 months.
              </p>

              <button className="mt-6 text-blue-600 font-medium hover:underline">
                Read Full Case Study →
              </button>
            </div>
          </EnterpriseCard>

          {/* Credentials Card */}
          <EnterpriseCard>
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-500">
                Enterprise Credentials
              </p>

              <div className="mt-6 space-y-6">

                <div>
                  <p className="font-semibold text-gray-900">
                    SOC 2 Type II Certified
                  </p>
                  <p className="text-gray-600 text-sm">
                    Enterprise-grade security infrastructure
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    HIPAA Vault-Level Security
                  </p>
                  <p className="text-gray-600 text-sm">
                    End-to-end encrypted <b>PHI</b> handling
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    $2.4B+ Annual Processing
                  </p>
                  <p className="text-gray-600 text-sm">
                    Proven at health system scale
                  </p>
                </div>

              </div>

              {/* Bottom Metrics */}
              <div className="mt-10 grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-2xl font-bold text-gray-900">98.7%</p>
                  <p className="text-xs text-gray-500 uppercase">Net Collection</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">1200+</p>
                  <p className="text-xs text-gray-500 uppercase">Providers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">25</p>
                  <p className="text-xs text-gray-500 uppercase">States</p>
                </div>
              </div>

            </div>
          </EnterpriseCard>

        </div>
      </div>
    </section>
  );
}

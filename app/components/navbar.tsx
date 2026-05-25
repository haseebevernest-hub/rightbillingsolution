"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const states = [
  { name: "California", href: "/states/california" },
  { name: "Texas", href: "/states/texas" },
  { name: "New York", href: "/states/new-york" },
];

const links = [
  {
    name: "Specialties",
    href: "/specialties",
    dropdown: [
      { name: "Ambulance Transportation", href: "/specialties/ambulanceTransportation" },
      { name: "Ambulatory Surgical Centers", href: "/specialties/ambulatorySurgicalCenters" },
      { name: "Anesthesiology", href: "/specialties/anesthesiology" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Charge Entry", href: "/services/chargeEntry" },
      { name: "Payment Posting", href: "/services/paymentPosting" },
      { name: "Account Receivable", href: "/services/accountReceivable" },
      { name: "Denial Management and Appeal", href: "/services/denialManagementAppeals" },
    ],
  },
  {
    name: "Resource Center",
    href: "/resource-center",
    dropdown: [
      { name: "Case Studies", href: "/resource-center/caseStudy" },
      { name: "Blog", href: "/resource-center/blogs" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="w-full bg-white border-b fixed top-0 left-0 z-50 shadow-sm"
      animate={{ height: isScrolled ? 60 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">

        {/* LOGO */}
        <Link href="/">
          <motion.img
            src="/smartbillingservice.png"
            width={isScrolled ? 50 : 80}
            height={isScrolled ? 50 : 80}
            alt="logo"
          />
        </Link>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
          {links.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* NAV ITEM */}
              <div className="flex items-center gap-1 px-4 py-2 hover:text-black transition cursor-pointer">
                <Link href={link.href}>{link.name}</Link>

                {link.dropdown && (
                  <motion.svg
                    animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                )}
              </div>

              {/* DROPDOWN */}
              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`absolute left-0 mt-2 ${
                      link.name === "Specialties"
                        ? "w-130"
                        : link.name === "Services"
                        ? "w-175"
                        : "w-56"
                    } bg-white border rounded-2xl shadow-2xl p-8`}
                  >

                    {/* ================= SPECIALTIES ================= */}
                    {link.name === "Specialties" && (
                      <div className="grid grid-cols-2 gap-12">

                        {/* LEFT COLUMN */}
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase mb-3">
                            We Excel In
                          </p>

                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block py-2 text-gray-600 hover:text-black"
                            >
                              {item.name}
                            </Link>
                          ))}

                          <Link
                            href="/specialties"
                            className="inline-block mt-6 px-5 py-2 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
                          >
                            View All Specialties →
                          </Link>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase mb-3">
                            We Dominate In
                          </p>

                          {states.map((state) => (
                            <Link
                              key={state.name}
                              href={state.href}
                              className="block py-2 text-gray-600 hover:text-black"
                            >
                              {state.name}
                            </Link>
                          ))}

                          <Link
                            href="/states"
                            className="inline-block mt-6 px-5 py-2 border border-black text-black text-sm rounded-full hover:bg-black hover:text-white transition"
                          >
                            View All States →
                          </Link>
                        </div>

                      </div>
                    )}

                    {/* ================= SERVICES ================= */}
                    {link.name === "Services" && (
                      <div className="grid grid-cols-2 gap-16">

                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            Existing Services
                          </p>

                          <div className="space-y-3">
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block text-gray-700 hover:text-black transition font-medium"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                            RCM Services
                          </p>

                          <div className="space-y-4">
                            {[
                              { name: "Medical Billing Services", slug: "medicalBillingServices" },
                              { name: "Medical Coding Services", slug: "medicalCodingServices" },
                              { name: "Credentialing Services", slug: "credentialingServices" },
                              { name: "Outsource Billing Services", slug: "outsourceBillingServices" },
                              { name: "Billing for Small Practices", slug: "billingForSmallPractices" },
                            ].map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group block text-lg font-bold text-gray-800 hover:text-black transition duration-200"
                              >
                                {service.name}
                                <span className="block h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-16 mt-1"></span>
                              </Link>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}

                    {/* ================= DEFAULT ================= */}
                    {link.name !== "Specialties" &&
                      link.name !== "Services" &&
                      link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block py-2 text-gray-600 hover:text-black"
                        >
                          {item.name}
                        </Link>
                      ))}

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
        </div>
      </div>
    </motion.nav>
  );
}

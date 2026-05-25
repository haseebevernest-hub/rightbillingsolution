"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              About Smart Billing Solution
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Smart Billing Solution is a leading provider of Revenue 
              Cycle Management solutions, dedicated to optimizing healthcare 
              billing processes for providers across the United States for over 
              25 years.
            </p>

            <div className="mt-6 text-sm text-gray-700 space-y-2">
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:info@medicalbillersandcoders.com"
                  className="hover:text-black transition-colors"
                >
                  info@medicalbillersandcoders.com
                </a>
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                <a
                  href="tel:7373024801"
                  className="hover:text-black transition-colors"
                >
                  
(737) 302-4801
                </a>
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-black">Home</Link></li>
              <li><Link href="/about" className="hover:text-black">About Us</Link></li>
              <li><Link href="/testimonials" className="hover:text-black">Testimonials</Link></li>
              <li><Link href="/faq" className="hover:text-black">FAQ</Link></li>
              <li><Link href="/healthcare-analytics" className="hover:text-black">Healthcare Analytics</Link></li>
              <li><Link href="/hipaa" className="hover:text-black">HIPAA</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/sitemap" className="hover:text-black">HTML Sitemap</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/medical-billing-services" className="hover:text-black">Medical Billing Services</Link></li>
              <li><Link href="/medical-coding-services" className="hover:text-black">Medical Coding Services</Link></li>
              <li><Link href="/credentialing-services" className="hover:text-black">Credentialing Services</Link></li>
              <li><Link href="/ar-follow-up" className="hover:text-black">AR Follow Up</Link></li>
              <li><Link href="/denial-management" className="hover:text-black">Denial Management</Link></li>
              <li><Link href="/rcm-services" className="hover:text-black">RCM Services</Link></li>
              <li><Link href="/medical-billing-outsourcing" className="hover:text-black">Medical Billing Outsourcing</Link></li>
              <li><Link href="/physician-group-billing" className="hover:text-black">Physician Group Billing</Link></li>
              <li><Link href="/small-practice-billing" className="hover:text-black">Billing for Small Practices</Link></li>
              <li><Link href="/asc-billing-services" className="hover:text-black">ASC Billing Services</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/best-billing-practices" className="hover:text-black">Best Billing Practices</Link></li>
              <li><Link href="/articles" className="hover:text-black">Articles</Link></li>
              <li><Link href="/press-release" className="hover:text-black">Press Release</Link></li>
              <li><Link href="/case-studies" className="hover:text-black">Case Studies</Link></li>
              <li><Link href="/billing-guidelines" className="hover:text-black">Billing Guidelines</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Smart Billing Solution. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

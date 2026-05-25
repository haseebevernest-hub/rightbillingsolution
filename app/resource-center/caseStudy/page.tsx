"use client";
import HeroSection from "@/app/components/caseStudy/heroSection";
import Highlights from "@/app/components/caseStudy/highlights";
import CaseStudies from "@/app/components/caseStudy/caseStudies";

export default function MedicalBillingCaseStudiesPage() {
  return (
    <main className="bg-linear-to-b from-white to-blue-50 min-h-screen text-gray-800">
      <HeroSection />
      <Highlights />
      <CaseStudies />
    </main>
  );
}
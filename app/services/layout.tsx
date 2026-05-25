"use client";

import React from "react";
import ReviewCarousel from "../components/reviewCard";
import ContactBillingForm from "../components/contactBillingForm";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function SpecialitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        <Navbar/>
        {children}
        <ReviewCarousel/>
        <ContactBillingForm/>
        <Footer/>
      </main>

    </div>
  );
}

"use client";

import React from "react";
import ReviewCarousel from "../components/reviewCard";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function ResourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">{children}
        <Navbar/>
        <Footer/>
      </main>

    </div>
  );
}

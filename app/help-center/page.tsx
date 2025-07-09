import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function HelpCenterPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 pt-32 pb-16 text-white bg-[#0A0A0B] min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-normal mb-8 text-center">Help Center</h1>
        <div className="text-lg text-gray-400 text-center">Coming Soon</div>
      </main>
      <Footer />
    </>
  );
} 
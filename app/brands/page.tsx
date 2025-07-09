import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BrandCard } from "@/components/ui/brand-card";
import React from "react";
import { AnimatedHeadline } from "@/components/ui/animated_headline";

const brands = [
  {
    title: "Hyde Camouflage",
    description: "AI-driven camouflage technology for unparalleled stealth in any environment.",
    imageSrc: "/images/HYDE.svg",
    href: "https://www.hydecamouflage.com",
    logoSize: { width: 59, height: 20 },
  },
  {
    title: "Tribe Equipment",
    description: "Elite tactical gear engineered for performance in the most demanding situations.",
    imageSrc: "/images/Tribe-Logo.svg",
    href: "https://www.tribequipment.com/",
    logoSize: { width: 120, height: 40 },
  },
  {
    title: "The Real Bigfoot",
    description: "Adventure lifestyle apparel for those who live wild and free.",
    imageSrc: "/images/RBF-Logo.svg",
    href: "https://www.therealbigfoot.com",
    logoSize: { width: 120, height: 40 },
  },
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0B]">
      <Header />
      <main className="flex-grow text-white flex flex-col items-center justify-center pt-32 pb-12 px-4">
        <AnimatedHeadline text="Explore Our Brands" className="text-2xl md:text-3xl lg:text-4xl mb-6 text-center" />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-4 md:px-8">
          {brands.map((brand) => (
            <BrandCard
              key={brand.title}
              title={brand.title}
              description={brand.description}
              imageSrc={brand.imageSrc}
              href={brand.href}
              className="h-full flex flex-col justify-between"
              logoSize={brand.logoSize}
              buttonText="Visit Website"
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 
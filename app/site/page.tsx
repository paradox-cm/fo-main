"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterForm } from "@/components/newsletter-form"
import { InlineNewsletterForm } from "@/components/inline-newsletter-form"
import { HeroBanner } from "@/components/ui/hero-banner"
import { SectionHeading } from "@/components/ui/section-heading"
import { BrandCard } from "@/components/ui/brand-card"
import { AnimatedHeadline } from "@/components/ui/animated_headline"
import { MonoTagline } from "@/components/ui/mono-tagline"
import { MonoChip } from "@/components/ui/mono-chip"
import { useEffect, useRef } from "react"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { AdaptiveImage } from "@/components/ui/adaptive-image"

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
]

export default function SiteHome() {
  const parallaxRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    // Parallax scrolling effect
    const handleScroll = () => {
      if (window.innerWidth >= 1280) return
      parallaxRefs.current.forEach((el) => {
        if (!el) return
        const speed = Number.parseFloat(el.dataset.parallaxSpeed || "0.05")
        const scrollY = window.scrollY
        const yPos = -scrollY * speed
        el.style.transform = `translateY(${yPos}px)`
      })
    }
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        parallaxRefs.current.forEach((el) => {
          if (!el) return
          el.style.transform = ""
        })
      }
    }
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <Header />
      <main className="connected-sections">
        {/* Hero Section */}
        <section className="border-b border-[#242423]">
          <HeroBanner backgroundColor="#0A0A0B" title="" subtitle="" height="full" overlay={false}>
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full max-w-6xl">
              <div className="mb-6 lg:mb-0 lg:max-w-2xl">
                <AnimatedHeadline
                  text="Gear Forged by Nature. Engineered for Warriors."
                  className="text-4xl md:text-5xl lg:text-6xl"
                />
                <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl font-mono">
                  Outdoor performance apparel built to enhance your experience in nature.
                </p>
                <div className="mt-8 lg:mt-12">
                  <NewsletterForm />
                </div>
              </div>
              <div className="w-full max-w-md lg:max-w-sm mt-8 lg:mt-0">
                <AdaptiveImage
                  src="/images/forest-hero-icon.svg"
                  width={400}
                  height={400}
                  alt="Forest Outfitters Geometric Design"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </HeroBanner>
        </section>
        {/* Brand Vision / About Section */}
        <section className="border-b border-[#242423]">
          <div className="container mx-auto px-4 py-12 md:py-24">
            <div className="max-w-2xl mx-auto lg:mx-0 mb-16 xl:mb-24">
              <MonoTagline className="text-[#B99C20] mb-2">Seek Adventure. Find Rest.</MonoTagline>
              <SectionHeading
                title="Our Vision"
                subtitle="Forest Outfitters—where technology, craftsmanship, and nature converge—for a new standard for outdoor and tactical performance."
              />
              <p className="mt-6 mb-6 text-white/80 font-sans">
                We believe the greatest adventures are found in the outdoors and that nature offers the ultimate refuge for rest.
              </p>
              <p className="mb-6 text-white/80 font-sans">
                At Forest Outfitters, we're making performance apparel that enhances people's experience in nature, and we're building a business that improves nature's experience with people.
              </p>
              <Button variant="outline" className="mt-4" onClick={() => (window.location.href = "/about")}> 
                Learn About Forest <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          {/* Full-width image grid container */}
          <div className="w-full overflow-hidden">
            <div className="w-full xl:max-w-none xl:px-0 px-4 mx-auto overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 gap-y-6 xl:gap-0 xl:items-start">
                {/* Performance Polo Image */}
                <div
                  className="aspect-[4/5] xl:aspect-auto xl:h-[50vh] relative rounded-md xl:rounded-none overflow-hidden"
                  style={{ animationDelay: "0.1s" }}
                  data-parallax-speed="0.05"
                  ref={(el) => { parallaxRefs.current[0] = el; }}
                >
                  <AdaptiveImage
                    src="/images/forest-item-1.png"
                    alt="Performance Polo"
                    fill
                    className="object-cover object-center w-32 h-40 sm:w-full sm:h-auto"
                  />
                  <div className="absolute bottom-4 left-4">
                    <MonoChip>Performance</MonoChip>
                  </div>
                </div>
                {/* Down Jacket Image */}
                <div
                  className="aspect-[4/5] xl:aspect-auto xl:h-[50vh] relative rounded-md xl:rounded-none overflow-hidden"
                  style={{ animationDelay: "0.2s" }}
                  data-parallax-speed="0.08"
                  ref={(el) => { parallaxRefs.current[1] = el; }}
                >
                  <AdaptiveImage
                    src="/images/forest-item-2.png"
                    alt="Down Jacket"
                    fill
                    className="object-cover object-center w-32 h-40 sm:w-full sm:h-auto"
                  />
                  <div className="absolute bottom-4 left-4">
                    <MonoChip>Insulation</MonoChip>
                  </div>
                </div>
                {/* Technical Shell Image */}
                <div
                  className="aspect-[4/5] xl:aspect-auto xl:h-[50vh] relative rounded-md xl:rounded-none overflow-hidden"
                  style={{ animationDelay: "0.3s" }}
                  data-parallax-speed="0.07"
                  ref={(el) => { parallaxRefs.current[2] = el; }}
                >
                  <AdaptiveImage
                    src="/images/forest-item-3.png"
                    alt="Technical Shell"
                    fill
                    className="object-cover object-center w-32 h-40 sm:w-full sm:h-auto"
                  />
                  <div className="absolute bottom-4 left-4">
                    <MonoChip>Technical</MonoChip>
                  </div>
                </div>
                {/* Tactical Polo Image */}
                <div
                  className="aspect-[4/5] xl:aspect-auto xl:h-[50vh] relative rounded-md xl:rounded-none overflow-hidden"
                  style={{ animationDelay: "0.4s" }}
                  data-parallax-speed="0.1"
                  ref={(el) => { parallaxRefs.current[3] = el; }}
                >
                  <AdaptiveImage
                    src="/images/forest-item-4.png"
                    alt="Tactical Polo"
                    fill
                    className="object-cover object-center w-32 h-40 sm:w-full sm:h-auto"
                  />
                  <div className="absolute bottom-4 left-4">
                    <MonoChip>Tactical</MonoChip>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Explore Our Brands Section */}
        <section className="border-b border-[#242423] bg-[#0A0A0B] py-16 md:py-24">
          <div className="container mx-auto px-4">
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
          </div>
        </section>
        {/* Waitlist Section */}
        <section className="bg-[#0F0F10] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="font-tektur text-2xl md:text-3xl mb-4">Be the First to Know</h2>
              <p className="text-lg mb-8 text-white/80">Sign up for our waitlist to get early access, exclusive offers, and launch updates.</p>
              <InlineNewsletterForm buttonText="Join the Waitlist" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
} 
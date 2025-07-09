"use client"

import Image from "next/image"
import { ArrowRight, Users, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterForm } from "@/components/newsletter-form"
import { InlineNewsletterForm } from "@/components/inline-newsletter-form"
import { HeroBanner } from "@/components/ui/hero-banner"
import { SectionHeading } from "@/components/ui/section-heading"
import { BrandCard } from "@/components/ui/brand-card"
import { AnimatedHeadline } from "@/components/ui/animated_headline"
import { MonoHeadline } from "@/components/ui/mono-headline"
import { MonoTagline } from "@/components/ui/mono-tagline"
import { MonoChip } from "@/components/ui/mono-chip"
import { TekturHeadline } from "@/components/ui/tektur-headline"
import { useEffect, useRef } from "react"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { AdaptiveImage } from "@/components/ui/adaptive-image"

export default function Home() {
  const parallaxRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    // Parallax scrolling effect
    const handleScroll = () => {
      // Check if we're on a large screen - disable parallax on xl breakpoint
      if (window.innerWidth >= 1280) return

      parallaxRefs.current.forEach((el) => {
        if (!el) return

        const speed = Number.parseFloat(el.dataset.parallaxSpeed || "0.05")
        const scrollY = window.scrollY
        const yPos = -scrollY * speed

        el.style.transform = `translateY(${yPos}px)`
      })
    }

    // Reset any transforms on resize
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

    // Initial check
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
        {/* Hero Section - Updated with solid background color */}
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
            {/* Content area - full width on largest screens */}
            <div className="max-w-2xl mx-auto lg:mx-0 mb-16 xl:mb-24">
              <MonoTagline className="text-[#B99C20] mb-2">Seek Adventure. Find Rest.</MonoTagline>
              <SectionHeading
                title="Our Vision"
                subtitle="Forest Outfitters—where technology, craftsmanship, and nature converge—for a new standard for outdoor and tactical performance."
              />

              <p className="mt-6 mb-6 text-white/80 font-sans">
                We believe the greatest adventures are found in the outdoors and that nature offers the ultimate refuge
                for rest.
              </p>

              <p className="mb-6 text-white/80 font-sans">
                At Forest Outfitters, we're making performance apparel that enhances people's experience in nature, and
                we're building a business that improves nature's experience with people.
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

        {/* Core Brand Pillars */}
        {/* ...rest of the file unchanged... */}
      </main>

      <Footer />
      <ScrollToTop />
    </>
  )
}

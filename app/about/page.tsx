"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { HeroBanner } from "@/components/ui/hero-banner"
import { SectionHeading } from "@/components/ui/section-heading"
import { Cpu, Target, Shield, Users, Briefcase } from "lucide-react"
import { MonoHeadline } from "@/components/ui/mono-headline"
import { MonoTagline } from "@/components/ui/mono-tagline"
import { MonoChip } from "@/components/ui/mono-chip"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function AboutPage() {
  // Add intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".slide-up-animation")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <Header />

      <HeroBanner
        backgroundSrc="/placeholder.svg?height=800&width=1920"
        title="Where technology, craftsmanship, and nature converge."
        subtitle="For a new standard in outdoor and tactical performance."
        height="medium"
      >
        <MonoTagline className="text-[#B99C20] mt-4">Established 2023 • Reno, Nevada</MonoTagline>
      </HeroBanner>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="The Story"
            subtitle="Forest Outfitters was founded with a vision to revolutionize outdoor and tactical gear through innovation, premium quality, and a commitment to American manufacturing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-16">
            <div>
              <p className="text-white/80 font-barlow mb-6">
                Forest Outfitters began as a response to the increasing demand for high-performance outdoor and tactical
                gear that could withstand the most challenging environments while providing unparalleled functionality.
              </p>

              <p className="text-white/80 font-barlow mb-6">
                Our founding team brings together decades of experience from military operations, outdoor exploration,
                and technical apparel design. This unique combination of expertise allows us to create products that are
                both innovative and battle-tested.
              </p>

              <p className="text-white/80 font-barlow">
                We're committed to American manufacturing, ensuring that every product meets the highest standards of
                quality while supporting domestic jobs and expertise.
              </p>
            </div>

            <div className="relative overflow-hidden aspect-[16/9]">
              <div className="absolute inset-0">
                <iframe
                  src="https://player.vimeo.com/video/255108388?h=02f89094d6&color=000000&dnt=1"
                  title="Forest Outfitters Story"
                  className="w-full h-full absolute inset-0 z-10"
                  style={{ backgroundColor: "transparent" }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="absolute bottom-4 left-4">
                <MonoChip>Our Heritage</MonoChip>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-full min-h-[400px] rounded-md overflow-hidden">
              <div className="relative rounded-md overflow-hidden flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-cmpr-cmpr3.png-By6l22MenzGVM0oHSeqebr2gfcUOUh.jpeg"
                  alt="AI-driven camouflage jacket with adaptive pattern technology"
                  width={600}
                  height={700}
                  className="object-contain w-full h-auto"
                />
                <div className="absolute bottom-4 left-4">
                  <MonoChip>Technology</MonoChip>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <MonoHeadline>Cutting-Edge Technology for Unmatched Performance</MonoHeadline>

              <div className="space-y-8 mt-8">
                <div className="flex gap-4">
                  <div className="text-primary mt-1">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">AI-Driven Camouflage</h3>
                    <p className="text-white/80 font-barlow">
                      Our proprietary AI algorithms analyze environments to create adaptive camouflage patterns that
                      provide superior concealment across diverse terrains and lighting conditions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-primary mt-1">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Mission-Tested Materials</h3>
                    <p className="text-white/80 font-barlow">
                      We utilize advanced composite fabrics and materials that offer exceptional durability, weather
                      resistance, and performance while maintaining comfort and functionality.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-primary mt-1">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Tactical Innovation</h3>
                    <p className="text-white/80 font-barlow">
                      Our design process incorporates feedback from military professionals, hunters, and outdoor
                      enthusiasts to create gear that meets real-world operational needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <Shield size={48} className="text-primary" />
            </div>

            <MonoTagline className="text-[#B99C20] mb-4">Our Mission</MonoTagline>

            <div className="slide-up-animation opacity-0 translate-y-10 transition-all duration-700">
              <SectionHeading
                title="Forging a Sustainable Future"
                subtitle="At Forest Outfitters, we're committed to protecting the wild spaces that inspire us, supporting the warriors who defend us, and creating gear that stands the test of time and terrain."
                align="center"
              />
            </div>

            <div className="mt-8 mb-12">
              <p className="text-white/80 font-barlow">
                Our mission extends beyond creating exceptional gear. We're dedicated to environmental stewardship,
                veteran support, and American manufacturing excellence. Every purchase contributes to conservation
                efforts and programs supporting disabled veterans.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center mt-8">
              <Button variant="primary" size="lg" onClick={() => (window.location.href = "/investors")}>
                <Briefcase size={18} className="mr-2" /> Invest in Forest
              </Button>

              <Button variant="outline" size="lg" onClick={() => (window.location.href = "/careers")}>
                <Users size={18} className="mr-2" /> Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  )
}

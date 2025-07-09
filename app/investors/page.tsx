"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { HeroBanner } from "@/components/ui/hero-banner"
import { SectionHeading } from "@/components/ui/section-heading"
import { FeatureCard } from "@/components/ui/feature-card"
import { TrendingUp, Globe, Award, AlertCircle } from "lucide-react"
import { Footer } from "@/components/footer"
import { MonoChip } from "@/components/ui/mono-chip"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { submitInvestorContact } from "@/app/actions/investor-contact"

export default function InvestorsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState<{
    status: "idle" | "success" | "error"
    message: string
  }>({
    status: "idle",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormState({ status: "idle", message: "" })

    try {
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      const result = await submitInvestorContact(formDataObj)

      if (result.success) {
        setFormState({
          status: "success",
          message: result.message,
        })
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })
      } else {
        setFormState({
          status: "error",
          message: result.message,
        })
      }
    } catch (error) {
      setFormState({
        status: "error",
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />

      <HeroBanner
        backgroundSrc="/placeholder.svg?height=800&width=1920"
        title="Invest in the Future of Outdoor Innovation"
        subtitle="Join us as we redefine camouflage, tactical gear, and adventure apparel."
        height="medium"
      >
        <Button asChild variant="primary" size="lg" className="mt-4">
          <a href="#investor-form">Request Access</a>
        </Button>
      </HeroBanner>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Growing Market Opportunity"
              icon={<TrendingUp size={24} />}
              className="transition-all duration-300 hover:border-[#B99C20] hover:bg-[#1A1A1A] bg-black/20"
            />

            <FeatureCard
              title="Innovative Technology"
              icon={<Globe size={24} />}
              className="transition-all duration-300 hover:border-[#B99C20] hover:bg-[#1A1A1A] bg-black/20"
            />

            <FeatureCard
              title="Early Stage Advantage"
              icon={<Award size={24} />}
              className="transition-all duration-300 hover:border-[#B99C20] hover:bg-[#1A1A1A] bg-black/20"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-black/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                title="Investment Tiers & Funding Goals"
                subtitle="We offer multiple investment opportunities to fit different capital deployment strategies."
              />

              <div className="space-y-4 mt-6">
                <div className="p-6 border border-gold/30 rounded-md transition-all duration-300 hover:border-[#B99C20] hover:bg-[#1A1A1A] bg-black/20">
                  <h3 className="text-xl mb-2">Series A</h3>
                  <p className="text-white/80 font-barlow">
                    Funding for full-scale production, market launch, and expansion of our AI-driven camouflage
                    technology.
                  </p>
                </div>

                <div className="p-6 border border-gold/30 rounded-md transition-all duration-300 hover:border-[#B99C20] hover:bg-[#1A1A1A] bg-black/20">
                  <h3 className="text-xl mb-2">Institutional Investment</h3>
                  <p className="text-white/80 font-barlow">
                    Strategic partnerships for major market expansion, retail distribution, and advanced manufacturing
                    capabilities. Contact for details.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-md overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20101-6HsdaV05RZqRjPrh155QZXJfNdl3qE.png"
                  alt="Forest Outfitters Investment Opportunity"
                  width={600}
                  height={400}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                  style={{ minHeight: "300px" }}
                />
              </div>
              <div className="absolute bottom-4 left-4">
                <MonoChip>Investment</MonoChip>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="investor-form" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Get In Touch"
            subtitle="Request our investor deck and financial projections."
            align="center"
          />

          <div className="max-w-2xl mx-auto mt-12">
            <form
              onSubmit={handleSubmit}
              className="p-8 border border-gold/20 rounded-md transition-all duration-300 hover:border-[#B99C20] bg-black/20"
            >
              {formState.status === "success" ? (
                <div className="bg-green-900/30 border border-green-500/30 text-white p-6 rounded-md text-center">
                  <h3 className="text-xl mb-2">Thank You for Your Interest</h3>
                  <p className="font-barlow">
                    We've received your request for our investor materials. A member of our team will be in touch
                    shortly.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {formState.status === "error" && (
                    <div className="bg-red-900/30 border border-red-500/30 text-red-300 p-4 rounded-md flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span>{formState.message}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-barlow">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-black/40 border-gold/30 focus:border-gold"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 font-barlow">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/40 border-gold/30 focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2 font-barlow">
                      Company / Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-black/40 border-gold/30 focus:border-gold"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-barlow">
                      Additional Information
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Investment interests, questions, or any additional information."
                      className="bg-black/40 border-gold/30 focus:border-gold"
                    />
                  </div>

                  <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? "Submitting..." : "Request Access"}
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </>
  )
}

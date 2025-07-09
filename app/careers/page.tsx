"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { HeroBanner } from "@/components/ui/hero-banner"
import { SectionHeading } from "@/components/ui/section-heading"
import { FeatureCard } from "@/components/ui/feature-card"
import { ChevronDown, ChevronUp, PenTool, Code, BarChart } from "lucide-react"
import { Resend } from "resend"
const resend = new Resend("re_9Hr2qw6X_CLCVjMLffa4wWhPqrSyAMEjS")
const ADMIN_EMAIL = "admin@forestoutfitters.com"

interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  description: string
}

export default function CareersPage() {
  const [openJobId, setOpenJobId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null as File | null,
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, resume: e.target.files?.[0] || null }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      let resumeUrl = ""
      // If you want to handle file uploads, you would upload the file to a storage service and get a URL here
      // For now, just note if a file was attached
      if (formData.resume) {
        resumeUrl = "[Resume file attached, see admin panel or request implementation for file uploads]"
      }

      const { error } = await resend.emails.send({
        from: "Careers <careers@forestoutfitters.com>",
        to: [ADMIN_EMAIL],
        subject: `New Careers Application: ${formData.name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Careers Application</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Resume:</strong> ${resumeUrl}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
      })

      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        resume: null,
        message: "",
      })

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    } catch (err) {
      setIsSubmitting(false)
      alert("Failed to submit application. Please try again later.")
    }
  }

  const toggleJob = (id: string) => {
    if (openJobId === id) {
      setOpenJobId(null)
    } else {
      setOpenJobId(id)
    }
  }

  const jobPositions: JobPosition[] = [
    {
      id: "job1",
      title: "Senior Product Designer",
      department: "Product Design",
      location: "Bozeman, MT (Remote Options Available)",
      description:
        "We're looking for an experienced Product Designer to join our team and lead the design of our innovative tactical and outdoor gear. You'll work closely with our R&D team to create functional, durable, and aesthetically pleasing products that meet the needs of our customers.",
    },
    {
      id: "job2",
      title: "AI Engineer - Camouflage Technology",
      department: "Technology & AI",
      location: "Remote",
      description:
        "Join our AI team to develop next-generation camouflage technology. You'll work on algorithms that analyze environments and create adaptive camouflage patterns for military and hunting applications. Experience with computer vision and pattern recognition required.",
    },
    {
      id: "job3",
      title: "Marketing Director",
      department: "Marketing & Branding",
      location: "Bozeman, MT",
      description:
        "Lead our marketing efforts across all brand verticals. You'll develop and execute marketing strategies, manage our brand identity, and oversee content creation and distribution. Experience in outdoor, tactical, or premium apparel marketing preferred.",
    },
  ]

  return (
    <>
      <Header />

      <HeroBanner
        backgroundSrc="/placeholder.svg?height=800&width=1920"
        title="Build the Future With Us"
        subtitle="Join our mission to redefine outdoor and tactical performance."
        height="medium"
      >
        <Button asChild variant="primary" size="lg" className="mt-4">
          <a href="#open-positions">Join The Waitlist</a>
        </Button>
      </HeroBanner>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <SectionHeading title="Featured Job Categories" align="center" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title="Product Design"
              description="Join our design team to create innovative apparel, tactical gear, and camouflage patterns that push the boundaries of form and function."
              icon={<PenTool size={24} />}
            />

            <FeatureCard
              title="Technology & AI"
              description="Work on cutting-edge AI-driven camouflage development, software engineering, and technological innovations that set our products apart."
              icon={<Code size={24} />}
            />

            <FeatureCard
              title="Marketing & Branding"
              description="Help build our brand through compelling content, strategic social media, and community growth initiatives that resonate with our audience."
              icon={<BarChart size={24} />}
            />
          </div>
        </div>
      </section>

      <section id="open-positions" className="py-24 bg-black/80">
        <div className="container mx-auto px-4">
          <SectionHeading title="Open Positions" subtitle="Explore current job opportunities at Forest Outfitters." />

          <div className="mt-12 space-y-4">
            {jobPositions.map((job) => (
              <div key={job.id} className="border border-gold/20 rounded-md overflow-hidden">
                <div className="flex justify-between items-center p-6 cursor-pointer" onClick={() => toggleJob(job.id)}>
                  <div>
                    <h3 className="text-xl">{job.title}</h3>
                    <p className="text-white/60 font-barlow text-sm mt-1">
                      {job.department} | {job.location}
                    </p>
                  </div>
                  <div>
                    {openJobId === job.id ? (
                      <ChevronUp size={24} className="text-primary" />
                    ) : (
                      <ChevronDown size={24} className="text-primary" />
                    )}
                  </div>
                </div>

                {openJobId === job.id && (
                  <div className="p-6 pt-0 border-t border-gold/20">
                    <p className="text-white/80 font-barlow mb-4">{job.description}</p>
                    <Button variant="primary">Join The Waitlist</Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16 items-center">
            <div>
              <SectionHeading
                title="General Applications"
                subtitle="Don't see a position that fits your skills? We're always looking for exceptional talent to join our team."
              />

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {isSubmitted ? (
                  <div className="bg-green-900/30 border border-green-500/30 text-white p-6 rounded-md">
                    <h3 className="text-xl mb-2">Application Received</h3>
                    <p className="font-barlow">
                      Thank you for your interest in joining Forest Outfitters. We'll review your application and be in
                      touch if there's a match.
                    </p>
                  </div>
                ) : (
                  <>
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
                      <label htmlFor="resume" className="block mb-2 font-barlow">
                        Resume / CV
                      </label>
                      <Input
                        id="resume"
                        name="resume"
                        type="file"
                        onChange={handleFileChange}
                        required
                        className="bg-black/40 border-gold/30 focus:border-gold"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 font-barlow">
                        Cover Letter / Additional Information
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="bg-black/40 border-gold/30 focus:border-gold"
                      />
                    </div>

                    <Button type="submit" variant="primary" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

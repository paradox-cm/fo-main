"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { HeroBanner } from "@/components/ui/hero-banner"
import { SectionHeading } from "@/components/ui/section-heading"
import { Mail, Phone, MapPin, AlertCircle, CheckCircle2 } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isPending, startTransition] = useTransition()
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

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset form state
    setFormState({ status: "idle", message: "" })

    startTransition(async () => {
      try {
        const formDataObj = new FormData()
        formDataObj.append("name", formData.name)
        formDataObj.append("email", formData.email)
        formDataObj.append("subject", formData.subject)
        formDataObj.append("message", formData.message)

        const result = await submitContactForm(formDataObj)

        if (result.success) {
          setFormState({
            status: "success",
            message: result.message,
          })
          setFormData({
            name: "",
            email: "",
            subject: "",
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
      }
    })
  }

  return (
    <>
      <Header />

      <HeroBanner
        backgroundSrc="/placeholder.svg?height=800&width=1920"
        title="Contact Forest Outfitters"
        subtitle="Get in touch with our team for inquiries, partnerships, or investor relations."
        height="medium"
      />

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <SectionHeading
                title="Get In Touch"
                subtitle="We're here to answer your questions and discuss opportunities for collaboration."
              />

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <p className="text-white/80 font-barlow">
                      <a href="mailto:admin@forestoutfitters.com" className="underline hover:text-gold transition-colors">admin@forestoutfitters.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="p-8 border border-gold/20 rounded-md">
                <h2 className="text-2xl mb-6">Send Us a Message</h2>

                {formState.status === "success" ? (
                  <div className="bg-green-900/30 border border-green-500/30 text-white p-4 rounded-md flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium mb-1">Message Sent Successfully</p>
                      <p className="font-barlow">{formState.message}</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
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
                      <label htmlFor="subject" className="block mb-2 font-barlow">
                        Subject
                      </label>
                      <Select value={formData.subject} onValueChange={handleSelectChange}>
                        <SelectTrigger className="bg-black/40 border-gold/30 focus:border-gold">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                          <SelectItem value="investor">Investor Relations</SelectItem>
                          <SelectItem value="careers">Careers</SelectItem>
                          <SelectItem value="press">Press & Media</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 font-barlow">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="bg-black/40 border-gold/30 focus:border-gold"
                      />
                    </div>

                    {formState.status === "error" && (
                      <div className="bg-red-900/30 border border-red-500/30 text-white p-3 rounded-md flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                        <p className="font-barlow">{formState.message}</p>
                      </div>
                    )}

                    <Button type="submit" variant="primary" disabled={isPending} className="w-full">
                      {isPending ? "Sending..." : "Submit Message"}
                    </Button>
                  </div>
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

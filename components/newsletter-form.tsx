"use client"

import type React from "react"

import { useState, useEffect, useRef, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { subscribeToWaitlist } from "@/app/actions/waitlist"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function NewsletterForm({ buttonText = "Contact us" }: { buttonText?: string }) {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()
  const [formState, setFormState] = useState<{
    status: "idle" | "success" | "error"
    message: string
  }>({
    status: "idle",
    message: "",
  })
  const [isMinimized, setIsMinimized] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Reset form state
    setFormState({ status: "idle", message: "" })

    // Use React's useTransition to handle the server action
    startTransition(async () => {
      try {
        const result = await subscribeToWaitlist(new FormData(e.currentTarget))

        if (result.success) {
          setFormState({
            status: "success",
            message: result.message,
          })
          setEmail("")

          // Reset success message after 5 seconds
          setTimeout(() => {
            setFormState({ status: "idle", message: "" })
          }, 5000)
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

  useEffect(() => {
    const checkScrollPosition = () => {
      // Find specifically the "Join the Forest Outfitters Movement" section
      const movementSection = document.getElementById("join-movement")

      if (movementSection) {
        const rect = movementSection.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0

        // Hide the form when the section is in view
        setIsHidden(isInView)
      }
    }

    // Check initial position
    checkScrollPosition()

    // Add scroll event listener
    window.addEventListener("scroll", checkScrollPosition)

    // Clean up
    return () => {
      window.removeEventListener("scroll", checkScrollPosition)
    }
  }, [])

  if (isHidden) return null

  return (
    <div className="fixed bottom-6 left-6 z-50 w-[calc(100%-48px)] sm:w-auto">
      {!isMinimized ? (
        <div className="bg-black/90 border border-gold/30 rounded-md p-4 shadow-lg w-full sm:w-[50vw] md:max-w-xl">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-mono text-gold">JOIN OUR WAITLIST</h3>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-white/60 hover:text-white"
              aria-label="Minimize form"
            >
              &minus;
            </button>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
                aria-describedby={formState.message ? "form-message" : undefined}
                className="bg-black/40 border-gold/30 focus:border-gold placeholder:text-white/40 h-10 font-sans flex-grow"
                disabled={isPending}
              />
              <Button type="submit" variant="primary" disabled={isPending} className="h-10 whitespace-nowrap">
                {isPending ? "Joining..." : "Join The Waitlist"}
              </Button>
            </div>

            {formState.message && (
              <div
                id="form-message"
                className={`text-sm p-2 rounded flex items-center gap-2 ${
                  formState.status === "success"
                    ? "bg-green-900/30 text-green-300 border border-green-500/30"
                    : "bg-red-900/30 text-red-300 border border-red-500/30"
                }`}
              >
                {formState.status === "success" ? (
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                )}
                <span>{formState.message}</span>
              </div>
            )}

            <p className="text-xs text-white/50 font-sans">
              By subscribing you agree to our{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-gold text-black px-4 py-2 rounded-md shadow-lg hover:bg-[#ECD055] font-mono text-sm"
        >
          JOIN WAITLIST
        </button>
      )}
    </div>
  )
}

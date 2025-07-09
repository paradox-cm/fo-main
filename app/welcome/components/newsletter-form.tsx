"use client"

import type React from "react"

import { useRef, useState, useTransition } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react"
import { joinWaitlist } from "../actions/waitlist"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState<{
    status: "idle" | "success" | "error"
    message: string
  }>({
    status: "idle",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Reset form state
    setFormState({ status: "idle", message: "" })

    startTransition(async () => {
      try {
        const formData = new FormData(e.currentTarget)
        const result = await joinWaitlist(formData)

        if (result.success) {
          setFormState({
            status: "success",
            message: result.message,
          })
          setEmail("")
          formRef.current?.reset()
        } else {
          setFormState({
            status: "error",
            message: result.message,
          })
        }
      } catch (error) {
        console.error("Form submission error:", error)
        setFormState({
          status: "error",
          message: "An unexpected error occurred. Please try again.",
        })
      }
    })
  }

  return (
    <div className="w-full">
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
            className="bg-black/40 border-[#B99C20]/30 focus:border-[#B99C20] placeholder:text-white/40 h-12 font-sans flex-grow"
            disabled={isPending}
          />
          <Button type="submit" variant="primary" disabled={isPending} className="h-12 whitespace-nowrap">
            {isPending ? (
              "Joining..."
            ) : (
              <span className="flex items-center gap-2">
                Join The Waitlist <ArrowRight size={16} />
              </span>
            )}
          </Button>
        </div>

        {formState.message && (
          <div
            id="form-message"
            className={`text-sm p-2 mt-2 rounded flex items-center gap-2 ${
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
      </form>
    </div>
  )
}

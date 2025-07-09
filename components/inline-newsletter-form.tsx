"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToWaitlist } from "@/app/actions/waitlist"
import { AlertCircle, CheckCircle2 } from "lucide-react"

export function InlineNewsletterForm({ buttonText = "Subscribe" }: { buttonText?: string }) {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()
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

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <Input
          type="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
          className="bg-black/40 border-gold/30 focus:border-gold placeholder:text-white/40 h-12 font-sans flex-grow"
          disabled={isPending}
        />
        <Button type="submit" variant="primary" disabled={isPending} className="h-12 whitespace-nowrap">
          {isPending ? "Joining..." : buttonText}
        </Button>
      </form>

      {formState.message && (
        <div
          className={`mt-3 text-sm p-2 rounded flex items-center gap-2 ${
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
      <p className="mt-4 text-xs text-white/50 text-center">
        By subscribing you agree to our{' '}
        <a href="/legal" className="underline hover:text-primary transition-colors">Privacy Policy</a>.
      </p>
    </div>
  )
}

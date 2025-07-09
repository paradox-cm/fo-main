"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function SignupRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Simple redirect without any complex logic
    router.replace("/account/login?tab=signup")
  }, [router])

  // Return a simple loading state
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A0A0B]">
      <p className="text-gray-400">Redirecting...</p>
    </div>
  )
}

"use client"

import type React from "react"

import { useState, useEffect } from "react"

interface InlineSvgProps {
  svg: React.ReactNode
  fallback: React.ReactNode
  className?: string
  [key: string]: any
}

export function InlineSvg({ svg, fallback, className, ...props }: InlineSvgProps) {
  const [isV0Preview, setIsV0Preview] = useState(false)

  useEffect(() => {
    // Only detect v0 preview environment, not localhost
    const isPreview =
      typeof window !== "undefined" &&
      (window.location.hostname.includes("v0.dev") ||
        window.location.hostname.includes("vercel-v0"))

    setIsV0Preview(isPreview)
  }, [])

  if (isV0Preview) {
    return (
      <div className={className} {...props}>
        {fallback}
      </div>
    )
  }

  return (
    <div className={className} {...props}>
      {svg}
    </div>
  )
}

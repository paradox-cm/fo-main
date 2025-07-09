"use client"

import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface HeroBannerProps {
  backgroundSrc?: string
  backgroundColor?: string
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
  contentClassName?: string
  height?: "small" | "medium" | "large" | "full"
  overlay?: boolean
  scrollToContact?: boolean
}

export function HeroBanner({
  backgroundSrc,
  backgroundColor,
  title,
  subtitle,
  children,
  className,
  contentClassName,
  height = "large",
  overlay = true,
  scrollToContact = false,
}: HeroBannerProps) {
  const heightClasses = {
    small: "min-h-[40vh]",
    medium: "min-h-[60vh]",
    large: "min-h-[80vh]",
    full: "min-h-screen",
  }

  const scrollToContactForm = () => {
    if (scrollToContact) {
      const contactForm = document.getElementById("contact-form")
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div
      className={cn("relative flex items-center justify-center w-full", heightClasses[height], className)}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      {backgroundSrc && (
        <Image
          src={backgroundSrc || "/placeholder.svg"}
          alt={title || "Hero background"}
          fill
          priority
          className="object-cover z-0"
        />
      )}

      {overlay && backgroundSrc && <div className="absolute inset-0 bg-black z-10"></div>}

      <div className={cn("container relative z-20 px-4 py-20 max-w-[1440px] mx-auto", contentClassName)}>
        {title && !children?.props?.className?.includes("animated-headline") && (
          <h1 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl">
            {title ||
              "Where technology, craftsmanship, and nature converge—for a new standard for outdoor and tactical performance."}
          </h1>
        )}

        {subtitle && <p className="mt-3 mb-5 text-lg md:text-xl text-white/80 max-w-2xl font-mono">{subtitle}</p>}

        {children && (
          <div
            className={cn("mt-0", !subtitle && !title && "mt-0")}
            onClick={scrollToContact ? scrollToContactForm : undefined}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

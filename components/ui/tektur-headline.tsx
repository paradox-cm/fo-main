import type React from "react"
import { cn } from "@/lib/utils"

interface TekturHeadlineProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span" | "p"
}

export function TekturHeadline({ children, className, as = "h2" }: TekturHeadlineProps) {
  const Component = as

  return (
    <Component
      className={cn(
        "font-tektur font-medium tracking-tight text-3xl md:text-4xl lg:text-5xl uppercase text-primary section-heading after:mx-auto w-full overflow-hidden",
        className,
      )}
      style={{ transform: "scaleX(1.2)", transformOrigin: "center", maxWidth: "100%" }}
    >
      {children}
    </Component>
  )
}

import type React from "react"
import { cn } from "@/lib/utils"

interface MonoHeadlineProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span" | "p"
}

export function MonoHeadline({ children, className, as = "h2" }: MonoHeadlineProps) {
  const Component = as

  return <Component className={cn("headline-mono", className)}>{children}</Component>
}

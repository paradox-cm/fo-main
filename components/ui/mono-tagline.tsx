import type React from "react"
import { cn } from "@/lib/utils"

interface MonoTaglineProps {
  children: React.ReactNode
  className?: string
  as?: "div" | "span" | "p"
}

export function MonoTagline({ children, className, as = "div" }: MonoTaglineProps) {
  const Component = as

  return <Component className={cn("tagline-mono", className)}>{children}</Component>
}

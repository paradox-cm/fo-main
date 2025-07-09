import type React from "react"
import { cn } from "@/lib/utils"

interface MonoChipProps {
  children: React.ReactNode
  className?: string
}

export function MonoChip({ children, className }: MonoChipProps) {
  return (
    <span
      className={cn(
        "font-mono text-xs md:text-sm uppercase tracking-wider bg-[#1A1505] text-[#B99C20] px-3 py-1 rounded-sm inline-flex items-center",
        className,
      )}
    >
      {children}
    </span>
  )
}

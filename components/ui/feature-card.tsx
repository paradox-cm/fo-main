import type React from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "p-6 border border-[#242423] rounded-md transition-all duration-300 hover:border-[#242423]/80 bg-black/20",
        className,
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center mb-4 text-primary">{icon}</div>

      <h3 className="font-mono text-lg mb-2 tracking-tight">{title}</h3>
      <p className="text-white/70 font-sans">{description}</p>
    </div>
  )
}

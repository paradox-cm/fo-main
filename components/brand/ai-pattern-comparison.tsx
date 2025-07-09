import Image from "next/image"
import { cn } from "@/lib/utils"

interface AIPatternComparisonProps {
  naturalImageSrc: string
  aiImageSrc: string
  naturalImageAlt: string
  aiImageAlt: string
  description: string
  className?: string
  title?: string
  titleClassName?: string
  highlightClassName?: string
}

export function AiPatternComparison({
  naturalImageSrc,
  aiImageSrc,
  naturalImageAlt,
  aiImageAlt,
  description,
  className,
  title,
  titleClassName,
  highlightClassName,
}: AIPatternComparisonProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg border border-[#242423] bg-gray-30", className)}>
      {title && (
        <h3 className={cn("mb-4 font-tektur text-xl uppercase tracking-wider text-white", titleClassName)}>{title}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 border-r border-[#242423] md:h-80">
          <Image src={naturalImageSrc || "/placeholder.svg"} alt={naturalImageAlt} fill className="object-cover" />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 p-2">
            <p className="text-xs text-white">Natural</p>
          </div>
        </div>
        <div className="relative h-64 md:h-80">
          <Image src={aiImageSrc || "/placeholder.svg"} alt={aiImageAlt} fill className="object-cover" />
          <div className={cn("absolute bottom-0 left-0 bg-[#B6531C] bg-opacity-75 p-2", highlightClassName)}>
            <p className="text-xs text-white">AI-Generated</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-80">{description}</p>
      </div>
    </div>
  )
}

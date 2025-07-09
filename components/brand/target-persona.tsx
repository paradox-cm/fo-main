import Image from "next/image"
import { cn } from "@/lib/utils"

interface TargetPersonaProps {
  imageSrc: string
  quote: string
  description: string
  className?: string
  textClassName?: string
}

export function TargetPersona({ imageSrc, quote, description, className, textClassName }: TargetPersonaProps) {
  return (
    <div className={cn("overflow-hidden rounded-md border border-[#242423] bg-gray-30", className)}>
      <div className="relative h-64">
        <Image src={imageSrc || "/placeholder.svg"} alt="Target persona" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <p className={cn("font-tektur text-lg text-white", textClassName)}>"{quote}"</p>
        </div>
      </div>
      <div className="p-4">
        <p className={cn("text-sm text-gray-80", textClassName)}>{description}</p>
      </div>
    </div>
  )
}

import Image from "next/image"
import { cn } from "@/lib/utils"

interface SplitImageTextProps {
  imageSrc: string
  title: string
  description: string
  className?: string
  titleClassName?: string
  imagePosition?: "left" | "right" | "top"
}

export function SplitImageText({
  imageSrc,
  title,
  description,
  className,
  titleClassName,
  imagePosition = "left",
}: SplitImageTextProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-gray-800 bg-gray-900",
        imagePosition === "top" ? "flex flex-col" : "md:flex",
        className,
      )}
    >
      <div
        className={cn(
          "relative h-48 md:h-auto",
          imagePosition === "top" ? "w-full" : "md:w-1/2",
          imagePosition === "right" && "md:order-2",
        )}
      >
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div
        className={cn(
          "flex flex-col justify-center p-6",
          imagePosition === "top" ? "w-full" : "md:w-1/2",
          imagePosition === "right" && "md:order-1",
        )}
      >
        <h3 className={cn("mb-3 font-tektur text-xl uppercase tracking-wider text-white", titleClassName)}>{title}</h3>
        <p className={cn("text-gray-300", className)}>{description}</p>
      </div>
    </div>
  )
}

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { ReliableImage } from "@/components/ui/reliable-image"

interface BrandCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
  buttonText?: string
  className?: string
  logoSize?: { width: number; height: number }
}

export function BrandCard({
  title,
  description,
  imageSrc,
  href,
  buttonText = "Learn More",
  className,
  logoSize = { width: 120, height: 40 },
}: BrandCardProps) {
  // Create PNG path for SVG images
  const pngSrc = imageSrc.toLowerCase().endsWith(".svg") ? imageSrc.replace(/\.svg$/i, ".png") : undefined

  return (
    <Link
      href={href}
      className={cn(
        "block border border-[#242423] rounded-md overflow-hidden transition-all duration-300 hover:border-[#B99C20] bg-black/20 focus:outline-none focus:ring-2 focus:ring-primary",
        className
      )}
      aria-label={`Visit ${title} website`}
    >
      <div className="p-6">
        <div className="h-12 mb-6 flex items-center">
          <ReliableImage
            src={imageSrc || "/placeholder.svg"}
            pngSrc={pngSrc}
            alt={title}
            width={logoSize.width}
            height={logoSize.height}
            className="w-auto"
            style={{ height: `${logoSize.height}px` }}
          />
        </div>
        <h3 className="font-mono text-lg mb-3">{title}</h3>
        <p className="text-white/70 text-sm mb-6">{description}</p>
        <span className="inline-flex items-center text-primary text-sm font-mono hover:underline">
          {buttonText} <ArrowRight size={14} className="ml-1" />
        </span>
      </div>
    </Link>
  )
}

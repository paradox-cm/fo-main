"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface ReliableImageProps extends Omit<ImageProps, "src"> {
  src: string
  pngSrc?: string
  svgSrc?: string
}

export function ReliableImage({ src, pngSrc, svgSrc, alt, ...props }: ReliableImageProps) {
  const [imageSrc, setImageSrc] = useState<string>("/placeholder.svg")
  const [isV0Preview, setIsV0Preview] = useState<boolean>(false)

  useEffect(() => {
    // More aggressive detection of v0 preview environment
    const isPreview =
      typeof window !== "undefined" &&
      (window.location.hostname.includes("v0.dev") ||
        window.location.hostname.includes("vercel-v0") ||
        window.location.hostname.includes("localhost") ||
        window.location.hostname.includes("127.0.0.1"))

    setIsV0Preview(isPreview)

    // In v0 preview, always use PNG
    if (isPreview) {
      // If we have a specific PNG version, use it
      if (pngSrc) {
        setImageSrc(pngSrc)
      }
      // If the source is an SVG, try to use a PNG version with the same name
      else if (src.toLowerCase().endsWith(".svg")) {
        const pngVersion = src.replace(/\.svg$/i, ".png")
        setImageSrc(pngVersion)
      }
      // Otherwise use the original source
      else {
        setImageSrc(src)
      }
    }
    // In deployment, use SVG if available
    else {
      if (svgSrc) {
        setImageSrc(svgSrc)
      } else {
        setImageSrc(src)
      }
    }
  }, [src, pngSrc, svgSrc])

  return (
    <Image
      src={imageSrc || "/placeholder.svg"}
      alt={alt || ""}
      {...props}
      onError={() => {
        // If the image fails to load, try a placeholder
        setImageSrc("/placeholder.svg")
      }}
    />
  )
}

"use client"

import Image, { type ImageProps } from "next/image"
import { useState, useEffect } from "react"

interface AdaptiveImageProps extends Omit<ImageProps, "src"> {
  src: string
  fallbackSrc?: string
}

export function AdaptiveImage({ src, fallbackSrc, alt, ...props }: AdaptiveImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src)
  const [isError, setIsError] = useState(false)

  // Reset error state when src changes
  useEffect(() => {
    setImgSrc(src)
    setIsError(false)
  }, [src])

  // Handle image load error
  const handleError = () => {
    if (!isError) {
      setIsError(true)

      // Try fallback if provided
      if (fallbackSrc) {
        setImgSrc(fallbackSrc)
        return
      }

      // If src starts with /images, try without the leading slash
      if (src.startsWith("/images/")) {
        setImgSrc(src.substring(1))
        return
      }

      // If src doesn't start with /images, try with /images/ prefix
      if (!src.startsWith("/images/") && !src.startsWith("images/")) {
        setImgSrc(`/images/${src}`)
        return
      }

      // Last resort: use a placeholder
      setImgSrc(`https://placehold.co/600x400?text=${encodeURIComponent(alt || "Image")}`)
    }
  }

  return <Image src={imgSrc || "/placeholder.svg"} alt={alt || ""} onError={handleError} {...props} />
}

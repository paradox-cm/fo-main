"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface ReliableImageProps extends Omit<ImageProps, "src"> {
  src: string
  pngSrc?: string
  svgSrc?: string
}

export function ReliableImage({ src, pngSrc, svgSrc, alt, ...props }: ReliableImageProps) {
  const [imageSrc, setImageSrc] = useState<string>("")
  const [isV0Preview, setIsV0Preview] = useState<boolean>(false)

  useEffect(() => {
    // Only detect v0 preview environment, not localhost
    const isPreview =
      typeof window !== "undefined" &&
      (window.location.hostname.includes("v0.dev") ||
        window.location.hostname.includes("vercel-v0"))

    setIsV0Preview(isPreview)

    // In v0 preview, use PNG if available
    if (isPreview) {
      if (pngSrc) {
        setImageSrc(pngSrc)
      } else {
        setImageSrc(src)
      }
    }
    // In all other environments (including localhost), use SVG if available
    else {
      if (svgSrc) {
        setImageSrc(svgSrc)
      } else {
        setImageSrc(src)
      }
    }
  }, [src, pngSrc, svgSrc])

  if (!imageSrc) return null;
  return (
    <Image
      src={imageSrc}
      alt={alt || ""}
      {...props}
      onError={() => {
        setImageSrc("");
      }}
    />
  );
}

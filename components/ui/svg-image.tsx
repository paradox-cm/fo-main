"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface SvgImageProps extends Omit<ImageProps, "src"> {
  src: string
  fallbackPng?: string
}

export function SvgImage({ src, fallbackPng, alt, ...props }: SvgImageProps) {
  const [isPreview, setIsPreview] = useState(false)
  const [imgSrc, setImgSrc] = useState(src)

  useEffect(() => {
    // Check if we're in the v0 preview environment
    // This is a heuristic - we check if the URL contains v0.dev
    const isV0Preview =
      typeof window !== "undefined" &&
      (window.location.hostname.includes("v0.dev") || window.location.hostname.includes("vercel-v0"))

    setIsPreview(isV0Preview)

    // If we're in preview and have a fallback PNG, use it
    if (isV0Preview && fallbackPng) {
      setImgSrc(fallbackPng)
    } else {
      setImgSrc(src)
    }
  }, [src, fallbackPng])

  // For SVGs, we can try to render them directly as an object if in preview mode
  if (src.endsWith(".svg") && isPreview && !fallbackPng) {
    return (
      <object
        data={src}
        type="image/svg+xml"
        className={props.className}
        style={{ width: props.width, height: props.height }}
      >
        <img
          src={`https://placehold.co/600x400?text=${encodeURIComponent(alt || "SVG")}`}
          alt={alt || ""}
          width={props.width}
          height={props.height}
          className={props.className}
        />
      </object>
    )
  }

  return <Image src={imgSrc || "/placeholder.svg"} alt={alt || ""} {...props} />
}

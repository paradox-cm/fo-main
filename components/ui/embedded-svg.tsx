"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { isV0Preview } from "@/lib/image-utils"
import Image from "next/image"

interface EmbeddedSvgProps {
  svgContent: string
  pngSrc?: string
  width?: number
  height?: number
  alt?: string
  className?: string
  style?: React.CSSProperties
}

export function EmbeddedSvg({
  svgContent,
  pngSrc,
  width = 100,
  height = 100,
  alt = "",
  className = "",
  style = {},
}: EmbeddedSvgProps) {
  const [isPreview, setIsPreview] = useState(false)

  useEffect(() => {
    setIsPreview(isV0Preview())
  }, [])

  if (isPreview && pngSrc) {
    return (
      <Image
        src={pngSrc || "/placeholder.svg"}
        width={width}
        height={height}
        alt={alt}
        className={className}
        style={style}
      />
    )
  }

  return (
    <div
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      aria-label={alt}
      role="img"
    />
  )
}

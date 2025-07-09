"use client"

import type React from "react"

import { ReliableImage } from "./reliable-image"

interface ForestLogoProps {
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}

export function ForestLogo({ width = 96, height = 24, className = "", style = {} }: ForestLogoProps) {
  return (
    <ReliableImage
      src="/images/forest-text-main.png"
      pngSrc="/images/forest-text-main.png"
      width={width}
      height={height}
      alt="Forest"
      className={className}
      style={style}
    />
  )
}

export function ForestIcon({ width = 32, height = 32, className = "", style = {} }: ForestLogoProps) {
  return (
    <ReliableImage
      src="/images/forest-icon-new.png"
      pngSrc="/images/forest-icon-new.png"
      width={width}
      height={height}
      alt="Forest Icon"
      className={className}
      style={style}
    />
  )
}

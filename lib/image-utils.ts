/**
 * Utility functions for handling images in different environments
 */

/**
 * Determines if the current environment is the v0 preview
 */
export function isV0Preview(): boolean {
  if (typeof window === "undefined") return false

  return (
    window.location.hostname.includes("v0.dev") ||
    window.location.hostname.includes("vercel-v0") ||
    window.location.hostname.includes("localhost") ||
    window.location.hostname.includes("127.0.0.1")
  )
}

/**
 * Gets the appropriate image source based on the environment
 * @param svgPath Path to the SVG image
 * @param pngPath Path to the PNG fallback
 */
export function getImageSource(svgPath: string, pngPath?: string): string {
  if (isV0Preview()) {
    // In v0 preview, use PNG if available
    if (pngPath) return pngPath

    // Otherwise, try to create a PNG path from the SVG path
    if (svgPath.toLowerCase().endsWith(".svg")) {
      return svgPath.replace(/\.svg$/i, ".png")
    }
  }

  // In production or if no PNG is available, use the original path
  return svgPath
}

/**
 * Creates a PNG fallback path from an SVG path
 * @param svgPath Path to the SVG image
 */
export function createPngFallback(svgPath: string): string | undefined {
  if (svgPath.toLowerCase().endsWith(".svg")) {
    return svgPath.replace(/\.svg$/i, ".png")
  }
  return undefined
}

"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { SidebarNavigation } from "@/components/brand/sidebar-navigation"
import { ScrollToTop } from "@/components/ui/scroll-to-top"

export default function BrandLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Update the getBackgroundStyle function to include text color
  const getBackgroundStyle = () => {
    if (pathname === "/brand/tribe-equipment") {
      return { background: "#101319" }
    } else if (pathname === "/brand/hyde") {
      return { background: "#000000" }
    } else if (pathname === "/brand/rbf") {
      return { background: "#DCD6BE", color: "#2E1C1C" }
    } else {
      return { background: "" }
    }
  }

  const backgroundStyle = getBackgroundStyle()

  return (
    <div
      className="flex min-h-screen flex-col bg-gray-20 lg:flex-row"
      style={{
        ...backgroundStyle,
        color: pathname === "/brand/rbf" ? "#2E1C1C" : "white",
      }}
    >
      <SidebarNavigation />
      <main className="flex-1 pt-16 lg:pt-0">
        {children}
        <ScrollToTop />
      </main>
    </div>
  )
}

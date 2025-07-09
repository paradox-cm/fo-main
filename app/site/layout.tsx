import type React from "react"
import { Inter, Barlow, Tektur, Overpass_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { UserProvider } from "@/lib/user-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
})

const tektur = Tektur({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-tektur",
})

const overpassMono = Overpass_Mono({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-overpass-mono",
})

export const metadata = {
  title: "Forest Outfitters",
  description: "Premium outdoor gear for your adventures",
}

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <UserProvider>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </UserProvider>
    </ThemeProvider>
  )
}

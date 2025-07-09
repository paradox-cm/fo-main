import type React from "react"
import { Inter, Barlow, Tektur, Overpass_Mono } from "next/font/google"
import "./globals.css"
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
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    images: [
      {
        url: "/welcome/images/Forest-Graph-cmpr.png",
        width: 1200,
        height: 630,
        alt: "Forest Outfitters Logo",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://forestoutfitters.com",
    siteName: "Forest Outfitters",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forest Outfitters | Gear Forged by Nature, Engineered for the Extreme",
    description:
      "Forest Outfitters crafts elite apparel and gear for hunters, adventurers, and tactical professionals who demand more from the wild.",
    images: ["/welcome/images/Forest-Graph-cmpr.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${barlow.variable} ${tektur.variable} ${overpassMono.variable} font-sans bg-[#0A0A0B] text-white min-h-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <UserProvider>
            <CartProvider>
              {children}
              <CartDrawer />
            </CartProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

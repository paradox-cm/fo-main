import type React from "react"
import { Inter, Barlow, Tektur, Overpass_Mono } from "next/font/google"
import "./styles/welcome.css"
import { ThemeProvider } from "./components/theme-provider"

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
  title: "Forest Outfitters | Gear Forged by Nature, Engineered for the Extreme",
  description:
    "Forest Outfitters crafts elite apparel and gear for hunters, adventurers, and tactical professionals who demand more from the wild. Rooted in a deep reverence for nature and driven by a warrior spirit, Forest designs equipment built to conquer the harshest environments. Every product embodies precision, resilience, and a relentless pursuit of excellence in the outdoors.",
  keywords:
    "Forest Outfitters, Outdoor Adventure Gear, Hunting Apparel, Tactical Outdoor Equipment, Hyde Concealment System, AI Concealment Technology, Advanced Outdoor Clothing, Extreme Weather Gear, Precision Outdoor Gear, Elite Hunting Gear, Durable Tactical Apparel, Generative AI Concealment, Warrior Spirit Equipment, Mule Deer Concealment, Survival Gear, Rugged Outdoor Clothing, Nature Inspired Gear",
  icons: {
    icon: "/welcome/images/icon.svg",
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
    url: "https://forestoutfitters.com/welcome",
    siteName: "Forest Outfitters",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forest Outfitters | Gear Forged by Nature, Engineered for the Extreme",
    description:
      "Forest Outfitters crafts elite apparel and gear for hunters, adventurers, and tactical professionals who demand more from the wild.",
    images: ["/welcome/images/Forest-Graph-cmpr.png"],
  },
}

export default function WelcomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${barlow.variable} ${tektur.variable} ${overpassMono.variable} font-sans bg-[#0A0A0B] text-white min-h-screen`}
      >
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}

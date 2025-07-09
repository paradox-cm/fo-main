"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProductCard } from "@/components/ui/product-card"
import { MonoTagline } from "@/components/ui/mono-tagline"
import { InlineNewsletterForm } from "@/components/inline-newsletter-form"

export default function ShopPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [shopifyStatus, setShopifyStatus] = useState({
    connected: false,
    configured: false,
    message: "",
    source: "",
  })

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true)
        setError("")

        // First check Shopify status
        const statusResponse = await fetch("/api/shopify-status")
        const statusData = await statusResponse.json()
        setShopifyStatus(statusData)

        // Fetch products
        const response = await fetch("/api/products")
        const data = await response.json()

        if (data.products && data.products.length > 0) {
          setProducts(data.products)
          setShopifyStatus((prev) => ({
            ...prev,
            connected: data.source === "shopify",
            source: data.source,
          }))
        } else {
          setError("No products found.")
        }
      } catch (err) {
        console.error("Error loading products:", err)
        setError("Failed to load products. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <>
      <Header />

      <main className="pt-24 pb-16 relative min-h-screen sm:min-h-[70vh]">
        <div className="container mx-auto px-4 relative flex flex-col items-center justify-center min-h-screen sm:block sm:min-h-0">
          <div className="mb-12 text-center">
            <div className="text-[#B99C20] font-mono tracking-wider text-xl mb-2">COMING SOON</div>
            <SectionHeading title="Shop Forest Outfitters" align="center" className="mb-2" />
          </div>
          {/* Desktop/Tablet: Skeleton grid and overlayed waitlist */}
          <div className="hidden sm:block relative">
            {/* Skeleton grid, dimmed when overlay is present */}
            <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 filter blur-sm brightness-75 pointer-events-none select-none">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-[#242423] rounded-md overflow-hidden bg-[#101010] h-28 sm:h-auto">
                  <div className="aspect-square bg-[#0a0a0a] h-20 sm:h-auto" />
                  <div className="p-4 space-y-3">
                    <div className="h-6 bg-[#0a0a0a] rounded w-3/4" />
                    <div className="h-4 bg-[#0a0a0a] rounded w-1/2" />
                    <div className="flex items-center justify-between pt-2">
                      <div className="h-5 bg-[#0a0a0a] rounded w-1/4" />
                      <div className="h-8 bg-[#0a0a0a] rounded w-1/3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Overlayed Waitlist CTA */}
            <div className="absolute inset-0 flex items-center justify-center z-20 px-2">
              <div className="bg-black/80 border border-[#242423] rounded-xl shadow-lg p-2 sm:p-4 w-full max-w-xs sm:max-w-lg mx-auto flex flex-col items-center">
                <h2 className="text-base sm:text-lg font-mono uppercase tracking-wider text-[#B99C20] mb-3 sm:mb-4">JOIN OUR WAITLIST</h2>
                <InlineNewsletterForm buttonText="Join the Waitlist" />
              </div>
            </div>
          </div>
          {/* Mobile: Waitlist only, centered */}
          <div className="w-full max-w-xs mx-auto flex flex-col items-center bg-black/80 border border-[#242423] rounded-xl shadow-lg p-2 mt-8 sm:hidden">
            <h2 className="text-base font-mono uppercase tracking-wider text-[#B99C20] mb-3">JOIN OUR WAITLIST</h2>
            <InlineNewsletterForm buttonText="Join the Waitlist" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

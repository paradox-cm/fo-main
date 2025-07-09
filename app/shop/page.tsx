"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProductCard } from "@/components/ui/product-card"
import { MonoTagline } from "@/components/ui/mono-tagline"

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

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <MonoTagline className="text-[#B99C20] mb-2">Our Collection</MonoTagline>
            <SectionHeading
              title="Shop Forest Outfitters"
              subtitle="Browse our collection of tactical and outdoor apparel."
              align="center"
            />
          </div>

          {shopifyStatus.configured && !shopifyStatus.connected && (
            <div className="mb-8 p-4 bg-yellow-50 text-yellow-800 rounded-md">
              <p className="font-medium">Notice: Using Sample Products</p>
              <p className="text-sm mt-1">
                We're currently displaying sample products due to a temporary issue with our product catalog. Please
                check back later to see our full inventory.
              </p>
            </div>
          )}

          {error && <div className="text-center p-4 mb-8 bg-red-50 text-red-700 rounded-md">{error}</div>}

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="border border-[#242423] rounded-md overflow-hidden">
                  <div className="aspect-square bg-[#1A1505]/50 animate-pulse"></div>
                  <div className="p-4 space-y-3">
                    <div className="h-6 bg-[#1A1505]/50 rounded animate-pulse"></div>
                    <div className="h-4 bg-[#1A1505]/50 rounded animate-pulse w-2/3"></div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="h-5 bg-[#1A1505]/50 rounded animate-pulse w-1/4"></div>
                      <div className="h-8 bg-[#1A1505]/50 rounded animate-pulse w-1/3"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product: any) => (
                <Link key={product.id} href={`/shop/${product.handle || product.id}`} className="block">
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image || product.images?.[0] || "/placeholder.svg?height=500&width=500"}
                    description={product.description}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center p-8">
              <p className="text-lg">No products found.</p>
              <p className="text-sm text-gray-500 mt-2">Please check back later to see our product catalog.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

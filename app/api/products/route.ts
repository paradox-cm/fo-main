import { NextResponse } from "next/server"
import { sampleProducts, isShopifyConfigured } from "@/lib/shopify"

export async function GET() {
  console.log("API route /api/products called")

  try {
    // Check if Shopify is configured
    const shopifyConfigured = isShopifyConfigured()
    console.log("Shopify configuration status:", { configured: shopifyConfigured })

    // For now, always return sample products to avoid the fetch error
    return NextResponse.json({
      products: sampleProducts,
      source: "sample",
      count: sampleProducts.length,
      shopifyConfigured,
    })
  } catch (error) {
    console.error("Error in products API route:", error)
    return NextResponse.json({
      products: sampleProducts,
      error: "Failed to fetch products",
      errorDetails: error instanceof Error ? error.message : String(error),
      source: "sample_error",
      count: sampleProducts.length,
    })
  }
}

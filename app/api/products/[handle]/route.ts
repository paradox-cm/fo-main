import { NextResponse } from "next/server"
import { getProductByHandle, sampleProducts, isShopifyConfigured } from "@/lib/shopify"

export async function GET(request: Request, { params }: { params: { handle: string } }) {
  const { handle } = params
  console.log(`API route /api/products/${handle} called`)

  try {
    // Check if Shopify is configured
    const shopifyConfigured = isShopifyConfigured()

    if (!shopifyConfigured) {
      const sampleProduct = sampleProducts.find((p) => p.handle === handle || p.id === handle)
      return NextResponse.json({
        product: sampleProduct,
        source: "sample",
        shopifyConfigured,
      })
    }

    // Fetch product from Shopify
    const product = await getProductByHandle(handle)
    const isUsingSample = product && sampleProducts.some((p) => p.id === product.id)

    return NextResponse.json({
      product,
      source: isUsingSample ? "sample" : "shopify",
      shopifyConfigured,
    })
  } catch (error) {
    console.error(`Error in product API route for ${handle}:`, error)
    const sampleProduct = sampleProducts.find((p) => p.handle === handle || p.id === handle)
    return NextResponse.json({
      product: sampleProduct,
      error: "Failed to fetch product",
      errorDetails: error instanceof Error ? error.message : String(error),
      source: "sample_error",
    })
  }
}

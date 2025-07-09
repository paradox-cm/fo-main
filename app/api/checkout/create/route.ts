import { NextResponse } from "next/server"
import { createCheckout, isShopifyConfigured } from "@/lib/shopify"

export async function POST(request: Request) {
  try {
    const { items } = await request.json()

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Invalid items provided" }, { status: 400 })
    }

    // Check if Shopify is configured
    const shopifyConfigured = isShopifyConfigured()
    if (!shopifyConfigured) {
      return NextResponse.json({ error: "Shopify is not configured" }, { status: 500 })
    }

    const checkout = await createCheckout(items)

    if (!checkout) {
      return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 })
    }

    return NextResponse.json({ checkout })
  } catch (error) {
    console.error("Error in checkout create API route:", error)
    return NextResponse.json(
      {
        error: "Failed to create checkout",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

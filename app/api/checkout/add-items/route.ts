import { NextResponse } from "next/server"
import { addItemsToCheckout, isShopifyConfigured } from "@/lib/shopify"

export async function POST(request: Request) {
  try {
    const { checkoutId, items } = await request.json()

    if (!checkoutId) {
      return NextResponse.json({ error: "Checkout ID is required" }, { status: 400 })
    }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Invalid items provided" }, { status: 400 })
    }

    // Check if Shopify is configured
    const shopifyConfigured = isShopifyConfigured()
    if (!shopifyConfigured) {
      return NextResponse.json({ error: "Shopify is not configured" }, { status: 500 })
    }

    const checkout = await addItemsToCheckout(checkoutId, items)

    if (!checkout) {
      return NextResponse.json({ error: "Failed to add items to checkout" }, { status: 500 })
    }

    return NextResponse.json({ checkout })
  } catch (error) {
    console.error("Error in checkout add items API route:", error)
    return NextResponse.json(
      {
        error: "Failed to add items to checkout",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

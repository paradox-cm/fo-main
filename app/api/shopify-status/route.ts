import { NextResponse } from "next/server"

export async function GET() {
  // Return a basic response with no external dependencies or complex logic
  return NextResponse.json({
    status: "ok",
    message: "Shopify status check",
    timestamp: new Date().toISOString(),
    environment: {
      hasDomain: typeof process.env.SHOPIFY_STORE_DOMAIN === "string" && process.env.SHOPIFY_STORE_DOMAIN.length > 0,
      hasToken:
        typeof process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN === "string" &&
        process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN.length > 0,
    },
  })
}

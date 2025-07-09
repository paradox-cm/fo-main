import { NextResponse } from "next/server"
import { getShopifyClient } from "@/lib/shopify"

export async function GET() {
  try {
    // Get Shopify credentials
    const domain = process.env.SHOPIFY_STORE_DOMAIN
    const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN

    // Check if credentials are available
    if (!domain || !token) {
      return NextResponse.json(
        {
          success: false,
          error: "Shopify credentials not found",
          details: {
            hasDomain: !!domain,
            hasToken: !!token,
          },
        },
        { status: 500 },
      )
    }

    // Try to initialize the client
    const client = getShopifyClient()
    if (!client) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to initialize Shopify client",
        },
        { status: 500 },
      )
    }

    // Try a simple query to test the connection
    const testQuery = `
      query {
        shop {
          name
          primaryDomain {
            url
          }
        }
      }
    `

    try {
      const data = await client.request(testQuery)
      return NextResponse.json({
        success: true,
        message: "Successfully connected to Shopify API",
        shopInfo: data.shop,
      })
    } catch (queryError) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to query Shopify API",
          details: queryError instanceof Error ? queryError.message : String(queryError),
        },
        { status: 500 },
      )
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Unexpected error testing Shopify connection",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

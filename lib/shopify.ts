import { GraphQLClient } from "graphql-request"

// Get Shopify credentials - only accessible server-side
const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN || ""
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN || ""

// Create a function to get a new client instance each time
export const getShopifyClient = () => {
  const domain = SHOPIFY_STORE_DOMAIN
  const token = SHOPIFY_STOREFRONT_ACCESS_TOKEN

  if (!domain || !token) {
    console.warn("Shopify credentials not found:", {
      hasDomain: !!domain,
      hasToken: !!token,
    })
    return null
  }

  // Ensure the domain is properly formatted
  let formattedDomain = domain
  if (!formattedDomain.includes("http")) {
    formattedDomain = `https://${formattedDomain}`
  }

  // Remove any trailing slashes
  formattedDomain = formattedDomain.replace(/\/$/, "")

  // Construct the GraphQL endpoint URL
  const graphqlEndpoint = `${formattedDomain}/api/2023-10/graphql.json`

  try {
    return new GraphQLClient(graphqlEndpoint, {
      headers: {
        "X-Shopify-Storefront-Access-Token": token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      timeout: 15000, // 15 second timeout
    })
  } catch (error) {
    console.error("Error creating Shopify client:", error)
    return null
  }
}

// GraphQL fragments for reuse
export const PRODUCT_FRAGMENT = `
  fragment ProductFragment on Product {
    id
    title
    handle
    description
    descriptionHtml
    tags
    productType
    vendor
    options {
      id
      name
      values
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          availableForSale
          selectedOptions {
            name
            value
          }
          image {
            id
            url
            altText
            width
            height
          }
        }
      }
    }
    images(first: 20) {
      edges {
        node {
          id
          url
          altText
          width
          height
        }
      }
    }
  }
`

// GraphQL queries
export const PRODUCTS_QUERY = `
  query Products($first: Int!) {
    products(first: $first) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          ...ProductFragment
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`

export const PRODUCT_BY_HANDLE_QUERY = `
  query ProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      ...ProductFragment
    }
  }
  ${PRODUCT_FRAGMENT}
`

// Add these queries at the end of the existing GraphQL queries
export const CREATE_CHECKOUT_MUTATION = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
        totalPriceV2 {
          amount
          currencyCode
        }
        lineItems(first: 250) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`

export const ADD_CHECKOUT_ITEMS_MUTATION = `
  mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout {
        id
        webUrl
        totalPriceV2 {
          amount
          currencyCode
        }
        lineItems(first: 250) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`

// Helper functions to transform Shopify data to our app's format
export function normalizeProduct(product: any) {
  if (!product) return null

  const { id, title, handle, description, images, variants, options, vendor, productType, tags } = product

  const normalizedImages = images?.edges?.map((edge: any) => edge.node.url) || []

  const normalizedVariants =
    variants?.edges?.map((edge: any) => {
      const variant = edge.node
      return {
        id: variant.id,
        title: variant.title,
        price: Number.parseFloat(variant.price.amount),
        availableForSale: variant.availableForSale,
        selectedOptions: variant.selectedOptions,
        image: variant.image?.url || normalizedImages[0],
      }
    }) || []

  // Get all available sizes and colors from options
  const sizes = options?.find((option: any) => option.name.toLowerCase() === "size")?.values || []
  const colors = options?.find((option: any) => option.name.toLowerCase() === "color")?.values || []

  return {
    id,
    title,
    handle,
    description,
    images: normalizedImages,
    price: Number.parseFloat(variants?.edges[0]?.node.price.amount || "0"),
    variants: normalizedVariants,
    sizes,
    colors,
    vendor,
    category: productType,
    tags,
    sku: variants?.edges[0]?.node.id.split("/").pop() || "",
    defaultColor: colors[0] || "",
    defaultSize: sizes[0] || "",
    // Add a fallback image for the product card
    image: normalizedImages[0] || "/placeholder.svg?height=500&width=500",
  }
}

// Enhanced sample products with more realistic data
export const sampleProducts = [
  {
    id: "gid://shopify/Product/1",
    title: "Forest Tactical Backpack",
    price: 129.99,
    image: "/images/forest-item-1.png",
    description:
      "Heavy-duty tactical backpack with multiple compartments and MOLLE system. Perfect for outdoor adventures or tactical operations.",
    handle: "forest-tactical-backpack",
    images: ["/images/forest-item-1.png", "/placeholder.svg?key=b1fpy"],
    variants: [
      {
        id: "gid://shopify/ProductVariant/1",
        title: "Default",
        price: 129.99,
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
        image: "/images/forest-item-1.png",
      },
    ],
    sizes: [],
    colors: ["Black", "Camo"],
    vendor: "Forest Outfitters",
    category: "Bags",
    tags: ["tactical", "outdoor", "backpack"],
    sku: "FO-TB-001",
    defaultColor: "Black",
    defaultSize: "",
  },
  {
    id: "gid://shopify/Product/2",
    title: "Performance Polo",
    price: 79.99,
    image: "/images/forest-item-2.png",
    description:
      "Moisture-wicking performance polo with stretch fabric for maximum comfort. Ideal for both casual wear and outdoor activities.",
    handle: "performance-polo",
    images: ["/images/forest-item-2.png", "/polo-shirt-back.png"],
    variants: [
      {
        id: "gid://shopify/ProductVariant/2",
        title: "Small / Green",
        price: 79.99,
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Small" },
          { name: "Color", value: "Green" },
        ],
        image: "/images/forest-item-2.png",
      },
      {
        id: "gid://shopify/ProductVariant/3",
        title: "Medium / Green",
        price: 79.99,
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Medium" },
          { name: "Color", value: "Green" },
        ],
        image: "/images/forest-item-2.png",
      },
      {
        id: "gid://shopify/ProductVariant/4",
        title: "Large / Green",
        price: 79.99,
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Large" },
          { name: "Color", value: "Green" },
        ],
        image: "/images/forest-item-2.png",
      },
    ],
    sizes: ["Small", "Medium", "Large", "XL"],
    colors: ["Green", "Black", "Tan"],
    vendor: "Forest Outfitters",
    category: "Apparel",
    tags: ["performance", "polo", "shirt"],
    sku: "FO-PP-001",
    defaultColor: "Green",
    defaultSize: "Medium",
  },
  {
    id: "gid://shopify/Product/3",
    title: "Expedition Down Jacket",
    price: 249.99,
    image: "/images/forest-item-3.png",
    description:
      "Insulated down jacket for extreme cold weather conditions. Features water-resistant outer shell and premium down filling.",
    handle: "expedition-down-jacket",
    images: ["/images/forest-item-3.png", "/down-jacket-back.png"],
    variants: [
      {
        id: "gid://shopify/ProductVariant/5",
        title: "Medium / Black",
        price: 249.99,
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Medium" },
          { name: "Color", value: "Black" },
        ],
        image: "/images/forest-item-3.png",
      },
      {
        id: "gid://shopify/ProductVariant/6",
        title: "Large / Black",
        price: 249.99,
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Large" },
          { name: "Color", value: "Black" },
        ],
        image: "/images/forest-item-3.png",
      },
    ],
    sizes: ["Small", "Medium", "Large", "XL"],
    colors: ["Black", "Navy"],
    vendor: "Forest Outfitters",
    category: "Outerwear",
    tags: ["winter", "jacket", "down", "insulated"],
    sku: "FO-DJ-001",
    defaultColor: "Black",
    defaultSize: "Medium",
  },
  {
    id: "gid://shopify/Product/4",
    title: "All-Weather Technical Shell",
    price: 199.99,
    image: "/images/forest-item-4.png",
    description:
      "Waterproof and breathable technical shell for all-weather protection. Perfect for hiking, climbing, and other outdoor activities.",
    handle: "all-weather-technical-shell",
    images: ["/images/forest-item-4.png", "/placeholder.svg?key=edhk8"],
    variants: [
      {
        id: "gid://shopify/ProductVariant/7",
        title: "Small / Red",
        price: 199.99,
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Small" },
          { name: "Color", value: "Red" },
        ],
        image: "/images/forest-item-4.png",
      },
      {
        id: "gid://shopify/ProductVariant/8",
        title: "Medium / Red",
        price: 199.99,
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Medium" },
          { name: "Color", value: "Red" },
        ],
        image: "/images/forest-item-4.png",
      },
    ],
    sizes: ["Small", "Medium", "Large", "XL"],
    colors: ["Red", "Blue", "Black"],
    vendor: "Forest Outfitters",
    category: "Outerwear",
    tags: ["waterproof", "shell", "technical", "hiking"],
    sku: "FO-TS-001",
    defaultColor: "Red",
    defaultSize: "Medium",
  },
  {
    id: "gid://shopify/Product/5",
    title: "Tactical Combat Pants",
    price: 89.99,
    image: "/tactical-pants.png",
    description:
      "Durable tactical pants with reinforced knees and multiple pockets. Perfect for outdoor activities or tactical operations.",
    handle: "tactical-combat-pants",
    images: ["/tactical-pants.png", "/placeholder.svg?key=18su0"],
    variants: [
      {
        id: "gid://shopify/ProductVariant/9",
        title: "32 / Khaki",
        price: 89.99,
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "32" },
          { name: "Color", value: "Khaki" },
        ],
        image: "/tactical-pants.png",
      },
      {
        id: "gid://shopify/ProductVariant/10",
        title: "34 / Khaki",
        price: 89.99,
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "34" },
          { name: "Color", value: "Khaki" },
        ],
        image: "/tactical-pants.png",
      },
    ],
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Khaki", "Black", "Olive"],
    vendor: "Forest Outfitters",
    category: "Apparel",
    tags: ["tactical", "pants", "combat"],
    sku: "FO-TCP-001",
    defaultColor: "Khaki",
    defaultSize: "34",
  },
  {
    id: "gid://shopify/Product/6",
    title: "Advanced Hunting Vest",
    price: 159.99,
    image: "/hunting-vest.png",
    description:
      "Versatile hunting vest with multiple pockets and adjustable fit. Designed for serious hunters who need functionality and comfort.",
    handle: "advanced-hunting-vest",
    images: ["/hunting-vest.png", "/placeholder.svg?height=500&width=500&query=hunting vest back view"],
    variants: [
      {
        id: "gid://shopify/ProductVariant/11",
        title: "Medium / Camo",
        price: 159.99,
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Medium" },
          { name: "Color", value: "Camo" },
        ],
        image: "/hunting-vest.png",
      },
      {
        id: "gid://shopify/ProductVariant/12",
        title: "Large / Camo",
        price: 159.99,
        availableForSale: true,
        selectedOptions: [
          { name: "Size", value: "Large" },
          { name: "Color", value: "Camo" },
        ],
        image: "/hunting-vest.png",
      },
    ],
    sizes: ["Small", "Medium", "Large", "XL"],
    colors: ["Camo", "Orange"],
    vendor: "Forest Outfitters",
    category: "Hunting Gear",
    tags: ["hunting", "vest", "tactical"],
    sku: "FO-HV-001",
    defaultColor: "Camo",
    defaultSize: "Medium",
  },
]

// Function to fetch all products - now with better error handling
export async function getAllProducts() {
  try {
    const client = getShopifyClient()
    if (!client) {
      console.warn("Shopify client not initialized, using sample products")
      return sampleProducts
    }

    const variables = { first: 50 }

    try {
      const data = await client.request(PRODUCTS_QUERY, variables)

      if (!data?.products?.edges || data.products.edges.length === 0) {
        console.warn("No products found in Shopify response, using sample products")
        return sampleProducts
      }

      return data.products.edges.map((edge: any) => normalizeProduct(edge.node))
    } catch (queryError) {
      console.error("Error querying Shopify API:", queryError)
      console.log("Using sample products due to Shopify API error")
      return sampleProducts
    }
  } catch (error) {
    console.error("Error in getAllProducts:", error)
    return sampleProducts
  }
}

// Function to fetch a single product by handle or ID
export async function getProductByHandle(handle: string) {
  try {
    const client = getShopifyClient()
    if (!client) {
      console.warn(`Shopify client not initialized, using sample product for ${handle}`)
      const product = sampleProducts.find((p) => p.handle === handle || p.id === handle)
      return product || sampleProducts[0]
    }

    const variables = { handle }

    try {
      const data = await client.request(PRODUCT_BY_HANDLE_QUERY, variables)

      if (!data?.productByHandle) {
        console.warn(`Product not found in Shopify: ${handle}, using sample product`)
        const product = sampleProducts.find((p) => p.handle === handle || p.id === handle)
        return product || sampleProducts[0]
      }

      return normalizeProduct(data.productByHandle)
    } catch (queryError) {
      console.error(`Error querying Shopify API for product: ${handle}`, queryError)
      const product = sampleProducts.find((p) => p.handle === handle || p.id === handle)
      return product || sampleProducts[0]
    }
  } catch (error) {
    console.error(`Error in getProductByHandle: ${handle}`, error)
    const product = sampleProducts.find((p) => p.handle === handle || p.id === handle)
    return product || sampleProducts[0]
  }
}

// Check if Shopify is properly configured
export function isShopifyConfigured() {
  const hasToken = !!process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN
  const hasDomain = !!process.env.SHOPIFY_STORE_DOMAIN
  return hasToken && hasDomain
}

// Add these functions at the end of the file
export async function createCheckout(items: any[]) {
  // For now, just return a mock checkout object
  console.log("Creating mock checkout for items:", items)
  return {
    id: "mock-checkout-id",
    webUrl: "https://example.com/checkout",
    totalPriceV2: {
      amount: items.reduce((total, item) => total + item.price * item.quantity, 0).toString(),
      currencyCode: "USD",
    },
  }
}

export async function addItemsToCheckout(checkoutId: string, items: any[]) {
  // For now, just return a mock checkout object
  console.log("Adding items to mock checkout:", checkoutId, items)
  return {
    id: checkoutId,
    webUrl: "https://example.com/checkout",
    totalPriceV2: {
      amount: items.reduce((total, item) => total + item.price * item.quantity, 0).toString(),
      currencyCode: "USD",
    },
  }
}

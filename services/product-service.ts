// Fetch all products
export async function fetchProducts() {
  try {
    const response = await fetch("/api/products")
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`)
    }
    const data = await response.json()
    return data.products || []
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

// Fetch a single product by handle
export async function fetchProductByHandle(handle: string) {
  try {
    const response = await fetch(`/api/products/${handle}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.status}`)
    }
    const data = await response.json()
    return data.product || null
  } catch (error) {
    console.error(`Error fetching product ${handle}:`, error)
    return null
  }
}

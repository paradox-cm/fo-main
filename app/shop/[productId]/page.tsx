"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ChevronRight, Minus, Plus, Share2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { MonoTagline } from "@/components/ui/mono-tagline"
import { MonoHeadline } from "@/components/ui/mono-headline"
import { SectionHeading } from "@/components/ui/section-heading"
import { ProductCard } from "@/components/ui/product-card"
import { useContext } from "react"
import { CartContext } from "@/lib/cart-context"
import { formatCurrency } from "@/lib/utils"
import { fetchProductByHandle, fetchProducts } from "@/services/product-service"

// Sample product data - in a real app, this would come from an API
const products = {
  prod_2: {
    id: "prod_2",
    title: "Performance Polo",
    price: 79.99,
    images: [
      "/images/forest-item-1.png",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    description:
      "Our Performance Polo is designed for those who demand the best. Crafted from premium moisture-wicking fabric with four-way stretch, this polo offers unmatched comfort and durability in any environment. The innovative fabric technology regulates body temperature while the reinforced seams ensure longevity even under the most demanding conditions.",
    features: [
      "Moisture-wicking performance fabric",
      "Four-way stretch for maximum mobility",
      "Temperature regulating technology",
      "Reinforced seams for durability",
      "Hidden tactical pocket",
      "UV protection (UPF 50+)",
      "Made in USA",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Olive", "Coyote", "Gray"],
    defaultColor: "Black",
    defaultSize: "L",
    sku: "FO-PP-001",
    category: "Apparel",
  },
}

// Sample related products
const relatedProducts = [
  {
    id: "prod_3",
    title: "Down Jacket",
    price: 249.99,
    image: "/images/forest-item-2.png",
    description: "Insulated down jacket for extreme cold weather conditions.",
  },
  {
    id: "prod_4",
    title: "Technical Shell",
    price: 199.99,
    image: "/images/forest-item-3.png",
    description: "Waterproof and breathable technical shell for all-weather protection.",
  },
  {
    id: "prod_5",
    title: "Tactical Polo",
    price: 89.99,
    image: "/images/forest-item-4.png",
    description: "Durable tactical polo with hidden pockets and reinforced stitching.",
  },
]

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const { productId } = params
  const context = useContext(CartContext)

  const [product, setProduct] = useState<any>(null)
  const [relatedProducts, setRelatedProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  useEffect(() => {
    async function loadProduct() {
      setLoading(true)
      const fetchedProduct = await fetchProductByHandle(productId)

      if (fetchedProduct) {
        setProduct(fetchedProduct)
        setSelectedSize(fetchedProduct.defaultSize || fetchedProduct.sizes?.[0] || "")
        setSelectedColor(fetchedProduct.defaultColor || fetchedProduct.colors?.[0] || "")

        // Load related products
        const allProducts = await fetchProducts()
        const related = allProducts.filter((p: any) => p.id !== fetchedProduct.id).slice(0, 3)
        setRelatedProducts(related)
      }

      setLoading(false)
    }

    loadProduct()
  }, [productId])

  // Handle quantity changes
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  // Handle add to cart
  const handleAddToCart = () => {
    if (!product || !context) return

    context.addToCart({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      title: `${product.title} - ${selectedSize}, ${selectedColor}`,
      price: product.price,
      quantity: quantity,
      image: product.images?.[0] || product.image,
      variantId: product.variants?.find(
        (v: any) =>
          v.selectedOptions?.some((o: any) => o.name === "Size" && o.value === selectedSize) &&
          v.selectedOptions?.some((o: any) => o.name === "Color" && o.value === selectedColor),
      )?.id,
    })
  }

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div className="space-y-4">
                <div className="aspect-square bg-[#1A1505]/50 rounded-md animate-pulse"></div>
                <div className="flex space-x-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-20 h-20 bg-[#1A1505]/50 rounded-md animate-pulse"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-8 bg-[#1A1505]/50 rounded animate-pulse w-1/3"></div>
                <div className="h-10 bg-[#1A1505]/50 rounded animate-pulse"></div>
                <div className="h-6 bg-[#1A1505]/50 rounded animate-pulse w-1/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-[#1A1505]/50 rounded animate-pulse"></div>
                  <div className="h-4 bg-[#1A1505]/50 rounded animate-pulse"></div>
                  <div className="h-4 bg-[#1A1505]/50 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-20">
              <h1 className="text-2xl mb-4">Product Not Found</h1>
              <p className="text-white/70 mb-8">The product you're looking for doesn't exist or has been removed.</p>
              <Button asChild variant="primary">
                <Link href="/shop">Return to Shop</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Extract features from product description or tags
  const features = product.description
    ? product.description
        .split(". ")
        .filter((s: string) => s.length > 10)
        .map((s: string) => s.trim() + (s.endsWith(".") ? "" : "."))
        .slice(0, 7)
    : product.tags?.slice(0, 7) || []

  return (
    <>
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center text-sm font-mono text-white/60">
              <Link href="/shop" className="hover:text-primary flex items-center">
                <ArrowLeft size={14} className="mr-1" /> Back to Shop
              </Link>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-white">{product.title}</span>
            </nav>
          </div>

          {/* Product Detail Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square relative bg-[#1A1505] rounded-md overflow-hidden border border-[#242423]">
                <Image
                  src={product.images?.[selectedImage] || product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnail Gallery */}
              {product.images && product.images.length > 1 && (
                <div className="flex space-x-4">
                  {product.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative w-20 h-20 bg-[#1A1505] rounded-md overflow-hidden border ${
                        selectedImage === index ? "border-primary" : "border-[#242423]"
                      }`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.title} - view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <MonoTagline className="text-primary mb-2">
                {product.category || product.productType || "Apparel"}
              </MonoTagline>
              <MonoHeadline className="mb-4">{product.title}</MonoHeadline>
              <div className="text-2xl font-mono text-primary mb-6">{formatCurrency(product.price)}</div>

              <p className="text-white/80 mb-8">{product.description}</p>

              {/* Product Features */}
              {features.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-mono text-lg mb-4">Features</h3>
                  <ul className="space-y-2">
                    {features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-mono text-sm mb-2">SIZE</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size: string) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-12 h-12 flex items-center justify-center border ${
                          selectedSize === size
                            ? "border-primary bg-[#1A1505] text-primary"
                            : "border-[#242423] hover:border-white/50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-mono text-sm mb-2">COLOR: {selectedColor}</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color: string) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 border ${
                          selectedColor === color
                            ? "border-primary bg-[#1A1505] text-primary"
                            : "border-[#242423] hover:border-white/50"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-[#242423] w-32">
                  <button
                    onClick={decreaseQuantity}
                    className="w-10 h-12 flex items-center justify-center hover:bg-[#1A1505]"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </button>
                  <div className="flex-1 h-12 flex items-center justify-center font-mono">{quantity}</div>
                  <button
                    onClick={increaseQuantity}
                    className="w-10 h-12 flex items-center justify-center hover:bg-[#1A1505]"
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <Button variant="primary" size="lg" className="flex-1" onClick={handleAddToCart} disabled={!context}>
                  Add to Cart
                </Button>

                <Button variant="outline" size="icon" className="w-12 h-12" aria-label="Share product">
                  <Share2 size={18} />
                </Button>
              </div>

              {/* SKU */}
              <div className="mt-6 text-white/50 text-sm font-mono">
                SKU: {product.sku || product.id.split("/").pop()}
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div>
              <SectionHeading title="You May Also Like" subtitle="Explore more products from our collection" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {relatedProducts.map((product: any) => (
                  <Link key={product.id} href={`/shop/${product.handle || product.id}`} className="block">
                    <ProductCard
                      id={product.id}
                      title={product.title}
                      price={product.price}
                      image={product.image || product.images?.[0]}
                      description={product.description}
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  )
}

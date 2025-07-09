"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Save, ImageIcon, Eye, X, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock products data
const mockProducts = [
  {
    id: "prod_1",
    title: "Tactical Backpack",
    price: 129.99,
    image: "/placeholder.svg?height=500&width=500",
    description: "Heavy-duty tactical backpack with multiple compartments and MOLLE system.",
    category: "Gear",
    status: "in_stock",
    inventory: 45,
    sku: "TB-001",
    weight: 2.5,
    dimensions: "20 x 15 x 8 inches",
    features: ["Multiple compartments", "MOLLE system", "Water-resistant", "Reinforced straps", "Padded back panel"],
    variants: [
      { color: "Black", size: "Standard", sku: "TB-001-BLK" },
      { color: "Coyote", size: "Standard", sku: "TB-001-COY" },
      { color: "OD Green", size: "Standard", sku: "TB-001-ODG" },
    ],
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    seo: {
      title: "Tactical Backpack | Forest Outfitters",
      description: "Heavy-duty tactical backpack with multiple compartments and MOLLE system.",
      keywords: "tactical backpack, military backpack, MOLLE system, outdoor gear",
    },
  },
  // Other products would be here
]

export default function ProductEditor({ params }: { params: { productId: string } }) {
  const { productId } = params
  const isNewProduct = productId === "new"

  const [product, setProduct] = useState(
    isNewProduct
      ? {
          id: "new",
          title: "",
          price: 0,
          image: "/placeholder.svg?height=500&width=500",
          description: "",
          category: "",
          status: "in_stock",
          inventory: 0,
          sku: "",
          weight: 0,
          dimensions: "",
          features: [],
          variants: [],
          images: ["/placeholder.svg?height=500&width=500"],
          seo: {
            title: "",
            description: "",
            keywords: "",
          },
        }
      : null,
  )

  const [isSaving, setIsSaving] = useState(false)
  const [featuresText, setFeaturesText] = useState("")
  const [activeTab, setActiveTab] = useState("details")

  // Load mock data for existing product
  useEffect(() => {
    if (!isNewProduct) {
      const foundProduct = mockProducts.find((p) => p.id === productId)
      if (foundProduct) {
        setProduct(foundProduct)
        setFeaturesText(foundProduct.features.join("\n"))
      }
    }
  }, [productId, isNewProduct])

  useEffect(() => {
    if (product && product.features) {
      setFeaturesText(product.features.join("\n"))
    }
  }, [product])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProduct((prev) => ({
      ...prev,
      seo: {
        ...prev.seo,
        [name]: value,
      },
    }))
  }

  const handleFeaturesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    setFeaturesText(text)

    const features = text.split("\n").filter((line) => line.trim() !== "")
    setProduct((prev) => ({
      ...prev,
      features,
    }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setProduct((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  if (!product) {
    return <div>Loading product...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/admin/products">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-tektur uppercase tracking-wide">
              {isNewProduct ? "Add Product" : "Edit Product"}
            </h1>
            <p className="text-muted-foreground font-sans">
              {isNewProduct ? "Create a new product" : `Editing: ${product.title}`}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={isNewProduct ? "/shop" : `/shop/${product.id}`} target="_blank">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Link>
          </Button>
          <Button onClick={handleSave} disabled={isSaving} className="bg-[#B99C20] text-black hover:bg-[#ECD055]">
            {isSaving ? (
              <>Saving...</>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Product
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-[#242423] bg-black/20">
            <CardContent className="p-4 md:p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 font-mono">Product Title</label>
                  <Input
                    name="title"
                    value={product.title}
                    onChange={handleChange}
                    placeholder="Product title"
                    className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 font-mono">Description</label>
                  <Textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    placeholder="Product description"
                    rows={4}
                    className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
            <div className="overflow-x-auto">
              <TabsList className="w-full sm:w-auto">
                <TabsTrigger value="details" className="font-mono text-xs uppercase tracking-wide">
                  Details
                </TabsTrigger>
                <TabsTrigger value="images" className="font-mono text-xs uppercase tracking-wide">
                  Images
                </TabsTrigger>
                <TabsTrigger value="variants" className="font-mono text-xs uppercase tracking-wide">
                  Variants
                </TabsTrigger>
                <TabsTrigger value="seo" className="font-mono text-xs uppercase tracking-wide">
                  SEO
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="details" className="mt-4">
              <Card className="border-[#242423] bg-black/20">
                <CardContent className="p-4 md:p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">SKU</label>
                      <Input
                        name="sku"
                        value={product.sku}
                        onChange={handleChange}
                        placeholder="SKU"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">Category</label>
                      <Select value={product.category} onValueChange={(value) => handleSelectChange("category", value)}>
                        <SelectTrigger className="bg-black/20 border-[#242423]">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-[#242423]">
                          <SelectItem value="Apparel">Apparel</SelectItem>
                          <SelectItem value="Gear">Gear</SelectItem>
                          <SelectItem value="Accessories">Accessories</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">Price ($)</label>
                      <Input
                        name="price"
                        type="number"
                        step="0.01"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="0.00"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">Inventory</label>
                      <Input
                        name="inventory"
                        type="number"
                        value={product.inventory}
                        onChange={handleChange}
                        placeholder="0"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">Status</label>
                      <Select value={product.status} onValueChange={(value) => handleSelectChange("status", value)}>
                        <SelectTrigger className="bg-black/20 border-[#242423]">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-[#242423]">
                          <SelectItem value="in_stock">In Stock</SelectItem>
                          <SelectItem value="low_stock">Low Stock</SelectItem>
                          <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">Weight (kg)</label>
                      <Input
                        name="weight"
                        type="number"
                        step="0.1"
                        value={product.weight}
                        onChange={handleChange}
                        placeholder="0.0"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">Dimensions</label>
                      <Input
                        name="dimensions"
                        value={product.dimensions}
                        onChange={handleChange}
                        placeholder="L x W x H"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 font-mono">Features (one per line)</label>
                    <Textarea
                      value={featuresText}
                      onChange={handleFeaturesChange}
                      placeholder="Enter product features, one per line"
                      rows={5}
                      className="bg-black/20 border-[#242423] focus:border-[#B99C20] font-sans"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="images" className="mt-4">
              <Card className="border-[#242423] bg-black/20">
                <CardContent className="p-4 md:p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 font-mono">Product Images</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {product.images.map((img, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-square bg-[#1A1505] rounded-md overflow-hidden border border-[#242423]">
                            <Image
                              src={img || "/placeholder.svg"}
                              alt={`Product image ${index + 1}`}
                              width={300}
                              height={300}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button variant="outline" size="sm" className="bg-black/50 text-white">
                              <ImageIcon className="h-4 w-4 mr-1" /> Change
                            </Button>
                            {index > 0 && (
                              <Button variant="outline" size="sm" className="bg-black/50 text-red-500">
                                <X className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          {index === 0 && (
                            <div className="absolute top-2 left-2 bg-[#B99C20] text-black text-xs px-2 py-1 rounded font-mono">
                              Main
                            </div>
                          )}
                        </div>
                      ))}
                      <div className="aspect-square bg-[#1A1505]/50 rounded-md border border-dashed border-[#242423] flex items-center justify-center cursor-pointer hover:bg-[#1A1505] transition-colors">
                        <div className="text-center">
                          <ImageIcon className="h-8 w-8 mx-auto text-[#B99C20]" />
                          <span className="block mt-2 text-sm font-mono">Add Image</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="variants" className="mt-4">
              <Card className="border-[#242423] bg-black/20">
                <CardContent className="p-4 md:p-6 space-y-6">
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                      <label className="block text-sm font-medium font-mono">Product Variants</label>
                      <Button variant="outline" size="sm" className="text-[#B99C20] border-[#B99C20]">
                        <Plus className="h-4 w-4 mr-1" /> Add Variant
                      </Button>
                    </div>

                    {product.variants && product.variants.length > 0 ? (
                      <div className="space-y-4">
                        {product.variants.map((variant, index) => (
                          <div key={index} className="border border-[#242423] rounded-md p-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <label className="block text-xs font-medium mb-1 font-mono">Color</label>
                                <Input
                                  value={variant.color}
                                  placeholder="Color"
                                  className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-medium mb-1 font-mono">Size</label>
                                <Input
                                  value={variant.size}
                                  placeholder="Size"
                                  className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-medium mb-1 font-mono">SKU</label>
                                <Input
                                  value={variant.sku}
                                  placeholder="SKU"
                                  className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                                />
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="mt-2 text-red-500 hover:text-red-600">
                              <Trash2 className="h-4 w-4 mr-1" /> Remove
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 border border-dashed border-[#242423] rounded-md">
                        <p className="text-muted-foreground mb-4 font-mono">No variants added yet</p>
                        <Button variant="outline" className="text-[#B99C20] border-[#B99C20]">
                          <Plus className="h-4 w-4 mr-1" /> Add First Variant
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seo" className="mt-4">
              <Card className="border-[#242423] bg-black/20">
                <CardContent className="p-4 md:p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-1 font-mono">SEO Title</label>
                    <Input
                      name="title"
                      value={product.seo?.title || ""}
                      onChange={handleSeoChange}
                      placeholder="SEO title (appears in search results)"
                      className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                    <p className="text-xs text-muted-foreground mt-1 font-mono">Recommended length: 50-60 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 font-mono">Meta Description</label>
                    <Textarea
                      name="description"
                      value={product.seo?.description || ""}
                      onChange={handleSeoChange}
                      placeholder="Brief description for search engines"
                      rows={3}
                      className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                    <p className="text-xs text-muted-foreground mt-1 font-mono">
                      Recommended length: 150-160 characters
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 font-mono">Keywords</label>
                    <Input
                      name="keywords"
                      value={product.seo?.keywords || ""}
                      onChange={handleSeoChange}
                      placeholder="Keywords separated by commas"
                      className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="border-[#242423] bg-black/20">
            <CardContent className="p-4 md:p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1 font-mono">Main Image</label>
                <div className="aspect-square bg-[#1A1505] rounded-md overflow-hidden border border-[#242423] mb-2">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <Button variant="outline" className="w-full">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Change Image
                </Button>
              </div>

              <div className="pt-4 border-t border-[#242423]">
                <h3 className="font-tektur text-lg mb-4">Product Summary</h3>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">SKU</div>
                    <div className="font-mono">{product.sku || "Not set"}</div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Price</div>
                    <div className="font-mono text-[#B99C20]">
                      {product.price ? `$${product.price.toFixed(2)}` : "$0.00"}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Inventory</div>
                    <div className="font-mono">{product.inventory || "0"} units</div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Category</div>
                    <div className="font-mono">{product.category || "Not set"}</div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Status</div>
                    <div className="font-mono">
                      {product.status === "in_stock" && "In Stock"}
                      {product.status === "low_stock" && "Low Stock"}
                      {product.status === "out_of_stock" && "Out of Stock"}
                      {!product.status && "Not set"}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

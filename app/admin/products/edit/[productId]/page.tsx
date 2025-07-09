"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Plus, Trash2, Upload, X, Save, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock product data
const mockProducts = {
  prod_1: {
    id: "prod_1",
    title: "Tactical Backpack",
    price: 129.99,
    image: "/placeholder.svg?height=500&width=500",
    description: "Heavy-duty tactical backpack with multiple compartments and MOLLE system.",
    category: "Gear",
    status: "in_stock",
    inventory: 45,
    sku: "TB-001",
    tags: ["backpack", "tactical", "outdoor"],
    variants: [
      { id: "var_1", color: "Black", size: "Standard", price: 129.99, inventory: 30, sku: "TB-001-BLK" },
      { id: "var_2", color: "Camo", size: "Standard", price: 139.99, inventory: 15, sku: "TB-001-CAM" },
    ],
    specifications: [
      { name: "Material", value: "1000D Cordura Nylon" },
      { name: "Capacity", value: "35L" },
      { name: "Weight", value: "2.8 lbs" },
    ],
    seo: {
      title: "Tactical Backpack | Forest Outfitters",
      description: "Heavy-duty tactical backpack with multiple compartments and MOLLE system.",
      keywords: "tactical backpack, outdoor gear, military backpack",
    },
    published: true,
    featured: true,
  },
  prod_2: {
    id: "prod_2",
    title: "Performance Polo",
    price: 79.99,
    image: "/images/forest-item-1.png",
    description: "Moisture-wicking performance polo with stretch fabric for maximum comfort.",
    category: "Apparel",
    status: "in_stock",
    inventory: 120,
    sku: "PP-001",
    tags: ["polo", "performance", "shirt"],
    variants: [
      { id: "var_1", color: "Black", size: "M", price: 79.99, inventory: 30, sku: "PP-001-BLK-M" },
      { id: "var_2", color: "Black", size: "L", price: 79.99, inventory: 40, sku: "PP-001-BLK-L" },
      { id: "var_3", color: "Green", size: "M", price: 79.99, inventory: 25, sku: "PP-001-GRN-M" },
      { id: "var_4", color: "Green", size: "L", price: 79.99, inventory: 25, sku: "PP-001-GRN-L" },
    ],
    specifications: [
      { name: "Material", value: "92% Polyester, 8% Spandex" },
      { name: "Fit", value: "Athletic" },
      { name: "Care", value: "Machine wash cold" },
    ],
    seo: {
      title: "Performance Polo | Forest Outfitters",
      description: "Moisture-wicking performance polo with stretch fabric for maximum comfort.",
      keywords: "performance polo, athletic shirt, moisture wicking",
    },
    published: true,
    featured: false,
  },
  new: {
    id: "",
    title: "",
    price: 0,
    image: "/placeholder.svg?height=500&width=500",
    description: "",
    category: "",
    status: "in_stock",
    inventory: 0,
    sku: "",
    tags: [],
    variants: [],
    specifications: [],
    seo: {
      title: "",
      description: "",
      keywords: "",
    },
    published: false,
    featured: false,
  },
}

export default function EditProductPage() {
  const params = useParams()
  const router = useRouter()
  const productId = params.productId as string

  // Get product data or use empty template for new product
  const initialProduct =
    productId === "new" ? mockProducts.new : mockProducts[productId as keyof typeof mockProducts] || mockProducts.new

  const [product, setProduct] = useState(initialProduct)
  const [activeTab, setActiveTab] = useState("basic")
  const [isSaving, setIsSaving] = useState(false)
  const [newTag, setNewTag] = useState("")
  const [newSpecName, setNewSpecName] = useState("")
  const [newSpecValue, setNewSpecValue] = useState("")

  const isNewProduct = productId === "new"
  const pageTitle = isNewProduct ? "Add New Product" : "Edit Product"

  const handleSave = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      // Navigate back to products list
      router.push("/admin/products")
    }, 1000)
  }

  const handleAddTag = () => {
    if (newTag.trim() && !product.tags.includes(newTag.trim())) {
      setProduct({
        ...product,
        tags: [...product.tags, newTag.trim()],
      })
      setNewTag("")
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setProduct({
      ...product,
      tags: product.tags.filter((tag) => tag !== tagToRemove),
    })
  }

  const handleAddSpecification = () => {
    if (newSpecName.trim() && newSpecValue.trim()) {
      setProduct({
        ...product,
        specifications: [...product.specifications, { name: newSpecName.trim(), value: newSpecValue.trim() }],
      })
      setNewSpecName("")
      setNewSpecValue("")
    }
  }

  const handleRemoveSpecification = (index: number) => {
    const newSpecs = [...product.specifications]
    newSpecs.splice(index, 1)
    setProduct({
      ...product,
      specifications: newSpecs,
    })
  }

  const categories = ["Apparel", "Gear", "Accessories", "Footwear", "Camping"]
  const statuses = ["in_stock", "low_stock", "out_of_stock", "backorder"]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild className="h-10 w-10 border-[#242423]">
            <Link href="/admin/products">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to products</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-tektur uppercase tracking-wide">{pageTitle}</h1>
            <p className="text-muted-foreground font-sans">
              {isNewProduct ? "Create a new product" : `Editing ${product.title}`}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild className="border-[#242423]">
            <Link href={`/shop/${product.id}`} target="_blank">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Link>
          </Button>
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
          >
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? "Saving..." : "Save Product"}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full bg-black/20 border border-[#242423] rounded-md p-1 h-auto">
              <TabsTrigger
                value="basic"
                className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#B99C20] data-[state=active]:text-black"
              >
                Basic Info
              </TabsTrigger>
              <TabsTrigger
                value="images"
                className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#B99C20] data-[state=active]:text-black"
              >
                Images
              </TabsTrigger>
              <TabsTrigger
                value="variants"
                className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#B99C20] data-[state=active]:text-black"
              >
                Variants
              </TabsTrigger>
              <TabsTrigger
                value="specs"
                className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#B99C20] data-[state=active]:text-black"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger
                value="seo"
                className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#B99C20] data-[state=active]:text-black"
              >
                SEO
              </TabsTrigger>
            </TabsList>

            <TabsContent value="basic" className="mt-6">
              <Card className="bg-black/20 border-[#242423]">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide">Basic Information</CardTitle>
                  <CardDescription>Enter the basic details of your product</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="title" className="font-mono text-xs uppercase tracking-wide">
                        Product Title <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="title"
                        value={product.title}
                        onChange={(e) => setProduct({ ...product, title: e.target.value })}
                        placeholder="Enter product title"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sku" className="font-mono text-xs uppercase tracking-wide">
                        SKU <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="sku"
                        value={product.sku}
                        onChange={(e) => setProduct({ ...product, sku: e.target.value })}
                        placeholder="Enter product SKU"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="font-mono text-xs uppercase tracking-wide">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={product.description}
                      onChange={(e) => setProduct({ ...product, description: e.target.value })}
                      placeholder="Enter product description"
                      className="min-h-[120px] bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price" className="font-mono text-xs uppercase tracking-wide">
                        Price <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="price"
                        type="number"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: Number.parseFloat(e.target.value) })}
                        placeholder="0.00"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category" className="font-mono text-xs uppercase tracking-wide">
                        Category
                      </Label>
                      <Select
                        value={product.category}
                        onValueChange={(value) => setProduct({ ...product, category: value })}
                      >
                        <SelectTrigger className="bg-black/20 border-[#242423]">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-[#242423]">
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="status" className="font-mono text-xs uppercase tracking-wide">
                        Status
                      </Label>
                      <Select
                        value={product.status}
                        onValueChange={(value) => setProduct({ ...product, status: value })}
                      >
                        <SelectTrigger className="bg-black/20 border-[#242423]">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-[#242423]">
                          <SelectItem value="in_stock">In Stock</SelectItem>
                          <SelectItem value="low_stock">Low Stock</SelectItem>
                          <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                          <SelectItem value="backorder">Backorder</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="inventory" className="font-mono text-xs uppercase tracking-wide">
                      Inventory
                    </Label>
                    <Input
                      id="inventory"
                      type="number"
                      value={product.inventory}
                      onChange={(e) => setProduct({ ...product, inventory: Number.parseInt(e.target.value) })}
                      placeholder="0"
                      className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="font-mono text-xs uppercase tracking-wide">Tags</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {product.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-[#1A1505] text-[#B99C20] border-[#242423] flex items-center gap-1"
                        >
                          {tag}
                          <button onClick={() => handleRemoveTag(tag)} className="text-[#B99C20] hover:text-red-500">
                            <X className="h-3 w-3" />
                            <span className="sr-only">Remove tag</span>
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Add a tag"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                        onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
                      />
                      <Button type="button" onClick={handleAddTag} variant="outline" className="border-[#242423]">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Add tag</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="images" className="mt-6">
              <Card className="bg-black/20 border-[#242423]">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide">Product Images</CardTitle>
                  <CardDescription>Upload and manage product images</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label className="font-mono text-xs uppercase tracking-wide">Main Image</Label>
                    <div className="flex items-center gap-4">
                      <div className="w-32 h-32 bg-[#1A1505] rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={product.image || "/placeholder.svg?height=128&width=128"}
                          alt="Product main image"
                          width={128}
                          height={128}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" className="border-[#242423]">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload Image
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          Recommended size: 1200x1200px. Max file size: 5MB.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-[#242423]" />

                  <div className="space-y-2">
                    <Label className="font-mono text-xs uppercase tracking-wide">Gallery Images</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="w-full aspect-square bg-[#1A1505] rounded-md overflow-hidden relative group">
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-2 right-2 h-6 w-6 bg-black/50 border-none opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="h-3 w-3 text-red-500" />
                          <span className="sr-only">Remove image</span>
                        </Button>
                        <div className="flex items-center justify-center h-full">
                          <Plus className="h-6 w-6 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="w-full aspect-square bg-[#1A1505] rounded-md overflow-hidden flex items-center justify-center border border-dashed border-[#242423]">
                        <Button variant="outline" className="border-[#242423] bg-black/30">
                          <Upload className="mr-2 h-4 w-4" />
                          Add Image
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Add up to 8 additional images to showcase your product.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="variants" className="mt-6">
              <Card className="bg-black/20 border-[#242423]">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide">Product Variants</CardTitle>
                  <CardDescription>Manage product variations like size and color</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-sm">
                      {product.variants.length} variant{product.variants.length !== 1 ? "s" : ""} defined
                    </p>
                    <Button variant="outline" className="border-[#242423]">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Variant
                    </Button>
                  </div>

                  {product.variants.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-[#242423]">
                            <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Variant</th>
                            <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">SKU</th>
                            <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Price</th>
                            <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Inventory</th>
                            <th className="text-right py-3 px-4 font-mono text-xs uppercase tracking-wide">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.variants.map((variant) => (
                            <tr key={variant.id} className="border-b border-[#242423]">
                              <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                  {variant.color && (
                                    <div
                                      className="w-4 h-4 rounded-full"
                                      style={{
                                        backgroundColor:
                                          variant.color.toLowerCase() === "black"
                                            ? "#000"
                                            : variant.color.toLowerCase() === "camo"
                                              ? "#4B5320"
                                              : variant.color.toLowerCase() === "green"
                                                ? "#2E8B57"
                                                : "#ddd",
                                      }}
                                    />
                                  )}
                                  <span>
                                    {variant.color} {variant.size && `/ ${variant.size}`}
                                  </span>
                                </div>
                              </td>
                              <td className="py-3 px-4 font-mono text-xs">{variant.sku}</td>
                              <td className="py-3 px-4 font-mono text-xs text-[#B99C20]">
                                ${variant.price.toFixed(2)}
                              </td>
                              <td className="py-3 px-4 font-mono text-xs">{variant.inventory}</td>
                              <td className="py-3 px-4 text-right">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 w-8 p-0 text-red-500 hover:text-red-600 border-red-500/30 hover:bg-red-500/10"
                                >
                                  <Trash2 className="h-4 w-4" />
                                  <span className="sr-only">Delete variant</span>
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center py-8 border border-dashed border-[#242423] rounded-md">
                      <p className="text-muted-foreground mb-4">No variants defined</p>
                      <Button variant="outline" className="border-[#242423]">
                        <Plus className="mr-2 h-4 w-4" />
                        Add First Variant
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specs" className="mt-6">
              <Card className="bg-black/20 border-[#242423]">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide">Product Specifications</CardTitle>
                  <CardDescription>Add technical details and specifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {product.specifications.length > 0 && (
                    <div className="space-y-2">
                      {product.specifications.map((spec, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-black/20 rounded-md">
                          <div>
                            <p className="font-medium">{spec.name}</p>
                            <p className="text-sm text-muted-foreground">{spec.value}</p>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleRemoveSpecification(index)}
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-600 border-red-500/30 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove specification</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="spec-name" className="font-mono text-xs uppercase tracking-wide">
                        Specification Name
                      </Label>
                      <Input
                        id="spec-name"
                        value={newSpecName}
                        onChange={(e) => setNewSpecName(e.target.value)}
                        placeholder="e.g. Material, Weight, Dimensions"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="spec-value" className="font-mono text-xs uppercase tracking-wide">
                        Specification Value
                      </Label>
                      <Input
                        id="spec-value"
                        value={newSpecValue}
                        onChange={(e) => setNewSpecValue(e.target.value)}
                        placeholder="e.g. Cotton, 2.5 lbs, 10x5x2 inches"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={handleAddSpecification}
                    variant="outline"
                    className="border-[#242423] w-full"
                    disabled={!newSpecName.trim() || !newSpecValue.trim()}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Specification
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="seo" className="mt-6">
              <Card className="bg-black/20 border-[#242423]">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide">SEO Settings</CardTitle>
                  <CardDescription>Optimize your product for search engines</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="seo-title" className="font-mono text-xs uppercase tracking-wide">
                      SEO Title
                    </Label>
                    <Input
                      id="seo-title"
                      value={product.seo.title}
                      onChange={(e) => setProduct({ ...product, seo: { ...product.seo, title: e.target.value } })}
                      placeholder="SEO optimized title"
                      className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                    <p className="text-xs text-muted-foreground">Recommended length: 50-60 characters</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="seo-description" className="font-mono text-xs uppercase tracking-wide">
                      Meta Description
                    </Label>
                    <Textarea
                      id="seo-description"
                      value={product.seo.description}
                      onChange={(e) => setProduct({ ...product, seo: { ...product.seo, description: e.target.value } })}
                      placeholder="Brief description for search results"
                      className="min-h-[100px] bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                    <p className="text-xs text-muted-foreground">Recommended length: 150-160 characters</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="seo-keywords" className="font-mono text-xs uppercase tracking-wide">
                      Keywords
                    </Label>
                    <Input
                      id="seo-keywords"
                      value={product.seo.keywords}
                      onChange={(e) => setProduct({ ...product, seo: { ...product.seo, keywords: e.target.value } })}
                      placeholder="Comma-separated keywords"
                      className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                    <p className="text-xs text-muted-foreground">Separate keywords with commas</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <Card className="bg-black/20 border-[#242423] sticky top-6">
            <CardHeader>
              <CardTitle className="font-tektur uppercase tracking-wide">Product Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="w-full aspect-square bg-[#1A1505] rounded-md overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg?height=300&width=300"}
                  alt="Product preview"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="space-y-1">
                <p className="font-medium truncate">{product.title || "Untitled Product"}</p>
                <p className="text-sm text-[#B99C20] font-mono">
                  {product.price ? `$${product.price.toFixed(2)}` : "$0.00"}
                </p>
                {product.category && (
                  <Badge variant="outline" className="bg-[#1A1505] text-[#B99C20] border-[#242423]">
                    {product.category}
                  </Badge>
                )}
              </div>

              <Separator className="bg-[#242423]" />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge
                    variant="outline"
                    className={
                      product.status === "in_stock"
                        ? "bg-green-500/10 text-green-500 border-green-500/30"
                        : product.status === "low_stock"
                          ? "bg-[#B99C20]/10 text-[#B99C20] border-[#B99C20]/30"
                          : product.status === "out_of_stock"
                            ? "bg-red-500/10 text-red-500 border-red-500/30"
                            : "bg-gray-500/10 text-gray-500 border-gray-500/30"
                    }
                  >
                    {product.status === "in_stock"
                      ? "In Stock"
                      : product.status === "low_stock"
                        ? "Low Stock"
                        : product.status === "out_of_stock"
                          ? "Out of Stock"
                          : product.status === "backorder"
                            ? "Backorder"
                            : "Unknown"}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Inventory</span>
                  <span className="text-sm font-mono">{product.inventory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">SKU</span>
                  <span className="text-sm font-mono">{product.sku}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Variants</span>
                  <span className="text-sm font-mono">{product.variants.length}</span>
                </div>
              </div>

              <Separator className="bg-[#242423]" />

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="published" className="font-mono text-xs uppercase tracking-wide">
                    Published
                  </Label>
                  <Switch
                    id="published"
                    checked={product.published}
                    onCheckedChange={(checked) => setProduct({ ...product, published: checked })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="featured" className="font-mono text-xs uppercase tracking-wide">
                    Featured Product
                  </Label>
                  <Switch
                    id="featured"
                    checked={product.featured}
                    onCheckedChange={(checked) => setProduct({ ...product, featured: checked })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

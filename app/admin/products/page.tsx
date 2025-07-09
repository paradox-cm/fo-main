"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Eye, Plus, Search, Trash2, ArrowUpDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { formatCurrency } from "@/lib/utils"

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
  },
  {
    id: "prod_2",
    title: "Performance Polo",
    price: 79.99,
    image: "/images/forest-item-1.png",
    description: "Moisture-wicking performance polo with stretch fabric for maximum comfort.",
    category: "Apparel",
    status: "in_stock",
    inventory: 120,
    sku: "PP-001",
  },
  {
    id: "prod_3",
    title: "Down Jacket",
    price: 249.99,
    image: "/images/forest-item-2.png",
    description: "Insulated down jacket for extreme cold weather conditions.",
    category: "Apparel",
    status: "low_stock",
    inventory: 8,
    sku: "DJ-001",
  },
  {
    id: "prod_4",
    title: "Technical Shell",
    price: 199.99,
    image: "/images/forest-item-3.png",
    description: "Waterproof and breathable technical shell for all-weather protection.",
    category: "Apparel",
    status: "in_stock",
    inventory: 32,
    sku: "TS-001",
  },
  {
    id: "prod_5",
    title: "Tactical Polo",
    price: 89.99,
    image: "/images/forest-item-4.png",
    description: "Durable tactical polo with hidden pockets and reinforced stitching.",
    category: "Apparel",
    status: "out_of_stock",
    inventory: 0,
    sku: "TP-001",
  },
  {
    id: "prod_6",
    title: "Hunting Vest",
    price: 159.99,
    image: "/placeholder.svg?height=500&width=500",
    description: "Versatile hunting vest with multiple pockets and adjustable fit.",
    category: "Gear",
    status: "in_stock",
    inventory: 27,
    sku: "HV-001",
  },
]

export default function ProductsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("title")
  const [sortOrder, setSortOrder] = useState("asc")

  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case "in_stock":
        return "bg-green-500/10 text-green-500 border-green-500/30"
      case "low_stock":
        return "bg-[#B99C20]/10 text-[#B99C20] border-[#B99C20]/30"
      case "out_of_stock":
        return "bg-red-500/10 text-red-500 border-red-500/30"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/30"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "in_stock":
        return "In Stock"
      case "low_stock":
        return "Low Stock"
      case "out_of_stock":
        return "Out of Stock"
      default:
        return status
    }
  }

  const toggleSortOrder = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("asc")
    }
  }

  const filteredProducts = mockProducts
    .filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || product.status === statusFilter
      const matchesCategory = categoryFilter === "all" || product.category === categoryFilter

      return matchesSearch && matchesStatus && matchesCategory
    })
    .sort((a, b) => {
      let comparison = 0

      if (sortBy === "title") {
        comparison = a.title.localeCompare(b.title)
      } else if (sortBy === "price") {
        comparison = a.price - b.price
      } else if (sortBy === "inventory") {
        comparison = a.inventory - b.inventory
      }

      return sortOrder === "asc" ? comparison : -comparison
    })

  const categories = ["Apparel", "Gear", "Accessories"]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-tektur uppercase tracking-wide">Products</h1>
          <p className="text-muted-foreground font-sans">Manage your product catalog</p>
        </div>
        <Button
          asChild
          className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
        >
          <Link href="/admin/products/edit/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-black/20 border-[#242423] focus:border-[#B99C20]"
          />
        </div>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px] bg-black/20 border-[#242423] font-mono text-xs uppercase tracking-wide">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="bg-black border-[#242423]">
            <SelectItem value="all" className="font-mono text-xs uppercase tracking-wide">
              All Statuses
            </SelectItem>
            <SelectItem value="in_stock" className="font-mono text-xs uppercase tracking-wide">
              In Stock
            </SelectItem>
            <SelectItem value="low_stock" className="font-mono text-xs uppercase tracking-wide">
              Low Stock
            </SelectItem>
            <SelectItem value="out_of_stock" className="font-mono text-xs uppercase tracking-wide">
              Out of Stock
            </SelectItem>
          </SelectContent>
        </Select>

        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px] bg-black/20 border-[#242423] font-mono text-xs uppercase tracking-wide">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent className="bg-black border-[#242423]">
            <SelectItem value="all" className="font-mono text-xs uppercase tracking-wide">
              All Categories
            </SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category} className="font-mono text-xs uppercase tracking-wide">
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#242423]">
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Product</th>
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">
                <button className="flex items-center" onClick={() => toggleSortOrder("price")}>
                  Price
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </button>
              </th>
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Category</th>
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">
                <button className="flex items-center" onClick={() => toggleSortOrder("inventory")}>
                  Inventory
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </button>
              </th>
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Status</th>
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">SKU</th>
              <th className="text-right py-3 px-4 font-mono text-xs uppercase tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="border-b border-[#242423] hover:bg-[#1A1505]/10 transition-colors">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-[#1A1505] rounded-md overflow-hidden mr-3 flex-shrink-0">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{product.title}</div>
                      <div className="text-xs text-muted-foreground line-clamp-1 font-sans">{product.description}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm font-mono text-[#B99C20]">{formatCurrency(product.price)}</td>
                <td className="py-3 px-4">
                  <Badge variant="outline" className="bg-[#1A1505] text-[#B99C20] border-[#242423]">
                    {product.category}
                  </Badge>
                </td>
                <td className="py-3 px-4 text-sm font-mono">{product.inventory}</td>
                <td className="py-3 px-4">
                  <Badge variant="outline" className={getStatusBadgeStyle(product.status)}>
                    {getStatusLabel(product.status)}
                  </Badge>
                </td>
                <td className="py-3 px-4 text-sm font-mono">{product.sku}</td>
                <td className="py-3 px-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" asChild className="h-8 w-8 p-0">
                      <Link href={`/shop/${product.id}`} target="_blank">
                        <span className="sr-only">View product</span>
                        <Eye className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="h-8 w-8 p-0 bg-[#B99C20]/10 text-[#B99C20] hover:text-black hover:bg-[#B99C20] border-[#B99C20]/30"
                    >
                      <Link href={`/admin/products/edit/${product.id}`}>
                        <span className="sr-only">Edit product</span>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-600 border-red-500/30 hover:bg-red-500/10"
                    >
                      <span className="sr-only">Delete product</span>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 border border-dashed border-[#242423] rounded-md">
          <p className="text-muted-foreground mb-4 font-mono">No products found</p>
          <Button
            asChild
            className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
          >
            <Link href="/admin/products/edit/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}

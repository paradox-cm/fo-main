"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileEdit, Eye, Plus, Search, Trash2 } from "lucide-react"
import Link from "next/link"

// Mock blog posts data
const mockBlogPosts = [
  {
    id: 1,
    title: "Introducing AI-Driven Camouflage Technology",
    slug: "introducing-ai-driven-camouflage-technology",
    excerpt: "Learn about our revolutionary AI-powered camouflage patterns that adapt to any environment.",
    author: "John Smith",
    date: "2023-03-15T14:30:00Z",
    status: "published",
    category: "Technology",
    tags: ["AI", "Camouflage", "Innovation"],
    featuredImage: "/placeholder.svg",
  },
  {
    id: 2,
    title: "The Future of Tactical Gear",
    slug: "future-of-tactical-gear",
    excerpt: "Explore how advanced materials and smart technology are transforming tactical equipment.",
    author: "Sarah Johnson",
    date: "2023-03-10T11:20:00Z",
    status: "published",
    category: "Products",
    tags: ["Tactical", "Innovation", "Equipment"],
    featuredImage: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Sustainable Manufacturing Practices",
    slug: "sustainable-manufacturing-practices",
    excerpt: "How Forest Outfitters is committed to environmentally responsible production methods.",
    author: "Michael Brown",
    date: "2023-03-05T09:45:00Z",
    status: "draft",
    category: "Sustainability",
    tags: ["Environment", "Manufacturing", "Responsibility"],
    featuredImage: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Veteran Spotlight: Stories from the Field",
    slug: "veteran-spotlight-stories",
    excerpt: "Interviews with veterans who have tested our gear in the most demanding conditions.",
    author: "Emily Davis",
    date: "2023-02-28T16:15:00Z",
    status: "published",
    category: "Community",
    tags: ["Veterans", "Stories", "Field Testing"],
    featuredImage: "/placeholder.svg",
  },
]

export default function BlogManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  const filteredPosts = mockBlogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || post.status === statusFilter
    const matchesCategory = categoryFilter === "all" || post.category === categoryFilter

    return matchesSearch && matchesStatus && matchesCategory
  })

  const categories = ["Technology", "Products", "Sustainability", "Community"]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-tektur uppercase tracking-wide">Blog Management</h1>
          <p className="text-muted-foreground font-sans">Create and manage blog articles</p>
        </div>
        <Button
          asChild
          className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
        >
          <Link href="/admin/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            New Article
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search articles..."
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
            <SelectItem value="published" className="font-mono text-xs uppercase tracking-wide">
              Published
            </SelectItem>
            <SelectItem value="draft" className="font-mono text-xs uppercase tracking-wide">
              Draft
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden border-[#242423] bg-black/20 hover:border-[#B99C20]/30 transition-colors"
          >
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${post.featuredImage})` }} />
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <Badge
                  variant="outline"
                  className={
                    post.status === "published"
                      ? "bg-green-500/10 text-green-500 border-green-500/30"
                      : "bg-[#B99C20]/10 text-[#B99C20] border-[#B99C20]/30"
                  }
                >
                  {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                </Badge>
                <Badge variant="outline" className="bg-[#1A1505] text-[#B99C20] border-[#242423]">
                  {post.category}
                </Badge>
              </div>
              <CardTitle className="line-clamp-2 mt-2 font-tektur uppercase tracking-wide text-lg">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3 mb-2 font-sans">{post.excerpt}</p>
              <div className="flex justify-between items-center text-xs text-muted-foreground font-mono">
                <span>{post.author}</span>
                <span>{formatDate(post.date)}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-[#242423] pt-3 pb-3">
              <Button variant="outline" size="sm" asChild className="font-mono text-xs uppercase tracking-wide">
                <Link href={`/blog/${post.slug}`} target="_blank">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 hover:text-red-600 border-red-500/30 hover:bg-red-500/10"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
                >
                  <Link href={`/admin/blog/${post.id}`}>
                    <FileEdit className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 border border-dashed border-[#242423] rounded-md">
          <p className="text-muted-foreground mb-4 font-mono">No articles found</p>
          <Button
            asChild
            className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
          >
            <Link href="/admin/blog/new">
              <Plus className="mr-2 h-4 w-4" />
              Create New Article
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}

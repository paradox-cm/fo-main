"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Save, Image, Eye } from "lucide-react"
import Link from "next/link"
import { BlogEditor as Editor } from "@/components/admin/blog-editor"
import { BlogSettings } from "@/components/admin/blog-settings"

// Mock blog posts data
const mockBlogPosts = [
  {
    id: 1,
    title: "Introducing AI-Driven Camouflage Technology",
    slug: "introducing-ai-driven-camouflage-technology",
    excerpt: "Learn about our revolutionary AI-powered camouflage patterns that adapt to any environment.",
    content: `
# Introducing AI-Driven Camouflage Technology

Forest Outfitters is proud to announce our revolutionary AI-driven camouflage technology, designed to provide unparalleled concealment in any environment.

## How It Works

Our proprietary algorithms analyze the surrounding environment in real-time, adjusting the camouflage pattern to match the terrain, lighting conditions, and even seasonal changes. This adaptive approach ensures optimal concealment regardless of location or time of year.

## Key Benefits

- **Adaptive Concealment**: Automatically adjusts to match your surroundings
- **Enhanced Stealth**: Reduces detection by both human observers and technology
- **Versatile Application**: Works across various environments without needing multiple gear sets
- **Mission-Specific Optimization**: Can be fine-tuned for specific operational requirements

## Applications

This technology has applications across military, hunting, and outdoor recreation sectors, providing users with a significant advantage in situations where remaining undetected is crucial.

## Availability

The first products featuring our AI-driven camouflage technology will be available in our Hyde Camo line, launching next quarter.
    `,
    author: "John Smith",
    date: "2023-03-15T14:30:00Z",
    status: "published",
    category: "Technology",
    tags: ["AI", "Camouflage", "Innovation"],
    featuredImage: "/placeholder.svg",
    seo: {
      title: "Introducing AI-Driven Camouflage Technology | Forest Outfitters",
      description:
        "Learn about our revolutionary AI-powered camouflage patterns that adapt to any environment for optimal concealment in any situation.",
      keywords: "AI camouflage, adaptive concealment, military technology, hunting gear",
    },
  },
  // Other posts would be here
]

export default function BlogEditor({ params }: { params: { blogId: string } }) {
  const { blogId } = params
  const isNewPost = blogId === "new"

  const [post, setPost] = useState(
    isNewPost
      ? {
          id: "new",
          title: "",
          slug: "",
          excerpt: "",
          content: "",
          author: "",
          date: new Date().toISOString(),
          status: "draft",
          category: "",
          tags: [],
          featuredImage: "/placeholder.svg",
          seo: {
            title: "",
            description: "",
            keywords: "",
          },
        }
      : null,
  )

  const [isSaving, setIsSaving] = useState(false)

  // Load mock data for existing post
  useEffect(() => {
    if (!isNewPost) {
      const foundPost = mockBlogPosts.find((p) => p.id.toString() === blogId)
      if (foundPost) {
        setPost(foundPost)
      }
    }
  }, [blogId, isNewPost])

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  if (!post) {
    return <div>Loading post...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/admin/blog">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-tektur uppercase tracking-tight">
              {isNewPost ? "Create New Article" : "Edit Article"}
            </h1>
            <p className="text-muted-foreground">{isNewPost ? "Create a new blog post" : `Editing: ${post.title}`}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={isNewPost ? "/blog" : `/blog/${post.slug}`} target="_blank">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Link>
          </Button>
          <Button onClick={handleSave} disabled={isSaving}>
            {isSaving ? (
              <>Saving...</>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                {post.status === "draft" ? "Save Draft" : "Update Post"}
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input
                  value={post.title}
                  onChange={(e) => setPost({ ...post, title: e.target.value })}
                  placeholder="Article title"
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Excerpt</label>
                <Textarea
                  value={post.excerpt}
                  onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
                  placeholder="Brief summary of the article"
                  rows={3}
                />
              </div>
            </div>
          </Card>

          <Tabs defaultValue="editor" className="mt-6">
            <TabsList>
              <TabsTrigger value="editor">Content</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="editor" className="mt-4">
              <Card className="p-6">
                <Editor content={post.content} onChange={(content) => setPost({ ...post, content })} />
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-4">
              <Card className="p-6">
                <BlogSettings post={post} onChange={setPost} />
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <Select value={post.status} onValueChange={(value) => setPost({ ...post, status: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Category</label>
                <Select value={post.category} onValueChange={(value) => setPost({ ...post, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Products">Products</SelectItem>
                    <SelectItem value="Sustainability">Sustainability</SelectItem>
                    <SelectItem value="Community">Community</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Author</label>
                <Input
                  value={post.author}
                  onChange={(e) => setPost({ ...post, author: e.target.value })}
                  placeholder="Article author"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Featured Image</label>
                <div
                  className="w-full h-40 bg-cover bg-center rounded-md border border-[#242423] mb-2"
                  style={{ backgroundImage: `url(${post.featuredImage})` }}
                />
                <Button variant="outline" className="w-full">
                  <Image className="mr-2 h-4 w-4" />
                  Change Image
                </Button>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Tags</label>
                <Input
                  value={post.tags.join(", ")}
                  onChange={(e) => setPost({ ...post, tags: e.target.value.split(",").map((tag) => tag.trim()) })}
                  placeholder="Enter tags separated by commas"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Separate tags with commas (e.g., "AI, Technology, Innovation")
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">URL Slug</label>
                <div className="flex items-center">
                  <span className="text-muted-foreground mr-1">/blog/</span>
                  <Input
                    value={post.slug}
                    onChange={(e) => setPost({ ...post, slug: e.target.value })}
                    placeholder="article-url-slug"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

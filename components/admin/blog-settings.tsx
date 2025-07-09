"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function BlogSettings({ post, onChange }: { post: any; onChange: (post: any) => void }) {
  const handleSeoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    onChange({
      ...post,
      seo: {
        ...post.seo,
        [name]: value,
      },
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-tektur uppercase tracking-wide mb-4">SEO Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">SEO Title</label>
            <Input
              name="title"
              value={post.seo?.title || ""}
              onChange={handleSeoChange}
              placeholder="SEO title (appears in search results)"
            />
            <p className="text-xs text-muted-foreground mt-1">Recommended length: 50-60 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Meta Description</label>
            <Textarea
              name="description"
              value={post.seo?.description || ""}
              onChange={handleSeoChange}
              placeholder="Brief description for search engines"
              rows={3}
            />
            <p className="text-xs text-muted-foreground mt-1">Recommended length: 150-160 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Keywords</label>
            <Input
              name="keywords"
              value={post.seo?.keywords || ""}
              onChange={handleSeoChange}
              placeholder="Keywords separated by commas"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-tektur uppercase tracking-wide mb-4">Social Sharing</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Social Title</label>
            <Input
              name="socialTitle"
              value={post.seo?.socialTitle || post.title || ""}
              onChange={handleSeoChange}
              placeholder="Title for social media sharing"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Social Description</label>
            <Textarea
              name="socialDescription"
              value={post.seo?.socialDescription || post.excerpt || ""}
              onChange={handleSeoChange}
              placeholder="Description for social media sharing"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

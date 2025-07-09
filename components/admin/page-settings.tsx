"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock page settings data
const mockPageSettings = {
  about: {
    slug: "about",
    title: "About Us | Forest Outfitters",
    description: "Learn about Forest Outfitters, our mission, and our commitment to quality outdoor gear.",
    isPublished: true,
    showInNavigation: true,
    showInFooter: true,
    metaImage: "/placeholder.svg",
    ogTitle: "About Forest Outfitters",
    ogDescription: "Discover the story behind Forest Outfitters and our mission to revolutionize outdoor gear.",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Forest Outfitters",
  "url": "https://forestoutfitters.com",
  "logo": "https://forestoutfitters.com/logo.png",
  "description": "Premium outdoor and tactical gear."
}`,
  },
  investors: {
    slug: "investors",
    title: "Investors | Forest Outfitters",
    description: "Investment opportunities with Forest Outfitters.",
    isPublished: true,
    showInNavigation: true,
    showInFooter: true,
    metaImage: "/placeholder.svg",
    ogTitle: "Invest in Forest Outfitters",
    ogDescription: "Learn about investment opportunities with Forest Outfitters.",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Investors | Forest Outfitters",
  "description": "Investment opportunities with Forest Outfitters."
}`,
  },
  shop: {
    slug: "shop",
    title: "Shop | Forest Outfitters",
    description: "Shop premium outdoor and tactical gear from Forest Outfitters.",
    isPublished: true,
    showInNavigation: true,
    showInFooter: true,
    metaImage: "/placeholder.svg",
    ogTitle: "Shop Forest Outfitters Gear",
    ogDescription: "Browse and purchase premium outdoor and tactical gear from Forest Outfitters.",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Shop | Forest Outfitters",
  "description": "Shop premium outdoor and tactical gear from Forest Outfitters."
}`,
  },
  careers: {
    slug: "careers",
    title: "Careers | Forest Outfitters",
    description: "Join the Forest Outfitters team and help revolutionize outdoor gear.",
    isPublished: true,
    showInNavigation: true,
    showInFooter: true,
    metaImage: "/placeholder.svg",
    ogTitle: "Careers at Forest Outfitters",
    ogDescription: "Explore job opportunities with Forest Outfitters.",
    structuredData: `{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Careers | Forest Outfitters",
  "description": "Join the Forest Outfitters team and help revolutionize outdoor gear."
}`,
  },
}

export function PageSettings({ pageId }: { pageId: string }) {
  const [settings, setSettings] = useState(null)

  // Load mock data
  useEffect(() => {
    if (mockPageSettings[pageId]) {
      setSettings(mockPageSettings[pageId])
    } else {
      // Set default empty settings if pageId doesn't exist
      setSettings({
        slug: "",
        title: "",
        description: "",
        isPublished: true,
        showInNavigation: true,
        showInFooter: true,
        metaImage: "",
        ogTitle: "",
        ogDescription: "",
        structuredData: "{}",
      })
    }
  }, [pageId])

  if (!settings) {
    return <div className="py-4 text-center">Loading settings...</div>
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setSettings({ ...settings, [name]: value })
  }

  const handleSwitchChange = (name) => (checked) => {
    setSettings({ ...settings, [name]: checked })
  }

  return (
    <Tabs defaultValue="basic" className="space-y-6">
      <div className="overflow-x-auto">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="basic" className="font-mono text-xs uppercase tracking-wide">
            Basic Settings
          </TabsTrigger>
          <TabsTrigger value="seo" className="font-mono text-xs uppercase tracking-wide">
            SEO & Meta
          </TabsTrigger>
          <TabsTrigger value="advanced" className="font-mono text-xs uppercase tracking-wide">
            Advanced
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="basic" className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="slug">URL Slug</Label>
              <div className="flex items-center mt-1">
                <span className="text-muted-foreground mr-1">/</span>
                <Input id="slug" name="slug" value={settings.slug} onChange={handleChange} />
              </div>
            </div>

            <div>
              <Label htmlFor="title">Page Title</Label>
              <Input id="title" name="title" value={settings.title} onChange={handleChange} className="mt-1" />
            </div>

            <div>
              <Label htmlFor="description">Page Description</Label>
              <Textarea
                id="description"
                name="description"
                value={settings.description}
                onChange={handleChange}
                rows={3}
                className="mt-1"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="isPublished">Published</Label>
                <p className="text-sm text-muted-foreground">Make this page visible to visitors</p>
              </div>
              <Switch
                id="isPublished"
                checked={settings.isPublished}
                onCheckedChange={handleSwitchChange("isPublished")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="showInNavigation">Show in Navigation</Label>
                <p className="text-sm text-muted-foreground">Include this page in the main navigation menu</p>
              </div>
              <Switch
                id="showInNavigation"
                checked={settings.showInNavigation}
                onCheckedChange={handleSwitchChange("showInNavigation")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="showInFooter">Show in Footer</Label>
                <p className="text-sm text-muted-foreground">Include this page in the footer links</p>
              </div>
              <Switch
                id="showInFooter"
                checked={settings.showInFooter}
                onCheckedChange={handleSwitchChange("showInFooter")}
              />
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="seo" className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="metaImage">Meta Image URL</Label>
            <Input
              id="metaImage"
              name="metaImage"
              value={settings.metaImage}
              onChange={handleChange}
              className="mt-1"
            />
            <p className="text-xs text-muted-foreground mt-1">This image will be used for social media sharing</p>
          </div>

          <div>
            <Label htmlFor="ogTitle">Open Graph Title</Label>
            <Input id="ogTitle" name="ogTitle" value={settings.ogTitle} onChange={handleChange} className="mt-1" />
          </div>

          <div>
            <Label htmlFor="ogDescription">Open Graph Description</Label>
            <Textarea
              id="ogDescription"
              name="ogDescription"
              value={settings.ogDescription}
              onChange={handleChange}
              rows={3}
              className="mt-1"
            />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="advanced" className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="structuredData">Structured Data (JSON-LD)</Label>
            <Textarea
              id="structuredData"
              name="structuredData"
              value={settings.structuredData}
              onChange={handleChange}
              rows={10}
              className="mt-1 font-mono text-xs"
            />
            <p className="text-xs text-muted-foreground mt-1">
              JSON-LD structured data for SEO and rich search results
            </p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

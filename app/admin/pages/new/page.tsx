"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save, Plus, FileText, Layout, Image, Columns } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CreateNewPage() {
  const router = useRouter()
  const [isCreating, setIsCreating] = useState(false)
  const [activeTab, setActiveTab] = useState("basic")
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    template: "standard",
    description: "",
    isPublished: true,
    sections: [
      {
        id: "section-1",
        type: "hero",
        title: "",
        subtitle: "",
      },
    ],
    seo: {
      metaTitle: "",
      metaDescription: "",
      keywords: "",
      ogImage: "",
    },
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSwitchChange = (checked) => {
    setFormData({
      ...formData,
      isPublished: checked,
    })
  }

  const handleSlugGeneration = () => {
    if (formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-")

      setFormData({
        ...formData,
        slug,
      })
    }
  }

  const handleAddSection = () => {
    const newSection = {
      id: `section-${Date.now()}`,
      type: "text",
      title: "",
      content: "",
    }

    setFormData({
      ...formData,
      sections: [...formData.sections, newSection],
    })
  }

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...formData.sections]
    updatedSections[index] = {
      ...updatedSections[index],
      [field]: value,
    }

    setFormData({
      ...formData,
      sections: updatedSections,
    })
  }

  const handleSectionTypeChange = (index, value) => {
    const updatedSections = [...formData.sections]
    const currentSection = { ...updatedSections[index] }

    // Create a new section object with only the relevant fields for the selected type
    const newSection = {
      id: currentSection.id,
      type: value,
      title: currentSection.title || "",
    }

    // Add type-specific fields
    if (value === "hero") {
      newSection.subtitle = currentSection.subtitle || ""
    } else if (value === "text") {
      newSection.content = currentSection.content || ""
    } else if (value === "image-text") {
      newSection.content = currentSection.content || ""
      newSection.image = currentSection.image || ""
    } else if (value === "image") {
      newSection.image = currentSection.image || ""
    }

    updatedSections[index] = newSection

    setFormData({
      ...formData,
      sections: updatedSections,
    })
  }

  const handleRemoveSection = (index) => {
    const updatedSections = [...formData.sections]
    updatedSections.splice(index, 1)

    setFormData({
      ...formData,
      sections: updatedSections,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsCreating(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to pages list after creation
    router.push("/admin/pages")
  }

  const getSectionIcon = (type) => {
    switch (type) {
      case "hero":
        return <Layout className="h-5 w-5" />
      case "text":
        return <FileText className="h-5 w-5" />
      case "image-text":
        return <Columns className="h-5 w-5" />
      case "image":
        return <Image className="h-5 w-5" />
      default:
        return <Layout className="h-5 w-5" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-2 text-white/70 hover:text-white">
            <Link href="/admin/pages">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-tektur uppercase tracking-wide">Create New Page</h1>
            <p className="text-muted-foreground font-sans">Build a custom page for your website</p>
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          disabled={isCreating || !formData.title || !formData.slug}
          className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
        >
          {isCreating ? (
            <>Creating...</>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Create Page
            </>
          )}
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <div className="overflow-x-auto">
            <TabsList className="w-full sm:w-auto border-b border-[#242423]">
              <TabsTrigger value="basic" className="font-mono text-xs uppercase tracking-wide">
                Basic Info
              </TabsTrigger>
              <TabsTrigger value="content" className="font-mono text-xs uppercase tracking-wide">
                Content
              </TabsTrigger>
              <TabsTrigger value="seo" className="font-mono text-xs uppercase tracking-wide">
                SEO
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="basic">
            <Card className="border-[#242423] bg-black/20">
              <CardContent className="p-4 md:p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-mono uppercase tracking-wide text-white/70">
                    Page Title <span className="text-[#B99C20]">*</span>
                  </label>
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter page title"
                    required
                    className="border-[#242423] bg-black/20"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <label className="text-sm font-mono uppercase tracking-wide text-white/70">
                      URL Slug <span className="text-[#B99C20]">*</span>
                    </label>
                    <Button
                      type="button"
                      variant="link"
                      onClick={handleSlugGeneration}
                      className="text-[#B99C20] hover:text-[#ECD055] p-0 h-auto font-mono text-xs mt-1 sm:mt-0"
                    >
                      Generate from title
                    </Button>
                  </div>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-[#1A1505] border border-r-0 border-[#242423] rounded-l-md text-white/50 font-mono text-sm">
                      /
                    </span>
                    <Input
                      name="slug"
                      value={formData.slug}
                      onChange={handleChange}
                      placeholder="page-url-slug"
                      required
                      className="rounded-l-none border-[#242423] bg-black/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono uppercase tracking-wide text-white/70">Page Template</label>
                  <Select
                    value={formData.template}
                    onValueChange={(value) => setFormData({ ...formData, template: value })}
                  >
                    <SelectTrigger className="border-[#242423] bg-black/20">
                      <SelectValue placeholder="Select a template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Page</SelectItem>
                      <SelectItem value="landing">Landing Page</SelectItem>
                      <SelectItem value="sidebar">Page with Sidebar</SelectItem>
                      <SelectItem value="fullwidth">Full Width</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono uppercase tracking-wide text-white/70">Page Description</label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Brief description of this page (for admin use)"
                    className="border-[#242423] bg-black/20"
                    rows={3}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-0.5">
                    <label className="text-sm font-mono uppercase tracking-wide text-white/70">Publish Page</label>
                    <p className="text-xs text-white/50">Toggle off to save as draft</p>
                  </div>
                  <Switch checked={formData.isPublished} onCheckedChange={handleSwitchChange} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card className="border-[#242423] bg-black/20">
              <CardContent className="p-4 md:p-6 space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h3 className="text-lg font-tektur uppercase tracking-wide">Page Sections</h3>
                  <Button
                    type="button"
                    onClick={handleAddSection}
                    className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Section
                  </Button>
                </div>

                <div className="space-y-4">
                  {formData.sections.map((section, index) => (
                    <div
                      key={section.id}
                      className="p-4 border border-[#242423] rounded-md bg-black/30 hover:border-[#B99C20]/50 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-2 bg-[#1A1505] text-[#B99C20] px-2 py-1 rounded text-xs">
                            {getSectionIcon(section.type)}
                            <span className="capitalize">{section.type}</span>
                          </div>
                          <p className="text-sm text-white/70 font-mono">SECTION {index + 1}</p>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveSection(index)}
                          className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                          disabled={formData.sections.length === 1}
                        >
                          Remove
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-mono uppercase tracking-wide text-white/70">
                            Section Type
                          </label>
                          <Select value={section.type} onValueChange={(value) => handleSectionTypeChange(index, value)}>
                            <SelectTrigger className="border-[#242423] bg-black/20">
                              <SelectValue placeholder="Select section type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hero">Hero Banner</SelectItem>
                              <SelectItem value="text">Text Section</SelectItem>
                              <SelectItem value="image-text">Image with Text</SelectItem>
                              <SelectItem value="image">Image Gallery</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-mono uppercase tracking-wide text-white/70">
                            Section Title
                          </label>
                          <Input
                            value={section.title || ""}
                            onChange={(e) => handleSectionChange(index, "title", e.target.value)}
                            placeholder="Section title"
                            className="border-[#242423] bg-black/20"
                          />
                        </div>

                        {section.type === "hero" && (
                          <div className="space-y-2">
                            <label className="text-sm font-mono uppercase tracking-wide text-white/70">Subtitle</label>
                            <Textarea
                              value={section.subtitle || ""}
                              onChange={(e) => handleSectionChange(index, "subtitle", e.target.value)}
                              placeholder="Hero subtitle text"
                              className="border-[#242423] bg-black/20"
                              rows={2}
                            />
                          </div>
                        )}

                        {(section.type === "text" || section.type === "image-text") && (
                          <div className="space-y-2">
                            <label className="text-sm font-mono uppercase tracking-wide text-white/70">Content</label>
                            <Textarea
                              value={section.content || ""}
                              onChange={(e) => handleSectionChange(index, "content", e.target.value)}
                              placeholder="Section content"
                              className="border-[#242423] bg-black/20"
                              rows={4}
                            />
                          </div>
                        )}

                        {(section.type === "image" || section.type === "image-text") && (
                          <div className="space-y-2">
                            <label className="text-sm font-mono uppercase tracking-wide text-white/70">Image URL</label>
                            <Input
                              value={section.image || ""}
                              onChange={(e) => handleSectionChange(index, "image", e.target.value)}
                              placeholder="/images/example.jpg"
                              className="border-[#242423] bg-black/20"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seo">
            <Card className="border-[#242423] bg-black/20">
              <CardContent className="p-4 md:p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-mono uppercase tracking-wide text-white/70">Meta Title</label>
                  <Input
                    name="seo.metaTitle"
                    value={formData.seo.metaTitle}
                    onChange={handleChange}
                    placeholder="SEO title (if different from page title)"
                    className="border-[#242423] bg-black/20"
                  />
                  <p className="text-xs text-white/50">Leave blank to use page title</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono uppercase tracking-wide text-white/70">Meta Description</label>
                  <Textarea
                    name="seo.metaDescription"
                    value={formData.seo.metaDescription}
                    onChange={handleChange}
                    placeholder="Brief description for search engines"
                    className="border-[#242423] bg-black/20"
                    rows={3}
                  />
                  <p className="text-xs text-white/50">Recommended: 150-160 characters</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono uppercase tracking-wide text-white/70">Keywords</label>
                  <Input
                    name="seo.keywords"
                    value={formData.seo.keywords}
                    onChange={handleChange}
                    placeholder="keyword1, keyword2, keyword3"
                    className="border-[#242423] bg-black/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-mono uppercase tracking-wide text-white/70">Social Image URL</label>
                  <Input
                    name="seo.ogImage"
                    value={formData.seo.ogImage}
                    onChange={handleChange}
                    placeholder="/images/social-share.jpg"
                    className="border-[#242423] bg-black/20"
                  />
                  <p className="text-xs text-white/50">
                    Image displayed when shared on social media (1200×630px recommended)
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  )
}

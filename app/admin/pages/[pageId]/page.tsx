"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageEditor } from "@/components/admin/page-editor"
import { PageSettings } from "@/components/admin/page-settings"
import { PagePreview } from "@/components/admin/page-preview"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function EditPage({ params }: { params: { pageId: string } }) {
  const { pageId } = params
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("editor")

  // Get page title based on ID
  const getPageTitle = (id: string) => {
    switch (id) {
      case "about":
        return "About Us"
      case "investors":
        return "Investors"
      case "shop":
        return "Shop"
      case "careers":
        return "Careers"
      default:
        return "Page"
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
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
            <h1 className="text-2xl md:text-3xl font-tektur uppercase tracking-wide">Edit {getPageTitle(pageId)}</h1>
            <p className="text-muted-foreground font-sans">Customize page content and settings</p>
          </div>
        </div>
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide mt-4 sm:mt-0"
        >
          {isSaving ? (
            <>Saving...</>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="overflow-x-auto">
          <TabsList className="w-full sm:w-auto border-b border-[#242423]">
            <TabsTrigger value="editor" className="font-mono text-xs uppercase tracking-wide">
              Editor
            </TabsTrigger>
            <TabsTrigger value="settings" className="font-mono text-xs uppercase tracking-wide">
              Settings
            </TabsTrigger>
            <TabsTrigger value="preview" className="font-mono text-xs uppercase tracking-wide">
              Preview
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="editor">
          <Card className="p-4 md:p-6 border-[#242423] bg-black/20">
            <PageEditor pageId={pageId} />
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="p-4 md:p-6 border-[#242423] bg-black/20">
            <PageSettings pageId={pageId} />
          </Card>
        </TabsContent>

        <TabsContent value="preview">
          <Card className="p-4 md:p-6 border-[#242423] bg-black/20">
            <PagePreview pageId={pageId} />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

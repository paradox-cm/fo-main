"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Save, Upload } from "lucide-react"

// Mock site settings
const mockSiteSettings = {
  general: {
    siteName: "Forest Outfitters",
    tagline: "Gear Forged by Nature. Engineered for Warriors.",
    siteUrl: "https://forestoutfitters.com",
    adminEmail: "admin@forestoutfitters.com",
    logo: "/images/forest-icon-new.svg",
    favicon: "/favicon.ico",
  },
  branding: {
    primaryColor: "#B99C20",
    secondaryColor: "#1A1505",
    textColor: "#FFFFFF",
    backgroundColor: "#0A0A0B",
    accentColor: "#ECD055",
    fontHeading: "Tektur",
    fontBody: "Inter",
    fontMono: "Overpass Mono",
  },
  seo: {
    metaTitle: "Forest Outfitters | Gear Forged by Nature. Engineered for Warriors.",
    metaDescription: "Built for those who conquer the wild, embrace the hunt, and demand the best.",
    metaKeywords: "outdoor gear, tactical equipment, camouflage, hunting, military",
    googleAnalyticsId: "UA-XXXXXXXXX-X",
    enableSiteMap: true,
    enableRobotsTxt: true,
    enableStructuredData: true,
  },
  social: {
    facebook: "https://facebook.com/forestoutfitters",
    twitter: "https://twitter.com/forestoutfitters",
    instagram: "https://instagram.com/forestoutfitters",
    youtube: "https://youtube.com/forestoutfitters",
    linkedin: "https://linkedin.com/company/forestoutfitters",
  },
  advanced: {
    customCss: "",
    customJs: "",
    headerScripts: "",
    footerScripts: "",
  },
}

export default function SiteSettings() {
  const [settings, setSettings] = useState(mockSiteSettings)
  const [isSaving, setIsSaving] = useState(false)

  const handleChange = (section, field, value) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section],
        [field]: value,
      },
    })
  }

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-tektur uppercase tracking-wide">Site Settings</h1>
          <p className="text-muted-foreground font-sans">Configure global settings for your website</p>
        </div>
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
        >
          {isSaving ? (
            <>Saving...</>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="overflow-x-auto flex w-full py-1 scrollbar-hide">
          <TabsTrigger value="general" className="font-mono text-xs uppercase tracking-wide whitespace-nowrap">
            General
          </TabsTrigger>
          <TabsTrigger value="seo" className="font-mono text-xs uppercase tracking-wide whitespace-nowrap">
            SEO
          </TabsTrigger>
          <TabsTrigger value="social" className="font-mono text-xs uppercase tracking-wide whitespace-nowrap">
            Social Media
          </TabsTrigger>
          <TabsTrigger value="advanced" className="font-mono text-xs uppercase tracking-wide whitespace-nowrap">
            Advanced
          </TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card className="border-[#242423] bg-black/20">
            <CardHeader>
              <CardTitle className="font-tektur uppercase tracking-wide">General Settings</CardTitle>
              <CardDescription className="font-mono text-xs">Basic information about your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="siteName" className="font-mono text-xs uppercase tracking-wide">
                    Site Name
                  </Label>
                  <Input
                    id="siteName"
                    value={settings.general.siteName}
                    onChange={(e) => handleChange("general", "siteName", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>

                <div>
                  <Label htmlFor="tagline" className="font-mono text-xs uppercase tracking-wide">
                    Tagline
                  </Label>
                  <Input
                    id="tagline"
                    value={settings.general.tagline}
                    onChange={(e) => handleChange("general", "tagline", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="siteUrl" className="font-mono text-xs uppercase tracking-wide">
                    Site URL
                  </Label>
                  <Input
                    id="siteUrl"
                    value={settings.general.siteUrl}
                    onChange={(e) => handleChange("general", "siteUrl", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>

                <div>
                  <Label htmlFor="adminEmail" className="font-mono text-xs uppercase tracking-wide">
                    Admin Email
                  </Label>
                  <Input
                    id="adminEmail"
                    type="email"
                    value={settings.general.adminEmail}
                    onChange={(e) => handleChange("general", "adminEmail", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="logo" className="font-mono text-xs uppercase tracking-wide">
                    Logo
                  </Label>
                  <div className="flex items-center mt-1">
                    <div className="w-12 h-12 bg-black/40 rounded-md flex items-center justify-center overflow-hidden mr-4 border border-[#242423]">
                      <img
                        src={settings.general.logo || "/placeholder.svg"}
                        alt="Logo"
                        className="max-w-full max-h-full"
                      />
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#B99C20] text-[#B99C20] hover:bg-[#1A1505] hover:text-[#ECD055] font-mono text-xs uppercase tracking-wide"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Logo
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="favicon" className="font-mono text-xs uppercase tracking-wide">
                    Favicon
                  </Label>
                  <div className="flex items-center mt-1">
                    <div className="w-12 h-12 bg-black/40 rounded-md flex items-center justify-center overflow-hidden mr-4 border border-[#242423]">
                      <img
                        src={settings.general.favicon || "/placeholder.svg"}
                        alt="Favicon"
                        className="max-w-full max-h-full"
                      />
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#B99C20] text-[#B99C20] hover:bg-[#1A1505] hover:text-[#ECD055] font-mono text-xs uppercase tracking-wide"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Favicon
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-6">
          <Card className="border-[#242423] bg-black/20">
            <CardHeader>
              <CardTitle className="font-tektur uppercase tracking-wide">SEO Settings</CardTitle>
              <CardDescription className="font-mono text-xs">Optimize your website for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="metaTitle" className="font-mono text-xs uppercase tracking-wide">
                  Default Meta Title
                </Label>
                <Input
                  id="metaTitle"
                  value={settings.seo.metaTitle}
                  onChange={(e) => handleChange("seo", "metaTitle", e.target.value)}
                  className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
                <p className="text-xs text-muted-foreground mt-1 font-mono">Recommended length: 50-60 characters</p>
              </div>

              <div>
                <Label htmlFor="metaDescription" className="font-mono text-xs uppercase tracking-wide">
                  Default Meta Description
                </Label>
                <Textarea
                  id="metaDescription"
                  value={settings.seo.metaDescription}
                  onChange={(e) => handleChange("seo", "metaDescription", e.target.value)}
                  rows={3}
                  className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
                <p className="text-xs text-muted-foreground mt-1 font-mono">Recommended length: 150-160 characters</p>
              </div>

              <div>
                <Label htmlFor="metaKeywords" className="font-mono text-xs uppercase tracking-wide">
                  Default Meta Keywords
                </Label>
                <Input
                  id="metaKeywords"
                  value={settings.seo.metaKeywords}
                  onChange={(e) => handleChange("seo", "metaKeywords", e.target.value)}
                  className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
              </div>

              <div>
                <Label htmlFor="googleAnalyticsId" className="font-mono text-xs uppercase tracking-wide">
                  Google Analytics ID
                </Label>
                <Input
                  id="googleAnalyticsId"
                  value={settings.seo.googleAnalyticsId}
                  onChange={(e) => handleChange("seo", "googleAnalyticsId", e.target.value)}
                  className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enableSiteMap" className="font-mono text-xs uppercase tracking-wide">
                      Enable Sitemap
                    </Label>
                    <p className="text-xs text-muted-foreground font-mono">Generate a sitemap.xml file</p>
                  </div>
                  <Switch
                    id="enableSiteMap"
                    checked={settings.seo.enableSiteMap}
                    onCheckedChange={(checked) => handleChange("seo", "enableSiteMap", checked)}
                    className="data-[state=checked]:bg-[#B99C20]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enableRobotsTxt" className="font-mono text-xs uppercase tracking-wide">
                      Enable robots.txt
                    </Label>
                    <p className="text-xs text-muted-foreground font-mono">Generate a robots.txt file</p>
                  </div>
                  <Switch
                    id="enableRobotsTxt"
                    checked={settings.seo.enableRobotsTxt}
                    onCheckedChange={(checked) => handleChange("seo", "enableRobotsTxt", checked)}
                    className="data-[state=checked]:bg-[#B99C20]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enableStructuredData" className="font-mono text-xs uppercase tracking-wide">
                      Structured Data
                    </Label>
                    <p className="text-xs text-muted-foreground font-mono">Add JSON-LD structured data</p>
                  </div>
                  <Switch
                    id="enableStructuredData"
                    checked={settings.seo.enableStructuredData}
                    onCheckedChange={(checked) => handleChange("seo", "enableStructuredData", checked)}
                    className="data-[state=checked]:bg-[#B99C20]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <Card className="border-[#242423] bg-black/20">
            <CardHeader>
              <CardTitle className="font-tektur uppercase tracking-wide">Social Media Settings</CardTitle>
              <CardDescription className="font-mono text-xs">
                Connect your website to social media platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="facebook" className="font-mono text-xs uppercase tracking-wide">
                    Facebook URL
                  </Label>
                  <Input
                    id="facebook"
                    value={settings.social.facebook}
                    onChange={(e) => handleChange("social", "facebook", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>

                <div>
                  <Label htmlFor="twitter" className="font-mono text-xs uppercase tracking-wide">
                    Twitter URL
                  </Label>
                  <Input
                    id="twitter"
                    value={settings.social.twitter}
                    onChange={(e) => handleChange("social", "twitter", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="instagram" className="font-mono text-xs uppercase tracking-wide">
                    Instagram URL
                  </Label>
                  <Input
                    id="instagram"
                    value={settings.social.instagram}
                    onChange={(e) => handleChange("social", "instagram", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>

                <div>
                  <Label htmlFor="youtube" className="font-mono text-xs uppercase tracking-wide">
                    YouTube URL
                  </Label>
                  <Input
                    id="youtube"
                    value={settings.social.youtube}
                    onChange={(e) => handleChange("social", "youtube", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="linkedin" className="font-mono text-xs uppercase tracking-wide">
                  LinkedIn URL
                </Label>
                <Input
                  id="linkedin"
                  value={settings.social.linkedin}
                  onChange={(e) => handleChange("social", "linkedin", e.target.value)}
                  className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card className="border-[#242423] bg-black/20">
            <CardHeader>
              <CardTitle className="font-tektur uppercase tracking-wide">Advanced Settings</CardTitle>
              <CardDescription className="font-mono text-xs">Custom code and scripts for your website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="customCss" className="font-mono text-xs uppercase tracking-wide">
                  Custom CSS
                </Label>
                <Textarea
                  id="customCss"
                  value={settings.advanced.customCss}
                  onChange={(e) => handleChange("advanced", "customCss", e.target.value)}
                  rows={6}
                  className="mt-1 font-mono text-xs bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
                <p className="text-xs text-muted-foreground mt-1 font-mono">
                  Add custom CSS to override default styles
                </p>
              </div>

              <div>
                <Label htmlFor="customJs" className="font-mono text-xs uppercase tracking-wide">
                  Custom JavaScript
                </Label>
                <Textarea
                  id="customJs"
                  value={settings.advanced.customJs}
                  onChange={(e) => handleChange("advanced", "customJs", e.target.value)}
                  rows={6}
                  className="mt-1 font-mono text-xs bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
                <p className="text-xs text-muted-foreground mt-1 font-mono">
                  Add custom JavaScript to enhance functionality
                </p>
              </div>

              <div>
                <Label htmlFor="headerScripts" className="font-mono text-xs uppercase tracking-wide">
                  Header Scripts
                </Label>
                <Textarea
                  id="headerScripts"
                  value={settings.advanced.headerScripts}
                  onChange={(e) => handleChange("advanced", "headerScripts", e.target.value)}
                  rows={4}
                  className="mt-1 font-mono text-xs bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
                <p className="text-xs text-muted-foreground mt-1 font-mono">
                  Scripts to be included in the &lt;head&gt; section
                </p>
              </div>

              <div>
                <Label htmlFor="footerScripts" className="font-mono text-xs uppercase tracking-wide">
                  Footer Scripts
                </Label>
                <Textarea
                  id="footerScripts"
                  value={settings.advanced.footerScripts}
                  onChange={(e) => handleChange("advanced", "footerScripts", e.target.value)}
                  rows={4}
                  className="mt-1 font-mono text-xs bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
                <p className="text-xs text-muted-foreground mt-1 font-mono">
                  Scripts to be included before the closing &lt;/body&gt; tag
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

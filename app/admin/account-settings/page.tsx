"use client"

import { useState } from "react"
import { Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock admin settings
const initialSettings = {
  preferences: {
    darkMode: true,
    compactView: false,
    enableNotifications: true,
    emailNotifications: true,
    autoSave: true,
    language: "en",
    timezone: "America/New_York",
  },
  security: {
    twoFactorAuth: false,
    sessionTimeout: "30",
    loginNotifications: true,
    ipRestriction: false,
    allowedIPs: "",
  },
  accessibility: {
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    keyboardNavigation: true,
  },
}

export default function AdminAccountSettings() {
  const [settings, setSettings] = useState(initialSettings)
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
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-tektur uppercase tracking-wide">Account Settings</h1>
          <p className="text-muted-foreground font-sans">Customize your admin experience</p>
        </div>
        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide self-end sm:self-auto"
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

      <Tabs defaultValue="preferences" className="space-y-6">
        <TabsList className="bg-black/20 border border-[#242423]">
          <TabsTrigger
            value="preferences"
            className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#1A1505] data-[state=active]:text-[#B99C20]"
          >
            Preferences
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#1A1505] data-[state=active]:text-[#B99C20]"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            value="accessibility"
            className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#1A1505] data-[state=active]:text-[#B99C20]"
          >
            Accessibility
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preferences" className="space-y-6">
          <Card className="border-[#242423] bg-black/20">
            <CardHeader>
              <CardTitle className="font-tektur uppercase tracking-wide">Interface Preferences</CardTitle>
              <CardDescription className="font-mono text-xs">
                Customize how the admin panel looks and behaves
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="darkMode" className="font-mono text-xs uppercase tracking-wide">
                      Dark Mode
                    </Label>
                    <p className="text-xs text-muted-foreground">Use dark theme for admin interface</p>
                  </div>
                  <Switch
                    id="darkMode"
                    checked={settings.preferences.darkMode}
                    onCheckedChange={(checked) => handleChange("preferences", "darkMode", checked)}
                    className="data-[state=checked]:bg-[#B99C20]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="compactView" className="font-mono text-xs uppercase tracking-wide">
                      Compact View
                    </Label>
                    <p className="text-xs text-muted-foreground">Reduce spacing in the interface</p>
                  </div>
                  <Switch
                    id="compactView"
                    checked={settings.preferences.compactView}
                    onCheckedChange={(checked) => handleChange("preferences", "compactView", checked)}
                    className="data-[state=checked]:bg-[#B99C20]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="enableNotifications" className="font-mono text-xs uppercase tracking-wide">
                      Enable Notifications
                    </Label>
                    <p className="text-xs text-muted-foreground">Show notifications in the admin panel</p>
                  </div>
                  <Switch
                    id="enableNotifications"
                    checked={settings.preferences.enableNotifications}
                    onCheckedChange={(checked) => handleChange("preferences", "enableNotifications", checked)}
                    className="data-[state=checked]:bg-[#B99C20]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailNotifications" className="font-mono text-xs uppercase tracking-wide">
                      Email Notifications
                    </Label>
                    <p className="text-xs text-muted-foreground">Receive important updates via email</p>
                  </div>
                  <Switch
                    id="emailNotifications"
                    checked={settings.preferences.emailNotifications}
                    onCheckedChange={(checked) => handleChange("preferences", "emailNotifications", checked)}
                    className="data-[state=checked]:bg-[#B99C20]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="language" className="font-mono text-xs uppercase tracking-wide">
                    Language
                  </Label>
                  <Select
                    value={settings.preferences.language}
                    onValueChange={(value) => handleChange("preferences", "language", value)}
                  >
                    <SelectTrigger className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timezone" className="font-mono text-xs uppercase tracking-wide">
                    Timezone
                  </Label>
                  <Select
                    value={settings.preferences.timezone}
                    onValueChange={(value) => handleChange("preferences", "timezone", value)}
                  >
                    <SelectTrigger className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                      <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                      <SelectItem value="Europe/London">Greenwich Mean Time (GMT)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="border-[#242423] bg-black/20">
            <CardHeader>
              <CardTitle className="font-tektur uppercase tracking-wide">Security Settings</CardTitle>
              <CardDescription className="font-mono text-xs">
                Configure security options for your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="twoFactorAuth" className="font-mono text-xs uppercase tracking-wide">
                    Two-Factor Authentication
                  </Label>
                  <p className="text-xs text-muted-foreground">Require a verification code when logging in</p>
                </div>
                <Switch
                  id="twoFactorAuth"
                  checked={settings.security.twoFactorAuth}
                  onCheckedChange={(checked) => handleChange("security", "twoFactorAuth", checked)}
                  className="data-[state=checked]:bg-[#B99C20]"
                />
              </div>

              <div>
                <Label htmlFor="sessionTimeout" className="font-mono text-xs uppercase tracking-wide">
                  Session Timeout (minutes)
                </Label>
                <Input
                  id="sessionTimeout"
                  type="number"
                  value={settings.security.sessionTimeout}
                  onChange={(e) => handleChange("security", "sessionTimeout", e.target.value)}
                  className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Automatically log out after period of inactivity (0 for no timeout)
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="loginNotifications" className="font-mono text-xs uppercase tracking-wide">
                    Login Notifications
                  </Label>
                  <p className="text-xs text-muted-foreground">Receive email alerts for new login attempts</p>
                </div>
                <Switch
                  id="loginNotifications"
                  checked={settings.security.loginNotifications}
                  onCheckedChange={(checked) => handleChange("security", "loginNotifications", checked)}
                  className="data-[state=checked]:bg-[#B99C20]"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="ipRestriction" className="font-mono text-xs uppercase tracking-wide">
                    IP Restriction
                  </Label>
                  <p className="text-xs text-muted-foreground">Limit login access to specific IP addresses</p>
                </div>
                <Switch
                  id="ipRestriction"
                  checked={settings.security.ipRestriction}
                  onCheckedChange={(checked) => handleChange("security", "ipRestriction", checked)}
                  className="data-[state=checked]:bg-[#B99C20]"
                />
              </div>

              {settings.security.ipRestriction && (
                <div>
                  <Label htmlFor="allowedIPs" className="font-mono text-xs uppercase tracking-wide">
                    Allowed IP Addresses
                  </Label>
                  <Input
                    id="allowedIPs"
                    value={settings.security.allowedIPs}
                    onChange={(e) => handleChange("security", "allowedIPs", e.target.value)}
                    placeholder="Enter comma-separated IP addresses"
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter IP addresses separated by commas (e.g., 192.168.1.1, 10.0.0.1)
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="accessibility" className="space-y-6">
          <Card className="border-[#242423] bg-black/20">
            <CardHeader>
              <CardTitle className="font-tektur uppercase tracking-wide">Accessibility Settings</CardTitle>
              <CardDescription className="font-mono text-xs">
                Configure options to improve accessibility
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="highContrast" className="font-mono text-xs uppercase tracking-wide">
                      High Contrast
                    </Label>
                    <p className="text-xs text-muted-foreground">Increase contrast for better visibility</p>
                  </div>
                  <Switch
                    id="highContrast"
                    checked={settings.accessibility.highContrast}
                    onCheckedChange={(checked) => handleChange("accessibility", "highContrast", checked)}
                    className="data-[state=checked]:bg-[#B99C20]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="largeText" className="font-mono text-xs uppercase tracking-wide">
                      Large Text
                    </Label>
                    <p className="text-xs text-muted-foreground">Increase text size throughout the interface</p>
                  </div>
                  <Switch
                    id="largeText"
                    checked={settings.accessibility.largeText}
                    onCheckedChange={(checked) => handleChange("accessibility", "largeText", checked)}
                    className="data-[state=checked]:bg-[#B99C20]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="reducedMotion" className="font-mono text-xs uppercase tracking-wide">
                      Reduced Motion
                    </Label>
                    <p className="text-xs text-muted-foreground">Minimize animations and transitions</p>
                  </div>
                  <Switch
                    id="reducedMotion"
                    checked={settings.accessibility.reducedMotion}
                    onCheckedChange={(checked) => handleChange("accessibility", "reducedMotion", checked)}
                    className="data-[state=checked]:bg-[#B99C20]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="keyboardNavigation" className="font-mono text-xs uppercase tracking-wide">
                      Keyboard Navigation
                    </Label>
                    <p className="text-xs text-muted-foreground">Enable enhanced keyboard navigation</p>
                  </div>
                  <Switch
                    id="keyboardNavigation"
                    checked={settings.accessibility.keyboardNavigation}
                    onCheckedChange={(checked) => handleChange("accessibility", "keyboardNavigation", checked)}
                    className="data-[state=checked]:bg-[#B99C20]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

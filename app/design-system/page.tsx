"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Copy, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { MonoChip } from "@/components/ui/mono-chip"
import { MonoHeadline } from "@/components/ui/mono-headline"
import { MonoTagline } from "@/components/ui/mono-tagline"
import { TekturHeadline } from "@/components/ui/tektur-headline"
import { SectionHeading } from "@/components/ui/section-heading"

export default function DesignSystem() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(text)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const colorPalette = [
    { name: "Gold", value: "#B99C20", tailwind: "gold.DEFAULT", textColor: "text-black" },
    { name: "Gold Light", value: "#ECD055", tailwind: "N/A", textColor: "text-black" },
    { name: "Gold Dark", value: "#866A1D", tailwind: "gold.dark", textColor: "text-white" },
    { name: "Background Dark", value: "#0A0A0B", tailwind: "N/A", textColor: "text-white" },
    { name: "Background Medium", value: "#1A1505", tailwind: "N/A", textColor: "text-white" },
    { name: "Gray Dark", value: "#242423", tailwind: "N/A", textColor: "text-white" },
    { name: "Gray Medium", value: "#454545", tailwind: "N/A", textColor: "text-white" },
    { name: "Gray Light", value: "#A9A9A9", tailwind: "N/A", textColor: "text-black" },
  ]

  return (
    <div className="container mx-auto py-12 px-4 bg-[#0A0A0B]">
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <MonoChip>Design System</MonoChip>
          <MonoChip className="bg-[#B99C20] text-black">v1.0</MonoChip>
        </div>
        <h1 className="font-tektur text-5xl md:text-6xl uppercase mb-4">Forest Outfitters</h1>
        <p className="text-xl max-w-3xl">
          A comprehensive guide to the design language, components, and patterns used throughout the Forest Outfitters
          website and admin interface.
        </p>
      </header>

      <Tabs defaultValue="typography" className="mb-16">
        <TabsList className="mb-8 bg-[#242423]">
          <TabsTrigger value="typography" className="data-[state=active]:bg-[#1A1505] data-[state=active]:text-white">
            Typography
          </TabsTrigger>
          <TabsTrigger value="colors" className="data-[state=active]:bg-[#1A1505] data-[state=active]:text-white">
            Colors
          </TabsTrigger>
          <TabsTrigger value="components" className="data-[state=active]:bg-[#1A1505] data-[state=active]:text-white">
            Components
          </TabsTrigger>
          <TabsTrigger value="patterns" className="data-[state=active]:bg-[#1A1505] data-[state=active]:text-white">
            Patterns
          </TabsTrigger>
        </TabsList>

        {/* Typography Section */}
        <TabsContent value="typography" className="space-y-12">
          <section>
            <SectionHeading title="Typography" />
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Tektur</CardTitle>
                  <CardDescription className="font-mono text-xs">Used for all headings and titles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h1 className="font-tektur text-5xl uppercase">Heading 1</h1>
                    <p className="text-xs font-mono mt-1 text-gray-400">font-tektur text-5xl uppercase</p>
                  </div>
                  <div>
                    <h2 className="font-tektur text-4xl uppercase">Heading 2</h2>
                    <p className="text-xs font-mono mt-1 text-gray-400">font-tektur text-4xl uppercase</p>
                  </div>
                  <div>
                    <h3 className="font-tektur text-3xl uppercase">Heading 3</h3>
                    <p className="text-xs font-mono mt-1 text-gray-400">font-tektur text-3xl uppercase</p>
                  </div>
                  <div>
                    <h4 className="font-tektur text-2xl uppercase">Heading 4</h4>
                    <p className="text-xs font-mono mt-1 text-gray-400">font-tektur text-2xl uppercase</p>
                  </div>
                  <div>
                    <h5 className="font-tektur text-xl uppercase">Heading 5</h5>
                    <p className="text-xs font-mono mt-1 text-gray-400">font-tektur text-xl uppercase</p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <Card className="border-[#242423] bg-black/20">
                  <CardHeader>
                    <CardTitle className="font-tektur uppercase tracking-wide text-xl">Overpass Mono</CardTitle>
                    <CardDescription className="font-mono text-xs">
                      Used for labels, tags, and technical text
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-mono text-lg uppercase tracking-wide">Large Label</p>
                      <p className="text-xs font-mono mt-1 text-gray-400">font-mono text-lg uppercase tracking-wide</p>
                    </div>
                    <div>
                      <p className="font-mono text-base uppercase tracking-wide">Medium Label</p>
                      <p className="text-xs font-mono mt-1 text-gray-400">
                        font-mono text-base uppercase tracking-wide
                      </p>
                    </div>
                    <div>
                      <p className="font-mono text-sm uppercase tracking-wide">Small Label</p>
                      <p className="text-xs font-mono mt-1 text-gray-400">font-mono text-sm uppercase tracking-wide</p>
                    </div>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wide">Extra Small Label</p>
                      <p className="text-xs font-mono mt-1 text-gray-400">font-mono text-xs uppercase tracking-wide</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#242423] bg-black/20">
                  <CardHeader>
                    <CardTitle className="font-tektur uppercase tracking-wide text-xl">Inter</CardTitle>
                    <CardDescription className="font-mono text-xs">Used for body text and descriptions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-lg">Large Body Text</p>
                      <p className="text-xs font-mono mt-1 text-gray-400">text-lg</p>
                    </div>
                    <div>
                      <p className="text-base">Medium Body Text</p>
                      <p className="text-xs font-mono mt-1 text-gray-400">text-base</p>
                    </div>
                    <div>
                      <p className="text-sm">Small Body Text</p>
                      <p className="text-xs font-mono mt-1 text-gray-400">text-sm</p>
                    </div>
                    <div>
                      <p className="text-xs">Extra Small Body Text</p>
                      <p className="text-xs font-mono mt-1 text-gray-400">text-xs</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading title="Typography Components" />
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">TekturHeadline</CardTitle>
                  <CardDescription className="font-mono text-xs">Used for main section headings</CardDescription>
                </CardHeader>
                <CardContent>
                  <TekturHeadline>Adventure Awaits</TekturHeadline>
                  <p className="text-xs font-mono mt-4 text-gray-400">
                    {`<TekturHeadline>Adventure Awaits</TekturHeadline>`}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">SectionHeading</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    Used for section titles with optional alignment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <SectionHeading title="Left Aligned" />
                    <p className="text-xs font-mono mt-2 text-gray-400">{`<SectionHeading title="Left Aligned" />`}</p>
                  </div>
                  <div>
                    <SectionHeading title="Center Aligned" align="center" />
                    <p className="text-xs font-mono mt-2 text-gray-400">
                      {`<SectionHeading title="Center Aligned" align="center" />`}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">MonoHeadline</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    Used for technical or feature headings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <MonoHeadline>Technical Specifications</MonoHeadline>
                  <p className="text-xs font-mono mt-4 text-gray-400">
                    {`<MonoHeadline>Technical Specifications</MonoHeadline>`}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">MonoTagline & MonoChip</CardTitle>
                  <CardDescription className="font-mono text-xs">Used for labels and tags</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <MonoTagline>New Collection</MonoTagline>
                    <p className="text-xs font-mono mt-2 text-gray-400">
                      {`<MonoTagline>New Collection</MonoTagline>`}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <MonoChip>Waterproof</MonoChip>
                    <MonoChip>Sustainable</MonoChip>
                    <MonoChip>Limited Edition</MonoChip>
                    <p className="w-full text-xs font-mono mt-2 text-gray-400">{`<MonoChip>Waterproof</MonoChip>`}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Colors Section */}
        <TabsContent value="colors" className="space-y-12">
          <section>
            <SectionHeading title="Color Palette" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {colorPalette.map((color) => (
                <div
                  key={color.value}
                  className="rounded-md overflow-hidden border border-[#242423] cursor-pointer transition-all hover:scale-105"
                  onClick={() => copyToClipboard(color.value)}
                >
                  <div
                    className={`h-24 flex items-center justify-center ${color.textColor}`}
                    style={{ backgroundColor: color.value }}
                  >
                    {copiedColor === color.value ? (
                      <div className="flex items-center gap-1">
                        <Check size={16} />
                        <span>Copied!</span>
                      </div>
                    ) : (
                      <Copy size={16} />
                    )}
                  </div>
                  <div className="p-3 bg-black/20">
                    <h3 className="font-tektur text-sm uppercase">{color.name}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <p className="font-mono text-xs">{color.value}</p>
                      {color.tailwind !== "N/A" && (
                        <span className="font-mono text-xs text-gray-400">{color.tailwind}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading title="Color Usage" />
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Primary Actions</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    Gold is used for primary actions and focus states
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="text">Text Button</Button>
                  </div>
                  <div className="p-4 rounded-md bg-[#1A1505] border border-[#B99C20]">
                    <p className="text-[#B99C20]">Highlighted content uses gold text on dark backgrounds</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Background Hierarchy</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    Dark backgrounds with varying levels of contrast
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-md bg-[#0A0A0B] text-white border border-[#242423]">
                    <p className="mb-2 font-mono text-xs uppercase">Primary Background (#0A0A0B)</p>
                    <p>Used for main page backgrounds and dark sections</p>
                  </div>
                  <div className="p-4 rounded-md bg-[#1A1505] text-white border border-[#242423]">
                    <p className="mb-2 font-mono text-xs uppercase">Secondary Background (#1A1505)</p>
                    <p>Used for cards, panels, and to create contrast</p>
                  </div>
                  <div className="p-4 rounded-md bg-[#242423] text-white border border-[#242423]">
                    <p className="mb-2 font-mono text-xs uppercase">Tertiary Background (#242423)</p>
                    <p>Used for subtle highlights and borders</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Components Section */}
        <TabsContent value="components" className="space-y-12">
          <section>
            <SectionHeading title="Buttons" />
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Button Variants</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    Different button styles for various contexts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Button variant="primary" className="w-full">
                        Primary
                      </Button>
                      <p className="text-xs font-mono text-gray-400">variant="primary"</p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full">
                        Outline
                      </Button>
                      <p className="text-xs font-mono text-gray-400">variant="outline"</p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="text" className="w-full">
                        Text
                      </Button>
                      <p className="text-xs font-mono text-gray-400">variant="text"</p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="destructive" className="w-full">
                        Destructive
                      </Button>
                      <p className="text-xs font-mono text-gray-400">variant="destructive"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Button Sizes</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    Different button sizes for various contexts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Button variant="primary" size="lg">
                        Large
                      </Button>
                      <p className="text-xs font-mono text-gray-400">size="lg"</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="primary" size="default">
                        Default
                      </Button>
                      <p className="text-xs font-mono text-gray-400">size="default"</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="primary" size="sm">
                        Small
                      </Button>
                      <p className="text-xs font-mono text-gray-400">size="sm"</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="primary" size="icon">
                        <Search size={16} />
                      </Button>
                      <p className="text-xs font-mono text-gray-400">size="icon"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Button States</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    Different button states for user feedback
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Button variant="primary" className="w-full">
                        Default
                      </Button>
                      <p className="text-xs font-mono text-gray-400">Normal state</p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="primary" className="w-full" disabled>
                        Disabled
                      </Button>
                      <p className="text-xs font-mono text-gray-400">disabled</p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="primary" className="w-full hover:bg-[#ECD055]">
                        Hover
                      </Button>
                      <p className="text-xs font-mono text-gray-400">hover state</p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="primary" className="w-full active:bg-[#645411]">
                        Active
                      </Button>
                      <p className="text-xs font-mono text-gray-400">active state</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Button with Icons</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    Buttons with icons for enhanced visual cues
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Button variant="primary">
                        <Search className="mr-2 h-4 w-4" /> Search
                      </Button>
                      <p className="text-xs font-mono text-gray-400">Icon + Text</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="primary">
                        Continue <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <p className="text-xs font-mono text-gray-400">Text + Icon</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="icon">
                        <Search className="h-4 w-4" />
                      </Button>
                      <p className="text-xs font-mono text-gray-400">Icon only</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <SectionHeading title="Form Elements" />
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Text Inputs</CardTitle>
                  <CardDescription className="font-mono text-xs">Input fields for text entry</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="default-input">Default Input</Label>
                    <Input id="default-input" placeholder="Enter text here" />
                    <p className="text-xs font-mono text-gray-400 mt-1">{`<Input placeholder="Enter text here" />`}</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="disabled-input">Disabled Input</Label>
                    <Input id="disabled-input" placeholder="Disabled input" disabled />
                    <p className="text-xs font-mono text-gray-400 mt-1">
                      {`<Input placeholder="Disabled input" disabled />`}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="with-icon">Input with Icon</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input id="with-icon" placeholder="Search..." className="pl-10" />
                    </div>
                    <p className="text-xs font-mono text-gray-400 mt-1">Input with positioned icon</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Textarea</CardTitle>
                  <CardDescription className="font-mono text-xs">Multi-line text input</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="default-textarea">Default Textarea</Label>
                    <Textarea id="default-textarea" placeholder="Enter longer text here" />
                    <p className="text-xs font-mono text-gray-400 mt-1">
                      {`<Textarea placeholder="Enter longer text here" />`}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
                    <Textarea id="disabled-textarea" placeholder="Disabled textarea" disabled />
                    <p className="text-xs font-mono text-gray-400 mt-1">
                      {`<Textarea placeholder="Disabled textarea" disabled />`}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <SectionHeading title="Cards" />
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Standard Card</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    Basic card with header, content, and footer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    This is the standard card component used throughout the Forest Outfitters website. It provides a
                    consistent container for related content.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="text">Cancel</Button>
                  <Button variant="primary">Continue</Button>
                </CardFooter>
              </Card>

              <div className="space-y-8">
                <Card className="bg-[#1A1505] border-[#B99C20]">
                  <CardHeader>
                    <CardTitle className="font-tektur uppercase tracking-wide text-xl">Accent Card</CardTitle>
                    <CardDescription className="font-mono text-xs">
                      Card with accent styling for highlighting important content
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      This accent card uses the gold border and darker background to draw attention to important content
                      or featured items.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-dashed border-2 border-[#242423] bg-black/20">
                  <CardHeader>
                    <CardTitle className="font-tektur uppercase tracking-wide text-xl">Action Card</CardTitle>
                    <CardDescription className="font-mono text-xs">Card that prompts user action</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center py-6">
                    <Button variant="outline">
                      <Plus className="mr-2 h-4 w-4" /> Add New Item
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </TabsContent>

        {/* Patterns Section */}
        <TabsContent value="patterns" className="space-y-12">
          <section>
            <SectionHeading title="Navigation Patterns" />
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Main Navigation</CardTitle>
                  <CardDescription className="font-mono text-xs">Primary site navigation pattern</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 border-b border-[#242423]">
                    <div className="font-tektur text-xl uppercase">Forest Outfitters</div>
                    <div className="hidden md:flex items-center space-x-6">
                      <Link href="#" className="font-mono text-sm uppercase hover:text-[#B99C20]">
                        Shop
                      </Link>
                      <Link href="#" className="font-mono text-sm uppercase hover:text-[#B99C20]">
                        About
                      </Link>
                      <Link href="#" className="font-mono text-sm uppercase hover:text-[#B99C20]">
                        Blog
                      </Link>
                      <Link href="#" className="font-mono text-sm uppercase hover:text-[#B99C20]">
                        Contact
                      </Link>
                    </div>
                    <div className="md:hidden">
                      <Menu className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[#242423] bg-black/20">
                <CardHeader>
                  <CardTitle className="font-tektur uppercase tracking-wide text-xl">Mobile Navigation</CardTitle>
                  <CardDescription className="font-mono text-xs">
                    Responsive navigation for mobile devices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border border-[#242423] rounded-md overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-[#242423]">
                      <div className="font-tektur text-xl uppercase">Forest Outfitters</div>
                      <X className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col">
                      <Link
                        href="#"
                        className="p-4 border-b border-[#242423] font-mono text-sm uppercase hover:bg-[#1A1505]"
                      >
                        Shop
                      </Link>
                      <Link
                        href="#"
                        className="p-4 border-b border-[#242423] font-mono text-sm uppercase hover:bg-[#1A1505]"
                      >
                        About
                      </Link>
                      <Link
                        href="#"
                        className="p-4 border-b border-[#242423] font-mono text-sm uppercase hover:bg-[#1A1505]"
                      >
                        Blog
                      </Link>
                      <Link href="#" className="p-4 font-mono text-sm uppercase hover:bg-[#1A1505]">
                        Contact
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <SectionHeading title="Spacing System" />
            <Card className="border-[#242423] bg-black/20">
              <CardHeader>
                <CardTitle className="font-tektur uppercase tracking-wide text-xl">Spacing Scale</CardTitle>
                <CardDescription className="font-mono text-xs">
                  Consistent spacing values used throughout the design system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2, 3, 4, 6, 8, 12, 16].map((space) => (
                    <div key={space} className="flex items-center">
                      <div className="w-16">
                        <div className="bg-[#B99C20]" style={{ height: "24px", width: `${space * 4}px` }}></div>
                      </div>
                      <div className="ml-4">
                        <p className="font-mono text-sm">{space}</p>
                        <p className="text-xs text-gray-400">
                          {space * 4}px / {space * 0.25}rem
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>
      </Tabs>

      <footer className="mt-16 pt-8 border-t border-[#242423]">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-tektur text-xl uppercase mb-4 md:mb-0">Forest Outfitters</div>
          <div className="font-mono text-xs">Design System v1.0 • Last Updated: March 2025</div>
        </div>
      </footer>
    </div>
  )
}

function Plus({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

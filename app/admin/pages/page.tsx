import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { FileEdit, Eye, Plus } from "lucide-react"

export default function PageBuilder() {
  const pages = [
    {
      id: "about",
      title: "About Us",
      description: "Company information, mission, and values",
      lastUpdated: "2023-03-15T14:30:00Z",
      url: "/about",
    },
    {
      id: "investors",
      title: "Investors",
      description: "Investment opportunities and financial information",
      lastUpdated: "2023-03-10T11:20:00Z",
      url: "/investors",
    },
    {
      id: "shop",
      title: "Shop",
      description: "Product catalog and e-commerce functionality",
      lastUpdated: "2023-03-14T09:45:00Z",
      url: "/shop",
    },
    {
      id: "careers",
      title: "Careers",
      description: "Job listings and company culture",
      lastUpdated: "2023-03-12T16:15:00Z",
      url: "/careers",
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-tektur uppercase tracking-wide">Page Builder</h1>
          <p className="text-muted-foreground font-sans">Create and edit website pages</p>
        </div>
        <Button
          variant="outline"
          asChild
          className="border-[#B99C20] text-[#B99C20] hover:bg-[#1A1505] hover:text-[#ECD055] font-mono text-xs uppercase tracking-wide"
        >
          <Link href="/admin/pages/new">
            <Plus className="mr-2 h-4 w-4" />
            Create New Page
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <Card
            key={page.id}
            className="overflow-hidden border-[#242423] bg-black/20 hover:border-[#B99C20]/30 transition-colors"
          >
            <CardHeader className="pb-3">
              <CardTitle className="font-tektur uppercase tracking-wide">{page.title}</CardTitle>
              <CardDescription className="font-mono text-xs">{page.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground font-mono">
                Last updated: {formatDate(page.lastUpdated)}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-[#242423] pt-3 pb-3">
              <Button variant="outline" size="sm" asChild className="font-mono text-xs uppercase tracking-wide">
                <Link href={page.url} target="_blank">
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Link>
              </Button>
              <Button
                variant="default"
                size="sm"
                asChild
                className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
              >
                <Link href={`/admin/pages/${page.id}`}>
                  <FileEdit className="mr-2 h-4 w-4" />
                  Edit
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

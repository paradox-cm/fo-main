"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Tablet } from "lucide-react"

export function PagePreview({ pageId }: { pageId: string }) {
  const [device, setDevice] = useState("desktop")

  const getPageUrl = (id: string) => {
    switch (id) {
      case "about":
        return "/about"
      case "investors":
        return "/investors"
      case "shop":
        return "/shop"
      case "careers":
        return "/careers"
      default:
        return "/"
    }
  }

  const getDeviceWidth = (device: string) => {
    switch (device) {
      case "mobile":
        return "375px"
      case "tablet":
        return "768px"
      case "desktop":
      default:
        return "100%"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <div className="flex flex-wrap items-center space-x-2">
          <Button
            variant={device === "mobile" ? "default" : "outline"}
            size="sm"
            onClick={() => setDevice("mobile")}
            className={device === "mobile" ? "bg-[#B99C20] text-black hover:bg-[#ECD055]" : "border-[#242423]"}
          >
            <Smartphone className="h-4 w-4 mr-2" />
            Mobile
          </Button>
          <Button
            variant={device === "tablet" ? "default" : "outline"}
            size="sm"
            onClick={() => setDevice("tablet")}
            className={device === "tablet" ? "bg-[#B99C20] text-black hover:bg-[#ECD055]" : "border-[#242423]"}
          >
            <Tablet className="h-4 w-4 mr-2" />
            Tablet
          </Button>
          <Button
            variant={device === "desktop" ? "default" : "outline"}
            size="sm"
            onClick={() => setDevice("desktop")}
            className={device === "desktop" ? "bg-[#B99C20] text-black hover:bg-[#ECD055]" : "border-[#242423]"}
          >
            <Monitor className="h-4 w-4 mr-2" />
            Desktop
          </Button>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(getPageUrl(pageId), "_blank")}
          className="border-[#242423] hover:border-[#B99C20] font-mono text-xs uppercase tracking-wide"
        >
          Open in New Tab
        </Button>
      </div>

      <div className="border border-[#242423] rounded-md overflow-hidden bg-white">
        <div className="w-full" style={{ maxWidth: getDeviceWidth(device), margin: "0 auto" }}>
          <iframe
            src={getPageUrl(pageId)}
            className="w-full"
            style={{
              height: "calc(100vh - 300px)",
              minHeight: "400px",
              border: "none",
              backgroundColor: "white",
            }}
            title={`Preview of ${pageId} page`}
            loading="lazy"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </div>
    </div>
  )
}

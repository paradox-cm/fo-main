"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight, Home, Palette, ImageIcon, Tag, Package, FileText, Menu, X } from "lucide-react"

interface NavItem {
  title: string
  href?: string
  icon?: React.ReactNode
  submenu?: NavItem[]
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/brand",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Brand Overview",
    icon: <FileText className="h-5 w-5" />,
    submenu: [
      {
        title: "Forest Outfitters",
        href: "/brand/forest-outfitters",
      },
      {
        title: "Tribe Equipment",
        href: "/brand/tribe-equipment",
      },
      {
        title: "HYDE™",
        href: "/brand/hyde",
      },
      {
        title: "RBF",
        href: "/brand/rbf",
      },
    ],
  },
  {
    title: "Visual Identity",
    href: "/brand/visual-identity",
    icon: <Palette className="h-5 w-5" />,
  },
  {
    title: "Logo Guidelines",
    href: "/brand/logo-guidelines",
    icon: <ImageIcon className="h-5 w-5" />,
  },
  {
    title: "Tag & Label",
    href: "/brand/tag-label",
    icon: <Tag className="h-5 w-5" />,
  },
  {
    title: "Packaging",
    href: "/brand/packaging",
    icon: <Package className="h-5 w-5" />,
  },
  {
    title: "Assets",
    href: "/brand/assets",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Appendices",
    icon: <FileText className="h-5 w-5" />,
    submenu: [
      {
        title: "Contact Info",
        href: "/brand/appendices/contact",
      },
      {
        title: "Legal Information",
        href: "/brand/appendices/legal",
      },
      {
        title: "Version Control",
        href: "/brand/appendices/version",
      },
    ],
  },
]

export function SidebarNavigation() {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Determine background color based on current page
  const getBrandStyles = () => {
    if (pathname === "/brand/tribe-equipment") {
      return {
        background: "#101319",
        borderColor: "#242423",
        textColor: "text-gray-90",
        hoverBg: "hover:bg-[#1a1f2a] hover:text-white",
        activeBg: "bg-[#1a1f2a] text-primary",
      }
    } else if (pathname === "/brand/hyde") {
      return {
        background: "#000000",
        borderColor: "#4A4A4A",
        textColor: "text-gray-300",
        hoverBg: "hover:bg-[#1a1a1a] hover:text-white",
        activeBg: "bg-[#1a1a1a] text-primary",
      }
    } else if (pathname === "/brand/rbf") {
      return {
        background: "#DCD6BE",
        borderColor: "#A7995D",
        textColor: "text-[#2E1C1C]",
        hoverBg: "hover:bg-[#A7995D] hover:text-[#e8e0c9]",
        activeBg: "bg-[#A7995D] text-[#e8e0c9]",
      }
    } else {
      return {
        background: "",
        borderColor: "#242423",
        textColor: "text-gray-90",
        hoverBg: "hover:bg-gray-30 hover:text-white",
        activeBg: "bg-gray-30 text-primary",
      }
    }
  }

  const brandStyles = getBrandStyles()

  const toggleSubmenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const isActive = (href: string) => pathname === href

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => (
      <div key={item.title} className="mb-1">
        {item.submenu ? (
          <>
            <button
              onClick={() => toggleSubmenu(item.title)}
              className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left font-tektur text-sm uppercase tracking-wider ${brandStyles.textColor} ${brandStyles.hoverBg}`}
            >
              <span className="flex items-center gap-3">
                {item.icon}
                {item.title}
              </span>
              {openMenus[item.title] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </button>
            {openMenus[item.title] && (
              <div className="ml-6 mt-1 space-y-1 border-l pl-3" style={{ borderColor: brandStyles.borderColor }}>
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.title}
                    href={subItem.href || "#"}
                    className={cn(
                      `block rounded-md px-3 py-2 text-sm ${brandStyles.textColor} ${brandStyles.hoverBg}`,
                      isActive(subItem.href || "") && brandStyles.activeBg,
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <Link
            href={item.href || "#"}
            className={cn(
              `flex items-center gap-3 rounded-md px-3 py-2 font-tektur text-sm uppercase tracking-wider ${brandStyles.textColor} ${brandStyles.hoverBg}`,
              isActive(item.href || "") && brandStyles.activeBg,
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.icon}
            {item.title}
          </Link>
        )}
      </div>
    ))
  }

  // Apply inline styles for dynamic background colors
  const sidebarStyle =
    pathname === "/brand/tribe-equipment"
      ? { background: "#101319", borderColor: "#242423" }
      : pathname === "/brand/hyde"
        ? { background: "#000000", borderColor: "#4A4A4A" }
        : pathname === "/brand/rbf"
          ? { background: "#DCD6BE", borderColor: "#A7995D" }
          : {}

  const mobileHeaderStyle =
    pathname === "/brand/tribe-equipment"
      ? { background: "#101319", borderColor: "#242423" }
      : pathname === "/brand/hyde"
        ? { background: "#000000", borderColor: "#4A4A4A" }
        : pathname === "/brand/rbf"
          ? { background: "#DCD6BE", borderColor: "#A7995D", color: "#2E1C1C" }
          : {}

  return (
    <>
      {/* Mobile Menu Button */}
      <div
        className="sticky top-0 z-40 flex items-center justify-between border-b border-[#242423] bg-gray-20 p-4 lg:hidden"
        style={mobileHeaderStyle}
      >
        <h2
          className="font-tektur text-lg uppercase tracking-wider"
          style={{ color: pathname === "/brand/rbf" ? "#2E1C1C" : "white" }}
        >
          Brand Guidelines
        </h2>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`rounded-md p-2 ${brandStyles.textColor} ${brandStyles.hoverBg}`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar for Desktop */}
      <div className="hidden w-64 flex-shrink-0 border-r border-[#242423] bg-gray-20 p-4 lg:block" style={sidebarStyle}>
        <div className="mb-6 border-b border-[#242423] pb-4" style={{ borderColor: brandStyles.borderColor }}>
          <h2
            className="font-tektur text-lg uppercase tracking-wider"
            style={{ color: pathname === "/brand/rbf" ? "#2E1C1C" : "white" }}
          >
            Brand Guidelines
          </h2>
        </div>
        <nav className="space-y-1">{renderNavItems(navItems)}</nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-70 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-35 w-full max-w-xs transform overflow-y-auto transition-transform duration-200 ease-in-out lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
        style={{
          backgroundColor:
            pathname === "/brand/tribe-equipment"
              ? "#101319"
              : pathname === "/brand/hyde"
                ? "#000000"
                : pathname === "/brand/rbf"
                  ? "#DCD6BE"
                  : "#1A1A1A", // Default dark background
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
          zIndex: 35,
        }}
      >
        <div
          className="flex items-center justify-between p-4 border-b"
          style={{ borderColor: brandStyles.borderColor }}
        >
          <h2
            className="font-tektur text-lg uppercase tracking-wider"
            style={{ color: pathname === "/brand/rbf" ? "#2E1C1C" : "white" }}
          >
            Brand Guidelines
          </h2>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className={`rounded-md p-2 ${brandStyles.textColor} ${brandStyles.hoverBg}`}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4 space-y-1">{renderNavItems(navItems)}</nav>
      </div>
    </>
  )
}

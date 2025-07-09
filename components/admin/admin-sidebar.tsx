"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileEdit, ShoppingBag, Users, FileText, Settings, LogOut, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboard size={20} />,
  },
  {
    title: "Page Builder",
    href: "/admin/pages",
    icon: <FileEdit size={20} />,
    subItems: [
      { title: "About Us", href: "/admin/pages/about" },
      { title: "Investors", href: "/admin/pages/investors" },
      { title: "Shop", href: "/admin/pages/shop" },
      { title: "Careers", href: "/admin/pages/careers" },
    ],
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: <ShoppingBag size={20} />,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: <Users size={20} />,
  },
  {
    title: "Blog",
    href: "/admin/blog",
    icon: <FileText size={20} />,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: <Settings size={20} />,
  },
]

interface AdminSidebarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function AdminSidebar({ isOpen, setIsOpen }: AdminSidebarProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  // Automatically expand the current section
  useEffect(() => {
    const currentSection = sidebarLinks.find(
      (link) => link.subItems && link.subItems.some((subItem) => pathname === subItem.href),
    )

    if (currentSection && !expandedItems.includes(currentSection.title)) {
      setExpandedItems((prev) => [...prev, currentSection.title])
    }
  }, [pathname, expandedItems])

  const toggleSubMenu = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/")

  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          "w-64 bg-black border-r border-[#242423] flex-shrink-0 fixed md:sticky inset-y-0 left-0 z-40 transition-transform duration-200 h-full md:h-auto overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="p-4 border-b border-[#242423] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/forest-icon-new.svg"
              width={32}
              height={32}
              alt="Forest Outfitters"
              className="h-8 w-8"
            />
            <span className="font-mono text-sm uppercase tracking-wide text-[#B99C20] hidden sm:inline">
              Admin Panel
            </span>
          </div>
          <button className="md:hidden text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {sidebarLinks.map((link) => (
            <div key={link.href} className="mb-1">
              <Link
                href={link.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md text-sm font-mono uppercase tracking-wide transition-colors",
                  isActive(link.href)
                    ? "bg-[#1A1505] text-[#B99C20]"
                    : "text-white/70 hover:text-white hover:bg-[#242423]",
                )}
                onClick={(e) => {
                  if (link.subItems) {
                    e.preventDefault()
                    toggleSubMenu(link.title)
                  } else {
                    // On mobile, close sidebar after clicking a link
                    if (window.innerWidth < 768) {
                      setIsOpen(false)
                    }
                  }
                }}
              >
                <span className="mr-3 text-white">{link.icon}</span>
                <span>{link.title}</span>
                {link.subItems && <span className="ml-auto">{expandedItems.includes(link.title) ? "-" : "+"}</span>}
              </Link>

              {/* Sub-items */}
              {link.subItems && expandedItems.includes(link.title) && (
                <div className="ml-8 mt-1 space-y-1">
                  {link.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={cn(
                        "block px-3 py-2 rounded-md text-sm font-mono tracking-wide transition-colors",
                        isActive(subItem.href)
                          ? "bg-[#1A1505] text-[#B99C20]"
                          : "text-white/70 hover:text-white hover:bg-[#242423]",
                      )}
                      onClick={() => {
                        // On mobile, close sidebar after clicking a link
                        if (window.innerWidth < 768) {
                          setIsOpen(false)
                        }
                      }}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-[#242423]">
          <button
            className="flex items-center px-3 py-2 w-full rounded-md text-sm font-mono uppercase tracking-wide text-white/70 hover:text-white hover:bg-[#242423] transition-colors"
            onClick={() => {
              localStorage.removeItem("adminAuth")
              sessionStorage.removeItem("adminAuth")
              window.location.href = "/admin/login"
            }}
          >
            <LogOut size={20} className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Backdrop for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}
    </>
  )
}

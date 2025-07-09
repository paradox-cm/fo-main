"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      try {
        // Check both localStorage and sessionStorage for auth token
        const isPersistentAuth = localStorage.getItem("adminAuth") === "true"
        const isSessionAuth = sessionStorage.getItem("adminAuth") === "true"
        const isAuthenticated = isPersistentAuth || isSessionAuth

        setIsAuthorized(isAuthenticated)
        setIsLoading(false)

        // If not on login page and not authenticated, redirect to login
        if (!isAuthenticated && pathname !== "/admin/login") {
          router.push("/admin/login")
        }

        // If on login page and authenticated, redirect to dashboard
        if (isAuthenticated && pathname === "/admin/login") {
          router.push("/admin")
        }
      } catch (error) {
        // Handle any localStorage/sessionStorage errors (e.g., in incognito mode)
        console.error("Auth check error:", error)
        setIsAuthorized(false)
        setIsLoading(false)
        if (pathname !== "/admin/login") {
          router.push("/admin/login")
        }
      }
    }

    checkAuth()
  }, [pathname, router])

  // Close sidebar when route changes on mobile
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  // Show nothing while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#B99C20] border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  // If on login page or not authorized, just render children (the login page)
  if (pathname === "/admin/login" || !isAuthorized) {
    return <>{children}</>
  }

  // If authorized, render the admin layout with sidebar and header
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white flex flex-col md:flex-row">
      <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col min-h-screen max-w-full">
        <AdminHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-4 md:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}

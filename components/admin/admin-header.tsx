"use client"

import { useRouter } from "next/navigation"
import { User, LogOut, Menu, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface AdminHeaderProps {
  toggleSidebar: () => void
}

export function AdminHeader({ toggleSidebar }: AdminHeaderProps) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    sessionStorage.removeItem("adminAuth")
    router.push("/admin/login")
  }

  return (
    <header className="h-16 border-b border-[#242423] bg-black flex items-center px-4 md:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-white/70 hover:text-white mr-4"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </Button>

      <div className="md:hidden font-mono text-sm uppercase tracking-wide text-[#B99C20]">Admin Panel</div>

      <div className="ml-auto flex items-center space-x-4">
        {/* Notifications Button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative text-white/70 hover:text-white">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#B99C20] text-black text-xs">
                3
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="end">
            <DropdownMenuLabel className="flex items-center justify-between">
              <span className="font-tektur uppercase tracking-wide">Notifications</span>
              <Button
                variant="link"
                className="h-auto p-0 text-xs font-mono text-[#B99C20] hover:text-[#ECD055]"
                onClick={() => {}}
              >
                Mark all as read
              </Button>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-y-auto">
              <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer bg-black/40">
                <div className="flex w-full justify-between">
                  <span className="font-semibold text-[#ECD055]">New Order Received</span>
                  <span className="h-2 w-2 rounded-full bg-[#B99C20]" />
                </div>
                <span className="text-sm text-muted-foreground">Order #12345 has been placed</span>
                <span className="mt-1 text-xs font-mono text-muted-foreground">10 minutes ago</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer bg-black/40">
                <div className="flex w-full justify-between">
                  <span className="font-semibold text-[#ECD055]">Low Stock Alert</span>
                  <span className="h-2 w-2 rounded-full bg-[#B99C20]" />
                </div>
                <span className="text-sm text-muted-foreground">AI Camo Jacket is running low on stock</span>
                <span className="mt-1 text-xs font-mono text-muted-foreground">2 hours ago</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                <div className="flex w-full justify-between">
                  <span className="font-medium">New User Registration</span>
                </div>
                <span className="text-sm text-muted-foreground">John Doe has created an account</span>
                <span className="mt-1 text-xs font-mono text-muted-foreground">Yesterday</span>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="justify-center font-mono text-xs uppercase tracking-wide text-[#B99C20]"
              onClick={() => router.push("/admin/notifications")}
            >
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#1A1505] text-white">
                <User size={16} />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Admin User</p>
                <p className="text-xs leading-none text-muted-foreground">admin@forestoutfitters.com</p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/admin/profile")}>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => router.push("/admin/settings")}>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

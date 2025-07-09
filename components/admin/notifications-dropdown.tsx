"use client"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

// Mock notifications data
const mockNotifications = [
  {
    id: 1,
    title: "New Order",
    message: "Order #ORD-001 has been placed",
    time: "10 minutes ago",
    read: false,
    type: "order",
  },
  {
    id: 2,
    title: "Low Stock Alert",
    message: "Tactical Backpack is running low on stock",
    time: "1 hour ago",
    read: false,
    type: "inventory",
  },
  {
    id: 3,
    title: "New User Registration",
    message: "John Doe has created a new account",
    time: "3 hours ago",
    read: true,
    type: "user",
  },
]

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState(mockNotifications)

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-white/70 hover:text-white">
          <Bell size={20} />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-[#B99C20] text-black">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Notifications</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
              onClick={() => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))}
            >
              Mark all as read
            </Button>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                className={`flex flex-col items-start p-3 ${!notification.read ? "bg-[#1A1505]/30" : ""}`}
                onClick={() => markAsRead(notification.id)}
              >
                <div className="flex justify-between w-full">
                  <span className="font-medium text-sm">{notification.title}</span>
                  <span className="text-xs text-muted-foreground">{notification.time}</span>
                </div>
                <p className="text-xs mt-1 text-muted-foreground">{notification.message}</p>
              </DropdownMenuItem>
            ))
          ) : (
            <div className="text-center p-4 text-sm text-muted-foreground">No notifications</div>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="justify-center text-center cursor-pointer">
          <a href="/admin/notifications" className="w-full text-sm text-[#B99C20]">
            View all notifications
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

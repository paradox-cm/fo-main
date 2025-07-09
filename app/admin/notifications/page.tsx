"use client"

import { useState } from "react"
import { Bell, Check, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock notifications data
const initialNotifications = [
  {
    id: "1",
    title: "New Order Received",
    message: "Order #12345 has been placed for $129.99",
    time: "10 minutes ago",
    read: false,
    category: "orders",
  },
  {
    id: "2",
    title: "Low Stock Alert",
    message: "AI Camo Jacket is running low on stock (only 3 remaining)",
    time: "2 hours ago",
    read: false,
    category: "inventory",
  },
  {
    id: "3",
    title: "New User Registration",
    message: "John Doe (john.doe@example.com) has created an account",
    time: "Yesterday",
    read: true,
    category: "users",
  },
  {
    id: "4",
    title: "Payment Processed",
    message: "Payment for order #12340 was successfully processed ($89.99)",
    time: "2 days ago",
    read: true,
    category: "orders",
  },
  {
    id: "5",
    title: "Product Review",
    message: "New 5-star review for 'Tactical Backpack' from user Mike S.",
    time: "3 days ago",
    read: true,
    category: "products",
  },
  {
    id: "6",
    title: "Return Request",
    message: "Customer has requested a return for order #12335",
    time: "4 days ago",
    read: true,
    category: "orders",
  },
  {
    id: "7",
    title: "Blog Comment",
    message: "New comment on blog post 'Summer Gear Guide'",
    time: "5 days ago",
    read: true,
    category: "content",
  },
]

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [activeTab, setActiveTab] = useState("all")

  const filteredNotifications =
    activeTab === "all"
      ? notifications
      : activeTab === "unread"
        ? notifications.filter((n) => !n.read)
        : notifications.filter((n) => n.category === activeTab)

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
  }

  const deleteNotification = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id))
  }

  const clearAllNotifications = () => {
    setNotifications([])
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-tektur uppercase tracking-wide">Notifications</h1>
          <p className="text-muted-foreground font-sans">
            {unreadCount > 0 ? `You have ${unreadCount} unread notifications` : "All caught up!"}
          </p>
        </div>
        <div className="flex gap-2 self-end sm:self-auto">
          {unreadCount > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="h-9 border-[#B99C20] text-[#B99C20] hover:bg-[#1A1505] hover:text-[#ECD055] font-mono text-xs uppercase tracking-wide"
              onClick={markAllAsRead}
            >
              <Check className="mr-2 h-4 w-4" />
              Mark all as read
            </Button>
          )}
          <Button
            variant="outline"
            size="sm"
            className="h-9 border-red-500 text-red-500 hover:bg-red-950 hover:text-red-400 font-mono text-xs uppercase tracking-wide"
            onClick={clearAllNotifications}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Clear all
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <div className="overflow-x-auto pb-2">
          <TabsList className="bg-black/20 border border-[#242423]">
            <TabsTrigger
              value="all"
              className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#1A1505] data-[state=active]:text-[#B99C20]"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="unread"
              className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#1A1505] data-[state=active]:text-[#B99C20]"
            >
              Unread {unreadCount > 0 && `(${unreadCount})`}
            </TabsTrigger>
            <TabsTrigger
              value="orders"
              className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#1A1505] data-[state=active]:text-[#B99C20]"
            >
              Orders
            </TabsTrigger>
            <TabsTrigger
              value="inventory"
              className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#1A1505] data-[state=active]:text-[#B99C20]"
            >
              Inventory
            </TabsTrigger>
            <TabsTrigger
              value="users"
              className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#1A1505] data-[state=active]:text-[#B99C20]"
            >
              Users
            </TabsTrigger>
            <TabsTrigger
              value="content"
              className="font-mono text-xs uppercase tracking-wide data-[state=active]:bg-[#1A1505] data-[state=active]:text-[#B99C20]"
            >
              Content
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={cn(
                  "border-[#242423] bg-black/20 hover:bg-black/30 transition-colors",
                  !notification.read && "border-l-[#B99C20] border-l-4",
                )}
              >
                <CardHeader className="p-4 pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className={cn("text-lg font-tektur", !notification.read && "text-[#ECD055]")}>
                      {notification.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      {!notification.read && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[#B99C20] hover:text-[#ECD055] hover:bg-[#1A1505]"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <Check size={16} />
                          <span className="sr-only">Mark as read</span>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-400 hover:bg-red-950"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <Trash2 size={16} />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                  <CardDescription className="font-mono text-xs uppercase tracking-wide">
                    {notification.time}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">{notification.message}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="border-[#242423] bg-black/20">
              <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                <Bell size={48} className="text-muted-foreground mb-4" />
                <h3 className="text-xl font-tektur uppercase tracking-wide mb-2">No notifications</h3>
                <p className="text-muted-foreground">
                  {activeTab === "all"
                    ? "You don't have any notifications yet"
                    : `You don't have any ${activeTab === "unread" ? "unread" : activeTab} notifications`}
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Helper function to conditionally join class names
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Download, Search, Printer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock orders data
const mockOrders = [
  {
    id: "ORD-2023-1001",
    customer: {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    date: "2023-03-15T14:30:00Z",
    status: "completed",
    total: 249.99,
    items: [
      {
        id: 1,
        name: "Tactical Backpack",
        price: 129.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Combat Boots",
        price: 120.0,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    paymentMethod: "Credit Card",
    shippingMethod: "Standard Shipping",
  },
  {
    id: "ORD-2023-1002",
    customer: {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    date: "2023-03-14T10:15:00Z",
    status: "shipped",
    total: 189.99,
    items: [
      {
        id: 3,
        name: "Tactical Pants",
        price: 89.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 4,
        name: "Combat Gloves",
        price: 50.0,
        quantity: 2,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    paymentMethod: "PayPal",
    shippingMethod: "Express Shipping",
  },
  {
    id: "ORD-2023-1003",
    customer: {
      id: 3,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    date: "2023-03-13T16:45:00Z",
    status: "processing",
    total: 349.99,
    items: [
      {
        id: 5,
        name: "Tactical Jacket",
        price: 349.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    paymentMethod: "Credit Card",
    shippingMethod: "Standard Shipping",
  },
  {
    id: "ORD-2023-1004",
    customer: {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    date: "2023-03-12T09:30:00Z",
    status: "cancelled",
    total: 79.99,
    items: [
      {
        id: 6,
        name: "Hydration Pack",
        price: 79.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    paymentMethod: "Credit Card",
    shippingMethod: "Standard Shipping",
  },
  {
    id: "ORD-2023-1005",
    customer: {
      id: 5,
      name: "David Wilson",
      email: "david.wilson@example.com",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    date: "2023-03-11T11:20:00Z",
    status: "completed",
    total: 299.97,
    items: [
      {
        id: 7,
        name: "Tactical Vest",
        price: 149.99,
        quantity: 1,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 8,
        name: "Tactical Flashlight",
        price: 49.99,
        quantity: 3,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    paymentMethod: "PayPal",
    shippingMethod: "Express Shipping",
  },
]

export default function OrdersManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || order.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/30"
      case "processing":
        return "bg-blue-500/10 text-blue-500 border-blue-500/30"
      case "shipped":
        return "bg-[#B99C20]/10 text-[#B99C20] border-[#B99C20]/30"
      case "cancelled":
        return "bg-red-500/10 text-red-500 border-red-500/30"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-tektur uppercase tracking-wide">Orders</h1>
          <p className="text-muted-foreground font-sans">Manage customer orders</p>
        </div>
        <Button variant="outline" className="border-[#B99C20] text-[#B99C20] hover:bg-[#1A1505] hover:text-[#ECD055]">
          <Download className="mr-2 h-4 w-4" />
          Export Orders
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-black/20 border-[#242423] focus:border-[#B99C20]"
          />
        </div>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px] bg-black/20 border-[#242423] font-mono text-xs uppercase tracking-wide">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="bg-black border-[#242423]">
            <SelectItem value="all" className="font-mono text-xs uppercase tracking-wide">
              All Statuses
            </SelectItem>
            <SelectItem value="completed" className="font-mono text-xs uppercase tracking-wide">
              Completed
            </SelectItem>
            <SelectItem value="processing" className="font-mono text-xs uppercase tracking-wide">
              Processing
            </SelectItem>
            <SelectItem value="shipped" className="font-mono text-xs uppercase tracking-wide">
              Shipped
            </SelectItem>
            <SelectItem value="cancelled" className="font-mono text-xs uppercase tracking-wide">
              Cancelled
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredOrders.length > 0 ? (
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="border-[#242423] bg-black/20 hover:border-[#B99C20]/30 transition-colors">
              <CardHeader className="pb-3 flex flex-row justify-between items-start">
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3 border border-[#242423]">
                    <Image
                      src={order.customer.avatar || "/placeholder.svg"}
                      alt={order.customer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="font-tektur uppercase tracking-wide text-lg">{order.id}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <p className="text-sm font-sans">{order.customer.name}</p>
                      <p className="text-sm text-muted-foreground font-mono">{formatDate(order.date)}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={getStatusBadgeClass(order.status)}>
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                  <div className="text-lg font-mono text-[#B99C20]">{formatCurrency(order.total)}</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 bg-black/30 p-2 rounded-md">
                        <div className="relative w-12 h-12 rounded-md overflow-hidden border border-[#242423]">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {formatCurrency(item.price)} × {item.quantity}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap justify-between gap-4 text-sm">
                    <div>
                      <div className="font-mono text-xs text-muted-foreground uppercase">Payment Method</div>
                      <div>{order.paymentMethod}</div>
                    </div>

                    <div>
                      <div className="font-mono text-xs text-muted-foreground uppercase">Shipping Method</div>
                      <div>{order.shippingMethod}</div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/orders/${order.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Printer className="mr-2 h-4 w-4" />
                        Invoice
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-[#242423] rounded-md">
          <p className="text-muted-foreground mb-4 font-mono">No orders found</p>
        </div>
      )}
    </div>
  )
}

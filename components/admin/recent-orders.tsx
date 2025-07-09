"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { formatCurrency } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for recent orders
const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    email: "john.smith@example.com",
    amount: 129.99,
    status: "completed",
    date: "2023-03-15T14:30:00Z",
    items: ["Tactical Backpack"],
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    email: "sarah.j@example.com",
    amount: 249.99,
    status: "processing",
    date: "2023-03-15T10:15:00Z",
    items: ["Down Jacket", "Performance Polo"],
  },
  {
    id: "ORD-003",
    customer: "Michael Brown",
    email: "m.brown@example.com",
    amount: 199.99,
    status: "completed",
    date: "2023-03-14T16:45:00Z",
    items: ["Technical Shell"],
  },
  {
    id: "ORD-004",
    customer: "Emily Davis",
    email: "emily.d@example.com",
    amount: 89.99,
    status: "shipped",
    date: "2023-03-14T09:20:00Z",
    items: ["Tactical Polo"],
  },
  {
    id: "ORD-005",
    customer: "Robert Wilson",
    email: "r.wilson@example.com",
    amount: 159.99,
    status: "processing",
    date: "2023-03-13T13:10:00Z",
    items: ["Hunting Vest"],
  },
]

export function RecentOrders() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20 border-green-500/30"
      case "processing":
        return "bg-[#B99C20]/10 text-[#B99C20] hover:bg-[#B99C20]/20 border-[#B99C20]/30"
      case "shipped":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 border-blue-500/30"
      default:
        return "bg-gray-500/10 text-gray-500 hover:bg-gray-500/20 border-gray-500/30"
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  // Mobile view for orders
  const MobileOrderCard = ({ order }) => (
    <Card key={order.id} className="mb-4 border-[#242423] bg-black/20 hover:border-[#B99C20]/30 transition-colors">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-sm font-mono">{order.id}</CardTitle>
          <Badge variant="outline" className={getStatusColor(order.status)}>
            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center mb-3">
          <Avatar className="h-8 w-8 mr-2">
            <AvatarFallback className="bg-[#1A1505] text-[#B99C20] font-mono">
              {getInitials(order.customer)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">{order.customer}</div>
            <div className="text-xs text-muted-foreground font-mono">{order.email}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm mb-2">
          <div>
            <p className="text-xs text-muted-foreground font-mono">Products</p>
            <p className="font-sans">{order.items.join(", ")}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-mono">Amount</p>
            <p className="font-mono text-[#B99C20]">{formatCurrency(order.amount)}</p>
          </div>
        </div>

        <div>
          <p className="text-xs text-muted-foreground font-mono">Date</p>
          <p className="text-sm font-mono">{formatDate(order.date)}</p>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div>
      {/* Desktop view - table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#242423]">
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Order</th>
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Customer</th>
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Products</th>
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Amount</th>
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Status</th>
              <th className="text-left py-3 px-4 font-mono text-xs uppercase tracking-wide">Date</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b border-[#242423] hover:bg-[#1A1505]/10 transition-colors">
                <td className="py-3 px-4 text-sm font-mono">{order.id}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarFallback className="bg-[#1A1505] text-[#B99C20] font-mono">
                        {getInitials(order.customer)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{order.customer}</div>
                      <div className="text-xs text-muted-foreground font-mono">{order.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm font-sans">{order.items.join(", ")}</td>
                <td className="py-3 px-4 text-sm font-mono text-[#B99C20]">{formatCurrency(order.amount)}</td>
                <td className="py-3 px-4">
                  <Badge className={getStatusColor(order.status)} variant="outline">
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </Badge>
                </td>
                <td className="py-3 px-4 text-sm font-mono">{formatDate(order.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view - cards */}
      <div className="md:hidden">
        {recentOrders.map((order) => (
          <MobileOrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}

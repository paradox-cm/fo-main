"use client"

import { useUser } from "@/lib/user-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Package, Eye, FileText, Truck, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { formatCurrency } from "@/lib/utils"

// Mock order data
type OrderStatus = "processing" | "shipped" | "delivered" | "cancelled"

type OrderItem = {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  options?: { name: string; value: string }[]
}

type Order = {
  id: string
  date: string
  total: number
  status: OrderStatus
  trackingNumber?: string
  items: OrderItem[]
}

export default function OrdersPage() {
  const { user, isLoading } = useUser()
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [showDemo, setShowDemo] = useState(false)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/account")
    }
  }, [user, isLoading, router])

  // Load demo orders
  const loadDemoOrders = () => {
    const demoOrders: Order[] = [
      {
        id: "FO-10042",
        date: "March 15, 2024",
        total: 249.98,
        status: "delivered",
        trackingNumber: "1Z999AA10123456784",
        items: [
          {
            id: "prod_1",
            name: "AI-Enhanced Camo Jacket",
            price: 199.99,
            quantity: 1,
            image: "/images/ai-camo-jacket.png",
            options: [
              { name: "Size", value: "Large" },
              { name: "Color", value: "Forest Green" },
            ],
          },
          {
            id: "prod_2",
            name: "Wilderness Survival Kit",
            price: 49.99,
            quantity: 1,
            image: "/placeholder.svg?height=80&width=80",
            options: [{ name: "Type", value: "Standard" }],
          },
        ],
      },
      {
        id: "FO-10036",
        date: "February 28, 2024",
        total: 129.95,
        status: "shipped",
        trackingNumber: "1Z999AA10123456784",
        items: [
          {
            id: "prod_3",
            name: "Tactical Hiking Boots",
            price: 129.95,
            quantity: 1,
            image: "/placeholder.svg?height=80&width=80",
            options: [
              { name: "Size", value: "10" },
              { name: "Color", value: "Black" },
            ],
          },
        ],
      },
      {
        id: "FO-10021",
        date: "January 12, 2024",
        total: 89.97,
        status: "processing",
        items: [
          {
            id: "prod_4",
            name: "Thermal Base Layer Set",
            price: 89.97,
            quantity: 1,
            image: "/placeholder.svg?height=80&width=80",
            options: [
              { name: "Size", value: "Medium" },
              { name: "Color", value: "Black" },
            ],
          },
        ],
      },
    ]
    setOrders(demoOrders)
    setShowDemo(true)
  }

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case "processing":
        return (
          <span className="rounded-full bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-400">Processing</span>
        )
      case "shipped":
        return (
          <span className="rounded-full bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-400">Shipped</span>
        )
      case "delivered":
        return (
          <span className="rounded-full bg-green-900/30 px-2 py-1 text-xs font-medium text-green-400">Delivered</span>
        )
      case "cancelled":
        return <span className="rounded-full bg-red-900/30 px-2 py-1 text-xs font-medium text-red-400">Cancelled</span>
      default:
        return null
    }
  }

  const getStatusIcon = (status: OrderStatus) => {
    switch (status) {
      case "processing":
        return <Clock className="h-5 w-5 text-blue-400" />
      case "shipped":
        return <Truck className="h-5 w-5 text-purple-400" />
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case "cancelled":
        return <FileText className="h-5 w-5 text-red-400" />
      default:
        return null
    }
  }

  if (isLoading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#B99C20] border-t-transparent"></div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-[#222] bg-[#111] p-4 sm:p-6">
        <h1 className="mb-4 sm:mb-6 font-tektur text-xl sm:text-2xl uppercase tracking-wide text-[#B99C20]">
          Order History
        </h1>

        {orders.length > 0 || showDemo ? (
          <div className="space-y-6">
            {!showDemo && (
              <div className="mb-4 rounded-md bg-[#1A1A1A] p-3 text-sm text-gray-300">
                <p>You have no orders yet. Click below to see demo orders.</p>
              </div>
            )}

            {!showDemo && (
              <div className="flex justify-center">
                <Button variant="outline" onClick={loadDemoOrders}>
                  Show Demo Orders
                </Button>
              </div>
            )}

            {showDemo &&
              orders.map((order) => (
                <div key={order.id} className="overflow-hidden rounded-lg border border-[#222] bg-[#1A1A1A]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222] bg-[#151515] p-4">
                    <div className="mb-3 sm:mb-0 flex items-center space-x-4">
                      {getStatusIcon(order.status)}
                      <div>
                        <p className="text-sm text-gray-400">Order #{order.id}</p>
                        <p className="text-sm text-gray-400">Placed on {order.date}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      {getStatusBadge(order.status)}
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/account/orders/${order.id}`}>
                          <Eye className="mr-1 h-4 w-4" />
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="p-4">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="mb-4 flex flex-wrap items-center border-b border-[#222] pb-4 last:mb-0 last:border-0 last:pb-0"
                      >
                        <div className="mb-3 mr-4 h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-[#222] sm:mb-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <h3 className="text-base font-medium">
                                <Link href={`/shop/${item.id}`} className="hover:text-[#B99C20]">
                                  {item.name}
                                </Link>
                              </h3>
                              <div className="mt-1 flex flex-wrap gap-x-4 text-sm text-gray-400">
                                <p>Qty: {item.quantity}</p>
                                {item.options?.map((option) => (
                                  <p key={option.name}>
                                    {option.name}: {option.value}
                                  </p>
                                ))}
                              </div>
                            </div>
                            <p className="mt-2 text-sm font-medium text-[#B99C20]">{formatCurrency(item.price)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#222] bg-[#151515] p-4">
                    <div>
                      <p className="text-sm font-medium text-gray-300">
                        Total: <span className="text-[#B99C20]">{formatCurrency(order.total)}</span>
                      </p>
                    </div>
                    <div className="mt-3 sm:mt-0 flex flex-wrap gap-2">
                      {order.status === "shipped" && (
                        <Button variant="outline" size="sm">
                          <Truck className="mr-1 h-4 w-4" />
                          Track Package
                        </Button>
                      )}
                      {(order.status === "delivered" || order.status === "shipped") && (
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/account/returns/new?order=${order.id}`}>Return Items</Link>
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <FileText className="mr-1 h-4 w-4" />
                        Invoice
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="rounded-md bg-[#1A1A1A] p-6 sm:p-8 text-center">
            <Package className="mx-auto mb-3 h-10 sm:h-12 w-10 sm:w-12 text-gray-500" />
            <h2 className="mb-2 text-lg font-medium text-white">No orders yet</h2>
            <p className="mb-4 text-gray-400">
              You haven't placed any orders yet. Visit our shop to find products you'll love.
            </p>
            <Button variant="primary" asChild>
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

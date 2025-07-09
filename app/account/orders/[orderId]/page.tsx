"use client"

import { useUser } from "@/lib/user-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText, RotateCcw, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { formatCurrency } from "@/lib/utils"

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
  shippingAddress: {
    name: string
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  paymentMethod: {
    type: string
    last4?: string
  }
  timeline: {
    date: string
    status: string
    description: string
  }[]
}

export default function OrderDetailsPage({ params }: { params: { orderId: string } }) {
  const { user, isLoading } = useUser()
  const router = useRouter()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/account")
    } else {
      // Simulate API call to fetch order data
      setTimeout(() => {
        const mockOrder: Order = {
          id: params.orderId,
          date: "March 15, 2024",
          total: 249.98,
          status: "shipped",
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
          shippingAddress: {
            name: "John Doe",
            street: "123 Forest Lane",
            city: "Wilderness",
            state: "WA",
            zip: "98765",
            country: "United States",
          },
          paymentMethod: {
            type: "Credit Card",
            last4: "4242",
          },
          timeline: [
            {
              date: "March 15, 2024",
              status: "Order Placed",
              description: "Your order has been received and is being processed.",
            },
            {
              date: "March 16, 2024",
              status: "Payment Confirmed",
              description: "Your payment has been confirmed.",
            },
            {
              date: "March 17, 2024",
              status: "Order Shipped",
              description: "Your order has been shipped. You can track your package with the tracking number provided.",
            },
            {
              date: "Estimated March 22, 2024",
              status: "Delivery Expected",
              description: "Your order is expected to be delivered on this date.",
            },
          ],
        }
        setOrder(mockOrder)
        setLoading(false)
      }, 800)
    }
  }, [user, isLoading, router, params.orderId])

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

  if (isLoading || loading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#B99C20] border-t-transparent"></div>
      </div>
    )
  }

  if (!user || !order) return null

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-[#222] bg-[#111] p-6">
        <div className="mb-6 flex items-center">
          <Button variant="ghost" size="sm" onClick={() => router.push("/account/orders")} className="mr-3">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="font-tektur text-2xl uppercase tracking-wide text-[#B99C20]">Order Details</h1>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between rounded-md bg-[#1A1A1A] p-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-medium">Order #{order.id}</h2>
                {getStatusBadge(order.status)}
              </div>
              <p className="text-sm text-gray-400">Placed on {order.date}</p>
              {order.trackingNumber && (
                <p className="text-sm text-gray-400">
                  Tracking: <span className="font-mono">{order.trackingNumber}</span>
                </p>
              )}
            </div>

            <div className="mt-3 flex gap-2 sm:mt-0">
              {order.status === "shipped" && (
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Truck className="h-4 w-4" />
                  Track Package
                </Button>
              )}
              {(order.status === "delivered" || order.status === "shipped") && (
                <Button variant="outline" size="sm" asChild className="flex items-center gap-1">
                  <Link href={`/account/returns/new?order=${order.id}`}>
                    <RotateCcw className="h-4 w-4" />
                    Return Items
                  </Link>
                </Button>
              )}
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Invoice
              </Button>
            </div>
          </div>

          <div className="rounded-md bg-[#1A1A1A] p-4">
            <h3 className="mb-3 text-lg font-medium">Order Items</h3>

            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap items-center border-b border-[#222] pb-4 last:border-0 last:pb-0"
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

            <div className="mt-4 border-t border-[#222] pt-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatCurrency(order.total - 10)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>{formatCurrency(10)}</span>
              </div>
              <div className="mt-2 flex justify-between font-medium">
                <span>Total</span>
                <span className="text-[#B99C20]">{formatCurrency(order.total)}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-md bg-[#1A1A1A] p-4">
              <h3 className="mb-3 text-lg font-medium">Shipping Address</h3>
              <p className="font-medium">{order.shippingAddress.name}</p>
              <p className="text-sm text-gray-400">{order.shippingAddress.street}</p>
              <p className="text-sm text-gray-400">
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
              </p>
              <p className="text-sm text-gray-400">{order.shippingAddress.country}</p>
            </div>

            <div className="rounded-md bg-[#1A1A1A] p-4">
              <h3 className="mb-3 text-lg font-medium">Payment Method</h3>
              <p className="font-medium">{order.paymentMethod.type}</p>
              {order.paymentMethod.last4 && (
                <p className="text-sm text-gray-400">Ending in {order.paymentMethod.last4}</p>
              )}
            </div>
          </div>

          <div className="rounded-md bg-[#1A1A1A] p-4">
            <h3 className="mb-4 text-lg font-medium">Order Timeline</h3>

            <div className="relative">
              {order.timeline.map((event, index) => (
                <div key={index} className="mb-6 flex last:mb-0">
                  <div className="mr-4 flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        !event.date.includes("Estimated") ? "bg-[#B99C20]" : "bg-[#222]"
                      }`}
                    >
                      <span className="text-xs font-bold text-black">{index + 1}</span>
                    </div>
                    {index < order.timeline.length - 1 && <div className="mt-1 h-full w-0.5 bg-[#222]"></div>}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{event.status}</p>
                    <p className="text-sm text-gray-400">{event.date}</p>
                    <p className="mt-1 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md bg-[#1A1A1A] p-4">
            <h3 className="mb-3 text-lg font-medium">Need Help?</h3>
            <p className="text-sm text-gray-300">
              If you have any questions about your order, please contact our customer support team.
            </p>
            <Button variant="outline" size="sm" className="mt-3" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Save, Printer, Truck, Mail, Download } from "lucide-react"
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
      phone: "+1 (555) 123-4567",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    date: "2023-03-15T14:30:00Z",
    status: "completed",
    total: 249.99,
    subtotal: 229.99,
    tax: 20.0,
    shipping: 0,
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
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
    },
    billingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
    },
    paymentMethod: "Credit Card",
    paymentDetails: {
      cardType: "Visa",
      lastFour: "4242",
      expiryDate: "04/25",
    },
    shippingMethod: "Standard Shipping",
    trackingNumber: "TRK123456789",
    notes: "Customer requested gift wrapping.",
    history: [
      {
        date: "2023-03-15T14:30:00Z",
        status: "completed",
        note: "Order delivered",
      },
      {
        date: "2023-03-12T09:15:00Z",
        status: "shipped",
        note: "Order shipped via USPS",
      },
      {
        date: "2023-03-10T16:45:00Z",
        status: "processing",
        note: "Payment confirmed",
      },
      {
        date: "2023-03-10T14:30:00Z",
        status: "pending",
        note: "Order placed",
      },
    ],
  },
  // Other orders would be here
]

export default function OrderDetail({ params }: { params: { orderId: string } }) {
  const { orderId } = params
  const [order, setOrder] = useState(null)
  const [status, setStatus] = useState("")
  const [trackingNumber, setTrackingNumber] = useState("")
  const [note, setNote] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  // Load mock data
  useEffect(() => {
    const foundOrder = mockOrders.find((o) => o.id === orderId)
    if (foundOrder) {
      setOrder(foundOrder)
      setStatus(foundOrder.status)
      setTrackingNumber(foundOrder.trackingNumber || "")
    }
  }, [orderId])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

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
      case "pending":
        return "bg-gray-500/10 text-gray-500 border-gray-500/30"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/30"
    }
  }

  const handleUpdateOrder = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Update order with new status and tracking number
    if (order) {
      const updatedOrder = {
        ...order,
        status,
        trackingNumber,
        history: [
          {
            date: new Date().toISOString(),
            status,
            note: note || `Status updated to ${status}`,
          },
          ...order.history,
        ],
      }
      setOrder(updatedOrder)
      setNote("")
    }

    setIsSaving(false)
  }

  if (!order) {
    return <div>Loading order...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/admin/orders">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-tektur uppercase tracking-wide">Order {order.id}</h1>
            <p className="text-muted-foreground font-sans">{formatDate(order.date)}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Email Customer
          </Button>
          <Button variant="outline">
            <Printer className="mr-2 h-4 w-4" />
            Print Invoice
          </Button>
          <Button className="bg-[#B99C20] text-black hover:bg-[#ECD055]">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-[#242423] bg-black/20">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="font-tektur uppercase tracking-wide">Order Items</CardTitle>
                <Badge variant="outline" className={getStatusBadgeClass(order.status)}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-3 border border-[#242423] rounded-md">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden border border-[#242423]">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {formatCurrency(item.price)} × {item.quantity}
                      </div>
                    </div>
                    <div className="text-right font-mono text-[#B99C20]">
                      {formatCurrency(item.price * item.quantity)}
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-[#242423]">
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-mono">{formatCurrency(order.subtotal)}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="font-mono">{formatCurrency(order.tax)}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-mono">{order.shipping === 0 ? "Free" : formatCurrency(order.shipping)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-t border-[#242423] mt-2">
                    <span className="font-medium">Total</span>
                    <span className="font-mono text-[#B99C20] text-lg">{formatCurrency(order.total)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="border-[#242423] bg-black/20">
              <CardHeader className="pb-3">
                <CardTitle className="font-tektur uppercase tracking-wide">Customer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#242423]">
                    <Image
                      src={order.customer.avatar || "/placeholder.svg"}
                      alt={order.customer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{order.customer.name}</div>
                    <div className="text-sm text-muted-foreground">{order.customer.email}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Phone</div>
                    <div>{order.customer.phone}</div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Customer ID</div>
                    <div className="font-mono">#{order.customer.id}</div>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href={`/admin/users/${order.customer.id}`}>View Customer</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#242423] bg-black/20">
              <CardHeader className="pb-3">
                <CardTitle className="font-tektur uppercase tracking-wide">Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Address</div>
                    <div>{order.shippingAddress.street}</div>
                    <div>
                      {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                    </div>
                    <div>{order.shippingAddress.country}</div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Method</div>
                    <div>{order.shippingMethod}</div>
                  </div>

                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Tracking Number</div>
                    <div className="font-mono">{order.trackingNumber || "Not available"}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-[#242423] bg-black/20 mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="font-tektur uppercase tracking-wide">Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {order.history.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full bg-[#B99C20]"></div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                        <div className="font-medium capitalize">{event.status}</div>
                        <div className="text-sm text-muted-foreground font-mono">{formatDate(event.date)}</div>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{event.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-[#242423] bg-black/20">
            <CardHeader className="pb-3">
              <CardTitle className="font-tektur uppercase tracking-wide">Update Order</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 font-mono">Status</label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="bg-black/20 border-[#242423]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-[#242423]">
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="processing">Processing</SelectItem>
                      <SelectItem value="shipped">Shipped</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 font-mono">Tracking Number</label>
                  <Input
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter tracking number"
                    className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 font-mono">Note</label>
                  <Textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Add a note about this update"
                    rows={3}
                    className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>

                <Button
                  onClick={handleUpdateOrder}
                  disabled={isSaving}
                  className="w-full bg-[#B99C20] text-black hover:bg-[#ECD055]"
                >
                  {isSaving ? (
                    <>Saving...</>
                  ) : (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Update Order
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#242423] bg-black/20 mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="font-tektur uppercase tracking-wide">Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <div className="text-xs text-muted-foreground font-mono">Method</div>
                  <div>{order.paymentMethod}</div>
                </div>

                {order.paymentDetails && (
                  <div>
                    <div className="text-xs text-muted-foreground font-mono">Card</div>
                    <div>
                      {order.paymentDetails.cardType} ending in {order.paymentDetails.lastFour}
                    </div>
                    <div className="text-xs text-muted-foreground">Expires {order.paymentDetails.expiryDate}</div>
                  </div>
                )}

                <div>
                  <div className="text-xs text-muted-foreground font-mono">Billing Address</div>
                  <div>{order.billingAddress.street}</div>
                  <div>
                    {order.billingAddress.city}, {order.billingAddress.state} {order.billingAddress.zip}
                  </div>
                  <div>{order.billingAddress.country}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[#242423] bg-black/20 mt-6">
            <CardHeader className="pb-3">
              <CardTitle className="font-tektur uppercase tracking-wide">Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Printer className="mr-2 h-4 w-4" />
                  Print Invoice
                </Button>

                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Invoice
                </Button>

                <Button variant="outline" className="w-full">
                  <Truck className="mr-2 h-4 w-4" />
                  Shipping Label
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

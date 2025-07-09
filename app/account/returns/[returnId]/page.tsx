"use client"

import { useUser } from "@/lib/user-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Printer, Truck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { formatCurrency } from "@/lib/utils"

type ReturnStatus = "pending" | "approved" | "processing" | "completed" | "rejected"

type ReturnItem = {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  reason: string
}

type Return = {
  id: string
  orderId: string
  orderDate: string
  returnDate: string
  status: ReturnStatus
  items: ReturnItem[]
  refundAmount: number
  trackingNumber?: string
  timeline: {
    date: string
    status: string
    description: string
  }[]
}

export default function ReturnDetailsPage({ params }: { params: { returnId: string } }) {
  const { user, isLoading } = useUser()
  const router = useRouter()
  const [returnData, setReturnData] = useState<Return | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/account")
    } else {
      // Simulate API call to fetch return data
      setTimeout(() => {
        const mockReturn: Return = {
          id: params.returnId,
          orderId: "FO-10042",
          orderDate: "March 15, 2024",
          returnDate: "March 20, 2024",
          status: "approved",
          items: [
            {
              id: "prod_1",
              name: "AI-Enhanced Camo Jacket",
              price: 199.99,
              quantity: 1,
              image: "/images/ai-camo-jacket.png",
              reason: "Wrong size",
            },
          ],
          refundAmount: 199.99,
          trackingNumber: "1Z999AA10123456784",
          timeline: [
            {
              date: "March 20, 2024",
              status: "Return Requested",
              description: "Your return request has been submitted.",
            },
            {
              date: "March 21, 2024",
              status: "Return Approved",
              description:
                "Your return has been approved. Please use the provided shipping label to send your items back.",
            },
            {
              date: "Pending",
              status: "Items Received",
              description: "We'll update this when we receive your returned items.",
            },
            {
              date: "Pending",
              status: "Refund Processed",
              description: "Your refund will be processed after we inspect your returned items.",
            },
          ],
        }
        setReturnData(mockReturn)
        setLoading(false)
      }, 800)
    }
  }, [user, isLoading, router, params.returnId])

  const getStatusBadge = (status: ReturnStatus) => {
    switch (status) {
      case "pending":
        return (
          <span className="rounded-full bg-yellow-900/30 px-2 py-1 text-xs font-medium text-yellow-400">
            Pending Review
          </span>
        )
      case "approved":
        return <span className="rounded-full bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-400">Approved</span>
      case "processing":
        return (
          <span className="rounded-full bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-400">
            Processing
          </span>
        )
      case "completed":
        return (
          <span className="rounded-full bg-green-900/30 px-2 py-1 text-xs font-medium text-green-400">Completed</span>
        )
      case "rejected":
        return <span className="rounded-full bg-red-900/30 px-2 py-1 text-xs font-medium text-red-400">Rejected</span>
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

  if (!user || !returnData) return null

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-[#222] bg-[#111] p-6">
        <div className="mb-6 flex items-center">
          <Button variant="ghost" size="sm" onClick={() => router.push("/account/returns")} className="mr-3">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="font-tektur text-2xl uppercase tracking-wide text-[#B99C20]">Return Details</h1>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between rounded-md bg-[#1A1A1A] p-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-medium">Return #{returnData.id}</h2>
                {getStatusBadge(returnData.status)}
              </div>
              <p className="text-sm text-gray-400">For Order #{returnData.orderId}</p>
              <p className="text-sm text-gray-400">Requested on {returnData.returnDate}</p>
            </div>

            {returnData.status === "approved" && (
              <div className="mt-3 flex gap-2 sm:mt-0">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Printer className="h-4 w-4" />
                  Print Label
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Truck className="h-4 w-4" />
                  Track Return
                </Button>
              </div>
            )}
          </div>

          <div className="rounded-md bg-[#1A1A1A] p-4">
            <h3 className="mb-3 text-lg font-medium">Return Items</h3>

            <div className="space-y-4">
              {returnData.items.map((item) => (
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
                        <h3 className="text-base font-medium">{item.name}</h3>
                        <div className="mt-1 flex flex-wrap gap-x-4 text-sm text-gray-400">
                          <p>Qty: {item.quantity}</p>
                          <p>Reason: {item.reason}</p>
                        </div>
                      </div>
                      <p className="mt-2 text-sm font-medium text-[#B99C20]">{formatCurrency(item.price)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t border-[#222] pt-4">
              <p className="text-sm font-medium text-gray-300">
                Refund Amount: <span className="text-[#B99C20]">{formatCurrency(returnData.refundAmount)}</span>
              </p>
              <p className="text-xs text-gray-400">
                Refunds typically take 5-10 business days to appear on your statement after processing.
              </p>
            </div>
          </div>

          <div className="rounded-md bg-[#1A1A1A] p-4">
            <h3 className="mb-4 text-lg font-medium">Return Timeline</h3>

            <div className="relative">
              {returnData.timeline.map((event, index) => (
                <div key={index} className="mb-6 flex last:mb-0">
                  <div className="mr-4 flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        event.date !== "Pending" ? "bg-[#B99C20]" : "bg-[#222]"
                      }`}
                    >
                      <span className="text-xs font-bold text-black">{index + 1}</span>
                    </div>
                    {index < returnData.timeline.length - 1 && <div className="mt-1 h-full w-0.5 bg-[#222]"></div>}
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
              If you have any questions about your return, please contact our customer support team.
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

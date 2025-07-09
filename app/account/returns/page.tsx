"use client"

import { useUser } from "@/lib/user-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { RotateCcw, Plus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
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
}

export default function ReturnsPage() {
  const { user, isLoading } = useUser()
  const router = useRouter()
  const [returns, setReturns] = useState<Return[]>([])

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/account")
    }
  }, [user, isLoading, router])

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
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-between">
          <h1 className="mb-3 sm:mb-0 font-tektur text-xl sm:text-2xl uppercase tracking-wide text-[#B99C20]">
            Returns & Exchanges
          </h1>
          <Button variant="outline" size="sm" asChild className="flex items-center gap-1">
            <Link href="/account/returns/new">
              <Plus className="h-4 w-4" />
              Start New Return
            </Link>
          </Button>
        </div>

        {returns.length > 0 ? (
          <div className="space-y-4">
            {returns.map((returnItem) => (
              <div key={returnItem.id} className="overflow-hidden rounded-lg border border-[#222] bg-[#1A1A1A]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#222] bg-[#151515] p-4">
                  <div className="mb-3 sm:mb-0">
                    <p className="text-sm text-gray-400">Return #{returnItem.id}</p>
                    <p className="text-sm text-gray-400">For Order #{returnItem.orderId}</p>
                    <p className="text-sm text-gray-400">Requested on {returnItem.returnDate}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    {getStatusBadge(returnItem.status)}
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/account/returns/${returnItem.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>

                <div className="p-4">
                  {returnItem.items.map((item) => (
                    <div
                      key={item.id}
                      className="mb-4 flex flex-wrap items-center border-b border-[#222] pb-4 last:mb-0 last:border-0 last:pb-0"
                    >
                      <div className="mb-3 mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-[#222] sm:mb-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
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

                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#222] bg-[#151515] p-4">
                  <div>
                    <p className="text-sm font-medium text-gray-300">
                      Refund Amount: <span className="text-[#B99C20]">{formatCurrency(returnItem.refundAmount)}</span>
                    </p>
                  </div>
                  {returnItem.status === "approved" && (
                    <div className="mt-3 sm:mt-0">
                      <Button variant="outline" size="sm">
                        Print Return Label
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-md bg-[#1A1A1A] p-6 text-center">
            <RotateCcw className="mx-auto mb-2 h-10 w-10 text-gray-500" />
            <p className="mb-2 text-gray-300">You don't have any returns or exchanges</p>
            <div className="space-y-2">
              <Button variant="primary" asChild>
                <Link href="/account/returns/new">Start a Return</Link>
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <Link href="/account/orders" className="flex items-center hover:text-[#B99C20]">
                  View your orders <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

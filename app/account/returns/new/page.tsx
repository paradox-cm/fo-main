"use client"

import { useUser } from "@/lib/user-context"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Package, Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { formatCurrency } from "@/lib/utils"

// Mock order data
type OrderItem = {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  options?: { name: string; value: string }[]
  selected?: boolean
  returnReason?: string
  returnQuantity?: number
}

type Order = {
  id: string
  date: string
  total: number
  items: OrderItem[]
}

export default function NewReturnPage() {
  const { user, isLoading } = useUser()
  const router = useRouter()
  const searchParams = useSearchParams()
  const orderId = searchParams.get("order")

  const [orderNumber, setOrderNumber] = useState(orderId || "")
  const [searchError, setSearchError] = useState("")
  const [order, setOrder] = useState<Order | null>(null)
  const [step, setStep] = useState<"search" | "select" | "details" | "review" | "confirmation">("search")

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/account")
    }

    // If order ID is provided in URL, simulate finding the order
    if (orderId) {
      handleFindOrder()
    }
  }, [user, isLoading, router, orderId])

  const handleFindOrder = () => {
    setSearchError("")

    // For demo purposes, we'll create a mock order
    if (orderNumber) {
      // Simulate API call
      setTimeout(() => {
        const mockOrder: Order = {
          id: orderNumber,
          date: "March 15, 2024",
          total: 249.98,
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
              selected: false,
              returnQuantity: 0,
            },
            {
              id: "prod_2",
              name: "Wilderness Survival Kit",
              price: 49.99,
              quantity: 1,
              image: "/placeholder.svg?height=80&width=80",
              options: [{ name: "Type", value: "Standard" }],
              selected: false,
              returnQuantity: 0,
            },
          ],
        }

        setOrder(mockOrder)
        setStep("select")
      }, 500)
    } else {
      setSearchError("Please enter an order number")
    }
  }

  const toggleItemSelection = (itemId: string) => {
    if (order) {
      setOrder({
        ...order,
        items: order.items.map((item) =>
          item.id === itemId ? { ...item, selected: !item.selected, returnQuantity: !item.selected ? 1 : 0 } : item,
        ),
      })
    }
  }

  const updateReturnQuantity = (itemId: string, quantity: number) => {
    if (order) {
      setOrder({
        ...order,
        items: order.items.map((item) => (item.id === itemId ? { ...item, returnQuantity: quantity } : item)),
      })
    }
  }

  const updateReturnReason = (itemId: string, reason: string) => {
    if (order) {
      setOrder({
        ...order,
        items: order.items.map((item) => (item.id === itemId ? { ...item, returnReason: reason } : item)),
      })
    }
  }

  const handleContinueToDetails = () => {
    const hasSelectedItems = order?.items.some((item) => item.selected)
    if (hasSelectedItems) {
      setStep("details")
    } else {
      setSearchError("Please select at least one item to return")
    }
  }

  const handleContinueToReview = () => {
    // Check if all selected items have a reason
    const allItemsHaveReason = order?.items.filter((item) => item.selected).every((item) => item.returnReason)

    if (allItemsHaveReason) {
      setStep("review")
    } else {
      setSearchError("Please provide a reason for each item you're returning")
    }
  }

  const handleSubmitReturn = () => {
    // Simulate API call to submit return
    setTimeout(() => {
      setStep("confirmation")
    }, 1000)
  }

  const calculateRefundTotal = () => {
    if (!order) return 0
    return order.items
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * (item.returnQuantity || 0), 0)
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
      <div className="rounded-lg border border-[#222] bg-[#111] p-6">
        <div className="mb-6 flex items-center">
          {step !== "search" && step !== "confirmation" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setStep(step === "review" ? "details" : step === "details" ? "select" : "search")}
              className="mr-3"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          <h1 className="font-tektur text-2xl uppercase tracking-wide text-[#B99C20]">
            {step === "confirmation" ? "Return Submitted" : "Start a Return"}
          </h1>
        </div>

        {searchError && <div className="mb-4 rounded-md bg-red-900/20 p-3 text-sm text-red-400">{searchError}</div>}

        {step === "search" && (
          <div className="space-y-6">
            <div className="rounded-md bg-[#1A1A1A] p-6">
              <h2 className="mb-4 text-lg font-medium">Find your order</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="orderNumber" className="mb-1 block text-sm font-medium text-gray-200">
                    Order Number
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="orderNumber"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      placeholder="e.g. FO-10042"
                      className="border-[#333] bg-[#0D0D0D]"
                    />
                    <Button onClick={handleFindOrder} className="flex items-center gap-1">
                      <Search className="h-4 w-4" />
                      Find
                    </Button>
                  </div>
                </div>

                <div className="rounded-md bg-[#222] p-3 text-sm text-gray-300">
                  <p>Don't know your order number?</p>
                  <p className="mt-1">
                    You can find it in your order confirmation email or by visiting your{" "}
                    <Link href="/account/orders" className="text-[#B99C20] hover:underline">
                      order history
                    </Link>
                    .
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-400">For demo purposes, enter any order number</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === "select" && order && (
          <div className="space-y-6">
            <div className="rounded-md bg-[#1A1A1A] p-6">
              <h2 className="mb-4 text-lg font-medium">Select items to return</h2>
              <div className="mb-4 rounded-md bg-[#222] p-3 text-sm">
                <p className="font-medium">Order #{order.id}</p>
                <p className="text-gray-400">Placed on {order.date}</p>
              </div>

              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex cursor-pointer items-start rounded-md border p-4 transition-colors ${
                      item.selected
                        ? "border-[#B99C20] bg-[#B99C20]/5"
                        : "border-[#222] bg-[#151515] hover:border-gray-500"
                    }`}
                    onClick={() => toggleItemSelection(item.id)}
                  >
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => toggleItemSelection(item.id)}
                      className="mt-1 h-4 w-4 rounded border-gray-600 bg-[#0D0D0D] text-[#B99C20]"
                    />
                    <div className="ml-3 flex flex-1 flex-wrap">
                      <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-[#222]">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-medium">{item.name}</h3>
                        <div className="mt-1 flex flex-wrap gap-x-4 text-sm text-gray-400">
                          {item.options?.map((option) => (
                            <p key={option.name}>
                              {option.name}: {option.value}
                            </p>
                          ))}
                        </div>
                        <p className="mt-1 text-sm font-medium text-[#B99C20]">{formatCurrency(item.price)}</p>
                      </div>

                      {item.selected && (
                        <div className="mt-3 w-full">
                          <label className="mb-1 block text-sm font-medium text-gray-200">Quantity to Return</label>
                          <select
                            value={item.returnQuantity}
                            onChange={(e) => {
                              e.stopPropagation()
                              updateReturnQuantity(item.id, Number.parseInt(e.target.value))
                            }}
                            className="rounded-md border border-[#333] bg-[#0D0D0D] px-3 py-1 text-sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {Array.from({ length: item.quantity }, (_, i) => i + 1).map((num) => (
                              <option key={num} value={num}>
                                {num}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={handleContinueToDetails} disabled={!order.items.some((item) => item.selected)}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === "details" && order && (
          <div className="space-y-6">
            <div className="rounded-md bg-[#1A1A1A] p-6">
              <h2 className="mb-4 text-lg font-medium">Return details</h2>

              <div className="space-y-6">
                {order.items
                  .filter((item) => item.selected)
                  .map((item) => (
                    <div key={item.id} className="rounded-md border border-[#222] bg-[#151515] p-4">
                      <div className="flex items-start">
                        <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-[#222]">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-400">Quantity: {item.returnQuantity}</p>
                          <p className="text-sm font-medium text-[#B99C20]">{formatCurrency(item.price)}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="mb-1 block text-sm font-medium text-gray-200">Reason for Return</label>
                        <select
                          value={item.returnReason || ""}
                          onChange={(e) => updateReturnReason(item.id, e.target.value)}
                          className="w-full rounded-md border border-[#333] bg-[#0D0D0D] px-3 py-2 text-sm"
                        >
                          <option value="">Select a reason</option>
                          <option value="Wrong size">Wrong size</option>
                          <option value="Wrong item">Wrong item</option>
                          <option value="Damaged">Damaged</option>
                          <option value="Defective">Defective</option>
                          <option value="Not as described">Not as described</option>
                          <option value="Changed mind">Changed mind</option>
                          <option value="Other">Other</option>
                        </select>

                        {item.returnReason === "Other" && (
                          <div className="mt-2">
                            <label className="mb-1 block text-sm font-medium text-gray-200">Additional Details</label>
                            <Textarea
                              placeholder="Please provide more details about your return reason"
                              className="border-[#333] bg-[#0D0D0D]"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={handleContinueToReview}>Continue to Review</Button>
              </div>
            </div>
          </div>
        )}

        {step === "review" && order && (
          <div className="space-y-6">
            <div className="rounded-md bg-[#1A1A1A] p-6">
              <h2 className="mb-4 text-lg font-medium">Review your return</h2>

              <div className="mb-4 rounded-md bg-[#222] p-4">
                <h3 className="mb-2 font-medium">Return Summary</h3>
                <p className="text-sm text-gray-400">Order #{order.id}</p>
                <p className="text-sm text-gray-400">Placed on {order.date}</p>
                <p className="mt-2 text-sm">
                  Items to return:{" "}
                  <span className="font-medium">{order.items.filter((item) => item.selected).length}</span>
                </p>
                <p className="text-sm">
                  Refund total:{" "}
                  <span className="font-medium text-[#B99C20]">{formatCurrency(calculateRefundTotal())}</span>
                </p>
              </div>

              <div className="space-y-4">
                {order.items
                  .filter((item) => item.selected)
                  .map((item) => (
                    <div key={item.id} className="rounded-md border border-[#222] bg-[#151515] p-4">
                      <div className="flex items-start">
                        <div className="mr-4 h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-[#222]">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-base font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-400">Quantity: {item.returnQuantity}</p>
                          <p className="text-sm text-gray-400">Reason: {item.returnReason}</p>
                          <p className="mt-1 text-sm font-medium text-[#B99C20]">
                            {formatCurrency(item.price * (item.returnQuantity || 0))}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-6 rounded-md bg-[#222] p-4">
                <h3 className="mb-2 font-medium">Return Instructions</h3>
                <ol className="ml-5 list-decimal space-y-2 text-sm text-gray-300">
                  <li>Once your return is approved, you'll receive a return shipping label via email.</li>
                  <li>Package your items securely in their original packaging if possible.</li>
                  <li>Attach the shipping label to your package.</li>
                  <li>Drop off your package at any authorized shipping location.</li>
                  <li>Your refund will be processed once we receive and inspect your return.</li>
                </ol>
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={handleSubmitReturn} variant="primary">
                  Submit Return Request
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === "confirmation" && (
          <div className="rounded-md bg-[#1A1A1A] p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-900/20">
              <Package className="h-8 w-8 text-green-400" />
            </div>
            <h2 className="mb-2 text-xl font-medium">Return Request Submitted</h2>
            <p className="mb-6 text-gray-400">
              We've received your return request and will review it shortly. You'll receive an email with further
              instructions.
            </p>
            <div className="space-y-3">
              <Button variant="primary" asChild className="w-full sm:w-auto">
                <Link href="/account/returns">View My Returns</Link>
              </Button>
              <Button variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/account">Back to Account</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

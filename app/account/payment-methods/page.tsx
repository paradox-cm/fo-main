"use client"

import type React from "react"

import { useUser } from "@/lib/user-context"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { CreditCard, Plus, Trash2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type PaymentMethod = {
  id: string
  type: "credit" | "paypal"
  lastFour?: string
  expiryMonth?: string
  expiryYear?: string
  cardType?: "visa" | "mastercard" | "amex" | "discover"
  isDefault: boolean
  email?: string
}

export default function PaymentMethodsPage() {
  const { user, isLoading } = useUser()
  const router = useRouter()
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([])
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    isDefault: false,
  })

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/account")
    }
  }, [user, isLoading, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const handleAddNew = () => {
    setIsAddingNew(true)
    setFormData({
      cardNumber: "",
      cardName: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      isDefault: paymentMethods.length === 0,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.cardNumber || !formData.cardName || !formData.expiryMonth || !formData.expiryYear || !formData.cvv) {
      return
    }

    // Determine card type based on first digit
    let cardType: "visa" | "mastercard" | "amex" | "discover" = "visa"
    const firstDigit = formData.cardNumber.charAt(0)
    if (firstDigit === "4") cardType = "visa"
    else if (firstDigit === "5") cardType = "mastercard"
    else if (firstDigit === "3") cardType = "amex"
    else if (firstDigit === "6") cardType = "discover"

    // Create new payment method
    const newPaymentMethod: PaymentMethod = {
      id: `pm_${Date.now()}`,
      type: "credit",
      lastFour: formData.cardNumber.slice(-4),
      expiryMonth: formData.expiryMonth,
      expiryYear: formData.expiryYear,
      cardType,
      isDefault: formData.isDefault,
    }

    // If this is set as default, update other payment methods
    let updatedPaymentMethods = [...paymentMethods]
    if (formData.isDefault) {
      updatedPaymentMethods = updatedPaymentMethods.map((method) => ({
        ...method,
        isDefault: false,
      }))
    }

    setPaymentMethods([...updatedPaymentMethods, newPaymentMethod])
    setIsAddingNew(false)
  }

  const handleDelete = (id: string) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id))
  }

  const setAsDefault = (id: string) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )
  }

  const getCardIcon = (cardType: "visa" | "mastercard" | "amex" | "discover") => {
    switch (cardType) {
      case "visa":
        return "V"
      case "mastercard":
        return "M"
      case "amex":
        return "A"
      case "discover":
        return "D"
      default:
        return "C"
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
            Payment Methods
          </h1>
          <Button variant="outline" size="sm" onClick={handleAddNew} className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>

        {isAddingNew && (
          <div className="mb-6 rounded-md border border-[#222] bg-[#1A1A1A] p-4">
            <h2 className="mb-4 text-lg font-medium">Add New Payment Method</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="cardName" className="mb-1 block text-sm font-medium text-gray-200">
                    Name on Card
                  </label>
                  <Input
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="border-[#333] bg-[#0D0D0D]"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="cardNumber" className="mb-1 block text-sm font-medium text-gray-200">
                    Card Number
                  </label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="border-[#333] bg-[#0D0D0D]"
                    placeholder="•••• •••• •••• ••••"
                    maxLength={16}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="expiryMonth" className="mb-1 block text-sm font-medium text-gray-200">
                    Expiry Month
                  </label>
                  <Input
                    id="expiryMonth"
                    name="expiryMonth"
                    value={formData.expiryMonth}
                    onChange={handleInputChange}
                    className="border-[#333] bg-[#0D0D0D]"
                    placeholder="MM"
                    maxLength={2}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="expiryYear" className="mb-1 block text-sm font-medium text-gray-200">
                    Expiry Year
                  </label>
                  <Input
                    id="expiryYear"
                    name="expiryYear"
                    value={formData.expiryYear}
                    onChange={handleInputChange}
                    className="border-[#333] bg-[#0D0D0D]"
                    placeholder="YY"
                    maxLength={2}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cvv" className="mb-1 block text-sm font-medium text-gray-200">
                    CVV
                  </label>
                  <Input
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="border-[#333] bg-[#0D0D0D]"
                    placeholder="•••"
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isDefault"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleInputChange}
                  className="h-4 w-4 rounded border-gray-600 bg-[#0D0D0D] text-[#B99C20]"
                />
                <label htmlFor="isDefault" className="ml-2 text-sm text-gray-300">
                  Set as default payment method
                </label>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button type="submit" variant="primary">
                  Add Payment Method
                </Button>
                <Button type="button" variant="outline" onClick={() => setIsAddingNew(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        {paymentMethods.length > 0 ? (
          <div className="space-y-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={cn(
                  "relative rounded-md border bg-[#1A1A1A] p-4",
                  method.isDefault ? "border-[#B99C20]" : "border-[#222]",
                )}
              >
                {method.isDefault && (
                  <span className="absolute right-2 top-2 rounded-full bg-[#B99C20] px-2 py-0.5 text-xs font-medium text-black">
                    Default
                  </span>
                )}

                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-md bg-[#222]">
                    {method.type === "credit" ? (
                      <span className="font-mono text-lg font-bold">{getCardIcon(method.cardType!)}</span>
                    ) : (
                      <span className="font-mono text-sm font-bold">PP</span>
                    )}
                  </div>
                  <div>
                    {method.type === "credit" ? (
                      <>
                        <p className="font-medium">•••• •••• •••• {method.lastFour}</p>
                        <p className="text-sm text-gray-400">
                          Expires {method.expiryMonth}/{method.expiryYear}
                        </p>
                      </>
                    ) : (
                      <p className="font-medium">{method.email}</p>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {!method.isDefault && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setAsDefault(method.id)}
                      className="h-8 gap-1 px-2 text-xs"
                    >
                      <CheckCircle className="h-3 w-3" />
                      Set as Default
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(method.id)}
                    className="h-8 gap-1 px-2 text-xs text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="h-3 w-3" />
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-md bg-[#1A1A1A] p-6 text-center">
            <CreditCard className="mx-auto mb-2 h-10 w-10 text-gray-500" />
            <p className="mb-2 text-gray-300">You haven't added any payment methods yet</p>
            <Button variant="primary" onClick={handleAddNew}>
              Add Your First Payment Method
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

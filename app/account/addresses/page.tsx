"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/lib/user-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Plus, Edit, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

type Address = {
  id: string
  name: string
  street: string
  city: string
  state: string
  zip: string
  country: string
  isDefault: boolean
}

export default function AddressesPage() {
  const { user, isLoading } = useUser()
  const router = useRouter()
  const [addresses, setAddresses] = useState<Address[]>([])
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
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
    setEditingId(null)
    setFormData({
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
      isDefault: addresses.length === 0, // Make default if first address
    })
  }

  const handleEdit = (address: Address) => {
    setIsAddingNew(false)
    setEditingId(address.id)
    setFormData({
      name: address.name,
      street: address.street,
      city: address.city,
      state: address.state,
      zip: address.zip,
      country: address.country,
      isDefault: address.isDefault,
    })
  }

  const handleDelete = (id: string) => {
    setAddresses(addresses.filter((address) => address.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isAddingNew) {
      // Add new address
      const newAddress: Address = {
        id: `addr_${Date.now()}`,
        ...formData,
      }

      // If this is set as default, update other addresses
      let updatedAddresses = [...addresses]
      if (formData.isDefault) {
        updatedAddresses = updatedAddresses.map((addr) => ({
          ...addr,
          isDefault: false,
        }))
      }

      setAddresses([...updatedAddresses, newAddress])
    } else if (editingId) {
      // Update existing address
      let updatedAddresses = [...addresses]

      // If this is set as default, update other addresses
      if (formData.isDefault) {
        updatedAddresses = updatedAddresses.map((addr) => ({
          ...addr,
          isDefault: addr.id === editingId,
        }))
      } else {
        updatedAddresses = updatedAddresses.map((addr) => (addr.id === editingId ? { ...addr, ...formData } : addr))
      }

      setAddresses(updatedAddresses)
    }

    // Reset form
    setIsAddingNew(false)
    setEditingId(null)
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
            My Addresses
          </h1>
          <Button variant="outline" size="sm" onClick={handleAddNew} className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>

        {(isAddingNew || editingId) && (
          <div className="mb-6 rounded-md border border-[#222] bg-[#1A1A1A] p-4">
            <h2 className="mb-4 text-lg font-medium">{isAddingNew ? "Add New Address" : "Edit Address"}</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-200">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-[#333] bg-[#0D0D0D]"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="street" className="mb-1 block text-sm font-medium text-gray-200">
                    Street Address
                  </label>
                  <Input
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    className="border-[#333] bg-[#0D0D0D]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="city" className="mb-1 block text-sm font-medium text-gray-200">
                    City
                  </label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="border-[#333] bg-[#0D0D0D]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="state" className="mb-1 block text-sm font-medium text-gray-200">
                    State/Province
                  </label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="border-[#333] bg-[#0D0D0D]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="zip" className="mb-1 block text-sm font-medium text-gray-200">
                    ZIP/Postal Code
                  </label>
                  <Input
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="border-[#333] bg-[#0D0D0D]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="country" className="mb-1 block text-sm font-medium text-gray-200">
                    Country
                  </label>
                  <Input
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="border-[#333] bg-[#0D0D0D]"
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
                  Set as default shipping address
                </label>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button type="submit" variant="primary">
                  {isAddingNew ? "Add Address" : "Update Address"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsAddingNew(false)
                    setEditingId(null)
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        {addresses.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {addresses.map((address) => (
              <div
                key={address.id}
                className={cn(
                  "relative rounded-md border bg-[#1A1A1A] p-4",
                  address.isDefault ? "border-[#B99C20]" : "border-[#222]",
                )}
              >
                {address.isDefault && (
                  <span className="absolute right-2 top-2 rounded-full bg-[#B99C20] px-2 py-0.5 text-xs font-medium text-black">
                    Default
                  </span>
                )}

                <p className="font-medium">{address.name}</p>
                <p className="text-sm text-gray-400">{address.street}</p>
                <p className="text-sm text-gray-400">
                  {address.city}, {address.state} {address.zip}
                </p>
                <p className="text-sm text-gray-400">{address.country}</p>

                <div className="mt-3 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(address)}
                    className="h-8 gap-1 px-2 text-xs"
                  >
                    <Edit className="h-3 w-3" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(address.id)}
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
            <MapPin className="mx-auto mb-2 h-10 w-10 text-gray-500" />
            <p className="mb-2 text-gray-300">You haven't added any addresses yet</p>
            <Button variant="primary" onClick={handleAddNew}>
              Add Your First Address
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

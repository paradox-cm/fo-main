"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/lib/user-context"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { formatCurrency } from "@/lib/utils"

// Mock wishlist data
type WishlistItem = {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function WishlistPage() {
  const { user, isLoading } = useUser()
  const router = useRouter()
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/account/login")
    }

    // For demo purposes, we'll set an empty wishlist
    setWishlist([])
  }, [user, isLoading, router])

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter((item) => item.id !== id))
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
        <h1 className="mb-4 sm:mb-6 font-tektur text-xl sm:text-2xl font-bold text-[#B99C20]">My Wishlist</h1>

        {wishlist.length > 0 ? (
          <div className="space-y-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-md border border-[#222] bg-[#1A1A1A] p-4 sm:flex-row sm:items-center"
              >
                <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                </div>

                <div className="flex-grow">
                  <h3 className="font-medium">
                    <Link href={`/shop/${item.id}`} className="hover:text-[#B99C20] hover:underline">
                      {item.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-400">{item.category}</p>
                  <p className="mt-1 font-semibold text-[#B99C20]">{formatCurrency(item.price)}</p>
                </div>

                <div className="mt-4 flex gap-2 sm:mt-0">
                  <Button variant="primary" size="sm" className="flex items-center gap-1">
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeFromWishlist(item.id)}
                    className="flex items-center gap-1"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-md bg-[#1A1A1A] p-6 text-center">
            <Heart className="mx-auto mb-2 h-10 w-10 text-gray-500" />
            <p className="mb-2 text-gray-300">Your wishlist is empty</p>
            <Button variant="primary" asChild>
              <Link href="/shop">Browse Products</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

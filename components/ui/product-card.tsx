"use client"

import type React from "react"

import { AdaptiveImage } from "@/components/ui/adaptive-image"
import { ShoppingBag } from "lucide-react"
import { useContext } from "react"
import { CartContext } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"

interface ProductCardProps {
  id: string
  title: string
  price: number
  image?: string
  description?: string
}

export function ProductCard({ id, title, price, image, description }: ProductCardProps) {
  const context = useContext(CartContext)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (context) {
      context.addToCart({
        id,
        title,
        price,
        quantity: 1,
        image,
      })
    } else {
      console.warn("Cart functionality is not available")
    }
  }

  return (
    <div className="border border-[#242423] rounded-md overflow-hidden group transition-all duration-150 hover:border-[#B99C20]/30">
      <div className="aspect-square relative bg-[#1A1505] overflow-hidden">
        {image ? (
          <AdaptiveImage
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingBag className="text-[#B99C20] opacity-30" size={48} />
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-mono text-lg mb-1">{title}</h3>
        {description && <p className="text-white/70 text-sm mb-3 line-clamp-2">{description}</p>}

        <div className="flex items-center justify-between mt-2">
          <span className="text-primary font-mono">{formatCurrency(price)}</span>
          <Button variant="outline" size="sm" onClick={handleAddToCart} className="text-xs" disabled={!context}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}

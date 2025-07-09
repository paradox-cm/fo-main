"use client"

import { ShoppingBag } from "lucide-react"
import { useContext } from "react"
import { CartContext } from "@/lib/cart-context"

export function CartButton() {
  // Get the context directly instead of using the hook
  const context = useContext(CartContext)

  // If context is undefined, render a disabled button
  if (!context) {
    return (
      <button
        className="relative p-2 text-white/80 transition-colors opacity-50"
        aria-label="Cart unavailable"
        disabled
      >
        <ShoppingBag size={20} />
      </button>
    )
  }

  const { toggleCart, totalItems } = context

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 text-white/80 hover:text-primary transition-colors"
      aria-label="Open cart"
    >
      <ShoppingBag size={20} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </button>
  )
}

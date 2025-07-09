"use client"

import { useEffect, useRef, useState } from "react"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import Image from "next/image"
import { useContext } from "react"
import { CartContext } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"

export function CartDrawer() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const context = useContext(CartContext)
  const drawerRef = useRef<HTMLDivElement>(null)
  const [hasMounted, setHasMounted] = useState(false)

  // If context is undefined, don't render anything
  if (!context) {
    return null
  }

  const { cart, isOpen, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart, closeCart } = context

  useEffect(() => {
    setIsCartOpen(isOpen)
  }, [isOpen])

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node) && isCartOpen) {
        closeCart()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isCartOpen, closeCart])

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isCartOpen])

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return isCartOpen ? (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div
        ref={drawerRef}
        className="fixed right-0 top-0 h-full w-full sm:w-96 bg-black border-l border-[#242423] shadow-xl transform transition-transform duration-300 ease-in-out"
      >
        <div className="flex flex-col h-full">
          <div className="bg-[#B99C20] text-black text-center py-2 font-mono text-sm uppercase tracking-wide">Coming Soon</div>
          {/* Cart Header */}
          <div className="p-4 border-b border-[#242423] flex items-center justify-between">
            <div className="flex items-center">
              <ShoppingBag className="text-primary mr-2" size={20} />
              <h2 className="font-mono text-lg">Your Cart ({totalItems})</h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1 hover:bg-[#242423] rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-4 px-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="text-[#242423] mb-4" size={64} />
                <p className="text-white/70 mb-2">Your cart is empty</p>
                <p className="text-white/50 text-sm max-w-xs">
                  Looks like you haven't added any items to your cart yet.
                </p>
                <Button variant="outline" className="mt-6" onClick={closeCart}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex border-b border-[#242423] pb-4">
                    <div className="w-20 h-20 bg-[#1A1505] rounded-md overflow-hidden relative flex-shrink-0">
                      {item.image ? (
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ShoppingBag className="text-[#B99C20] opacity-30" size={24} />
                        </div>
                      )}
                    </div>

                    <div className="ml-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-mono text-sm">{item.title}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-white/50 hover:text-white"
                          aria-label="Remove item"
                        >
                          <X size={16} />
                        </button>
                      </div>

                      <p className="text-primary text-sm mt-1">{formatCurrency(item.price)}</p>

                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[#242423] rounded-l-md hover:bg-[#242423]"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} />
                        </button>
                        <div className="w-10 h-8 flex items-center justify-center border-t border-b border-[#242423] bg-black">
                          {item.quantity}
                        </div>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-[#242423] rounded-r-md hover:bg-[#242423]"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {cart.length > 0 && (
            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-lg font-mono">
                <span>Total</span>
                <span className="text-primary">{formatCurrency(totalPrice)}</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" onClick={clearCart} disabled={cart.length === 0}>
                  Clear Cart
                </Button>
                <Button variant="primary" onClick={() => {}} disabled={cart.length === 0}>
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  ) : null
}

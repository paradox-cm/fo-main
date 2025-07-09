"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type CartItem = {
  id: string
  title: string
  price: number
  quantity: number
  image?: string
  variantId?: string
}

type CartContextType = {
  cart: CartItem[]
  isOpen: boolean
  totalItems: number
  totalPrice: number
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  closeCart: () => void
}

// Export the context directly so it can be accessed with useContext
export const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("forestOutfittersCart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCart(parsedCart)
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("forestOutfittersCart", JSON.stringify(cart))

    // Calculate totals
    const items = cart.reduce((total, item) => total + item.quantity, 0)
    const price = cart.reduce((total, item) => total + item.price * item.quantity, 0)

    setTotalItems(items)
    setTotalPrice(price)
  }, [cart])

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id)

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex].quantity += item.quantity
        return updatedCart
      } else {
        // Item doesn't exist, add it
        return [...prevCart, item]
      }
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }

    setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCart([])
  }

  const toggleCart = () => {
    setIsOpen((prev) => !prev)
  }

  const closeCart = () => {
    setIsOpen(false)
  }

  const checkout = async () => {
    if (cart.length === 0) return

    try {
      setIsLoading(true)

      // Filter items that have variantId (Shopify products)
      const shopifyItems = cart.filter((item) => item.variantId)

      if (shopifyItems.length === 0) {
        console.warn("No Shopify products in cart")
        return
      }

      const response = await fetch("/api/checkout/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: shopifyItems.map((item) => ({
            variantId: item.variantId,
            quantity: item.quantity,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to create checkout: ${response.status}`)
      }

      const data = await response.json()

      if (data.checkout && data.checkout.webUrl) {
        // Redirect to Shopify checkout
        window.location.href = data.checkout.webUrl
      } else {
        console.error("Invalid checkout response:", data)
      }
    } catch (error) {
      console.error("Error during checkout:", error)
      setError("Failed to process checkout. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    checkout,
    isOpen,
    toggleCart,
    totalItems,
    totalPrice,
    setIsOpen,
    isLoading,
    error,
    closeCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

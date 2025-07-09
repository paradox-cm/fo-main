"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export type User = {
  id: string
  username: string
  email: string
  firstName?: string
  lastName?: string
}

type UserContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string, rememberMe?: boolean) => Promise<boolean>
  signup: (username: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

const UserContext = createContext<UserContextType>({
  user: null,
  isLoading: true,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
  updateUser: () => {},
})

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on mount
    const checkAuth = () => {
      try {
        // Check both localStorage and sessionStorage
        const persistentUser = localStorage.getItem("forestOutfittersUser")
        const sessionUser = sessionStorage.getItem("forestOutfittersUser")

        const storedUser = persistentUser || sessionUser

        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (e) {
        console.error("Failed to parse user data")
        localStorage.removeItem("forestOutfittersUser")
        sessionStorage.removeItem("forestOutfittersUser")
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string, rememberMe = false): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800))

      // Demo login - in a real app, this would be an API call  => setTimeout(resolve, 800))

      // Demo login - in a real app, this would be an API call
      if (email && password.length >= 6) {
        const userData: User = {
          id: "user-1",
          username: email.split("@")[0],
          email: email,
        }
        setUser(userData)

        // Store user data based on rememberMe preference
        if (rememberMe) {
          localStorage.setItem("forestOutfittersUser", JSON.stringify(userData))
          // Clear session storage to avoid conflicts
          sessionStorage.removeItem("forestOutfittersUser")
        } else {
          sessionStorage.setItem("forestOutfittersUser", JSON.stringify(userData))
          // Clear local storage to avoid conflicts
          localStorage.removeItem("forestOutfittersUser")
        }

        setIsLoading(false)
        return true
      }

      setIsLoading(false)
      return false
    } catch (error) {
      console.error("Login error:", error)
      setIsLoading(false)
      return false
    }
  }

  const signup = async (username: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Demo signup - in a real app, this would be an API call
      const userData: User = {
        id: `user-${Date.now()}`,
        username,
        email,
      }

      setUser(userData)
      // By default, store in sessionStorage for new signups
      sessionStorage.setItem("forestOutfittersUser", JSON.stringify(userData))
      setIsLoading(false)
      return true
    } catch (error) {
      console.error("Signup error:", error)
      setIsLoading(false)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("forestOutfittersUser")
    sessionStorage.removeItem("forestOutfittersUser")
  }

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData }
      setUser(updatedUser)

      // Update in both storage locations to ensure consistency
      if (localStorage.getItem("forestOutfittersUser")) {
        localStorage.setItem("forestOutfittersUser", JSON.stringify(updatedUser))
      }
      if (sessionStorage.getItem("forestOutfittersUser")) {
        sessionStorage.setItem("forestOutfittersUser", JSON.stringify(updatedUser))
      }
    }
  }

  return (
    <UserContext.Provider value={{ user, isLoading, login, signup, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}

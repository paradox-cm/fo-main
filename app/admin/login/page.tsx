"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate authentication delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock authentication - in a real app, this would call an API
      if (email === "admin@forestoutfitters.com" && password === "password") {
        // Set auth based on remember me preference
        if (rememberMe) {
          // Store in localStorage for persistent auth
          localStorage.setItem("adminAuth", "true")
        } else {
          // Store in sessionStorage for session-only auth
          sessionStorage.setItem("adminAuth", "true")
          // Clear any existing localStorage token to avoid conflicts
          localStorage.removeItem("adminAuth")
        }
        router.push("/admin")
      } else {
        setError("Invalid email or password")
      }
    } catch (error) {
      console.error("Login error:", error)
      setError("An error occurred during login. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16 mb-2">
            <Image src="/images/forest-icon.svg" alt="Forest Outfitters" fill className="object-contain" />
          </div>
          <h1 className="text-2xl font-tektur uppercase tracking-wide text-white">Admin Portal</h1>
          <p className="text-sm font-mono text-gray-400">Sign in to access the dashboard</p>
        </div>

        <Card className="border-[#242423] bg-black/20">
          <CardHeader>
            <CardTitle className="font-tektur uppercase tracking-wide text-xl text-white">Sign In</CardTitle>
            <CardDescription className="font-mono text-xs text-gray-400">
              Enter your credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4 bg-red-900/20 border-red-900 text-red-300">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-mono text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@forestoutfitters.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#1A1505]/20 border-[#242423] text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-mono text-gray-300">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-[#1A1505]/20 border-[#242423] text-white"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked === true)}
                  className="border-[#B99C20] data-[state=checked]:bg-[#B99C20] data-[state=checked]:text-black"
                />
                <label
                  htmlFor="remember-me"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-[#B99C20] hover:bg-[#ECD055] text-black font-tektur uppercase tracking-wide"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-[#242423] pt-4">
            <p className="text-xs font-mono text-gray-400">Hint: Use admin@forestoutfitters.com / password</p>
          </CardFooter>
        </Card>

        <div className="text-center">
          <p className="text-xs font-mono text-gray-500">
            Forest Outfitters Admin Portal &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  )
}

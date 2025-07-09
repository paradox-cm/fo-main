"use client"

import type React from "react"

import { useState } from "react"
import { useUser } from "@/lib/user-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Package, MapPin, Settings, Clock, Heart, CreditCard, RotateCcw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Checkbox } from "@/components/ui/checkbox"

export default function AccountPage() {
  const { user, isLoading, login, signup } = useUser()
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin")

  // Form states for sign in
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [loginError, setLoginError] = useState("")
  const [loginLoading, setLoginLoading] = useState(false)

  // Form states for sign up
  const [signupUsername, setSignupUsername] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")
  const [showSignupPassword, setShowSignupPassword] = useState(false)
  const [signupError, setSignupError] = useState("")
  const [signupLoading, setSignupLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError("")
    setLoginLoading(true)

    try {
      const success = await login(loginEmail, loginPassword, rememberMe)
      if (!success) {
        setLoginError("Invalid email or password")
      }
    } catch (error) {
      setLoginError("An error occurred. Please try again.")
    } finally {
      setLoginLoading(false)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setSignupError("")
    setSignupLoading(true)

    // Basic validation
    if (!signupUsername || !signupEmail || !signupPassword) {
      setSignupError("All fields are required")
      setSignupLoading(false)
      return
    }

    if (signupPassword.length < 6) {
      setSignupError("Password must be at least 6 characters")
      setSignupLoading(false)
      return
    }

    try {
      const success = await signup(signupUsername, signupEmail, signupPassword)
      if (!success) {
        setSignupError("Failed to create account. Please try again.")
      }
    } catch (error) {
      setSignupError("An error occurred. Please try again.")
    } finally {
      setSignupLoading(false)
    }
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center py-10">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#B99C20] border-t-transparent"></div>
      </div>
    )
  }

  // If not logged in, show the auth modal
  if (!user) {
    return (
      <div className="flex min-h-[calc(100vh-200px)] items-center justify-center py-10">
        <div className="mx-auto w-full max-w-md rounded-lg border border-[#222] bg-[#111] p-6 shadow-xl">
          <div className="mb-6 text-center">
            <Image
              src="/images/forest-icon-new.svg"
              alt="Forest Outfitters"
              width={40}
              height={40}
              className="mx-auto h-10 w-10"
            />
            <h1 className="mt-4 font-tektur text-2xl uppercase tracking-wide text-[#B99C20]">
              {activeTab === "signin" ? "Sign in to your account" : "Create a new account"}
            </h1>
          </div>

          {/* Tabs */}
          <div className="mb-6 flex rounded-md border border-[#222]">
            <button
              onClick={() => setActiveTab("signin")}
              className={`flex-1 rounded-l-md px-4 py-2 text-center text-sm font-medium transition-colors ${
                activeTab === "signin"
                  ? "bg-[#B99C20] text-black"
                  : "bg-transparent text-gray-400 hover:bg-[#222] hover:text-white"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 rounded-r-md px-4 py-2 text-center text-sm font-medium transition-colors ${
                activeTab === "signup"
                  ? "bg-[#B99C20] text-black"
                  : "bg-transparent text-gray-400 hover:bg-[#222] hover:text-white"
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Sign In Form */}
          {activeTab === "signin" && (
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="mt-1"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showLoginPassword ? "text" : "password"}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    className="pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                  >
                    {showLoginPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="user-remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked === true)}
                  className="border-[#B99C20] data-[state=checked]:bg-[#B99C20] data-[state=checked]:text-black"
                />
                <label
                  htmlFor="user-remember-me"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300"
                >
                  Remember me
                </label>
              </div>

              {loginError && <div className="rounded-md bg-red-900/20 p-3 text-sm text-red-400">{loginError}</div>}

              <div>
                <Button
                  type="submit"
                  className="w-full bg-[#B99C20] text-black hover:bg-[#9A8219]"
                  disabled={loginLoading}
                >
                  {loginLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </div>

              <div className="text-center text-sm text-gray-400">
                <p className="text-xs text-gray-500">Demo credentials:</p>
                <p>Email: demo@forestoutfitters.com</p>
                <p>Password: password</p>
              </div>
            </form>
          )}

          {/* Sign Up Form */}
          {activeTab === "signup" && (
            <form onSubmit={handleSignup} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                  required
                  className="mt-1"
                  placeholder="johndoe"
                />
              </div>

              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  required
                  className="mt-1"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="relative mt-1">
                  <Input
                    id="signup-password"
                    type={showSignupPassword ? "text" : "password"}
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    required
                    className="pr-10"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                  >
                    {showSignupPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-400">Password must be at least 6 characters</p>
              </div>

              {signupError && <div className="rounded-md bg-red-900/20 p-3 text-sm text-red-400">{signupError}</div>}

              <div>
                <Button
                  type="submit"
                  className="w-full bg-[#B99C20] text-black hover:bg-[#9A8219]"
                  disabled={signupLoading}
                >
                  {signupLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
                      Creating account...
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    )
  }

  // If logged in, show the account dashboard
  return (
    <div className="space-y-8">
      <div className="rounded-lg border border-[#222] bg-[#111] p-4 sm:p-6">
        <h1 className="mb-4 sm:mb-6 font-tektur text-xl sm:text-2xl uppercase tracking-wide text-[#B99C20]">
          Account Overview
        </h1>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-base sm:text-lg font-semibold text-white">Account Information</h2>
            <div className="rounded-md bg-[#1A1A1A] p-4">
              <p className="font-medium">{user.username}</p>
              <p className="text-gray-400">{user.email}</p>
              <Button variant="outline" size="sm" className="mt-3" asChild>
                <Link href="/account/settings">Edit Profile</Link>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-base sm:text-lg font-semibold text-white">Default Shipping Address</h2>
            <div className="rounded-md bg-[#1A1A1A] p-4">
              <p className="text-gray-400">No default address set</p>
              <Button variant="outline" size="sm" className="mt-3" asChild>
                <Link href="/account/addresses">Add Address</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-[#222] bg-[#111] p-4 sm:p-6">
        <h2 className="mb-4 text-base sm:text-lg font-semibold text-white">Recent Orders</h2>
        <div className="rounded-md bg-[#1A1A1A] p-4 sm:p-6 text-center">
          <Clock className="mx-auto mb-2 h-8 sm:h-10 w-8 sm:w-10 text-gray-500" />
          <p className="mb-2 text-gray-300">You haven't placed any orders yet</p>
          <Button variant="primary" asChild>
            <Link href="/shop">Start Shopping</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-lg border border-[#222] bg-[#111] p-4 text-center">
          <Package className="mx-auto mb-2 h-8 w-8 text-[#B99C20]" />
          <h3 className="mb-2 font-medium">Orders</h3>
          <p className="mb-3 text-sm text-gray-400">View and track your orders</p>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href="/account/orders">View Orders</Link>
          </Button>
        </div>

        <div className="rounded-lg border border-[#222] bg-[#111] p-4 text-center">
          <MapPin className="mx-auto mb-2 h-8 w-8 text-[#B99C20]" />
          <h3 className="mb-2 font-medium">Addresses</h3>
          <p className="mb-3 text-sm text-gray-400">Manage your shipping addresses</p>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href="/account/addresses">Manage Addresses</Link>
          </Button>
        </div>

        <div className="rounded-lg border border-[#222] bg-[#111] p-4 text-center">
          <Heart className="mx-auto mb-2 h-8 w-8 text-[#B99C20]" />
          <h3 className="mb-2 font-medium">Wishlist</h3>
          <p className="mb-3 text-sm text-gray-400">View your saved items</p>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href="/account/wishlist">View Wishlist</Link>
          </Button>
        </div>

        <div className="rounded-lg border border-[#222] bg-[#111] p-4 text-center">
          <CreditCard className="mx-auto mb-2 h-8 w-8 text-[#B99C20]" />
          <h3 className="mb-2 font-medium">Payment Methods</h3>
          <p className="mb-3 text-sm text-gray-400">Manage your payment options</p>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href="/account/payment-methods">Manage Payments</Link>
          </Button>
        </div>

        <div className="rounded-lg border border-[#222] bg-[#111] p-4 text-center">
          <RotateCcw className="mx-auto mb-2 h-8 w-8 text-[#B99C20]" />
          <h3 className="mb-2 font-medium">Returns</h3>
          <p className="mb-3 text-sm text-gray-400">Manage your returns and exchanges</p>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href="/account/returns">View Returns</Link>
          </Button>
        </div>

        <div className="rounded-lg border border-[#222] bg-[#111] p-4 text-center">
          <Settings className="mx-auto mb-2 h-8 w-8 text-[#B99C20]" />
          <h3 className="mb-2 font-medium">Account Settings</h3>
          <p className="mb-3 text-sm text-gray-400">Update your profile and preferences</p>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href="/account/settings">Edit Settings</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

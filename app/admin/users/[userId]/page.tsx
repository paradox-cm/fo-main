"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Save, UserCircle, Lock, Mail, ShieldAlert, ShoppingBag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock users data
const mockUsers = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    role: "admin",
    status: "active",
    avatar: "/placeholder.svg?height=100&width=100",
    lastLogin: "2023-03-15T14:30:00Z",
    dateJoined: "2022-11-10T09:20:00Z",
    orders: 12,
    totalSpent: 1245.99,
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA",
    },
    notes: "VIP customer, early adopter of our tactical gear line.",
    permissions: {
      manageProducts: true,
      manageUsers: true,
      manageOrders: true,
      manageContent: true,
      viewAnalytics: true,
      manageSettings: true,
    },
  },
  // Other users would be here
]

export default function UserEditor({ params }: { params: { userId: string } }) {
  const { userId } = params
  const isNewUser = userId === "new"

  const [user, setUser] = useState(
    isNewUser
      ? {
          id: "new",
          name: "",
          email: "",
          role: "customer",
          status: "active",
          avatar: "/placeholder.svg?height=100&width=100",
          lastLogin: "",
          dateJoined: new Date().toISOString(),
          orders: 0,
          totalSpent: 0,
          phone: "",
          address: {
            street: "",
            city: "",
            state: "",
            zip: "",
            country: "USA",
          },
          notes: "",
          permissions: {
            manageProducts: false,
            manageUsers: false,
            manageOrders: false,
            manageContent: false,
            viewAnalytics: false,
            manageSettings: false,
          },
        }
      : null,
  )

  const [isSaving, setIsSaving] = useState(false)
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  // Load mock data for existing user
  useEffect(() => {
    if (!isNewUser) {
      const foundUser = mockUsers.find((u) => u.id.toString() === userId)
      if (foundUser) {
        setUser(foundUser)
      }
    }
  }, [userId, isNewUser])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }))
  }

  const handlePermissionChange = (permission: string, checked: boolean) => {
    setUser((prev) => ({
      ...prev,
      permissions: {
        ...prev.permissions,
        [permission]: checked,
      },
    }))
  }

  const handleSelectChange = (field: string, value: string) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const validatePasswords = () => {
    if (password && password.length < 8) {
      setPasswordError("Password must be at least 8 characters")
      return false
    }

    if (password && password !== confirmPassword) {
      setPasswordError("Passwords do not match")
      return false
    }

    setPasswordError("")
    return true
  }

  const handleSave = async () => {
    if (isNewUser || password) {
      const isPasswordValid = validatePasswords()
      if (!isPasswordValid) return
    }

    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return "Never"
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  if (!user) {
    return <div>Loading user...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/admin/users">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-tektur uppercase tracking-wide">{isNewUser ? "Add User" : "Edit User"}</h1>
            <p className="text-muted-foreground font-sans">
              {isNewUser ? "Create a new user account" : `Editing: ${user.name}`}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {!isNewUser && (
            <Button variant="outline" asChild>
              <Link href={`/admin/users/${user.id}/orders`}>
                <ShoppingBag className="mr-2 h-4 w-4" />
                View Orders
              </Link>
            </Button>
          )}
          <Button onClick={handleSave} disabled={isSaving} className="bg-[#B99C20] text-black hover:bg-[#ECD055]">
            {isSaving ? (
              <>Saving...</>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save User
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-[#242423] bg-black/20">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border border-[#242423]">
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name || "User avatar"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">Full Name</label>
                      <Input
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        value={user.email}
                        onChange={handleChange}
                        placeholder="Email address"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 font-mono">Phone Number</label>
                    <Input
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 font-mono">Role</label>
                    <Select value={user.role} onValueChange={(value) => handleSelectChange("role", value)}>
                      <SelectTrigger className="bg-black/20 border-[#242423]">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-[#242423]">
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="customer">Customer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 font-mono">Status</label>
                    <Select value={user.status} onValueChange={(value) => handleSelectChange("status", value)}>
                      <SelectTrigger className="bg-black/20 border-[#242423]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-[#242423]">
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                        <SelectItem value="blocked">Blocked</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {!isNewUser && (
                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">Date Joined</label>
                      <Input
                        value={formatDate(user.dateJoined)}
                        disabled
                        className="bg-black/20 border-[#242423] text-muted-foreground"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 font-mono">Notes</label>
                  <Textarea
                    name="notes"
                    value={user.notes}
                    onChange={handleChange}
                    placeholder="Add notes about this user"
                    rows={3}
                    className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="address" className="mt-6">
            <TabsList>
              <TabsTrigger value="address" className="font-mono text-xs uppercase tracking-wide">
                Address
              </TabsTrigger>
              <TabsTrigger value="security" className="font-mono text-xs uppercase tracking-wide">
                Security
              </TabsTrigger>
              {user.role !== "customer" && (
                <TabsTrigger value="permissions" className="font-mono text-xs uppercase tracking-wide">
                  Permissions
                </TabsTrigger>
              )}
            </TabsList>

            <TabsContent value="address" className="mt-4">
              <Card className="border-[#242423] bg-black/20">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-1 font-mono">Street Address</label>
                    <Input
                      name="street"
                      value={user.address.street}
                      onChange={handleAddressChange}
                      placeholder="Street address"
                      className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">City</label>
                      <Input
                        name="city"
                        value={user.address.city}
                        onChange={handleAddressChange}
                        placeholder="City"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">State/Province</label>
                      <Input
                        name="state"
                        value={user.address.state}
                        onChange={handleAddressChange}
                        placeholder="State/Province"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">ZIP/Postal Code</label>
                      <Input
                        name="zip"
                        value={user.address.zip}
                        onChange={handleAddressChange}
                        placeholder="ZIP/Postal code"
                        className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 font-mono">Country</label>
                      <Select
                        value={user.address.country}
                        onValueChange={(value) =>
                          setUser((prev) => ({
                            ...prev,
                            address: { ...prev.address, country: value },
                          }))
                        }
                      >
                        <SelectTrigger className="bg-black/20 border-[#242423]">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-[#242423]">
                          <SelectItem value="USA">United States</SelectItem>
                          <SelectItem value="CAN">Canada</SelectItem>
                          <SelectItem value="GBR">United Kingdom</SelectItem>
                          <SelectItem value="AUS">Australia</SelectItem>
                          <SelectItem value="DEU">Germany</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-4">
              <Card className="border-[#242423] bg-black/20">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-1 font-mono">
                      {isNewUser ? "Password" : "New Password"}
                    </label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={isNewUser ? "Enter password" : "Enter new password (leave blank to keep current)"}
                      className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                    {isNewUser && (
                      <p className="text-xs text-muted-foreground mt-1 font-mono">
                        Password must be at least 8 characters
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 font-mono">Confirm Password</label>
                    <Input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      className="bg-black/20 border-[#242423] focus:border-[#B99C20]"
                    />
                    {passwordError && <p className="text-xs text-red-500 mt-1 font-mono">{passwordError}</p>}
                  </div>

                  {!isNewUser && (
                    <div className="pt-4 border-t border-[#242423]">
                      <h3 className="font-tektur text-lg mb-4">Account Security</h3>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="twoFactorAuth" className="font-mono text-xs uppercase tracking-wide">
                              Two-Factor Authentication
                            </Label>
                            <p className="text-xs text-muted-foreground font-mono">
                              Require a verification code when signing in
                            </p>
                          </div>
                          <Switch id="twoFactorAuth" className="data-[state=checked]:bg-[#B99C20]" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="forcePasswordReset" className="font-mono text-xs uppercase tracking-wide">
                              Force Password Reset
                            </Label>
                            <p className="text-xs text-muted-foreground font-mono">
                              User will be required to set a new password on next login
                            </p>
                          </div>
                          <Switch id="forcePasswordReset" className="data-[state=checked]:bg-[#B99C20]" />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {user.role !== "customer" && (
              <TabsContent value="permissions" className="mt-4">
                <Card className="border-[#242423] bg-black/20">
                  <CardContent className="p-6 space-y-6">
                    <h3 className="font-tektur text-lg mb-4">User Permissions</h3>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="manageProducts" className="font-mono text-xs uppercase tracking-wide">
                            Manage Products
                          </Label>
                          <p className="text-xs text-muted-foreground font-mono">Create, edit, and delete products</p>
                        </div>
                        <Switch
                          id="manageProducts"
                          checked={user.permissions.manageProducts}
                          onCheckedChange={(checked) => handlePermissionChange("manageProducts", checked)}
                          className="data-[state=checked]:bg-[#B99C20]"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="manageUsers" className="font-mono text-xs uppercase tracking-wide">
                            Manage Users
                          </Label>
                          <p className="text-xs text-muted-foreground font-mono">
                            Create, edit, and delete user accounts
                          </p>
                        </div>
                        <Switch
                          id="manageUsers"
                          checked={user.permissions.manageUsers}
                          onCheckedChange={(checked) => handlePermissionChange("manageUsers", checked)}
                          className="data-[state=checked]:bg-[#B99C20]"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="manageOrders" className="font-mono text-xs uppercase tracking-wide">
                            Manage Orders
                          </Label>
                          <p className="text-xs text-muted-foreground font-mono">View, process, and update orders</p>
                        </div>
                        <Switch
                          id="manageOrders"
                          checked={user.permissions.manageOrders}
                          onCheckedChange={(checked) => handlePermissionChange("manageOrders", checked)}
                          className="data-[state=checked]:bg-[#B99C20]"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="manageContent" className="font-mono text-xs uppercase tracking-wide">
                            Manage Content
                          </Label>
                          <p className="text-xs text-muted-foreground font-mono">Edit website pages and blog posts</p>
                        </div>
                        <Switch
                          id="manageContent"
                          checked={user.permissions.manageContent}
                          onCheckedChange={(checked) => handlePermissionChange("manageContent", checked)}
                          className="data-[state=checked]:bg-[#B99C20]"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="viewAnalytics" className="font-mono text-xs uppercase tracking-wide">
                            View Analytics
                          </Label>
                          <p className="text-xs text-muted-foreground font-mono">Access sales and website analytics</p>
                        </div>
                        <Switch
                          id="viewAnalytics"
                          checked={user.permissions.viewAnalytics}
                          onCheckedChange={(checked) => handlePermissionChange("viewAnalytics", checked)}
                          className="data-[state=checked]:bg-[#B99C20]"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="manageSettings" className="font-mono text-xs uppercase tracking-wide">
                            Manage Settings
                          </Label>
                          <p className="text-xs text-muted-foreground font-mono">
                            Change site configuration and settings
                          </p>
                        </div>
                        <Switch
                          id="manageSettings"
                          checked={user.permissions.manageSettings}
                          onCheckedChange={(checked) => handlePermissionChange("manageSettings", checked)}
                          className="data-[state=checked]:bg-[#B99C20]"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            )}
          </Tabs>
        </div>

        <div>
          <Card className="border-[#242423] bg-black/20">
            <CardContent className="p-6 space-y-6">
              <div className="text-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border border-[#242423] mx-auto mb-4">
                  <Image
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.name || "User avatar"}
                    fill
                    className="object-cover"
                  />
                </div>
                <Button variant="outline" className="w-full">
                  <UserCircle className="mr-2 h-4 w-4" />
                  Change Avatar
                </Button>
              </div>

              {!isNewUser && (
                <div className="pt-4 border-t border-[#242423]">
                  <h3 className="font-tektur text-lg mb-4">User Summary</h3>

                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground font-mono">Email</div>
                      <div className="font-mono">{user.email}</div>
                    </div>

                    <div>
                      <div className="text-xs text-muted-foreground font-mono">Role</div>
                      <div className="font-mono capitalize">{user.role}</div>
                    </div>

                    <div>
                      <div className="text-xs text-muted-foreground font-mono">Status</div>
                      <div className="font-mono capitalize">{user.status}</div>
                    </div>

                    <div>
                      <div className="text-xs text-muted-foreground font-mono">Last Login</div>
                      <div className="font-mono">{formatDate(user.lastLogin)}</div>
                    </div>

                    <div>
                      <div className="text-xs text-muted-foreground font-mono">Orders</div>
                      <div className="font-mono">{user.orders}</div>
                    </div>

                    <div>
                      <div className="text-xs text-muted-foreground font-mono">Total Spent</div>
                      <div className="font-mono text-[#B99C20]">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(user.totalSpent)}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {!isNewUser && (
                <div className="pt-4 border-t border-[#242423] space-y-3">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/admin/users/${user.id}/orders`}>
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      View Orders
                    </Link>
                  </Button>

                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full text-red-500 hover:text-red-600 border-red-500/30 hover:bg-red-500/10"
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    Reset Password
                  </Button>

                  {user.status !== "blocked" && (
                    <Button
                      variant="outline"
                      className="w-full text-red-500 hover:text-red-600 border-red-500/30 hover:bg-red-500/10"
                    >
                      <ShieldAlert className="mr-2 h-4 w-4" />
                      Block User
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

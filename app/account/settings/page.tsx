"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@/lib/user-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Loader2, Save } from "lucide-react"

export default function SettingsPage() {
  const { user, isLoading, updateUser } = useUser()
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/account")
    } else if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email,
        phone: user.phone || "",
        username: user.username,
      })
    }
  }, [user, isLoading, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData({
      ...passwordData,
      [name]: value,
    })
  }

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)
    setMessage({ type: "", text: "" })

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800))

      updateUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
      })

      setMessage({
        type: "success",
        text: "Profile updated successfully",
      })
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to update profile. Please try again.",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage({
        type: "error",
        text: "New passwords do not match",
      })
      return
    }

    setIsChangingPassword(true)
    setMessage({ type: "", text: "" })

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 800))

      // In a real app, this would call an API to change the password

      setMessage({
        type: "success",
        text: "Password changed successfully",
      })

      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to change password. Please try again.",
      })
    } finally {
      setIsChangingPassword(false)
    }
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
    <div className="space-y-8">
      <div className="rounded-lg border border-[#222] bg-[#111] p-4 sm:p-6">
        <h1 className="mb-4 sm:mb-6 font-tektur text-xl sm:text-2xl uppercase tracking-wide text-[#B99C20]">
          Account Settings
        </h1>

        {message.text && (
          <div
            className={`mb-4 rounded-md p-3 ${
              message.type === "success" ? "bg-green-900/20 text-green-400" : "bg-red-900/20 text-red-400"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleProfileSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-200">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border-[#333] bg-[#1A1A1A]"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-200">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border-[#333] bg-[#1A1A1A]"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-200">
                Email
              </label>
              <Input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border-[#333] bg-[#1A1A1A]"
                disabled
              />
              <p className="mt-1 text-xs text-gray-500">Email cannot be changed</p>
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-200">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border-[#333] bg-[#1A1A1A]"
                placeholder="(123) 456-7890"
              />
            </div>

            <div>
              <label htmlFor="username" className="mb-1 block text-sm font-medium text-gray-200">
                Username
              </label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="border-[#333] bg-[#1A1A1A]"
                disabled
              />
              <p className="mt-1 text-xs text-gray-500">Username cannot be changed</p>
            </div>
          </div>

          <Button type="submit" variant="primary" disabled={isSaving} className="mt-2">
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
        </form>
      </div>

      <div className="rounded-lg border border-[#222] bg-[#111] p-4 sm:p-6">
        <h2 className="mb-4 sm:mb-6 font-tektur text-lg sm:text-xl uppercase tracking-wide text-white">
          Change Password
        </h2>

        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className="mb-1 block text-sm font-medium text-gray-200">
              Current Password
            </label>
            <div className="relative">
              <Input
                id="currentPassword"
                name="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className="border-[#333] bg-[#1A1A1A] pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="newPassword" className="mb-1 block text-sm font-medium text-gray-200">
              New Password
            </label>
            <div className="relative">
              <Input
                id="newPassword"
                name="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                className="border-[#333] bg-[#1A1A1A] pr-10"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-gray-200">
              Confirm New Password
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
              className="border-[#333] bg-[#1A1A1A]"
              required
            />
          </div>

          <Button type="submit" variant="primary" disabled={isChangingPassword}>
            {isChangingPassword ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Changing Password...
              </>
            ) : (
              "Change Password"
            )}
          </Button>
        </form>
      </div>
    </div>
  )
}

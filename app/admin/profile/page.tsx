"use client"

import { useState } from "react"
import { Save, Upload, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock admin user data
const initialUserData = {
  firstName: "Admin",
  lastName: "User",
  email: "admin@forestoutfitters.com",
  username: "admin",
  role: "Administrator",
  bio: "Forest Outfitters system administrator responsible for managing the e-commerce platform and content.",
  avatar: "",
  phone: "+1 (555) 123-4567",
  joinDate: "January 15, 2023",
  lastLogin: "Today at 9:30 AM",
}

export default function AdminProfilePage() {
  const [userData, setUserData] = useState(initialUserData)
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const handleChange = (field: string, value: string) => {
    setUserData({
      ...userData,
      [field]: value,
    })
  }

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-tektur uppercase tracking-wide">Admin Profile</h1>
          <p className="text-muted-foreground font-sans">Manage your account information</p>
        </div>
        {isEditing ? (
          <div className="flex gap-2 self-end sm:self-auto">
            <Button
              variant="outline"
              className="border-[#242423] text-white hover:bg-[#1A1505] hover:text-white font-mono text-xs uppercase tracking-wide"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
            >
              {isSaving ? (
                <>Saving...</>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => setIsEditing(true)}
            className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide self-end sm:self-auto"
          >
            Edit Profile
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-[#242423] bg-black/20 md:col-span-1">
          <CardHeader>
            <CardTitle className="font-tektur uppercase tracking-wide">Profile Picture</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4">
            <div className="relative h-32 w-32 rounded-full overflow-hidden bg-[#1A1505] flex items-center justify-center border border-[#242423]">
              {userData.avatar ? (
                <img src={userData.avatar || "/placeholder.svg"} alt="Profile" className="h-full w-full object-cover" />
              ) : (
                <User size={64} className="text-[#B99C20]" />
              )}
            </div>
            {isEditing && (
              <Button
                variant="outline"
                className="border-[#B99C20] text-[#B99C20] hover:bg-[#1A1505] hover:text-[#ECD055] font-mono text-xs uppercase tracking-wide"
              >
                <Upload className="mr-2 h-4 w-4" />
                Upload Image
              </Button>
            )}
            <div className="text-center">
              <h3 className="font-tektur text-lg">{`${userData.firstName} ${userData.lastName}`}</h3>
              <p className="text-sm text-muted-foreground">{userData.role}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#242423] bg-black/20 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-tektur uppercase tracking-wide">Account Information</CardTitle>
            <CardDescription className="font-mono text-xs">Personal details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="font-mono text-xs uppercase tracking-wide">
                  First Name
                </Label>
                {isEditing ? (
                  <Input
                    id="firstName"
                    value={userData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                ) : (
                  <p className="mt-1 font-medium">{userData.firstName}</p>
                )}
              </div>

              <div>
                <Label htmlFor="lastName" className="font-mono text-xs uppercase tracking-wide">
                  Last Name
                </Label>
                {isEditing ? (
                  <Input
                    id="lastName"
                    value={userData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                ) : (
                  <p className="mt-1 font-medium">{userData.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="font-mono text-xs uppercase tracking-wide">
                  Email
                </Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    value={userData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                ) : (
                  <p className="mt-1 font-medium">{userData.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="font-mono text-xs uppercase tracking-wide">
                  Phone
                </Label>
                {isEditing ? (
                  <Input
                    id="phone"
                    value={userData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                  />
                ) : (
                  <p className="mt-1 font-medium">{userData.phone}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="bio" className="font-mono text-xs uppercase tracking-wide">
                Bio
              </Label>
              {isEditing ? (
                <Textarea
                  id="bio"
                  value={userData.bio}
                  onChange={(e) => handleChange("bio", e.target.value)}
                  rows={4}
                  className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
              ) : (
                <p className="mt-1 text-sm">{userData.bio}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label className="font-mono text-xs uppercase tracking-wide">Join Date</Label>
                <p className="mt-1 text-sm text-muted-foreground">{userData.joinDate}</p>
              </div>

              <div>
                <Label className="font-mono text-xs uppercase tracking-wide">Last Login</Label>
                <p className="mt-1 text-sm text-muted-foreground">{userData.lastLogin}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#242423] bg-black/20 md:col-span-3">
          <CardHeader>
            <CardTitle className="font-tektur uppercase tracking-wide">Security</CardTitle>
            <CardDescription className="font-mono text-xs">Manage your password and security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="currentPassword" className="font-mono text-xs uppercase tracking-wide">
                  Current Password
                </Label>
                <Input
                  id="currentPassword"
                  type="password"
                  placeholder={isEditing ? "Enter current password" : "••••••••"}
                  disabled={!isEditing}
                  className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="newPassword" className="font-mono text-xs uppercase tracking-wide">
                  New Password
                </Label>
                <Input
                  id="newPassword"
                  type="password"
                  placeholder={isEditing ? "Enter new password" : ""}
                  disabled={!isEditing}
                  className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="font-mono text-xs uppercase tracking-wide">
                  Confirm New Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder={isEditing ? "Confirm new password" : ""}
                  disabled={!isEditing}
                  className="mt-1 bg-black/20 border-[#242423] focus:border-[#B99C20]"
                />
              </div>
            </div>

            {isEditing && (
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="border-[#B99C20] text-[#B99C20] hover:bg-[#1A1505] hover:text-[#ECD055] font-mono text-xs uppercase tracking-wide"
                >
                  Change Password
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

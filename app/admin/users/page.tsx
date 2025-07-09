"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileEdit, Eye, Search, Trash2, UserPlus } from "lucide-react"
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
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "customer",
    status: "active",
    avatar: "/placeholder.svg?height=100&width=100",
    lastLogin: "2023-03-12T10:15:00Z",
    dateJoined: "2022-12-05T14:30:00Z",
    orders: 8,
    totalSpent: 879.5,
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "editor",
    status: "inactive",
    avatar: "/placeholder.svg?height=100&width=100",
    lastLogin: "2023-02-28T16:45:00Z",
    dateJoined: "2023-01-15T11:20:00Z",
    orders: 0,
    totalSpent: 0,
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "customer",
    status: "active",
    avatar: "/placeholder.svg?height=100&width=100",
    lastLogin: "2023-03-14T09:30:00Z",
    dateJoined: "2022-10-20T15:45:00Z",
    orders: 15,
    totalSpent: 1678.25,
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "customer",
    status: "blocked",
    avatar: "/placeholder.svg?height=100&width=100",
    lastLogin: "2023-01-05T11:20:00Z",
    dateJoined: "2022-09-12T10:30:00Z",
    orders: 3,
    totalSpent: 349.99,
  },
]

export default function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const filteredUsers = mockUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRole = roleFilter === "all" || user.role === roleFilter
    const matchesStatus = statusFilter === "all" || user.status === statusFilter

    return matchesSearch && matchesRole && matchesStatus
  })

  const getRoleBadgeClass = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-500/10 text-red-500 border-red-500/30"
      case "editor":
        return "bg-blue-500/10 text-blue-500 border-blue-500/30"
      default:
        return "bg-green-500/10 text-green-500 border-green-500/30"
    }
  }

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-500 border-green-500/30"
      case "inactive":
        return "bg-[#B99C20]/10 text-[#B99C20] border-[#B99C20]/30"
      case "blocked":
        return "bg-red-500/10 text-red-500 border-red-500/30"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/30"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-tektur uppercase tracking-wide">User Management</h1>
          <p className="text-muted-foreground font-sans">Manage user accounts and permissions</p>
        </div>
        <Button
          asChild
          className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
        >
          <Link href="/admin/users/new">
            <UserPlus className="mr-2 h-4 w-4" />
            Add User
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-black/20 border-[#242423] focus:border-[#B99C20]"
          />
        </div>

        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-[180px] bg-black/20 border-[#242423] font-mono text-xs uppercase tracking-wide">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent className="bg-black border-[#242423]">
            <SelectItem value="all" className="font-mono text-xs uppercase tracking-wide">
              All Roles
            </SelectItem>
            <SelectItem value="admin" className="font-mono text-xs uppercase tracking-wide">
              Admin
            </SelectItem>
            <SelectItem value="editor" className="font-mono text-xs uppercase tracking-wide">
              Editor
            </SelectItem>
            <SelectItem value="customer" className="font-mono text-xs uppercase tracking-wide">
              Customer
            </SelectItem>
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px] bg-black/20 border-[#242423] font-mono text-xs uppercase tracking-wide">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent className="bg-black border-[#242423]">
            <SelectItem value="all" className="font-mono text-xs uppercase tracking-wide">
              All Statuses
            </SelectItem>
            <SelectItem value="active" className="font-mono text-xs uppercase tracking-wide">
              Active
            </SelectItem>
            <SelectItem value="inactive" className="font-mono text-xs uppercase tracking-wide">
              Inactive
            </SelectItem>
            <SelectItem value="blocked" className="font-mono text-xs uppercase tracking-wide">
              Blocked
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <Card
            key={user.id}
            className="overflow-hidden border-[#242423] bg-black/20 hover:border-[#B99C20]/30 transition-colors"
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className={getRoleBadgeClass(user.role)}>
                  {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                </Badge>
                <Badge variant="outline" className={getStatusBadgeClass(user.status)}>
                  {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                </Badge>
              </div>
              <div className="flex items-center mt-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3 border border-[#242423]">
                  <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
                </div>
                <div>
                  <CardTitle className="font-tektur uppercase tracking-wide text-lg">{user.name}</CardTitle>
                  <p className="text-sm text-muted-foreground font-mono">{user.email}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Joined</p>
                  <p className="font-sans">{formatDate(user.dateJoined)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Last Login</p>
                  <p className="font-sans">{formatDate(user.lastLogin)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Orders</p>
                  <p className="font-sans">{user.orders}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">Total Spent</p>
                  <p className="font-sans text-[#B99C20]">{formatCurrency(user.totalSpent)}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-[#242423] pt-3 pb-3">
              <Button variant="outline" size="sm" asChild className="font-mono text-xs uppercase tracking-wide">
                <Link href={`/admin/users/${user.id}/orders`}>
                  <Eye className="mr-2 h-4 w-4" />
                  Orders
                </Link>
              </Button>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-500 hover:text-red-600 border-red-500/30 hover:bg-red-500/10"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  asChild
                  className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
                >
                  <Link href={`/admin/users/${user.id}`}>
                    <FileEdit className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12 border border-dashed border-[#242423] rounded-md">
          <p className="text-muted-foreground mb-4 font-mono">No users found</p>
          <Button
            asChild
            className="bg-[#B99C20] text-black hover:bg-[#ECD055] font-mono text-xs uppercase tracking-wide"
          >
            <Link href="/admin/users/new">
              <UserPlus className="mr-2 h-4 w-4" />
              Add User
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}

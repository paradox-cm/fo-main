"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ShoppingBag, DollarSign, TrendingUp } from "lucide-react"

export function DashboardStats() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="border-[#242423] bg-black/20 hover:border-[#B99C20]/30 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-mono uppercase tracking-wide">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-[#B99C20]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-tektur">$45,231.89</div>
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-green-500">+20.1%</span> from last month
          </p>
        </CardContent>
      </Card>

      <Card className="border-[#242423] bg-black/20 hover:border-[#B99C20]/30 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-mono uppercase tracking-wide">New Customers</CardTitle>
          <Users className="h-4 w-4 text-[#B99C20]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-tektur">+2,350</div>
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-green-500">+18.2%</span> from last month
          </p>
        </CardContent>
      </Card>

      <Card className="border-[#242423] bg-black/20 hover:border-[#B99C20]/30 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-mono uppercase tracking-wide">Total Orders</CardTitle>
          <ShoppingBag className="h-4 w-4 text-[#B99C20]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-tektur">+12,234</div>
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-green-500">+12.2%</span> from last month
          </p>
        </CardContent>
      </Card>

      <Card className="border-[#242423] bg-black/20 hover:border-[#B99C20]/30 transition-colors">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-mono uppercase tracking-wide">Conversion Rate</CardTitle>
          <TrendingUp className="h-4 w-4 text-[#B99C20]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-tektur">3.2%</div>
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-green-500">+2.5%</span> from last month
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

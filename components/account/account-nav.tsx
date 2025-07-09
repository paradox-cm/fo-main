"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useUser } from "@/lib/user-context"
import { User, Package, MapPin, Heart, Settings, LogOut, CreditCard, RotateCcw } from "lucide-react"

const navItems = [
  {
    title: "Account Overview",
    href: "/account",
    icon: User,
  },
  {
    title: "Orders",
    href: "/account/orders",
    icon: Package,
  },
  {
    title: "Returns & Exchanges",
    href: "/account/returns",
    icon: RotateCcw,
  },
  {
    title: "Addresses",
    href: "/account/addresses",
    icon: MapPin,
  },
  {
    title: "Payment Methods",
    href: "/account/payment-methods",
    icon: CreditCard,
  },
  {
    title: "Wishlist",
    href: "/account/wishlist",
    icon: Heart,
  },
  {
    title: "Settings",
    href: "/account/settings",
    icon: Settings,
  },
]

export function AccountNav() {
  const pathname = usePathname()
  const { logout, user } = useUser()

  if (!user) return null

  return (
    <div className="space-y-4">
      <div className="sticky top-24 rounded-lg border border-[#222] bg-[#111] p-4">
        <h2 className="mb-4 font-tektur text-xl uppercase tracking-wide text-[#B99C20]">My Account</h2>

        {/* Mobile navigation - horizontal scrolling */}
        <div className="flex overflow-x-auto pb-2 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "mr-2 flex min-w-max flex-shrink-0 items-center gap-1 rounded-md px-3 py-2 text-sm transition-colors whitespace-nowrap",
                pathname === item.href
                  ? "bg-[#B99C20]/10 text-[#B99C20]"
                  : "text-gray-300 hover:bg-[#B99C20]/5 hover:text-[#B99C20]",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
        </div>

        {/* Desktop navigation - vertical list */}
        <nav className="hidden space-y-1 md:block">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-[#B99C20]/10 text-[#B99C20]"
                  : "text-gray-300 hover:bg-[#B99C20]/5 hover:text-[#B99C20]",
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}
          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-300 transition-colors hover:bg-red-900/10 hover:text-red-400"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </nav>

        {/* Mobile sign out button */}
        <div className="mt-4 md:hidden">
          <button
            onClick={logout}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-red-900/10 px-3 py-2 text-sm text-red-400 transition-colors hover:bg-red-900/20"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

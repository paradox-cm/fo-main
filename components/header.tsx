"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { CartButton } from "@/components/cart/cart-button"
import { useRouter, usePathname } from "next/navigation"
import { useUser } from "@/lib/user-context"
import { ReliableImage } from "@/components/ui/reliable-image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { user } = useUser()

  const exploreButtonStyles =
    "bg-[#1A1505] text-[#B99C20] hover:bg-[#272107] active:bg-[#0F0C02] border border-[#242423] rounded-md px-4 py-2 transition-colors font-sans text-sm font-medium"

  const scrollToBrands = (e: React.MouseEvent) => {
    e.preventDefault()

    // If we're already on the homepage
    if (pathname === "/") {
      const brandsSection = document.getElementById("brands")
      if (brandsSection) {
        brandsSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If we're on another page, navigate to homepage first
      router.push("/#brands")
    }

    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#242423] rich-black">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="h-8 w-8 forest-icon">
            <ReliableImage
              src="/images/forest-icon-new.svg"
              svgSrc="/images/forest-icon-new.svg"
              width={32}
              height={32}
              alt="Forest Outfitters Icon"
              className="h-8 w-8"
            />
          </div>
          <div className="h-5">
            <ReliableImage
              src="/images/forest-text-main.svg"
              svgSrc="/images/forest-text-main.svg"
              width={96}
              height={19}
              alt="Forest"
              className="h-5 w-auto"
              style={{ filter: "invert(1) brightness(1.5)" }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-8">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/investors">Investors</NavLink>
            <NavLink href="/shop">Shop</NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/brands" className={exploreButtonStyles}>
              Explore Our Brands
            </Link>
            <Link
              href="/account"
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-300 transition-colors hover:bg-[#222] hover:text-[#B99C20]"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </Link>
            <CartButton />
          </div>
        </div>

        {/* Mobile Navigation and Cart */}
        <div className="md:hidden flex items-center space-x-2">
          <Link
            href="/account"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-300 transition-colors hover:bg-[#222] hover:text-[#B99C20]"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>
          <CartButton />
          <button
            className="text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-[#242423] rich-black">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <MobileNavLink href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </MobileNavLink>
            <MobileNavLink href="/investors" onClick={() => setIsMenuOpen(false)}>
              Investors
            </MobileNavLink>
            <MobileNavLink href="/shop" onClick={() => setIsMenuOpen(false)}>
              Shop
            </MobileNavLink>
            <MobileNavLink href="/account" onClick={() => setIsMenuOpen(false)}>
              Account
            </MobileNavLink>
            <Link href="/brands" className={`${exploreButtonStyles} text-center mt-2 w-full`}>
              Explore Our Brands
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "font-mono text-sm uppercase tracking-wide text-white/80 hover:text-primary transition-colors",
        isActive && "underline text-primary underline-offset-8 decoration-2",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "font-mono text-sm uppercase tracking-wide text-white/80 hover:text-primary py-2 block transition-colors",
        isActive && "underline text-primary underline-offset-8 decoration-2"
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

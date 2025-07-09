import type React from "react"
import Link from "next/link"
import { Instagram } from "lucide-react"
import { ReliableImage } from "@/components/ui/reliable-image"

export function Footer() {
  return (
    <footer className="rich-black border-[#242423] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <h4 className="text-primary text-lg mb-4 font-mono uppercase tracking-wide text-sm">Forest Outfitters</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/investors">Investors</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </nav>
          </div>

          <div>
            <h4 className="text-primary text-lg mb-4 font-mono uppercase tracking-wide text-sm">Tribe Equipment</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Products</FooterLink>
              <FooterLink href="#">Pre-Order</FooterLink>
            </nav>
          </div>

          <div>
            <h4 className="text-primary text-lg mb-4 font-mono uppercase tracking-wide text-sm">Hyde Camo</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Technology</FooterLink>
            </nav>
          </div>

          <div>
            <h4 className="text-primary text-lg mb-4 font-mono uppercase tracking-wide text-sm">The Real Bigfoot</h4>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Shop</FooterLink>
            </nav>
          </div>
        </div>

        <div className="border-t border-[#242423] pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <div className="forest-icon">
                <ReliableImage
                  src="/images/forest-icon-new.png"
                  pngSrc="/images/forest-icon-new.png"
                  width={30}
                  height={30}
                  alt="Forest Outfitters Icon"
                  className="h-8 w-8"
                />
              </div>
              <div className="hidden sm:flex items-center space-x-3">
                <ReliableImage
                  src="/images/forest-text-main.png"
                  pngSrc="/images/forest-text-main.png"
                  width={96}
                  height={19}
                  alt="Forest"
                  className="h-5 w-auto"
                  style={{ filter: "invert(1) brightness(1.5)" }}
                />
                <ReliableImage
                  src="/images/outfitters-text.png"
                  width={96}
                  height={16}
                  alt="Outfitters"
                  className="h-4 w-auto hidden md:block"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm font-sans">
              © {new Date().getFullYear()} Forest Outfitters. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="https://www.instagram.com/forestoutfitters/"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#242423] hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} className="text-white/80 hover:text-white" />
            </Link>
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-black font-mono uppercase text-xs tracking-wide px-4 py-2 rounded transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white/60 hover:text-white transition-colors text-sm font-mono">
      {children}
    </Link>
  )
}

function SocialLink({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: any }) {
  return (
    <Link href={href} className="text-white/60 hover:text-primary transition-colors" {...props}>
      {children}
    </Link>
  )
}

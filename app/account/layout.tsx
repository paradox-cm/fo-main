import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0A0A0B] pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="w-full">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  )
}

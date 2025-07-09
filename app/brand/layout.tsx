import type React from "react"
import BrandLayoutClient from "./BrandLayoutClient"

export const metadata = {
  title: "Forest Outfitters Brand Guidelines",
  description: "Official brand guidelines for Forest Outfitters and its sub-brands",
}

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return <BrandLayoutClient children={children} />
}

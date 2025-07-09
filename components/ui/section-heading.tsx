import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionHeading({ title, subtitle, align = "left", className }: SectionHeadingProps) {
  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }

  return (
    <>
      <h2
        className={cn(
          "text-3xl md:text-4xl section-heading mb-8 md:mb-12",
          align === "center" && "text-center after:mx-auto",
          align === "right" && "text-right after:ml-auto",
          className,
        )}
      >
        {title}
      </h2>
    </>
  )
}

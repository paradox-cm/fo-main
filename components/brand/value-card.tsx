import { cn } from "@/lib/utils"
import * as Icons from "lucide-react"

interface ValueCardProps {
  title: string
  description: string
  className?: string
  titleClassName?: string
  iconClassName?: string
  icon?: keyof typeof Icons
}

export function ValueCard({ title, description, className, titleClassName, iconClassName, icon }: ValueCardProps) {
  const IconComponent = icon ? Icons[icon] : undefined

  return (
    <div className={cn("rounded-lg border border-gray-800 bg-gray-900 p-6", className)}>
      {IconComponent && (
        <div className={cn("mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-800", iconClassName)}>
          <IconComponent className="h-6 w-6" />
        </div>
      )}
      <h3 className={cn("mb-3 font-tektur text-xl uppercase tracking-wider text-white", titleClassName)}>{title}</h3>
      <p className={cn("text-gray-300", className)}>{description}</p>
    </div>
  )
}

import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "outline" | "text" | "destructive" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none font-sans"

    const variantStyles = {
      primary:
        "bg-[#B99C20] text-black hover:bg-[#ECD055] active:bg-[#645411] disabled:bg-[#645411]/50 disabled:text-black/60 border border-[#B99C20]",
      outline:
        "border-2 border-[#B99C20] text-[#B99C20] bg-transparent hover:border-[#ECD055] hover:text-[#ECD055] active:border-[#645411] active:text-[#645411] disabled:border-[#645411]/50 disabled:text-[#645411]/50",
      text: "bg-transparent text-[#B99C20] hover:text-[#ECD055] active:text-[#645411] disabled:text-[#645411]/50 underline-offset-4 hover:underline",
      default: "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    }

    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-md px-6 text-base",
      icon: "h-10 w-10",
    }

    const Comp = asChild ? (props.children as React.ReactElement) : "button"

    const buttonClasses = cn(baseStyles, variantStyles[variant], sizeStyles[size], className)

    if (asChild && React.isValidElement(props.children)) {
      return React.cloneElement(props.children as React.ReactElement, {
        className: cn(buttonClasses, (props.children as React.ReactElement).props.className),
        ref,
        ...props,
      })
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        <span className="flex items-center justify-center">
          {React.Children.map(props.children, (child) => {
            if (React.isValidElement(child) && typeof child.type === "function" && child.type.name?.includes("Icon")) {
              return React.cloneElement(child, {
                className: cn("text-white", child.props.className),
              })
            }
            return child
          })}
        </span>
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }

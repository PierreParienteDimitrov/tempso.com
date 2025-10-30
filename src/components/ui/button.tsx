import * as React from "react"
import { cn } from "@/lib/utils"
import styles from "./button.module.css"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'navbar' | 'withArrow'
  size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "font-body text-center rounded-full transition-all duration-300"
    
    const variants = {
      default: "bg-white text-[#070709] shadow-button hover:bg-[#d1d1d1]",
      outline: cn(
        "border border-white/50 text-white bg-black",
        styles.buttonGradient,
        "hover:bg-black/60 backdrop-blur-sm"
      ),
      navbar: cn(
        "border border-white text-white bg-black px-7 py-1.5 text-sm font-medium",
        styles.buttonGradient,
        "hover:bg-white/10"
      ),
      withArrow: cn(
        "bg-white text-[#070709] shadow-button hover:bg-[#d1d1d1]",
        styles.buttonWithArrow
      ),
    }

    const sizes = {
      default: "px-5.5 py-2.5 text-base",
      sm: "px-4 py-2 text-sm",
      lg: "px-7 py-3 text-lg",
    }

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
import * as React from "react"
import { cn } from "@/lib/utils"
import styles from "./card.module.css"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, gradient = false, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-[#48495e87]",
          gradient && styles.gradientBackground,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card }
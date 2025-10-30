import * as React from "react"
import { cn } from "@/lib/utils"
import styles from "./text-field.module.css"

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        className={cn(
          "w-full h-[52px] px-4 text-white bg-[#070709]",
          "border-2 border-[#262626] rounded-lg",
          "font-body text-sm transition-all duration-300",
          styles.textFieldShadow,
          "hover:border-[#777] focus:border-white focus:outline-none",
          "placeholder:text-[#7d7d7d] placeholder:text-sm",
          error && styles.errorField,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
TextField.displayName = "TextField"

export { TextField }
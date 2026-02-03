import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-xl cursor-pointer";

    // Variant styles - Slate + Sky gradient
    const variants = {
      primary:
        "bg-gradient-to-r from-sky-600 to-sky-500 text-white hover:from-sky-500 hover:to-sky-400 shadow-lg shadow-sky-500/25 hover:shadow-xl hover:shadow-sky-500/30 focus:ring-sky-500",
      secondary:
        "bg-white border-2 border-slate-200 text-slate-700 hover:border-sky-500 hover:text-sky-600 shadow-sm hover:shadow-md focus:ring-sky-500",
      ghost:
        "bg-transparent text-sky-600 font-medium hover:bg-sky-50 focus:ring-sky-400",
      light:
        "bg-white text-slate-800 hover:bg-slate-50 shadow-lg hover:shadow-xl focus:ring-white",
    };

    // Size styles
    const sizes = {
      default: "h-11 px-8 text-base",
      sm: "h-9 px-5 text-sm",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button };

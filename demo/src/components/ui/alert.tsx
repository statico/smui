import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full border px-2.5 py-2 text-ui flex gap-2 items-start [&>svg]:size-3.5 [&>svg]:translate-y-0.5 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "border-[hsl(var(--smui-red)/0.25)] bg-[hsl(var(--smui-red)/0.04)] text-[hsl(var(--smui-red))] [&>svg]:text-[hsl(var(--smui-red))] *:data-[slot=alert-description]:text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium mb-px",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground text-xs [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }

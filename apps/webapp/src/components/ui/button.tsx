import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xl ',
        secondary: 'bg-audio',
        icon: 'border-2 bg-secondary transition-transform duration-300 ease-in-out hover:scale-110',
        veryHappy: 'bg-veryHappy-foreground shadow shadow-xl ',
        happy: 'bg-happy-foreground shadow-xl ',
        sad: 'bg-sad-foreground shadow-xl ',
        angry: 'bg-angry-foreground shadow-xl ',
        tired: 'bg-tired-foreground shadow-xl',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',

        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'w-[335px] h-[55px] rounded-[40px]',
        icon: 'h-[60px] w-[60px] rounded-full',
        md: 'w-12 h-12 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  iconRight?: React.ReactNode
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, iconRight, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
        {iconRight}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

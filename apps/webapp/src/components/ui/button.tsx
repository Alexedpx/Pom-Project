import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm  transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-softWhite shadow-xl transition-transform duration-300 ease-in-out hover:scale-110 ',
        noHover: 'bg-audio text-primary-foreground  ',
        default:
          'bg-audio text-primary-foreground shadow-xl transition-transform duration-300 ease-in-out hover:scale-110 ',
        validate:
          'px-8 z-30 py-4 bg-primary rounded-md text-white relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-tired after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  ',
        icon: 'border-2 bg-secondary transition-transform duration-300 ease-in-out hover:scale-110',
        veryHappy:
          'bg-veryHappy-foreground shadow shadow-xl px-8 z-30 py-4  rounded-md text-white relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-audio after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 ',
        happy:
          'bg-happy-foreground shadow shadow-xl px-8 z-30 py-4  rounded-md text-white relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-audio after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  ',
        sad: 'bg-sad-foreground shadow shadow-xl px-8 z-30 py-4  rounded-md text-white relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-audio after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  ',
        angry:
          'bg-angry-foreground shadow shadow-xl px-8 z-30 py-4  rounded-md text-white relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-audio after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700  ',
        tired:
          'bg-tired-foreground shadow shadow-xl px-8 z-30 py-4  rounded-md text-white relative  after:-z-20 after:absolute after:h-1 after:w-1 after:bg-audio after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 ',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'w-[335px] h-[55px] rounded-[40px]',
        icon: 'h-[60px] w-[60px] rounded-full',
        md: 'w-12 h-12 rounded-full',
        lg: 'w-36 h-12 rounded-xl',
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
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, iconRight, iconLeft, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {iconLeft}
        {children}
        {iconRight}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }

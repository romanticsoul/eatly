import React, { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  ghost: cn('bg-transparent hover:bg-[#ededed]'),
  flat: cn('bg-[#ededed]'),
  default: cn('bg-primary text-[#f9f9f9]'),
  outline: cn('bg-transparent border text-primary border-primary'),
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  return (
    <button
      className={cn(
        'rounded-2xl p-5 px-7 py-4 text-lg font-bold transition-all duration-200',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

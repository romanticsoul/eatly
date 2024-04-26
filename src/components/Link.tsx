import NextLink from 'next/link'
import type { LinkProps } from 'next/link'
import { cn } from '@/lib/utils'

export function Link({
  children,
  className,
  ...props
}: LinkProps & {
  children: React.ReactNode
} & React.HTMLProps<HTMLAnchorElement>) {
  return (
    <NextLink
      className={cn('transition-colors hover:text-primary', className)}
      {...props}
    >
      {children}
    </NextLink>
  )
}

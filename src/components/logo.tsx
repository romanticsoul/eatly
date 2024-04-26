import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import type { HtmlHTMLAttributes } from 'react'

export function Logo({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <Link href="/">
      <div
        className={cn('flex h-[42px] items-center gap-3', className)}
        {...props}
      >
        <Image
          src="/logo.svg"
          alt="logo"
          width={112}
          height={42}
          priority={true}
          style={{ height: 42, width: 112 }}
        />
      </div>
    </Link>
  )
}

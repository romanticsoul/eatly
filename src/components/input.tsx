import { cn } from '@/lib/utils'
import { InputHTMLAttributes } from 'react'

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  prependInner?: React.ReactNode
  appendInner?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'box-border inline-flex overflow-hidden rounded-2xl border-transparent bg-[#f5f5f5] font-poppins',
        className,
      )}
    >
      {props.prependInner && <div className="p-2">{props.prependInner}</div>}
      <input
        type="text"
        className="w-full bg-transparent p-5 font-medium text-foreground outline-0"
        {...props}
      />
      {props.appendInner && <div className="p-2">{props.appendInner}</div>}
    </div>
  )
}

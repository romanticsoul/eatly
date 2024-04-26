import { cn } from '@/lib/utils'
import { InputHTMLAttributes } from 'react'

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  // prependInner?: React.ReactNode
  // appendInner?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'box-border inline-flex overflow-hidden rounded-2xl border-[3px] border-transparent bg-[#f5f5f5] font-poppins transition-all focus-within:border-primary focus-within:bg-white',
        className,
      )}
    >
      {/* {props.prependInner && <div className="p-2">{props.prependInner}</div>} */}
      <input
        type="text"
        className="w-full bg-transparent p-5 font-medium text-foreground outline-0 focus:text-primary"
        {...props}
      />
      {/* {props.appendInner && <div className="p-2">{props.appendInner}</div>} */}
    </div>
  )
}

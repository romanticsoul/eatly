import { cn } from '@/lib/utils'

export const FacebookIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 11 22"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('h-[1em] w-[1em]', className)}
    >
      <path d="M9.95256 10.6695H6.97166V21.338H2.52644V12.415V10.6695H0.43457V6.90414H2.52644V4.4462C2.52644 2.72041 3.36319 0.000976562 6.97166 0.000976562H10.2663V3.66174H7.913C7.54692 3.66174 6.97166 3.87094 6.97166 4.70768V6.90414H10.3186L9.95256 10.6695Z" />
    </svg>
  )
}

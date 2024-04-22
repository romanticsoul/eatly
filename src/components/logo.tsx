import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/logo.svg" alt="logo" width={112} height={42} />
    </div>
  )
}

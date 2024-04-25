import Link from 'next/link'
import { Button } from '../button'
import { Logo } from '../logo'

export function Header() {
  return (
    <header className="container">
      <div className="flex items-center border-b-2 pb-6 pt-12">
        <Logo />
        <nav className="ml-[6.5rem] mr-auto" aria-label="Main navigation">
          <ul className="flex gap-[3.36rem]">
            <li>
              <Link href="#">Menu</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

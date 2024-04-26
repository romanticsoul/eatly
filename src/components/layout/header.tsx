import { Link } from '../Link'
import { Button } from '../button'
import { Logo } from '../logo'
import { MenuButton } from '../menuButton'
import { SigninButton } from '../signinButton'
import { SignupButton } from '../signupButton'

export function Header() {
  return (
    <header className="container">
      <div className="flex items-center border-b-2 pb-6 pt-12">
        <Logo />
        <nav
          className="max-md:hidden sm:ml-px lg:ml-[6.5rem]"
          aria-label="Main navigation"
        >
          <ul className="flex sm:gap-[2em] lg:gap-[3.36rem]">
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
        <div className="ml-auto flex gap-2">
          <div className="flex gap-2 max-md:hidden">
            <SigninButton />
            <SignupButton />
          </div>
          <div className="md:hidden">
            <MenuButton />
          </div>
        </div>
      </div>
    </header>
  )
}

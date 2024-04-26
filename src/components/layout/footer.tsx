import { Logo } from '../logo'
import { Link } from '../Link'
import { TwitterIcon } from '../icons/twitter'
import { InstagramIcon } from '../icons/instagram'
import { FacebookIcon } from '../icons/facebook'
import { LinkedinIcon } from '../icons/linkedin'

export function Footer() {
  return (
    <footer className=" bg-[#EAEAEA] pb-6 pt-24 md:pb-[81px]">
      <div className="container flex pb-7 pt-[5px] max-md:flex-col md:items-center">
        <div className="flex max-md:justify-between">
          <Logo className="h-9 md:ml-2 md:h-[57px]" />
          <ul className="flex items-center gap-5 md:hidden">
            <li>
              <Link href="/">
                <span className="sr-only">Link to our Instagram</span>
                <InstagramIcon className="size-[22px] fill-[#081420] transition-colors hover:fill-primary" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="sr-only">Link to our Linkedin</span>
                <LinkedinIcon className="size-[22px] fill-[#081420] transition-colors hover:fill-primary" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="sr-only">Link to our Facebook</span>
                <FacebookIcon className="size-[22px] fill-[#081420] transition-colors hover:fill-primary" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="sr-only">Link to our Tweeter</span>
                <TwitterIcon className="size-[22px] fill-[#081420] transition-colors hover:fill-primary" />
              </Link>
            </li>
          </ul>
        </div>
        <nav
          className="relative md:left-1 md:ml-auto"
          aria-label="Bottom navigation"
        >
          <ul className="flex gap-[70px] text-[17.83px] font-medium text-[#999] max-md:mb-9 max-md:mt-14 max-md:flex-col max-md:gap-7 max-md:uppercase">
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="mb-6 border-b border-[#D0D0D0]"></div>
        <div className="flex justify-center md:justify-between">
          <p className="ml-2 text-[17px] text-[#999]">
            © 2023 EATLY All Rights Reserved.
          </p>
          <ul className="flex items-center gap-[50px] max-md:hidden">
            <li>
              <Link href="/">
                <span className="sr-only">Link to our Instagram</span>
                <InstagramIcon className="size-[22px] fill-[#081420] transition-colors hover:fill-primary" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="sr-only">Link to our Linkedin</span>
                <LinkedinIcon className="size-[22px] fill-[#081420] transition-colors hover:fill-primary" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="sr-only">Link to our Facebook</span>
                <FacebookIcon className="size-[22px] fill-[#081420] transition-colors hover:fill-primary" />
              </Link>
            </li>
            <li>
              <Link href="/">
                <span className="sr-only">Link to our Tweeter</span>
                <TwitterIcon className="size-[22px] fill-[#081420] transition-colors hover:fill-primary" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

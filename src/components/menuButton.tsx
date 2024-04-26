'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import { Link } from './Link'
import { Button } from './button'

export function MenuButton() {
  return (
    <Sheet>
      <SheetTrigger>
        <span className="sr-only">Open menu</span>
        <Image
          src="/menu.svg"
          alt="menu icons"
          height={32}
          width={32}
          className="aspect-square w-8 object-contain"
        ></Image>
      </SheetTrigger>
      <SheetContent>
        <nav>
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link className="block" href="#">
                Menu
              </Link>
            </li>
            <li>
              <Link className="block" href="#">
                Blog
              </Link>
            </li>
            <li>
              <Link className="block" href="#">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="block" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

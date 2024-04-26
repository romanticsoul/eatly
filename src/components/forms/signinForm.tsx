import Image from 'next/image'
import { Button } from '../button'
import { Logo } from '../logo'
import { Input } from '../input'
import NextLink from 'next/link'
import { Link } from '../Link'

export function SigninForm() {
  return (
    <div className="flex overflow-hidden rounded-3xl">
      <div className="relative flex-1 bg-white p-12">
        <Logo />
        <form action="" className="xl:px-[20%]">
          <h2 className="mb-10 mt-16 text-center text-4xl">Sign In To eatly</h2>
          <div className="flex gap-5">
            <Button variant="flat" className="flex-1">
              <span className="sr-only">Sign In with Google</span>
              <Image
                src="/google.svg"
                alt=""
                width={24}
                height={24}
                className="m-auto size-6"
              />
            </Button>
            <Button variant="flat" className="flex-1">
              <span className="sr-only">Sign In with Apple</span>
              <Image
                src="/apple.svg"
                alt=""
                width={24}
                height={24}
                className="m-auto size-6"
              />
            </Button>
          </div>
          <p className="my-8 text-center font-poppins font-medium text-muted-foreground">
            OR
          </p>
          <div className="grid gap-6">
            <Input required type="email" placeholder="EMAIL" />
            <Input required type="password" placeholder="PASSWORD" />
            <Button className="font-poppins font-semibold">SIGN UP</Button>
            <p className="text-center font-poppins text-[#3E3E3E]">
              Create A New Account?{' '}
              <NextLink href="/" className="font-bold text-primary">
                Sign Up
              </NextLink>
            </p>
          </div>
        </form>
        <div className="mt-20 flex justify-between">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Copyright 2022</Link>
        </div>
      </div>
      <div className="relative flex w-[45%] flex-col justify-end bg-primary max-lg:hidden">
        <span className="absolute size-full before:absolute before:bottom-80 before:right-28 before:content-[url('/Illustration7.svg')]"></span>
        <span className="absolute size-full before:absolute before:left-10 before:top-20 before:content-[url('/Illustration8.svg')]"></span>
        <Image
          src="/loginhero.png"
          alt=""
          width={500}
          height={500}
          className="z-10 w-full object-contain pl-14"
        />
        <div className="z-10 mt-16 pb-32 pl-16 pr-24 text-center text-white">
          <h3 className="text-4xl font-bold text-white">
            Find Foods With Love{' '}
          </h3>
          <p className="mt-5 text-sm">
            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
            Including Asian, Chinese, Italians And Many More. Our Dashboard
            Helps You To Manage Orders And Money.
          </p>
        </div>
      </div>
    </div>
  )
}

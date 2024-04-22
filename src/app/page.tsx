import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className="container mt-[114px]">
        <div className="flex justify-between">
          <div className="flex-1">
            <p className="font-poppins flex items-center text-[15px] font-semibold uppercase tracking-[2px] text-muted-foreground before:mr-5 before:block before:h-[1px] before:w-14 before:bg-border">
              OVER 1000 USERS
            </p>
            <h1 className="my-4">
              Enjoy Foods All
              <br />
              Over The <span className="text-primary">World</span>
            </h1>
            <p className="">
              EatLy help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a $20 bonus.
            </p>
          </div>
          <div className="relative before:absolute before:-right-10 before:-top-16 before:z-10 before:content-[url('/Illustration1.svg')] after:absolute after:bottom-12 after:left-2 after:z-10 after:content-[url('/Illustration2.svg')]">
            {/* Illustration2 */}
            <Image
              src="/hero.jpg"
              width={650}
              height={600}
              alt="Hero image"
              className="relative -top-10 left-5 h-[604px] max-w-[650px] object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

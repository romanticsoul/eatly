import { Button } from '@/components/button'
import { PostCard } from '@/components/postCard'
import { FoodCard } from '@/components/foodCard'
import { Posts, Foods } from '@/types/mockapi'
import Image from 'next/image'

export default async function Home() {
  const posts: Posts = await fetch(
    'https://6625022f04457d4aaf9d8f31.mockapi.io/posts',
    { cache: 'no-cache' },
  ).then(r => r.json())
  const foods: Foods = await fetch(
    'https://6625022f04457d4aaf9d8f31.mockapi.io/foods',
    { cache: 'no-cache' },
  ).then(r => r.json())

  return (
    <main>
      <section className="container mt-[114px]">
        <div className="flex justify-between">
          <div className="flex-1">
            <p className="flex items-center font-poppins text-[15px] font-semibold uppercase tracking-[2px] text-muted-foreground before:mr-5 before:block before:h-[1px] before:w-14 before:bg-border">
              OVER 1000 USERS
            </p>
            <h1 className="my-4">
              Enjoy Foods All
              <br />
              Over The <span className="text-primary">World</span>
            </h1>
            <p>
              EatLy help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early.{' '}
              <a href="#" className="font-medium text-primary">
                Get a $20 bonus
              </a>
              .
            </p>
            <div className="mt-12 flex gap-4">
              <Button>Get Started</Button>
              <Button variant="outline">Go Pro</Button>
            </div>
            <div className="relative mt-8 flex">
              <Image
                src="trustpilot.svg"
                alt="trustpilot logo"
                width={123}
                height={30}
              />
              <span className="relative top-1.5 ml-5 before:mr-2 before:content-[url('/stars.svg')]">
                4900+
              </span>
            </div>
          </div>
          <div className="relative before:absolute before:-right-10 before:-top-16 before:z-10 before:content-[url('/Illustration1.svg')] after:absolute after:bottom-12 after:left-2 after:z-10 after:content-[url('/Illustration2.svg')]">
            <span className="absolute right-7 top-20 z-10 content-[url('/Illustration3.svg')]"></span>
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

      <div className="relative mt-6 overflow-hidden bg-primary py-14 text-white before:absolute before:-bottom-2 before:right-6 before:scale-x-125 before:scale-y-[1.8] before:content-[url('/Illustration5.svg')] after:absolute after:-bottom-2 after:left-4 after:scale-x-110 after:scale-y-125 after:content-[url('/Illustration4.svg')]">
        <div className="container">
          <ul className="relative flex justify-evenly text-center">
            <li>
              <div className="mb-5 text-5xl font-semibold">10K+</div>
              <p className="text-sm">
                Satisfied Costumers
                <br />
                All Great Over The World
              </p>
            </li>
            <span className="block w-px bg-[#C5C5C5]"></span>
            <li>
              <div className="mb-5 text-5xl font-semibold">4M</div>
              <p className="text-sm">
                Healthy Dishes Sold
                <br />
                Including Milk Shakes Smooth
              </p>
            </li>
            <span className="block w-px bg-[#C5C5C5]"></span>
            <li>
              <div className="mb-5 text-5xl font-semibold">99.99%</div>
              <p className="text-sm">
                Reliable Customer Support
                <br />
                We Provide Great Experiences
              </p>
            </li>
          </ul>
        </div>
      </div>

      <section className="container flex items-center justify-evenly gap-40 py-[120px]">
        <div className="relative flex flex-1 justify-center before:absolute before:-top-3 before:right-16 before:rotate-[218deg] before:scale-125 before:scale-x-150 before:content-[url('/Illustration2.svg')]">
          <Image
            src="/Mobile Screen.png"
            width={300}
            height={610}
            alt="Mobile Screen"
            className="relative right-3 h-[610px] w-[310px] object-contain"
          />
        </div>
        <div className="relative flex-1 before:absolute before:-bottom-14 before:left-40 before:content-[url('/Illustration6.svg')]">
          <h2 className="mb-20">
            Premium <span className="text-primary">Quality</span>
            <br />
            For Your Health
          </h2>
          <ul className="relative bottom-4 mb-14 grid gap-8 pl-5 text-xl">
            <li className="pl-3 marker:content-['•']">
              Premium quality food is made with ingredients that are packed with
              essential vitamins, minerals.
            </li>
            <li className="pl-3 marker:content-['•']">
              These foods promote overall wellness by support healthy digestion
              and boosting immunity
            </li>
          </ul>
          <Button className="flex items-center gap-3">
            Download
            <Image
              src="/arrow-right.svg"
              alt="arrow image"
              width={28}
              height={28}
            />
          </Button>
        </div>
      </section>

      <div className="container mb-20 border-b"></div>

      <section className="container">
        <h2 className="text-center text-[44px]">
          Our Top <span className="text-primary">Restaurants</span>
        </h2>

        <div className="mt-16 grid grid-cols-3 gap-8 pt-1">
          {posts.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </section>

      <div className="container mb-20 mt-60 border-b"></div>

      <section className="container">
        <h2 className="text-center text-[44px]">
          Our Top <span className="text-primary">Dishes</span>
        </h2>
        <div className="mt-16 grid grid-cols-5 gap-8 pt-1">
          {foods.map(food => (
            <FoodCard key={food.id} {...food} />
          ))}
        </div>
      </section>
    </main>
  )
}

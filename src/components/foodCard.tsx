import { Food } from '@/types/mockapi'
import Image from 'next/image'
import Link from 'next/link'
import { Tag } from './tag'

export function FoodCard({
  id,
  tag,
  name,
  price,
  delivery_time,
  rating,
  img_url,
}: Food) {
  const priceInt = price.split('.')[0]
  const priceDec = price.split('.')[1] || '00'

  return (
    <Link href="/">
      <article
        style={{
          boxShadow: '5.95px 71.35px 35.67px 0px #E5E5E5B2',
          borderColor: '#F4F4F6',
        }}
        className="relative overflow-hidden rounded-[34px] border bg-white pb-9 pt-5 transition-transform duration-200 hover:scale-105"
      >
        <Image
          src={img_url}
          alt={name}
          width={300}
          height={177}
          className="m-auto aspect-square w-[84%]"
        />
        <div className="px-6">
          <div className="relative right-4 scale-[.8]">
            <Tag text={tag}></Tag>
          </div>
          <h3 className="ml-px mt-1 text-[22px] font-bold tracking-[.3px]">
            {name}
          </h3>
          <div className="relative right-2 mt-1 flex scale-90 items-center">
            <p className="tracking-[1px]">
              {delivery_time}min <span aria-hidden>•</span>
            </p>
            <span className='relative top-[2px] ml-3 before:mr-2 before:content-[url("/star.svg")]'>
              {rating}
            </span>
          </div>
          <div className="mt-3 flex items-center">
            <p className="text-2xl font-bold">
              ${priceInt}
              <span className="text-lg text-[#8E97A6]">.{priceDec}</span>
            </p>
            <button className="relative bottom-1 right-px ml-auto flex size-10 items-center justify-center rounded-lg bg-[#323142]">
              <span className="sr-only">Add to cart</span>
              <Image
                src={'/plus.svg'}
                alt="add to card"
                width={18}
                height={18}
              />
            </button>
          </div>
        </div>
      </article>
    </Link>
  )
}

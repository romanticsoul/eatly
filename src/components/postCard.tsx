import { Post } from '@/types/mockapi'
import Image from 'next/image'
import Link from 'next/link'
import { Tag } from './tag'

export function PostCard({
  id,
  tag,
  title,
  delivery_time,
  rating,
  img_url,
}: Post) {
  return (
    <Link href="/">
      <article
        style={{ boxShadow: '5.95px 71.35px 35.67px 0px #E5E5E5B2' }}
        className="relative overflow-hidden rounded-[30px] bg-white transition-transform duration-200 hover:scale-105"
      >
        <Image
          src={img_url}
          alt={title}
          width={300}
          height={177}
          className="w-full"
        />
        <div className="px-8 pb-2 pt-3">
          <Tag text={tag}></Tag>
          <h3 className="relative top-1 ml-[1px] text-[25px] font-bold tracking-[.3px]">
            {title}
          </h3>
          <div className="mt-1 flex items-center">
            <p className="tracking-[1px]">
              {delivery_time}min <span aria-hidden>•</span>
            </p>
            <span className='relative top-[2px] ml-3 before:mr-2 before:content-[url("/star.svg")]'>
              {rating}
            </span>
            <button className="relative bottom-1 left-2 ml-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#DAD8ED]">
              <span className="sr-only">Add to Favorites</span>
              <Image
                src={'/bookmark.svg'}
                alt="bookmark"
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

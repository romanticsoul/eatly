'use client'

import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import EmblaClassNames from 'embla-carousel-class-names'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'

export function CustomerCarousel() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', startIndex: 1 },
    [EmblaClassNames()],
  )
  const slides = Array.from(Array(5).keys())

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onScroll(emblaApi)
    emblaApi.on('reInit', onScroll)
    emblaApi.on('scroll', onScroll)
  }, [emblaApi, onScroll])

  return (
    <div className="embla h-[500px]">
      <div className="container relative top-[327px] flex h-0 justify-end">
        <div className="embla__progress relative h-[11px] w-[calc(100%-528px-53px)] overflow-hidden rounded-full bg-[#C4C2D5]">
          <div
            className="embla__progress__bar absolute -left-full bottom-0 top-0 h-full w-full rounded-full bg-primary"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
      <div
        className="embla__viewport h-full overflow-x-hidden pl-12"
        ref={emblaRef}
      >
        <div className="embla__container container flex">
          {slides.map(index => (
            <div
              className="embla__slide group mr-[46px] min-w-[528px]"
              key={index}
            >
              <div className="embla__slide__number">
                <article
                  className="rounded-3xl bg-white px-[43px] py-[38px]"
                  style={{ boxShadow: '5.95px 71.35px 35.67px 0px #E5E5E5B2' }}
                >
                  <div className="mb-0 flex h-0 items-center gap-5 overflow-hidden transition-all duration-300 group-[.is-snapped]:mb-8 group-[.is-snapped]:h-[71px]">
                    <Image
                      src={'/avatar.png'}
                      alt="avatar"
                      width={71}
                      height={71}
                    />
                    <div>
                      <h4 className="mb-1 text-xl font-medium tracking-[.5px]">
                        Alexander R.
                      </h4>
                      <p className="text-base">01 Year With Us </p>
                    </div>
                    <Image
                      src="/path.svg"
                      alt="icon"
                      width={59}
                      height={45}
                      className="ml-auto mr-2"
                    />
                  </div>
                  <p className="text-justify font-poppins text-lg italic leading-[26.71px]">
                    “ Online invoice payment helps companies save time, are
                    faster and save maximum effort for the clients and save
                    maximum effort. Online invoice payment helps companies save
                    time ”
                  </p>
                  <div className="mt-8 transition-all duration-300 group-[.is-snapped]:mt-9">
                    <Image
                      src="/stars.svg"
                      width={138}
                      height={23}
                      alt="stars image"
                    />
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

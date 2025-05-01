/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'
import { MoveLeft, MoveRight } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  autoPlayInterval?: number
}

export const ImageCarousel = ({
  images,
  autoPlayInterval,
}: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0)
  const length = images.length

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const nextSlide = () => setCurrent((i) => (i === length - 1 ? 0 : i + 1))
  const prevSlide = () => setCurrent((i) => (i === 0 ? length - 1 : i - 1))

  useEffect(() => {
    if (!autoPlayInterval) return
    timeoutRef.current = setTimeout(nextSlide, autoPlayInterval)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current, autoPlayInterval])

  if (!Array.isArray(images) || length === 0) return null

  return (
    <div className='relative w-full max-w-4xl mx-auto overflow-hidden'>
      <div
        className='flex transition-transform duration-700 ease-in-out'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className='w-full flex-shrink-0 flex justify-center items-center'
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-1 rounded-full shadow'
        aria-label='Previous Slide'
      >
        <MoveLeft />
      </button>

      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-1 rounded-full shadow'
        aria-label='Next Slide'
      >
        <MoveRight />
      </button>

      <div>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import { FadeIn } from '@/components/ui/animations'
import Image from 'next/image'

const features = [
  {
    title: "Movements",
    description: "View the detailed movement structure for each composition."
  },
  {
    title: "Classical eras",
    description: "9 eras spanning more than 500 years of music."
  },
  {
    title: "Instruments",
    description: "Organized by categories like keyboard, voice, etc."
  },
  {
    title: "Genres",
    description: "Linked to compositions, with genre-specific radios to explore the classical collection."
  },
  {
    title: "Genre definitions",
    description: "To enhance your classical music understanding and discovery."
  },
  {
    title: "Recording labels",
    description: "Filter albums by your favorite label to navigate the classical repertoire."
  },
  {
    title: "# of recordings",
    description: "For each composition to compare from."
  }
]

export function MachineLearning() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  const slideLeft = () => {
    const currentX = x.get()
    const newX = Math.min(currentX + 300, 0)
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30 })
  }

  const slideRight = () => {
    const currentX = x.get()
    const newX = Math.max(currentX - 300, -width)
    animate(x, newX, { type: "spring", stiffness: 300, damping: 30 })
  }

  return (
    <section className="section bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-4xl">
          <FadeIn>
            <div className="mb-4">
              <span className="text-lg text-gray-400 font-medium uppercase tracking-wider">Powered by machine learning</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover a unique set of classical music data and metadata
            </h2>
          </FadeIn>
        </div>
      </div>

      <div className="pl-4 md:pl-[max(1rem,calc((100vw-1200px)/2+1rem))]">
        <motion.div 
          ref={carousel} 
          className="cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            style={{ x }}
            className="flex gap-6"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="min-w-[280px] md:min-w-[320px] h-[200px] p-8 rounded-2xl bg-[#1c1c1e] border border-white/10 flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-4 pr-4 md:pr-[max(1rem,calc((100vw-1200px)/2+1rem))] mt-8">
          <button 
            onClick={slideLeft}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous slide"
          >
            <Image src="/images/White-Arrow.svg" width={24} height={24} alt="Previous" className="rotate-180" />
          </button>
          <button 
            onClick={slideRight}
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next slide"
          >
            <Image src="/images/White-Arrow.svg" width={24} height={24} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  )
}


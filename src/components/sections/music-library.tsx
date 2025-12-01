"use client"

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import Image from 'next/image'

const libraryCards = [
  {
    title: "Browse\ncomposers & performers",
    description: "Browse thousands of performers, organized by instruments, and 300+ composers sorted by eras.",
    image: "/images/Artists.png",
    alt: "Two Tempso app screens showing a composer and a performer"
  },
  {
    title: "Compare recordings",
    description: "Switch seamlessly between various recordings of the same composition to find your favorite interpretation.",
    image: "/images/Compositions.png",
    alt: "Two Tempso app screens showing a list of compositions and a list of recording for a composition"
  },
  {
    title: "Explore playlists & radios",
    description: "Dive deep into the classical repertoire with our curated playlists, and enjoy automated radio stations organized by genre, composer, and performer.",
    image: "/images/Playlists.png",
    alt: "Two Tempso app screens showing playlists and radios"
  }
]

export function MusicLibrary() {
  return (
    <section className="section bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <FadeIn>
            <div className="mb-4">
              <span className="text-lg text-gray-400 font-medium uppercase tracking-wider">Music library</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              More than 2 million tracks organized into a clean classical music library
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {libraryCards.map((card, index) => (
              <StaggerItem key={index} className="h-full">
                <div className="bg-[#1c1c1e] rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="p-8 pb-0">
                    <h3 className="text-2xl font-bold mb-4 whitespace-pre-line">{card.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-auto relative w-full aspect-[0.8] md:aspect-[0.6] lg:aspect-[0.8]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-contain object-bottom"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}


"use client"

import { FadeIn } from '@/components/ui/animations'
import Image from 'next/image'

const pressLinks = [
  {
    name: "Music Business Worldwide",
    url: "https://www.musicbusinessworldwide.com/apple-solve-classical-musics-streaming-problem/",
    image: "/images/MusicBusinessWorldwide.png",
    width: 300,
    height: 100
  },
  {
    name: "Serenade Magazine",
    url: "https://serenademagazine.com/tempso-brings-state-of-the-art-classical-streaming-interface-to-spotify-and-apple-music-users/",
    image: "/images/SerenadeMagazine.png",
    width: 200,
    height: 80
  }
]

export function Press() {
  return (
    <section className="section bg-black text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <p className="text-[32px] font-semibold mb-12">They talk about us</p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {pressLinks.map((link) => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              >
                <Image
                  src={link.image}
                  alt={link.name}
                  width={link.width}
                  height={link.height}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}


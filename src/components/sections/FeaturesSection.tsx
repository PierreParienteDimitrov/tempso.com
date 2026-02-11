"use client"

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { Container } from '@/components/layout/Container'
import Image from 'next/image'

const features = [
  {
    title: "Browse\ncomposers & performers",
    description: "Explore 300+ composers organized by era, and thousands of performers sorted by instrument. Discover connections you never knew existed.",
    image: "/images/Artists.png",
    alt: "Two Tempso app screens showing a composer and a performer"
  },
  {
    title: "Compare recordings",
    description: "See every recording of a composition side by side. Switch between interpretations to find your favorite — from Glenn Gould to Yo-Yo Ma.",
    image: "/images/Compositions.png",
    alt: "Two Tempso app screens showing compositions and recordings"
  },
  {
    title: "Explore playlists & radios",
    description: "Dive into curated playlists and automated radio stations organized by era, instrument, genre, and composer.",
    image: "/images/Playlists.png",
    alt: "Two Tempso app screens showing playlists and radios"
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 border-t border-[#2c2929]" id="features">
      <Container>
        <div className="max-w-4xl mb-16">
          <FadeIn>
            <span className="text-sm uppercase tracking-widest text-[#83efdc] font-medium">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mt-4">
              Everything classical music needs, in one app
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <StaggerItem key={index} className="h-full">
                <div className="bg-[#171717] border border-[#2c2929] rounded-2xl overflow-hidden h-full flex flex-col hover:border-[#3f3c3c] transition-all duration-300">
                  <div className="p-8 pb-0">
                    <h3 className="text-2xl font-bold mb-4 whitespace-pre-line text-white">{feature.title}</h3>
                    <p className="text-[#7b7575] leading-relaxed mb-8 text-sm">
                      {feature.description}
                    </p>
                  </div>
                  <div className="mt-auto relative w-full aspect-[0.8] md:aspect-[0.6] lg:aspect-[0.8]">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
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
      </Container>
    </section>
  )
}

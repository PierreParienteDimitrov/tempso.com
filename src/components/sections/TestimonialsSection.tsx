"use client"

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { Container } from '@/components/layout/Container'
import Image from 'next/image'

const testimonials = [
  {
    text: "There aren't many apps I'm grateful for, but this is one. Spotify's treatment of classical music is so bad and this app shows how it could be done better.",
    source: "App Store",
    stars: 5
  },
  {
    text: "Holy s*** this is such a game changer!!! Thank you so much!",
    source: "Reddit",
    link: "https://www.reddit.com/r/classicalmusic/comments/10z7c4z/tempso_a_free_classical_app_for_spotify_and_apple/",
    stars: null
  },
  {
    text: "A very useful app with an excellent UI. A must have if you have Spotify and you like classical music.",
    source: "Google Play",
    stars: 5
  },
  {
    text: "Really nice and useful for either new or veteran listeners/lovers of classical music. This app makes recordings easier to find and enjoy.",
    source: "App Store",
    stars: 5
  }
]

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

export function TestimonialsSection() {
  return (
    <section className="py-24" id="testimonials">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-[#86d3f6] font-medium">
              Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-4">
              Loved by classical music fans
            </h2>
            <p className="text-[#7b7575] mt-4 text-lg">
              Rated 5 stars on the App Store and Google Play
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="bg-[#171717] border border-[#2c2929] rounded-2xl p-6 h-full flex flex-col hover:border-[#3f3c3c] transition-all duration-300">
                {testimonial.stars && (
                  <div className="flex gap-1.5 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Image
                        key={i}
                        src="/images/Star.svg"
                        alt="Star"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    ))}
                  </div>
                )}

                <p className="text-white/90 text-base leading-relaxed flex-1">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="mt-4 pt-4 border-t border-[#2c2929]">
                  {testimonial.link ? (
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-[#7b7575] font-medium hover:text-white transition-colors"
                    >
                      {testimonial.source}
                    </a>
                  ) : (
                    <span className="text-sm text-[#7b7575] font-medium">
                      {testimonial.source}
                    </span>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Press logos */}
        <FadeIn delay={0.3}>
          <div className="mt-16 pt-12 border-t border-[#2c2929]">
            <p className="text-xs text-[#7b7575] text-center uppercase tracking-widest mb-8">
              Featured in
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
              {pressLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                >
                  <Image
                    src={link.image}
                    alt={link.name}
                    width={link.width}
                    height={link.height}
                    className="h-10 md:h-14 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

import { StaggerContainer, StaggerItem } from '@/components/ui/animations'
import Image from 'next/image'

const testimonials = [
  {
    text: "A very useful app with an excellent UI. A must have if you have Spotify and you like classical music. Thanks for making this.",
    source: "December 25, 2023 | Google Play",
    stars: 5
  },
  {
    text: "Holy s*** this is such a game changer!!! Thank you so much!",
    source: "Reddit",
    link: "https://www.reddit.com/r/classicalmusic/comments/10z7c4z/tempso_a_free_classical_app_for_spotify_and_apple/",
    stars: null
  },
  {
    text: "Really nice and useful for either new or veteran listeners/lovers of classical music. This app makes recordings easier to find and enjoy.",
    source: "November 21, 2023 | App Store",
    stars: 5
  }
]

export function Testimonials() {
  return (
    <section className="section overflow-hidden">
      <div className="container center">
        <p className="paragraph-2 center">
          First-time listeners and experts alike love Tempso
        </p>

        <StaggerContainer className="quote-cards-holder grid grid-cols-1 md:grid-cols-3 gap-[30px] pt-[30px] px-8 mb-[60px]">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className={`career-cards ${!testimonial.stars ? 'no-stars' : ''} bg-[#0d0e12] rounded-[14px] flex flex-col justify-center items-center py-[35px] px-5`}>
                {testimonial.stars && (
                  <div className="w-layout-hflex stars flex gap-2 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Image
                        key={i}
                        src="/images/Star.svg"
                        alt="Star"
                        width={20}
                        height={20}
                        className="start-icon w-5 h-5"
                      />
                    ))}
                  </div>
                )}

                <div className="career-content">
                  <div className="career-description font-body text-white text-lg leading-[1.4] mb-4">
                    {testimonial.text}
                  </div>

                  {testimonial.link ? (
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block"
                    >
                      <div className="quote-date quote-link text-[#afafaf] text-base font-semibold hover:text-white transition-colors">
                        {testimonial.source}
                      </div>
                    </a>
                  ) : (
                    <div className="quote-date text-[#afafaf] text-base font-semibold">
                      {testimonial.source}
                    </div>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
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
      <div className="container text-center">
        <h2 className="text-2xl mb-12 font-body">
          First-time listeners and experts alike love Tempso
        </h2>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="bg-[linear-gradient(to_bottom,var(--gradient-01),var(--gradient-02))] border border-[#ffffff1f] rounded-lg p-5 text-left">
                {testimonial.stars && (
                  <div className="flex gap-2 mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Image
                        key={i}
                        src="/images/Star.svg"
                        alt="Star"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                )}
                
                <p className="text-base mb-4">{testimonial.text}</p>
                
                {testimonial.link ? (
                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {testimonial.source}
                  </a>
                ) : (
                  <span className="text-sm text-gray-400">
                    {testimonial.source}
                  </span>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
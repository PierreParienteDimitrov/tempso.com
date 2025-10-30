import { FadeIn } from '@/components/ui/animations'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function CTA() {
  return (
    <section className="section bg-gray-900">
      <div className="container">
        <div className="relative py-16 px-8 md:py-24 md:px-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
          <FadeIn>
            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-medium mb-6">
                Ready to experience music like never before?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of music lovers who have already transformed their listening experience with Tempso.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                              <Button variant="default" size="lg">
                Download Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
              </div>
            </div>
          </FadeIn>

          <div className="absolute inset-0 w-full h-full z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 mix-blend-overlay" />
            <Image
              src="/images/gradient-mesh.svg"
              alt=""
              fill
              className="object-cover opacity-50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
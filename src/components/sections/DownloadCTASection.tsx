"use client"

import { FadeIn } from '@/components/ui/animations'
import { Container } from '@/components/layout/Container'
import Image from 'next/image'

export function DownloadCTASection() {
  return (
    <section className="py-24 border-t border-[#2c2929]" id="download">
      <Container>
        <div className="relative rounded-3xl overflow-hidden">
          {/* Radial glow background */}
          <div className="absolute inset-0 -z-10">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-20"
              style={{
                background: 'radial-gradient(ellipse at center, #8583ef 0%, #86d3f6 30%, #83efdc 60%, transparent 80%)',
                filter: 'blur(80px)',
              }}
            />
          </div>

          <div className="text-center py-20 px-8">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-4">
                Your classical music journey starts here
              </h2>
              <p className="text-[#aaa6a6] text-lg max-w-xl mx-auto mb-10">
                Free to download. Works with your existing Spotify or Apple Music subscription.
              </p>

              <div className="flex flex-row gap-4 items-center justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tempso.tempso&hl=en&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/GOOGLE-PLAY.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={80}
                    className="h-[50px] w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/tempso/id1493511859"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/IOS.png"
                    alt="Download on the App Store"
                    width={200}
                    height={80}
                    className="h-[50px] w-auto hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  )
}

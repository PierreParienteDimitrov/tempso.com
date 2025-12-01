"use client"

import { FadeIn } from '@/components/ui/animations'
import Image from 'next/image'

export function CTA() {
  return (
    <section className="section bg-[#1c1c1e] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="w-full h-[1px] bg-white/10 mb-20"></div>
        
        <div className="text-center mb-16">
          <FadeIn>
            <div className="mb-4">
              <span className="text-lg text-gray-400 font-medium uppercase tracking-wider">Download Tempso</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Embark today on your classical music journey!
            </h2>
          </FadeIn>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-black min-h-[500px] md:min-h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/CTA-BG.jpg"
              alt="Background"
              fill
              className="object-cover opacity-60"
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center h-full p-8 md:p-16">
            {/* Left Content */}
            <div className="text-left">
              <FadeIn>
                <h3 className="text-4xl font-bold mb-8 text-white">Download tempso</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.tempso.tempso&hl=en&gl=US"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/GOOGLE-PLAY.png"
                      alt="Get it on Google Play"
                      width={200}
                      height={80}
                      className="h-[60px] w-auto"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/tempso/id1493511859"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/images/IOS.png"
                      alt="Download on the App Store"
                      width={200}
                      height={80}
                      className="h-[60px] w-auto"
                    />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Content - Phone */}
            <div className="relative h-[400px] md:h-[500px] flex justify-center md:justify-end items-end">
              <div className="relative w-[280px] md:w-[350px]">
                <Image
                  src="/images/iPhone---Hand_1iPhone - Hand.webp"
                  alt="Hand holding iPhone"
                  width={800}
                  height={1000}
                  className="w-full h-auto relative z-10"
                />
                <div className="absolute top-[2.5%] left-[13%] right-[41%] bottom-[34%] z-20 overflow-hidden rounded-[20px]">
                  <Image
                    src="/images/Intro.png"
                    alt="App Screen"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

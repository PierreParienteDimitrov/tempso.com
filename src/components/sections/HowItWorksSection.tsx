"use client"

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { Container } from '@/components/layout/Container'
import Image from 'next/image'

const steps = [
  {
    number: "1",
    title: "Download the free app",
    description: "Available on iOS and Android. No subscription required.",
  },
  {
    number: "2",
    title: "Connect your streaming service",
    description: "Link your Spotify or Apple Music account in one tap.",
  },
  {
    number: "3",
    title: "Explore classical music properly",
    description: "Browse composers, compare recordings, and listen — all organized the way classical music should be.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 border-t border-[#2c2929]" id="how-it-works">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Steps */}
          <div>
            <FadeIn>
              <span className="text-sm uppercase tracking-widest text-[#fcea88] font-medium">
                How it works
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mt-4 mb-12">
                Tempso works like a remote control for your streaming app
              </h2>
            </FadeIn>

            <StaggerContainer className="space-y-10">
              {steps.map((step) => (
                <StaggerItem key={step.number}>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#fcea88]/10 border border-[#fcea88]/20 flex items-center justify-center text-[#fcea88] text-xl font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[#aaa6a6] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Right: Phone screenshot */}
          <FadeIn delay={0.2}>
            <div className="flex justify-center">
              <div className="relative w-[300px] md:w-[350px]">
                <Image
                  src="/images/Provider.png"
                  alt="Tempso provider selection screen showing Spotify and Apple Music"
                  width={390}
                  height={844}
                  className="w-full h-auto rounded-[40px]"
                  sizes="(max-width: 768px) 300px, 350px"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}

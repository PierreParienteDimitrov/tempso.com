"use client"

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const steps = [
  {
    number: "1",
    title: "Select your preferred streaming service.",
  },
  {
    number: "2",
    title: "Link Tempso to your account.",
  },
  {
    number: "3",
    title: "Stream your music directly through Tempso!",
  },
]

export function Integration() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const phoneY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section className="section">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <div className="mb-4">
              <span className="text-lg text-gray-400">Free integration</span>
            </div>
            <h2 className="text-4xl font-medium">
              Tempso works like a remote control for your current streaming app
            </h2>
          </FadeIn>
        </div>

        <div ref={containerRef} className="relative min-h-[600px] md:min-h-[800px]">
          <div className="lg:w-1/2">
            <StaggerContainer className="space-y-12">
              {steps.map((step) => (
                <StaggerItem key={step.number}>
                  <div className="sticky-content-container flex flex-col gap-[18px] items-start">
                    <div className="div-block-2">
                      <div className="sticky-title border flex-shrink-0 w-16 h-16 border-2 border-[#83efdc] rounded-[20px] flex items-center justify-center text-[#83efdc] text-4xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="sticky-title text-4xl font-bold">
                      {step.title}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <motion.div 
            style={{ y: phoneY }}
            className="absolute top-0 right-0 w-1/2 hidden lg:block"
          >
            <div className="sticky-phone">
              <div className="hero-section-phone-holder-2 relative w-full flex justify-center items-center">
                <Image
                  src="/images/Provider.png"
                  alt="A screen showing the available providers for Tempso"
                  width={390}
                  height={844}
                  className="relative z-10 w-full h-auto"
                  sizes="(max-width: 479px) 240px, (max-width: 767px) 38vw, (max-width: 991px) 26vw, (max-width: 1439px) 28vw, 390.4140625px"
                />
                <div className="hero-section-phone-screenshot-holder-2 absolute inset-0 z-20" style={{ padding: '5%' }}>
                  <Image
                    src="/images/Home_1Home.webp"
                    alt="App home screen"
                    fill
                    className="object-cover rounded-[40px]"
                    sizes="(max-width: 479px) 216px, (max-width: 767px) 35vw, (max-width: 991px) 24vw, (max-width: 1439px) 26vw, 351.3828125px"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
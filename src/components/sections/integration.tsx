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
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-medium">{step.number}</span>
                    </div>
                    <div className="pt-2.5">
                      <h3 className="text-2xl font-medium">{step.title}</h3>
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
            <div className="relative">
              <Image
                src="/images/Provider.png"
                alt="App provider selection screen"
                width={375}
                height={812}
                className="relative z-10"
              />
              <div className="absolute inset-0 z-20">
                <Image
                  src="/images/Home_1Home.webp"
                  alt="App home screen"
                  width={375}
                  height={812}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
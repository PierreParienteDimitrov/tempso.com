"use client"

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { Container } from '@/components/layout/Container'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

const stats = [
  { value: 700, unit: 'k+', label: 'Recordings', color: '#86d3f6' },
  { value: 70, unit: 'k+', label: 'Performers', color: '#83efdc' },
  { value: 2, unit: 'M+', label: 'Tracks', color: '#8583ef' },
  { value: 300, unit: '+', label: 'Composers', color: '#fcea88' },
  { value: 37, unit: 'k+', label: 'Compositions', color: '#ef83b7' },
  { value: 160, unit: 'k+', label: 'Albums', color: '#86d3f6' }
]

function Counter({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  unit
}: {
  from?: number
  to: number
  duration?: number
  delay?: number
  unit: string
}) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, value => Math.round(value))
  const displayed = useTransform(rounded, value => `${value}${unit}`)

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      delay,
      ease: "easeOut"
    })
    return controls.stop
  }, [count, to, duration, delay])

  return <motion.span>{displayed}</motion.span>
}

export function StatsSection() {
  return (
    <section className="py-24 border-t border-[#2c2929]" id="stats">
      <Container>
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white text-center mb-16">
            The world&apos;s most organized classical music library
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="flex flex-col items-center text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                  <Counter
                    to={stat.value}
                    delay={index * 0.1}
                    unit={stat.unit}
                  />
                </div>
                <div className="text-[#7b7575] text-sm">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}

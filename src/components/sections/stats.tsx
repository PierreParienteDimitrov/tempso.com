"use client"

import { StaggerContainer, StaggerItem } from '@/components/ui/animations'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

const stats = [
  { value: 700, unit: 'k+', label: 'Recordings' },
  { value: 70, unit: 'k+', label: 'Performers' },
  { value: 2, unit: 'M+', label: 'Tracks' },
  { value: 300, unit: '+', label: 'Composers' },
  { value: 37, unit: 'k+', label: 'Compositions' },
  { value: 160, unit: 'k+', label: 'Albums' }
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

export function Stats() {
  return (
    <section className="section overflow-hidden">
      <div className="container text-center">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold mb-2">
                  <Counter
                    to={stat.value}
                    delay={index * 0.1}
                    unit={stat.unit}
                  />
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
"use client"

import { useState, useEffect, useSyncExternalStore } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { StaveScene } from './StaveScene'

// Device capability detection — runs once on client, pure external store
function getIsLowPerf(): boolean {
  if (typeof window === 'undefined') return false
  const cores = navigator.hardwareConcurrency || 2
  const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent)
  return cores <= 2 || isMobile
}

const subscribe = () => () => {}

export function StaveAnimation() {
  const isLowPerf = useSyncExternalStore(subscribe, getIsLowPerf, () => false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="absolute inset-0 z-0 transition-opacity duration-1000"
      style={{ opacity: isLoaded ? 0.55 : 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 50 }}
        dpr={isLowPerf ? 1 : [1, 1.5]}
        performance={{ min: 0.5 }}
        gl={{
          antialias: !isLowPerf,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <StaveScene enableParticles={!isLowPerf} />
        {!isLowPerf && (
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              intensity={1.5}
              mipmapBlur
            />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  )
}

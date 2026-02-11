"use client"

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { PARTICLES, generateParticlePositions } from './constants'

// Pre-compute positions outside component (pure, deterministic)
const particlePositions = generateParticlePositions()

export function Particles() {
  const pointsRef = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    return geo
  }, [])

  useFrame((_state, delta) => {
    if (!pointsRef.current) return
    // Gentle slow rotation for floating effect
    pointsRef.current.rotation.y += delta * PARTICLES.speed
    pointsRef.current.rotation.x += delta * PARTICLES.speed * 0.3
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={PARTICLES.size}
        color="#aaa6a6"
        transparent
        opacity={PARTICLES.opacity}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

"use client"

import { useRef, useMemo, useCallback, useImperativeHandle, forwardRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { RIPPLES, ERA_COLORS } from './constants'

interface RippleState {
  active: boolean
  position: THREE.Vector3
  startTime: number
  colorIndex: number
}

export interface RipplesHandle {
  spawn: (position: THREE.Vector3, colorIndex: number) => void
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

// Pre-compute era colors as THREE.Color instances
const eraThreeColors = ERA_COLORS.map((hex) => new THREE.Color(hex))

export const Ripples = forwardRef<RipplesHandle>(function Ripples(_props, ref) {
  const meshRefs = useRef<(THREE.Mesh | null)[]>([])
  const materialRefs = useRef<(THREE.MeshBasicMaterial | null)[]>([])
  const statesRef = useRef<RippleState[]>(
    Array.from({ length: RIPPLES.poolSize }, () => ({
      active: false,
      position: new THREE.Vector3(),
      startTime: 0,
      colorIndex: 0,
    }))
  )
  const clockRef = useRef(0)

  const spawn = useCallback((position: THREE.Vector3, colorIndex: number) => {
    const slot = statesRef.current.find(s => !s.active)
    if (!slot) return
    slot.active = true
    slot.position.copy(position)
    slot.startTime = clockRef.current
    slot.colorIndex = colorIndex
  }, [])

  useImperativeHandle(ref, () => ({ spawn }), [spawn])

  const ringGeometry = useMemo(() => new THREE.RingGeometry(0.08, 0.1, 32), [])

  useFrame((_state, delta) => {
    clockRef.current += delta

    for (let i = 0; i < RIPPLES.poolSize; i++) {
      const state = statesRef.current[i]
      const mesh = meshRefs.current[i]
      const mat = materialRefs.current[i]
      if (!mesh || !mat) continue

      if (!state.active) {
        mesh.visible = false
        continue
      }

      const elapsed = clockRef.current - state.startTime
      const progress = elapsed / RIPPLES.duration

      if (progress >= 1) {
        state.active = false
        mesh.visible = false
        continue
      }

      const easedProgress = easeOutCubic(progress)
      const scale = 0.1 + easedProgress * RIPPLES.maxScale
      const opacity = RIPPLES.initialOpacity * (1 - progress)

      mesh.visible = true
      mesh.position.copy(state.position)
      mesh.scale.set(scale, scale, 1)

      const color = eraThreeColors[state.colorIndex % eraThreeColors.length]
      mat.color.copy(color)
      mat.opacity = opacity
    }
  })

  return (
    <group>
      {Array.from({ length: RIPPLES.poolSize }, (_, i) => (
        <mesh
          key={i}
          ref={(el) => { meshRefs.current[i] = el }}
          geometry={ringGeometry}
          visible={false}
        >
          <meshBasicMaterial
            ref={(el) => { materialRefs.current[i] = el }}
            transparent
            opacity={0}
            side={THREE.DoubleSide}
            toneMapped={false}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  )
})

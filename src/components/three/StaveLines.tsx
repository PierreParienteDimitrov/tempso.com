"use client"

import { useMemo } from 'react'
import * as THREE from 'three'
import { STAVE } from './constants'

export function StaveLines() {
  const linePositions = useMemo(() => {
    const positions: number[] = []
    for (let i = 0; i < STAVE.lineCount; i++) {
      positions.push(STAVE.yOffset + (i - 2) * STAVE.lineSpacing)
    }
    return positions
  }, [])

  return (
    <group rotation={[THREE.MathUtils.degToRad(STAVE.tiltX), 0, THREE.MathUtils.degToRad(STAVE.tiltZ)]}>
      {linePositions.map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <boxGeometry args={[STAVE.lineWidth, STAVE.lineThickness, 0.001]} />
          <meshBasicMaterial
            color="#aaa6a6"
            transparent
            opacity={0.2}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  )
}

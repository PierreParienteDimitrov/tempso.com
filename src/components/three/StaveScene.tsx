"use client"

import { StaveLines } from './StaveLines'
import { Notes } from './Notes'
import { Particles } from './Particles'
import { usePlayhead } from './usePlayhead'

interface StaveSceneProps {
  enableParticles?: boolean
}

export function StaveScene({ enableParticles = true }: StaveSceneProps) {
  const playheadRef = usePlayhead()

  return (
    <group>
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 2, 5]} intensity={0.4} color="#ffffff" />
      <StaveLines />
      <Notes playheadRef={playheadRef} />
      {enableParticles && <Particles />}
    </group>
  )
}

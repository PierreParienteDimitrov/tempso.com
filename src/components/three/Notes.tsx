"use client"

import { useRef, useMemo, type MutableRefObject } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { NOTES, STAVE, ERA_COLORS, generateNotePositions } from './constants'
import { Ripples, type RipplesHandle } from './Ripples'

interface NotesProps {
  playheadRef: MutableRefObject<number>
}

const dimColor = new THREE.Color('#333333')
const tempColor = new THREE.Color()
const tempMatrix = new THREE.Matrix4()
const tempPosition = new THREE.Vector3()
const tempScale = new THREE.Vector3()
const tempQuaternion = new THREE.Quaternion()

export function Notes({ playheadRef }: NotesProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const ripplesRef = useRef<RipplesHandle>(null)
  const wasActiveRef = useRef<boolean[]>(new Array(NOTES.count).fill(false))

  const noteData = useMemo(() => generateNotePositions(), [])

  const eraColors = useMemo(
    () => ERA_COLORS.map((hex) => new THREE.Color(hex)),
    []
  )

  // Initialize instance matrices on first render
  useMemo(() => {
    // This runs once; actual positioning is done in useFrame
    return noteData
  }, [noteData])

  useFrame(() => {
    const mesh = meshRef.current
    if (!mesh) return

    const playhead = playheadRef.current
    const halfWidth = STAVE.lineWidth / 2

    for (let i = 0; i < NOTES.count; i++) {
      const note = noteData[i]
      const [x, y, z] = note.position

      // Normalize note X to [0, 1]
      const noteNormX = (x + halfWidth) / STAVE.lineWidth
      const distance = Math.abs(playhead - noteNormX)

      let activation = 0
      if (distance < NOTES.activationRadius) {
        activation = 1 - distance / NOTES.activationRadius
      }

      const isActive = activation > 0.1

      // Detect rising edge for ripple spawn
      if (isActive && !wasActiveRef.current[i]) {
        tempPosition.set(x, y, z)
        ripplesRef.current?.spawn(tempPosition, note.colorIndex)
      }
      wasActiveRef.current[i] = isActive

      // Compute scale
      const scale = 1 + activation * (NOTES.activeScale - 1)
      tempScale.set(scale, scale, scale)

      // Compute color
      if (activation > 0.1) {
        tempColor.copy(eraColors[note.colorIndex])
      } else {
        tempColor.copy(dimColor)
      }

      // Update instance
      tempPosition.set(x, y, z)
      tempMatrix.compose(tempPosition, tempQuaternion, tempScale)
      mesh.setMatrixAt(i, tempMatrix)
      mesh.setColorAt(i, tempColor)
    }

    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  })

  return (
    <group rotation={[THREE.MathUtils.degToRad(STAVE.tiltX), 0, THREE.MathUtils.degToRad(STAVE.tiltZ)]}>
      <instancedMesh
        ref={meshRef}
        args={[undefined, undefined, NOTES.count]}
        frustumCulled={false}
      >
        <sphereGeometry args={[NOTES.radius, 16, 16]} />
        <meshStandardMaterial
          emissive="#ffffff"
          emissiveIntensity={2.0}
          transparent
          opacity={0.9}
          toneMapped={false}
          depthWrite={false}
        />
      </instancedMesh>

      <Ripples ref={ripplesRef} />
    </group>
  )
}

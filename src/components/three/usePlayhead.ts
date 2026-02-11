import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { PLAYHEAD } from './constants'

/**
 * Custom hook that drives a playhead position from 0 to 1 over cycleDuration seconds.
 * Uses refs to avoid React re-renders — all state lives in the animation loop.
 */
export function usePlayhead() {
  const playheadRef = useRef(0)
  const pauseTimerRef = useRef(0)
  const isPausedRef = useRef(false)

  useFrame((_state, delta) => {
    if (isPausedRef.current) {
      pauseTimerRef.current += delta
      if (pauseTimerRef.current >= PLAYHEAD.pauseDuration) {
        isPausedRef.current = false
        pauseTimerRef.current = 0
        playheadRef.current = 0
      }
      return
    }

    playheadRef.current += delta / PLAYHEAD.cycleDuration

    if (playheadRef.current >= 1) {
      playheadRef.current = 1
      isPausedRef.current = true
      pauseTimerRef.current = 0
    }
  })

  return playheadRef
}

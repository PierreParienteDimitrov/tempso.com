// Era accent colors matching globals.css CSS variables
export const ERA_COLORS = [
  '#fcea88', // baroque
  '#86d3f6', // classical
  '#83efdc', // modern
  '#8583ef', // contemporary
  '#ef8383', // romantic
] as const

export const STAVE = {
  lineCount: 5,
  lineSpacing: 0.4,
  lineWidth: 14,
  lineThickness: 0.012,
  tiltX: 5,            // degrees
  tiltZ: 1.5,          // degrees
  yOffset: -0.3,
} as const

export const NOTES = {
  count: 18,
  radius: 0.1,
  activeScale: 1.8,
  idleOpacity: 0.12,
  activeOpacity: 1.0,
  activationRadius: 0.08, // normalized [0,1]
} as const

export const PLAYHEAD = {
  cycleDuration: 12,      // seconds
  pauseDuration: 1.0,     // seconds pause before loop restart
} as const

export const RIPPLES = {
  poolSize: 36,
  maxScale: 3.5,
  duration: 1.8,          // seconds
  initialOpacity: 0.5,
} as const

export const PARTICLES = {
  count: 80,
  spread: { x: 10, y: 5, z: 4 },
  speed: 0.0015,
  size: 0.025,
  opacity: 0.25,
} as const

// Pre-computed note positions on the stave
// Notes are placed on lines (y = lineIndex * spacing) and spaces (between lines)
// Pre-computed deterministic particle positions (avoids Math.random in React render)
export function generateParticlePositions(): Float32Array {
  const arr = new Float32Array(PARTICLES.count * 3)
  for (let i = 0; i < PARTICLES.count; i++) {
    // Deterministic pseudo-random using golden ratio
    const phi = (i * 0.618033988749895) % 1
    const theta = (i * 0.381966011250105) % 1
    const psi = (i * 0.247213595499958) % 1
    arr[i * 3] = (phi - 0.5) * PARTICLES.spread.x
    arr[i * 3 + 1] = (theta - 0.5) * PARTICLES.spread.y
    arr[i * 3 + 2] = (psi - 0.5) * PARTICLES.spread.z
  }
  return arr
}

export function generateNotePositions(): Array<{ position: [number, number, number]; colorIndex: number }> {
  const notes: Array<{ position: [number, number, number]; colorIndex: number }> = []
  const baseY = STAVE.yOffset

  // Available Y positions: 5 lines + 4 spaces + 2 ledger positions
  const yPositions: number[] = []
  for (let i = 0; i < STAVE.lineCount; i++) {
    yPositions.push(baseY + (i - 2) * STAVE.lineSpacing)             // on line
    if (i < STAVE.lineCount - 1) {
      yPositions.push(baseY + (i - 2) * STAVE.lineSpacing + STAVE.lineSpacing / 2) // in space
    }
  }
  // Add ledger positions below and above
  yPositions.push(baseY - 2.5 * STAVE.lineSpacing)
  yPositions.push(baseY + 2.5 * STAVE.lineSpacing)

  // Deterministic seed-like distribution
  const seed = [0.13, 0.27, 0.35, 0.41, 0.48, 0.55, 0.62, 0.68, 0.73, 0.79, 0.84, 0.88, 0.15, 0.32, 0.52, 0.65, 0.77, 0.92]

  for (let i = 0; i < NOTES.count; i++) {
    const normalizedX = seed[i % seed.length]
    const x = (normalizedX - 0.5) * STAVE.lineWidth
    const yIndex = (i * 3 + Math.floor(i / 3)) % yPositions.length
    const y = yPositions[yIndex]
    const z = 0.05 // slightly in front of stave lines

    notes.push({
      position: [x, y, z],
      colorIndex: i % ERA_COLORS.length,
    })
  }

  return notes
}

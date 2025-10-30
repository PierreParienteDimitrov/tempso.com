import { cn } from '@/lib/utils'

interface GridProps {
  className?: string
  children: React.ReactNode
  cols?: {
    default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: number
}

export function Grid({ className, children, cols = { default: 1 }, gap = 8 }: GridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  }

  const getResponsiveClasses = () => {
    return cn(
      gridCols[cols.default as keyof typeof gridCols],
      cols.sm && `sm:${gridCols[cols.sm as keyof typeof gridCols]}`,
      cols.md && `md:${gridCols[cols.md as keyof typeof gridCols]}`,
      cols.lg && `lg:${gridCols[cols.lg as keyof typeof gridCols]}`,
      cols.xl && `xl:${gridCols[cols.xl as keyof typeof gridCols]}`,
      `gap-${gap}`
    )
  }

  return (
    <div className={cn('grid', getResponsiveClasses(), className)}>
      {children}
    </div>
  )
}
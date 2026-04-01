import { useEffect, useState } from 'react'

interface CuposProgressProps {
  current?: number
  total?: number
  leftLabel?: string
  countSuffix?: string
}

export function CuposProgress({
  current = 2,
  total = 30,
  leftLabel = 'Disponibilidad',
  countSuffix = 'cupos',
}: CuposProgressProps) {
  const pct = Math.min(100, Math.max(0, (current / total) * 100))
  const [displayPct, setDisplayPct] = useState(0)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setDisplayPct(pct)
    })
    return () => cancelAnimationFrame(id)
  }, [pct])

  return (
    <div className="rounded-[12px] border border-coach-100 bg-gradient-to-r from-coach-light to-white px-4 py-4 shadow-coach-sm sm:px-5 sm:py-5">
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-coach-900/70">{leftLabel}</span>
        <span className="font-display text-base font-bold tabular-nums text-coach-900 sm:text-lg">
          {current} / {total} {countSuffix}
        </span>
      </div>
      <div
        className="h-3 w-full overflow-hidden rounded-full bg-[#eee] sm:h-2.5"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`${current} de ${total} ${countSuffix}`}
      >
        <div
          className="h-full rounded-full bg-coach-700 ease-out motion-reduce:transition-none"
          style={{
            width: `${displayPct}%`,
            transition: 'width 1s ease',
            boxShadow: displayPct > 0 ? '0 0 16px rgba(25, 118, 210, 0.45)' : undefined,
          }}
        />
      </div>
    </div>
  )
}

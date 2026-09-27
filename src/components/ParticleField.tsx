import { useMemo } from 'react'

export default function ParticleField({ density = 60 }: { density?: number }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const count = isMobile ? Math.floor(density / 3) : density

  const dots = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * -20,
        opacity: Math.random() * 0.5 + 0.1,
      })),
    [count]
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-[float_var(--d)_ease-in-out_infinite]"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animation: `driftY ${d.duration}s ease-in-out ${d.delay}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes driftY {
          from { transform: translateY(0px); }
          to { transform: translateY(-40px); }
        }
      `}</style>
    </div>
  )
}

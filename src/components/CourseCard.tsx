import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Course } from '../types/course'

export default function CourseCard({
  course,
  onOpen,
}: {
  course: Course
  onOpen: (c: Course) => void
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -8, y: px * 8 })
  }

  return (
    <motion.button
      ref={ref}
      onClick={() => onOpen(course)}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="group relative text-left glass rounded-2xl p-6 h-full flex flex-col overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-violet/20 blur-3xl group-hover:bg-violet/30 transition-colors" />
      <span className="text-xs tracking-[0.2em] text-muted font-body mb-4">
        COURSE {course.number}
      </span>
      <h3 className="font-display text-xl mb-2 leading-snug">{course.title}</h3>
      <p className="text-sm text-muted font-body mb-6 line-clamp-3">{course.description}</p>
      <div className="mt-auto flex items-center justify-between text-xs text-muted font-body pt-4 border-t border-white/5">
        <span>{course.lessons} Lessons · {course.duration}</span>
        <span className="font-display text-ink text-base">${course.price}</span>
      </div>
      <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan to-violet group-hover:w-full transition-all duration-500" />
    </motion.button>
  )
}

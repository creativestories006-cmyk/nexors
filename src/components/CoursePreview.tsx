import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Lock, PlayCircle } from 'lucide-react'
import { Course } from '../types/course'

export default function CoursePreview({
  course,
  onClose,
  onLockedClick,
}: {
  course: Course
  onClose: () => void
  onLockedClick: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] bg-void/85 backdrop-blur-md flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={course.title}
          className="glass rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-xs tracking-[0.2em] text-muted font-body">COURSE {course.number}</span>
              <h3 className="font-display text-3xl mt-1">{course.title}</h3>
            </div>
            <button onClick={onClose} aria-label="Close" className="text-muted hover:text-ink">
              <X size={22} />
            </button>
          </div>

          <p className="text-muted font-body mb-6">{course.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 text-sm font-body">
            <div><p className="text-muted text-xs mb-1">Instructor</p><p>{course.instructor}</p></div>
            <div><p className="text-muted text-xs mb-1">Duration</p><p>{course.duration}</p></div>
            <div><p className="text-muted text-xs mb-1">Difficulty</p><p>{course.difficulty}</p></div>
            <div><p className="text-muted text-xs mb-1">Price</p><p className="font-display">${course.price}</p></div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {course.skills.map((s) => (
              <span key={s} className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-muted font-body">
                {s}
              </span>
            ))}
          </div>

          <h4 className="font-display text-sm tracking-[0.15em] text-muted mb-4">CURRICULUM</h4>
          <ul className="space-y-2">
            {course.curriculum.map((item) => (
              <li key={item.order}>
                <button
                  onClick={item.free ? undefined : onLockedClick}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-sm font-body ${
                    item.free ? 'hover:border-cyan/40' : 'hover:border-violet/40'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-muted text-xs">{String(item.order).padStart(2, '0')}</span>
                    {item.title}
                  </span>
                  {item.free ? (
                    <PlayCircle size={16} className="text-cyan" />
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <Lock size={13} /> LOCKED
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

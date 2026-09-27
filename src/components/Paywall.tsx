import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, X } from 'lucide-react'
import { Course } from '../types/course'

const benefits = [
  'Full course access',
  'All lessons',
  'Downloadable resources',
  'Practical projects',
  'Lifetime access',
  'Future updates',
  'Completion certificate',
]

export default function Paywall({
  course,
  onClose,
  onCheckout,
}: {
  course: Course
  onClose: () => void
  onCheckout: () => void
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
        className="fixed inset-0 z-[70] bg-void/80 backdrop-blur-md flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Unlock full course"
          className="glass rounded-3xl max-w-md w-full p-8 relative"
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 text-muted hover:text-ink"
          >
            <X size={20} />
          </button>
          <div className="w-12 h-12 rounded-xl bg-violet/15 flex items-center justify-center mb-6">
            <Lock className="text-violet" size={20} />
          </div>
          <h3 className="font-display text-2xl mb-2">Locked Lesson</h3>
          <p className="text-muted text-sm font-body mb-6">
            Unlock the complete course to continue learning.
          </p>
          <ul className="space-y-2 mb-8">
            {benefits.map((b) => (
              <li key={b} className="text-sm font-body flex items-center gap-2 text-ink/90">
                <span className="text-cyan">✓</span> {b}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between mb-6">
            <span className="text-muted text-sm font-body">{course.title}</span>
            <span className="font-display text-2xl">${course.price}</span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-violet to-magenta text-sm font-medium mb-3"
          >
            Unlock Full Course →
          </button>
          <button
            onClick={onClose}
            className="w-full py-3 text-sm text-muted hover:text-ink transition-colors"
          >
            Maybe later
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

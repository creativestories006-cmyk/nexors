import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const stages = [
  'INITIALIZING AI SYSTEM',
  'LOADING NEURAL NETWORK',
  'CONNECTING KNOWLEDGE CORE',
  'SYSTEM READY',
]

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(p + Math.random() * 14 + 6, 100)
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 400)
          setTimeout(onDone, 900)
        }
        return next
      })
    }, 180)
    return () => clearInterval(interval)
  }, [onDone])

  const stageIndex = Math.min(
    stages.length - 1,
    Math.floor((progress / 100) * stages.length)
  )

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="font-display text-2xl md:text-4xl tracking-tight text-ink mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            NEXORA
          </motion.div>
          <div className="w-56 md:w-72 h-px bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet to-cyan"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-xs tracking-[0.2em] text-muted font-body">
            {stages[stageIndex]} · {Math.floor(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

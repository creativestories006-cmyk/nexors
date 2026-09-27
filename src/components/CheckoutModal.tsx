import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck } from 'lucide-react'
import { Course } from '../types/course'

export default function CheckoutModal({
  course,
  onClose,
}: {
  course: Course
  onClose: () => void
}) {
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState('')

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
        className="fixed inset-0 z-[80] bg-void/85 backdrop-blur-md flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          className="glass rounded-3xl max-w-md w-full p-8 relative"
          initial={{ scale: 0.94, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.94, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} aria-label="Close" className="absolute top-5 right-5 text-muted hover:text-ink">
            <X size={20} />
          </button>

          {!success ? (
            <>
              <p className="text-xs tracking-[0.2em] text-cyan mb-4 font-body">DEMO CHECKOUT</p>
              <h3 className="font-display text-2xl mb-6">Secure Checkout</h3>
              <div className="flex items-center justify-between text-sm font-body mb-1 text-muted">
                <span>{course.title}</span>
                <span className="text-ink">${course.price}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-body mb-6 pt-3 border-t border-white/10 font-medium">
                <span>Total</span>
                <span>${course.price}</span>
              </div>
              <label className="text-xs text-muted font-body mb-1 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full mb-4 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm outline-none focus:border-cyan font-body"
              />
              <label className="text-xs text-muted font-body mb-1 block">Payment method</label>
              <div className="w-full mb-6 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-body text-muted">
                Demo card · No real payment provider connected
              </div>
              <button
                onClick={() => setSuccess(true)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-violet to-magenta text-sm font-medium mb-3"
              >
                Complete Demo Purchase
              </button>
              <p className="text-xs text-muted font-body flex items-center gap-2">
                <ShieldCheck size={14} /> Structured for Stripe / PayPal integration
              </p>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-14 h-14 mx-auto rounded-full bg-cyan/15 flex items-center justify-center mb-6 text-cyan">
                <ShieldCheck size={26} />
              </div>
              <h3 className="font-display text-2xl mb-2">Welcome to Nexora.</h3>
              <p className="text-muted text-sm font-body mb-8">Your course access is ready.</p>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full border border-white/15 text-sm hover:border-cyan"
              >
                Continue
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

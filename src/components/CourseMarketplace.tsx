import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import CourseCard from './CourseCard'
import CoursePreview from './CoursePreview'
import Paywall from './Paywall'
import CheckoutModal from './CheckoutModal'
import { courses } from '../data/courses'
import { Course } from '../types/course'

const filters = ['All', 'Beginner', 'Intermediate', 'Advanced', 'Business', 'Creative', 'Technical']

export default function CourseMarketplace() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<Course | null>(null)
  const [paywallOpen, setPaywallOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase())
      const matchesFilter =
        filter === 'All' || c.difficulty === filter || c.category === filter
      return matchesQuery && matchesFilter
    })
  }, [query, filter])

  return (
    <section id="courses" className="relative py-28 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-display text-3xl sm:text-4xl mb-3">Learn what's next.</h2>
        <p className="text-muted font-body">Practical AI skills designed for the real world.</p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search courses..."
          aria-label="Search courses"
          className="w-full sm:max-w-xs px-4 py-3 rounded-full bg-white/5 border border-white/10 text-sm outline-none focus:border-cyan font-body"
        />
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-xs font-body border transition-colors ${
                filter === f
                  ? 'border-violet bg-violet/15 text-ink'
                  : 'border-white/10 text-muted hover:border-white/25'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted font-body text-sm py-12 text-center">
          No courses match your search.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <CourseCard key={c.id} course={c} onOpen={setSelected} />
          ))}
        </div>
      )}

      {selected && !paywallOpen && !checkoutOpen && (
        <CoursePreview
          course={selected}
          onClose={() => setSelected(null)}
          onLockedClick={() => setPaywallOpen(true)}
        />
      )}
      {selected && paywallOpen && (
        <Paywall
          course={selected}
          onClose={() => setPaywallOpen(false)}
          onCheckout={() => {
            setPaywallOpen(false)
            setCheckoutOpen(true)
          }}
        />
      )}
      {selected && checkoutOpen && (
        <CheckoutModal
          course={selected}
          onClose={() => {
            setCheckoutOpen(false)
            setSelected(null)
          }}
        />
      )}
    </section>
  )
}

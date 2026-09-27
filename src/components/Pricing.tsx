import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 29,
    features: ['1 Course', 'Lifetime Access', 'Course Projects', 'Certificate'],
  },
  {
    name: 'Pro',
    price: 99,
    features: ['3 Courses', 'Lifetime Access', 'Projects', 'AI Templates', 'Certificates'],
  },
  {
    name: 'Complete',
    price: 299,
    highlight: true,
    features: ['All 18 Courses', '300+ Lessons', '50+ Projects', 'Lifetime Updates', 'Certificates'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl mb-3">Choose your access.</h2>
        <p className="text-muted font-body">Every plan includes lifetime access to what you enroll in.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 flex flex-col ${
              t.highlight
                ? 'bg-gradient-to-b from-violet/15 to-transparent border border-violet/40'
                : 'glass'
            }`}
          >
            <h3 className="font-display text-xl mb-2">{t.name}</h3>
            <p className="font-display text-4xl mb-6">
              ${t.price}
              <span className="text-sm text-muted font-body"> one-time</span>
            </p>
            <ul className="space-y-3 mb-8 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm font-body text-ink/90">
                  <Check size={15} className="text-cyan shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="#courses"
              className={`text-center py-3 rounded-full text-sm font-medium transition-opacity ${
                t.highlight
                  ? 'bg-gradient-to-r from-violet to-magenta'
                  : 'border border-white/15 hover:border-white/30'
              }`}
            >
              {t.highlight ? 'Get the Complete Bundle →' : 'Get Started →'}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

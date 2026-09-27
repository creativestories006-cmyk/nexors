import { motion } from 'framer-motion'

export default function IntroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl sm:text-4xl mb-6 leading-tight">
          AI is changing everything.
        </h2>
        <p className="text-muted font-body max-w-md">
          The next generation of creators, marketers, developers and entrepreneurs will work
          with AI as a core creative and business tool. Nexora exists to make that transition
          practical, not theoretical.
        </p>
      </motion.div>
      <motion.div
        className="relative h-64 md:h-80"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border border-violet/30 animate-[spin_18s_linear_infinite]" />
          <div className="absolute w-56 h-56 rounded-full border border-cyan/20 animate-[spin_26s_linear_infinite_reverse]" />
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-violet to-cyan blur-xl opacity-60" />
        </div>
      </motion.div>
    </section>
  )
}

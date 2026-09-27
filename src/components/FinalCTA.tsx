import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[420px] h-[420px] rounded-full bg-gradient-to-br from-violet/30 via-magenta/10 to-transparent blur-3xl" />
      </div>
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-display text-4xl sm:text-5xl mb-8 leading-tight">
          The future is being built.
          <br />
          Build with AI.
        </h2>
        <a
          href="#courses"
          className="inline-flex px-8 py-4 rounded-full bg-gradient-to-r from-violet to-magenta text-sm font-medium"
        >
          Start Learning →
        </a>
      </motion.div>
    </section>
  )
}

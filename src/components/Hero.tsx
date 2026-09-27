import { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import AIOrb from './AIOrb'
import ParticleField from './ParticleField'

export default function Hero() {
  const pointer = useRef({ x: 0, y: 0 })

  const handlePointerMove = (e: React.PointerEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1
    const y = (e.clientY / window.innerHeight) * 2 - 1
    pointer.current = { x, y }
  }

  return (
    <section
      id="home"
      onPointerMove={handlePointerMove}
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <ParticleField density={70} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/40 to-void" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xs tracking-[0.3em] text-cyan mb-6 font-body">NEXORA AI ACADEMY</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Master AI.
            <br />
            Build what's next.
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-md mb-10 font-body">
            Learn the tools, systems and creative workflows shaping the future of AI.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#courses"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-violet to-magenta text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Explore Courses →
            </a>
            <a
              href="#ai-lab"
              className="px-6 py-3.5 rounded-full border border-white/15 text-sm hover:border-cyan transition-colors"
            >
              Enter AI Lab →
            </a>
          </div>
          <div className="flex gap-8 text-sm text-muted font-body">
            <div><span className="text-ink font-display text-lg">18+</span> AI Courses</div>
            <div><span className="text-ink font-display text-lg">300+</span> Lessons</div>
            <div><span className="text-ink font-display text-lg">50+</span> Projects</div>
          </div>
        </motion.div>

        <div className="relative h-[380px] sm:h-[460px] md:h-[560px]">
          <Suspense fallback={<div className="w-full h-full rounded-full bg-gradient-radial from-violet/20 to-transparent" />}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
              <AIOrb pointer={pointer} />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </section>
  )
}

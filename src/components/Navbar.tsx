import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'Courses', 'AI Lab', 'Projects', 'Pricing', 'About']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-3' : 'py-6'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-display leading-none">
            <div className="text-lg tracking-tight">NEXORA</div>
            <div className="text-[10px] text-muted tracking-[0.25em]">AI ACADEMY</div>
          </div>

          <ul className="hidden md:flex items-center gap-8 text-sm text-muted font-body">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(' ', '-')}`} className="relative group hover:text-ink transition-colors">
                  {l}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#courses"
            className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full border border-white/15 hover:border-violet hover:bg-violet/10 transition-colors"
          >
            Explore Courses <span aria-hidden>→</span>
          </a>

          <button
            className="md:hidden text-ink"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-void/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {l}
              </motion.a>
            ))}
            <a
              href="#courses"
              onClick={() => setMenuOpen(false)}
              className="mt-6 px-6 py-3 rounded-full border border-violet text-sm"
            >
              Explore Courses →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

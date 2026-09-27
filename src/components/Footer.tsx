import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react'

const columns = [
  { title: 'Platform', links: ['Courses', 'AI Lab', 'Projects', 'Pricing'] },
  { title: 'Company', links: ['About', 'Contact', 'Privacy', 'Terms'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-lg mb-2">NEXORA</div>
          <p className="text-muted text-sm font-body mb-6">Learn AI. Build the Future.</p>
          <div className="flex gap-4 text-muted">
            <a href="#" aria-label="Instagram" className="hover:text-ink"><Instagram size={18} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-ink"><Youtube size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-ink"><Linkedin size={18} /></a>
            <a href="#" aria-label="X" className="hover:text-ink"><Twitter size={18} /></a>
          </div>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs tracking-[0.2em] text-muted font-body mb-4">{col.title.toUpperCase()}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-ink/80 hover:text-ink font-body">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted font-body mt-12">
        © {new Date().getFullYear()} Nexora AI Academy. All rights reserved.
      </p>
    </footer>
  )
}

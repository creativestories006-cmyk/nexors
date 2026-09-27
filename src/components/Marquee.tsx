const rowA = ['ARTIFICIAL INTELLIGENCE', 'PROMPT ENGINEERING', 'AI AUTOMATION', 'AI AGENTS']
const rowB = ['GENERATIVE AI', 'AI MARKETING', 'AI CODING', 'AI DESIGN']

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        className={`inline-flex gap-10 ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}
      >
        {doubled.map((t, i) => (
          <span key={i} className="font-display text-3xl sm:text-4xl text-white/10 tracking-tight">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="py-10 border-y border-white/5 space-y-4">
      <Row items={rowA} />
      <Row items={rowB} reverse />
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marqueeRev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee-rev { animation: marqueeRev 34s linear infinite; }
      `}</style>
    </div>
  )
}

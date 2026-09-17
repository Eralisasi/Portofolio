import { caseStudyCards } from '@/data';
import { useReveal } from '@/hooks';
import { ArrowUpRight } from 'lucide-react';

const avatarColors: Record<string, string> = {
  C: 'bg-brand-500/15 text-brand-400',
  E: 'bg-accent-500/15 text-accent-400',
  T: 'bg-blue-500/15 text-blue-400',
};

export default function CaseStudies() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="case-studies" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-brand-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
              Case Studies
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Data-Driven Results
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {caseStudyCards.map((card, i) => (
            <CaseCard key={card.company} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  card,
  index,
}: {
  card: (typeof caseStudyCards)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const avatarClass = avatarColors[card.avatar] ?? 'bg-brand-500/15 text-brand-400';

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group flex h-full flex-col rounded-2xl border border-white/5 bg-ink-900/50 p-7 transition-all duration-300 hover:border-brand-500/20 hover:bg-ink-900`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Company header */}
      <div className="flex items-center gap-3">
        <div
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-base font-bold ${avatarClass}`}
        >
          {card.avatar}
        </div>
        <div>
          <h3 className="font-display text-base font-bold text-white">
            {card.company}
          </h3>
          <p className="text-xs text-brand-400">{card.role}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 text-sm leading-relaxed text-ink-300">
        {card.description}
      </p>

      {/* Metrics */}
      <div className="mt-6 flex-1 space-y-3 border-t border-white/5 pt-5">
        {card.metrics.map((m) => (
          <div key={m.label} className="flex items-center justify-between">
            <span className="text-sm text-ink-400">{m.label}</span>
            <span className="rounded-full bg-brand-500/10 px-3 py-1 text-sm font-semibold text-brand-400">
              {m.value}
            </span>
          </div>
        ))}
      </div>

      {/* Link */}
      <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-400 transition-opacity group-hover:opacity-100">
        View full case study
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </div>
  );
}

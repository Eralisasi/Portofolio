import { caseStudies } from '@/data';
import { useReveal } from '@/hooks';
import { ArrowUpRight } from 'lucide-react';

export default function Results() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="results" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
                Case Studies
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
                Real campaigns. Real revenue.
              </h2>
              <p className="mt-5 text-lg text-ink-300">
                A selection of recent engagements across e-commerce, SaaS, and
                multi-location businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          {caseStudies.map((study, i) => (
            <CaseCard key={study.client} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group grid items-center gap-8 overflow-hidden rounded-3xl border border-white/5 bg-ink-900/40 p-6 transition-all duration-300 hover:border-brand-500/15 lg:grid-cols-2 lg:p-8`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-2xl ${reversed ? 'lg:order-2' : ''}`}>
        <div className="aspect-[16/10] overflow-hidden rounded-2xl">
          <img
            src={study.image}
            alt={study.client}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-medium text-brand-300 backdrop-blur-sm">
          {study.industry}
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? 'lg:order-1' : ''}>
        <h3 className="font-display text-2xl font-bold text-white">{study.client}</h3>

        <div className="mt-4 space-y-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Challenge
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink-300">
              {study.challenge}
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              What we did
            </div>
            <p className="mt-1 text-sm leading-relaxed text-ink-300">
              {study.result}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {study.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-white/5 bg-ink-950/50 p-4 text-center"
            >
              <div className="font-display text-xl font-bold text-brand-400 lg:text-2xl">
                {m.value}
              </div>
              <div className="mt-1 text-xs text-ink-400">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-ink-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

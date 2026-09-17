import { processSteps } from '@/data';
import { useReveal } from '@/hooks';

export default function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="process" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
              Process
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              A proven system, not guesswork
            </h2>
            <p className="mt-5 text-lg text-ink-300">
              Every engagement follows a structured framework that connects SEO
              activity to business outcomes.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <ProcessCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group relative`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Connector line */}
      {index < 3 && (
        <div className="absolute -right-3 top-12 hidden h-px w-6 bg-gradient-to-r from-brand-500/30 to-transparent lg:block" />
      )}

      <div className="relative h-full rounded-2xl border border-white/5 bg-ink-900/50 p-6 transition-all duration-300 hover:border-brand-500/20 hover:bg-ink-900">
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-all group-hover:bg-brand-500/20 group-hover:scale-110">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </div>
          <span className="font-display text-3xl font-bold text-white/5 transition-colors group-hover:text-white/10">
            {step.number}
          </span>
        </div>
        <h3 className="mt-5 font-display text-lg font-bold text-white">
          {step.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-400">
          {step.description}
        </p>
      </div>
    </div>
  );
}

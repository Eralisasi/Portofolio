import { tools } from '@/data';

export default function Marquee() {
  const doubled = [...tools, ...tools];
  return (
    <section className="border-y border-white/5 bg-ink-950 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-ink-500">
          Tools I work with daily
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
          <div className="flex w-max animate-marquee gap-12">
            {doubled.map((tool, i) => (
              <span
                key={i}
                className="font-display text-lg font-semibold text-ink-400 transition-colors hover:text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

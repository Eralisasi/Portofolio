import { stats } from '@/data';
import { useReveal, useCountUp } from '@/hooks';

export default function Stats() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid gap-6 sm:grid-cols-2 lg:grid-cols-4`}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  visible,
}: {
  stat: (typeof stats)[number];
  index: number;
  visible: boolean;
}) {
  const numeric = parseInt(stat.value.replace(/[^0-9]/g, ''), 10);
  const hasNumber = !isNaN(numeric) && numeric > 0;
  const count = useCountUp(hasNumber ? numeric : 0, 1800, visible);
  const prefix = stat.value.match(/^[^0-9]*/)?.[0] ?? '';
  const suffix = stat.value.match(/[^0-9]*$/)?.[0] ?? '';

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-ink-900/80 to-ink-950 p-7 text-center transition-all duration-300 hover:border-brand-500/20"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="font-display text-4xl font-bold text-white lg:text-5xl">
        {hasNumber ? `${prefix}${Math.round(count).toLocaleString()}${suffix}` : stat.value}
      </div>
      <div className="mt-3 text-sm font-medium text-ink-200">{stat.label}</div>
      <div className="mt-1 text-xs text-ink-500">{stat.sub}</div>
    </div>
  );
}

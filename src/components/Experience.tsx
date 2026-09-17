import { workExperiences } from '@/data';
import { useReveal } from '@/hooks';
import { ArrowUpRight } from 'lucide-react';

const avatarColors: Record<string, string> = {
  C: 'bg-brand-500/15 text-brand-400',
  E: 'bg-accent-500/15 text-accent-400',
  T: 'bg-blue-500/15 text-blue-400',
  J: 'bg-rose-500/15 text-rose-400',
};

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
              Work Experience
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Companies I've Grown
            </h2>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          {workExperiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof workExperiences)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const reversed = index % 2 === 1;
  const avatarClass = avatarColors[exp.avatar] ?? 'bg-brand-500/15 text-brand-400';

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group grid items-center gap-8 overflow-hidden rounded-3xl border border-white/5 bg-ink-900/40 p-6 transition-all duration-300 hover:border-brand-500/15 lg:grid-cols-2 lg:p-8`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-2xl ${reversed ? 'lg:order-2' : ''}`}>
        <div className="aspect-[16/10] overflow-hidden rounded-2xl">
          <img
            src={exp.image}
            alt={exp.company}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ink-950/80 px-3 py-1 backdrop-blur-sm">
          <span className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold ${avatarClass}`}>
            {exp.avatar}
          </span>
          <span className="text-xs font-medium text-white">{exp.date.split(' · ')[0]}</span>
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-base font-bold ${avatarClass}`}>
            {exp.avatar}
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-white">{exp.company}</h3>
            <p className="text-sm font-medium text-brand-400">{exp.role}</p>
          </div>
        </div>

        <p className="mt-1 text-xs text-ink-500">{exp.date}</p>

        <p className="mt-4 text-sm leading-relaxed text-ink-300">
          {exp.description}
        </p>

        <div className="mt-6 grid grid-cols-3 gap-4">
          {exp.metrics.map((m) => (
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

        <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-brand-400 transition-opacity group-hover:opacity-100">
          View full case study
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

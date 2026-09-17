import { services } from '@/data';
import { useReveal } from '@/hooks';
import { Check } from 'lucide-react';

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
              Services
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Everything you need to win in search
            </h2>
            <p className="mt-5 text-lg text-ink-300">
              Full-stack SEO services covering the technical, content, and
              authority pillars — all tied to measurable revenue impact.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group relative overflow-hidden rounded-2xl border border-white/5 bg-ink-900/50 p-7 transition-all duration-300 hover:border-brand-500/20 hover:bg-ink-900`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Hover glow */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-500/0 blur-3xl transition-all duration-500 group-hover:bg-brand-500/10" />

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-all duration-300 group-hover:bg-brand-500/20 group-hover:scale-110">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div>

        <h3 className="mt-5 font-display text-xl font-bold text-white">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-400">
          {service.description}
        </p>

        <ul className="mt-5 space-y-2.5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 text-sm text-ink-300">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/15">
                <Check className="h-3 w-3 text-brand-400" strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

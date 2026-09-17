import { testimonials } from '@/data';
import { useReveal } from '@/hooks';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
              Testimonials
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Trusted by founders and marketing leaders
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} group relative flex h-full flex-col rounded-2xl border border-white/5 bg-ink-900/50 p-7 transition-all duration-300 hover:border-brand-500/20 hover:bg-ink-900`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote className="absolute right-6 top-6 h-10 w-10 text-white/5" fill="currentColor" />

      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 text-accent-400"
            fill="currentColor"
          />
        ))}
      </div>

      <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-200">
        "{testimonial.quote}"
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-semibold text-white">{testimonial.name}</div>
          <div className="text-xs text-ink-400">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

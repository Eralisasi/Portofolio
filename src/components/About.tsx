import { skills } from '@/data';
import { useReveal } from '@/hooks';
import { Check } from 'lucide-react';

const aboutImage =
  'https://images.pexels.com/photos/7651748/pexels-photo-7651748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const certifications = [
  'Google Analytics Certified',
  'Semrush Certified Professional',
  'Ahrefs Certified Marketer',
  'BrightLocal Local SEO Expert',
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} relative`}>
            <div className="relative overflow-hidden rounded-3xl border border-white/5">
              <img
                src={aboutImage}
                alt="Walid Syahri Tanzil analyzing SEO data"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />

              {/* Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-ink-950/80 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display text-lg font-bold text-white">
                      Walid Syahri Tanzil
                    </div>
                    <div className="text-sm text-brand-400">SEO Specialist</div>
                  </div>
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 text-accent-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
              About
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              8 years of turning search data into revenue
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-300">
              I started in performance marketing agencies before moving
              in-house at a Series B SaaS company. That blend of agency
              breadth and in-house depth means I understand both the speed of
              campaign execution and the patience required for sustainable
              organic growth.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-400">
              I don't sell packages — I diagnose, strategize, and execute based
              on what your business actually needs. Every recommendation is
              backed by data, every report connects to revenue, and every
              engagement starts with a free audit.
            </p>

            {/* Skills bars */}
            <div className="mt-8 space-y-4">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} skill={skill} index={i} />
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 text-sm text-ink-300"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/15">
                    <Check className="h-3 w-3 text-brand-400" strokeWidth={3} />
                  </span>
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  index,
}: {
  skill: (typeof skills)[number];
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-ink-200">{skill.name}</span>
        <span className="text-sm font-semibold text-brand-400">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-ink-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400 transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100}ms`,
          }}
        />
      </div>
    </div>
  );
}

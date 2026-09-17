import { ArrowUpRight, TrendingUp, Search, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/95 to-ink-950" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-accent-500/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: copy */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-4 py-1.5 text-sm font-medium text-brand-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
              </span>
              Accepting 2 new clients for Q4 2026
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              I help brands rank higher and{' '}
              <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
                grow organic revenue
              </span>
              .
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              I'm Walid Syahri Tanzil — an SEO specialist with 8 years of experience
              turning search data into compounding growth. Technical audits,
              content strategy, and link building that move real revenue, not
              just vanity metrics.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-400/30"
              >
                Book a free SEO audit
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#results"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                See case studies
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/5 pt-8">
              {[
                { value: '340%', label: 'Avg. traffic growth' },
                { value: '47M', label: 'Organic sessions' },
                { value: '1,200+', label: 'Page-1 keywords' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-white lg:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-ink-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual card */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative mx-auto max-w-md">
              {/* Floating cards */}
              <div className="absolute -left-8 top-8 z-20 animate-float rounded-2xl border border-white/10 bg-ink-900/90 p-4 shadow-lift backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15">
                    <TrendingUp className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-400">Organic Traffic</div>
                    <div className="font-display text-lg font-bold text-white">+340%</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-12 z-20 animate-float [animation-delay:2s] rounded-2xl border border-white/10 bg-ink-900/90 p-4 shadow-lift backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500/15">
                    <Search className="h-5 w-5 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-xs text-ink-400">Keywords Ranked</div>
                    <div className="font-display text-lg font-bold text-white">1,200+</div>
                  </div>
                </div>
              </div>

              {/* Main card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 to-ink-950 p-6 shadow-lift">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/15">
                      <BarChart3 className="h-4 w-4 text-brand-400" />
                    </div>
                    <span className="text-sm font-medium text-white">Organic Growth</span>
                  </div>
                  <span className="rounded-full bg-brand-500/15 px-2.5 py-1 text-xs font-semibold text-brand-300">
                    Last 12 months
                  </span>
                </div>

                {/* Chart bars */}
                <div className="flex h-40 items-end gap-2">
                  {[20, 28, 22, 35, 30, 42, 38, 52, 48, 65, 72, 88].map((h, i) => (
                    <div key={i} className="flex-1">
                      <div
                        className="w-full rounded-t-md bg-gradient-to-t from-brand-600 to-brand-400 transition-all duration-700"
                        style={{ height: `${h * 1.8}px`, animationDelay: `${i * 60}ms` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-xs text-ink-400">
                  <span>Jan</span>
                  <span>Dec</span>
                </div>

                {/* Bottom row */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/5 pt-4">
                  <div>
                    <div className="text-xs text-ink-400">Revenue attributed</div>
                    <div className="font-display text-lg font-bold text-white">$1.8M</div>
                  </div>
                  <div>
                    <div className="text-xs text-ink-400">Conversion rate</div>
                    <div className="font-display text-lg font-bold text-white">4.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { contactInfo, socials } from '@/data';
import { useReveal } from '@/hooks';
import { ArrowUpRight, Check } from 'lucide-react';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-500/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-400">
              Get in touch
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
              Let's grow your organic search
            </h2>
            <p className="mt-5 text-lg text-ink-300">
              Book a free 30-minute SEO audit. I'll review your site, identify
              your top 3 opportunities, and show you exactly what's holding back
              your rankings.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: contact info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/5 bg-ink-900/50 p-7">
              <h3 className="font-display text-lg font-bold text-white">
                Contact details
              </h3>
              <div className="mt-5 space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="group flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-white/5"
                    >
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 transition-all group-hover:bg-brand-500/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-ink-500">{info.label}</div>
                        <div className="text-sm font-medium text-white">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 flex gap-3 border-t border-white/5 pt-5">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-ink-300 transition-all hover:border-brand-500/30 hover:bg-brand-500/10 hover:text-brand-400"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-brand-500/15 bg-gradient-to-br from-brand-500/10 to-transparent p-7">
              <h3 className="font-display text-lg font-bold text-white">
                What's included in the free audit
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  'Full technical crawl (up to 500 pages)',
                  'Top 3 keyword opportunities',
                  'Competitor gap analysis',
                  'Quick-win action plan',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink-200">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500/20">
                      <Check className="h-3 w-3 text-brand-400" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-white/5 bg-ink-900/50 p-7 lg:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/15">
                  <Check className="h-8 w-8 text-brand-400" strokeWidth={2.5} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-white">
                  Thank you!
                </h3>
                <p className="mt-3 max-w-sm text-ink-300">
                  I've received your request and will get back to you within 24
                  hours with your free audit details.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', website: '', message: '' });
                  }}
                  className="mt-6 text-sm font-medium text-brand-400 hover:text-brand-300"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Jane Doe"
                    required
                  />
                  <Field
                    label="Email address"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="jane@company.com"
                    required
                  />
                </div>
                <Field
                  label="Website URL"
                  value={form.website}
                  onChange={(v) => setForm({ ...form, website: v })}
                  placeholder="https://yourwebsite.com"
                  required
                />
                <div>
                  <label className="mb-2 block text-sm font-medium text-ink-200">
                    What are you looking to achieve?
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    placeholder="Tell me about your goals, current challenges, or anything else I should know..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-ink-950/50 px-4 py-3 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-brand-500/40 focus:bg-ink-950"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-4 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-400/30"
                >
                  Request my free audit
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <p className="text-center text-xs text-ink-500">
                  No commitment required. I'll respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink-200">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-ink-950/50 px-4 py-3 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-brand-500/40 focus:bg-ink-950"
      />
    </div>
  );
}

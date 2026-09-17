import { navLinks, socials } from '@/data';
import { Search, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="group flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-ink-950">
                <Search className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-bold text-white">
                Walid<span className="text-brand-400">.</span>SEO
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Data-driven SEO strategy that turns organic search into your
              most reliable revenue channel.
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              Get a free audit
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white">Connect</h4>
            <div className="mt-4 flex gap-3">
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
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} Walid Syahri Tanzil. All rights reserved.
          </p>
          <p className="text-xs text-ink-500">
            Built as a WordPress-ready portfolio template.
          </p>
        </div>
      </div>
    </footer>
  );
}

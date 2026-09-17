import { useEffect, useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { navLinks } from '@/data';
import { useActiveSection } from '@/hooks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-ink-950 shadow-lg shadow-brand-500/30 transition-transform group-hover:scale-110">
            <Search className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Walid<span className="text-brand-400">.</span>SEO
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'text-white' : 'text-ink-300 hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-lg bg-white/5" />
                )}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-ink-950 shadow-lg shadow-brand-500/25 transition-all hover:bg-brand-400 hover:shadow-brand-400/30"
          >
            Get a free audit
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="space-y-1 border-t border-white/5 bg-ink-950/95 px-6 py-4 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-ink-300 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-brand-500 px-5 py-3 text-center text-sm font-semibold text-ink-950"
          >
            Get a free audit
          </a>
        </div>
      </div>
    </header>
  );
}

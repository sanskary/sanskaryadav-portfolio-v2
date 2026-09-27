import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { DURATION } from '@/lib/motion';

const NAV_ITEMS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const reduced = useReducedMotion();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1020]/85 backdrop-blur-md border-b border-white/10 transition-colors duration-300">
      <nav className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10 h-14 sm:h-16 md:h-20 flex items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          className="group flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.16em] sm:tracking-[0.2em] uppercase text-white hover:text-[var(--color-gold)] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[var(--color-gold)] group-hover:scale-125 transition-transform duration-300" />
          <span>SANSKAR YADAV</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-mono tracking-[0.18em] uppercase text-slate-300 hover:text-[var(--color-gold)] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}

          <a
            href="/cv/sanskar-yadav-cv.pdf"
            download="sanskar-yadav-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-[11px] font-mono tracking-[0.15em] uppercase text-[var(--color-gold)] border border-[var(--color-gold)]/40 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-all duration-300 rounded-sm"
          >
            <span>CV</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="md:hidden p-1.5 -mr-1.5 text-slate-200 hover:text-[var(--color-gold)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={reduced ? undefined : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: DURATION.fast }}
            className="md:hidden px-4 sm:px-6 pb-5 pt-2 bg-[#0A1020] border-b border-white/10 flex flex-col gap-3"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-2 text-xs font-mono tracking-[0.15em] uppercase text-slate-200 hover:text-[var(--color-gold)] border-b border-white/5"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="/cv/sanskar-yadav-cv.pdf"
              download="sanskar-yadav-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center justify-center gap-2 py-2.5 text-xs font-mono tracking-[0.15em] uppercase text-[var(--color-gold)] border border-[var(--color-gold)]/50"
              onClick={() => setIsOpen(false)}
            >
              <span>Download CV</span>
              <ArrowUpRight size={13} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

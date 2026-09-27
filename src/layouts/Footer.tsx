import { personal } from '@/data/personal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-7 sm:py-9 px-4 sm:px-6 md:px-10 lg:px-14 bg-[#0A1020] text-slate-400 border-t border-white/10">
      <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
        {/* Brand & Identity */}
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
            <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-white">
              {personal.name.toUpperCase()}
            </span>
          </div>
          <span className="text-[10px] font-sans tracking-[0.15em] uppercase text-[var(--color-gold)]">
            {personal.title.toUpperCase()}
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8" aria-label="Footer navigation">
          <a
            href="#work"
            className="text-[11px] font-mono uppercase tracking-[0.14em] text-slate-300 hover:text-[var(--color-gold)] transition-colors"
          >
            WORK
          </a>
          <a
            href="#about"
            className="text-[11px] font-mono uppercase tracking-[0.14em] text-slate-300 hover:text-[var(--color-gold)] transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#experience"
            className="text-[11px] font-mono uppercase tracking-[0.14em] text-slate-300 hover:text-[var(--color-gold)] transition-colors"
          >
            EXPERIENCE
          </a>
          <a
            href="#contact"
            className="text-[11px] font-mono uppercase tracking-[0.14em] text-slate-300 hover:text-[var(--color-gold)] transition-colors"
          >
            CONTACT
          </a>
          <a
            href="/cv/sanskar-yadav-cv.pdf"
            download="sanskar-yadav-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--color-gold)] hover:underline"
          >
            DOWNLOAD CV
          </a>
        </nav>

        {/* Copyright */}
        <div className="flex flex-col md:items-end gap-0.5">
          <span className="text-[10px] font-mono tracking-[0.14em] uppercase text-slate-400">
            SANSKAR YADAV · {currentYear}
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.12em] uppercase text-slate-500">
            RESEARCH · STRATEGY · SYSTEMS
          </span>
        </div>
      </div>
    </footer>
  );
}

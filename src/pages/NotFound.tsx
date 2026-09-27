import { ArrowLeft, Home, MessageSquare } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A1020] text-slate-100 flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 py-8 sm:py-12 selection:bg-[#C5A059]/20 selection:text-white">
      {/* Top Brand Header */}
      <header className="mx-auto max-w-[1400px] w-full flex items-center justify-between">
        <a
          href="/"
          className="group flex items-center gap-2 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-white hover:text-[var(--color-gold)] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] group-hover:scale-125 transition-transform" />
          <span>SANSKAR YADAV</span>
        </a>

        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-slate-400">
          POLITICAL COMMUNICATION &amp; DIGITAL STRATEGY
        </span>
      </header>

      {/* Main 404 Editorial Container */}
      <main className="mx-auto max-w-[800px] w-full my-auto py-12 sm:py-16 text-center flex flex-col items-center gap-5 sm:gap-6 relative z-10">
        {/* Soft Ambient Golden Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(circle, #C5A059 0%, transparent 70%)',
          }}
        />

        {/* Micro-label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[var(--color-gold)] font-medium">
            HTTP 404 · RESOURCE UNRESOLVED
          </span>
        </div>

        {/* Headline */}
        <h1 className="editorial-serif font-normal text-4xl sm:text-5xl md:text-6xl text-white leading-[1.08] tracking-tight">
          Dispatch Unavailable <br />
          <span className="italic font-serif text-[var(--color-gold)]">
            or Route Archived.
          </span>
        </h1>

        {/* Narrative */}
        <p className="text-xs sm:text-sm md:text-base text-slate-300 font-light leading-relaxed max-w-xl">
          The requested page, link, or document could not be located in this practice archive. Please verify the URL or return to the main portfolio to review selected political communication, data, and digital systems work.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <a
            href="/"
            className="btn-primary-gold inline-flex items-center gap-2 px-6 py-3 text-xs font-mono tracking-[0.15em] uppercase rounded-sm shadow-md"
          >
            <Home size={13} />
            <span>Return to Portfolio</span>
          </a>

          <a
            href="/#contact"
            className="btn-secondary-dark inline-flex items-center gap-2 px-5 py-3 text-xs font-mono tracking-[0.15em] uppercase rounded-sm"
          >
            <MessageSquare size={13} className="text-[var(--color-gold)]" />
            <span>Contact Sanskar</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-[1400px] w-full flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 border-t border-white/10 text-[10px] sm:text-xs font-mono text-slate-400">
        <span>SANSKARYADAV.IN · GWALIOR, INDIA</span>
        <a
          href="/"
          className="inline-flex items-center gap-1 text-[var(--color-gold)] hover:underline"
        >
          <ArrowLeft size={12} />
          <span>Back to Homepage</span>
        </a>
      </footer>
    </div>
  );
}

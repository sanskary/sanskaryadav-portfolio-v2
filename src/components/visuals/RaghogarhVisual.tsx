export function RaghogarhVisual() {
  return (
    <div className="relative w-full aspect-auto sm:aspect-[16/9] bg-[#0A1020] rounded-sm border border-slate-800 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden text-slate-200 gap-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 sm:pb-3 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-blue-400" />
          <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.14em] sm:tracking-[0.18em] uppercase text-slate-300">
            Constituency Digital System
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.1em] uppercase text-blue-400">
          300+ Villages
        </span>
      </div>

      {/* 3 Structural Layers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5 my-auto relative z-10">
        <div className="p-2.5 sm:p-3.5 bg-slate-900/90 border border-slate-800 rounded-sm flex flex-col gap-1 sm:gap-1.5">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">01 · CITIZENS</span>
          <span className="text-xs font-sans font-medium text-white">Public Service Access</span>
          <p className="text-[10px] text-slate-400 font-light leading-relaxed">
            Local ward head directory &amp; proof-of-work tracking.
          </p>
        </div>

        <div className="p-2.5 sm:p-3.5 bg-slate-900/90 border border-[var(--color-gold)]/40 rounded-sm flex flex-col gap-1 sm:gap-1.5">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">02 · JAN MITRAS</span>
          <span className="text-xs font-sans font-medium text-white">Volunteer Cadre</span>
          <p className="text-[10px] text-slate-400 font-light leading-relaxed">
            Digital ID cards, village directory &amp; monthly leaderboards.
          </p>
        </div>

        <div className="p-2.5 sm:p-3.5 bg-slate-900/90 border border-slate-800 rounded-sm flex flex-col gap-1 sm:gap-1.5">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">03 · LEADERSHIP</span>
          <span className="text-xs font-sans font-medium text-white">Service Coordination</span>
          <p className="text-[10px] text-slate-400 font-light leading-relaxed">
            Constituency coverage map &amp; resolution oversight.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-[9px] sm:text-[10px] font-mono text-slate-400 relative z-10">
        <span>CONSTITUENCY ARCHITECTURE</span>
        <span className="text-[var(--color-gold)]">PRODUCTION READY</span>
      </div>
    </div>
  );
}

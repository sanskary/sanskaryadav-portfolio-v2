export function ElectoralIntegrityVisual() {
  return (
    <div className="relative w-full aspect-auto sm:aspect-[16/9] bg-[#0A1020] rounded-sm border border-slate-800 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden text-slate-200 gap-3">
      {/* Background graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[var(--color-gold)]/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 sm:pb-3 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-amber-400" />
          <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.14em] sm:tracking-[0.18em] uppercase text-slate-300">
            Document Processing &amp; Anomaly Review
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.1em] uppercase text-amber-300">
          In-Memory Privacy
        </span>
      </div>

      {/* Process Flow */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 items-center my-auto relative z-10">
        <div className="p-2 sm:p-3.5 bg-slate-900/90 border border-slate-800 rounded-sm flex flex-col gap-1 text-center">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">DOCUMENT</span>
          <span className="text-[11px] sm:text-xs font-sans font-medium text-white">Electoral Roll</span>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-light">Hindi / Eng PDFs</span>
        </div>

        <div className="p-2 sm:p-3.5 bg-slate-900/90 border border-[var(--color-gold)]/40 rounded-sm flex flex-col gap-1 text-center">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">EXTRACTION</span>
          <span className="text-[11px] sm:text-xs font-sans font-medium text-white">Gemini Vision</span>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-light">Vision Parser</span>
        </div>

        <div className="p-2 sm:p-3.5 bg-slate-900/90 border border-slate-800 rounded-sm flex flex-col gap-1 text-center">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">ANALYSIS</span>
          <span className="text-[11px] sm:text-xs font-sans font-medium text-white">Match Engine</span>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-light">Fuzzy &amp; EPIC Check</span>
        </div>

        <div className="p-2 sm:p-3.5 bg-slate-900/90 border border-amber-500/40 rounded-sm flex flex-col gap-1 text-center bg-amber-950/20">
          <span className="text-[9px] sm:text-[10px] font-mono text-amber-400">VERIFICATION</span>
          <span className="text-[11px] sm:text-xs font-sans font-medium text-white">Human Review</span>
          <span className="text-[9px] sm:text-[10px] text-amber-300/80 font-light">Anomaly Flag</span>
        </div>
      </div>

      {/* Responsible Language Key */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-[8px] sm:text-[10px] font-mono text-slate-400 relative z-10">
        <span>TAXONOMY: POTENTIAL ANOMALY · CANDIDATE MATCH</span>
        <span className="text-[var(--color-gold)]">HUMAN REVIEW</span>
      </div>
    </div>
  );
}

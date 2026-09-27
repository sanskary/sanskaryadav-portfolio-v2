export function GunaVisual() {
  return (
    <div className="relative w-full aspect-auto sm:aspect-[16/9] bg-[#0A1020] rounded-sm border border-slate-800 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden text-slate-200 gap-3">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[var(--color-gold)]/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 sm:pb-3 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[var(--color-gold)]" />
          <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.14em] sm:tracking-[0.18em] uppercase text-slate-300">
            Political Intelligence &amp; Decision Support
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.1em] uppercase text-[var(--color-gold)]">
          4 Constituencies
        </span>
      </div>

      {/* Structural Flow Diagram */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 items-stretch my-auto relative z-10">
        {/* Stage 1: Field Grievance Feed */}
        <div className="p-2.5 sm:p-4 bg-slate-900/90 border border-slate-800 rounded-sm flex flex-col gap-1 sm:gap-2">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)] tracking-wider">
            01 · GROUND INTAKE
          </span>
          <span className="text-xs sm:text-sm font-sans font-medium text-white">
            Fragmented Field Issues
          </span>
          <p className="text-[10px] sm:text-xs text-slate-400 font-light leading-relaxed">
            Fertilizer shortages, water failures, road damage across Guna district.
          </p>
        </div>

        {/* Stage 2: Intelligence Processing */}
        <div className="p-2.5 sm:p-4 bg-slate-900/90 border border-[var(--color-gold)]/40 rounded-sm flex flex-col gap-1 sm:gap-2 text-left sm:text-center items-start sm:items-center">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)] tracking-wider">
            02 · AI STRATEGIC ANALYST
          </span>
          <span className="text-xs sm:text-sm font-sans font-medium text-white">
            Authority Targeting
          </span>
          <p className="text-[10px] sm:text-xs text-slate-400 font-light leading-relaxed">
            Maps issues to administrative heads (PWD, Collector, NHAI).
          </p>
        </div>

        {/* Stage 3: Decision Directives */}
        <div className="p-2.5 sm:p-4 bg-slate-900/90 border border-slate-800 rounded-sm flex flex-col gap-1 sm:gap-2">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)] tracking-wider">
            03 · BILINGUAL OUTPUT
          </span>
          <span className="text-xs sm:text-sm font-sans font-medium text-white">
            War Room Directives
          </span>
          <p className="text-[10px] sm:text-xs text-slate-400 font-light leading-relaxed">
            English leadership briefs &amp; Hindi ground worker action plans.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-[9px] sm:text-[10px] font-mono text-slate-400 relative z-10">
        <span>Guna · Bamori · Raghogarh · Chachoura</span>
        <span className="text-[var(--color-gold)]">Operational Support</span>
      </div>
    </div>
  );
}

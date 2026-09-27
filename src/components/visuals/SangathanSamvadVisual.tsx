export function SangathanSamvadVisual() {
  return (
    <div className="relative w-full aspect-auto sm:aspect-[16/9] bg-[#0A1020] rounded-sm border border-slate-800 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden text-slate-200 gap-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 sm:pb-3 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-rose-400" />
          <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.14em] sm:tracking-[0.18em] uppercase text-slate-300">
            Field Research &amp; Dialogue Framework
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.1em] uppercase text-rose-300">
          66 Wards
        </span>
      </div>

      {/* 3-Phase Methodology */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5 my-auto relative z-10">
        <div className="p-2.5 sm:p-3.5 bg-slate-900/90 border border-slate-800 rounded-sm flex flex-col gap-1 sm:gap-1.5">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">PHASE 1 · PREPARATION</span>
          <span className="text-xs font-sans font-medium text-white">Framework &amp; Training</span>
          <p className="text-[10px] text-slate-400 font-light leading-relaxed">
            Worker list updates, field team training &amp; survey forms.
          </p>
        </div>

        <div className="p-2.5 sm:p-3.5 bg-slate-900/90 border border-[var(--color-gold)]/40 rounded-sm flex flex-col gap-1 sm:gap-1.5">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">PHASE 2 · FIELD DIALOGUE</span>
          <span className="text-xs font-sans font-medium text-white">66-Ward Outreach</span>
          <p className="text-[10px] text-slate-400 font-light leading-relaxed">
            House-to-house contact, worker interviews &amp; SWOT research.
          </p>
        </div>

        <div className="p-2.5 sm:p-3.5 bg-slate-900/90 border border-slate-800 rounded-sm flex flex-col gap-1 sm:gap-1.5">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">PHASE 3 · STRATEGY</span>
          <span className="text-xs font-sans font-medium text-white">Action Plan</span>
          <p className="text-[10px] text-slate-400 font-light leading-relaxed">
            Consolidated ward report cards &amp; recommendations.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-[9px] sm:text-[10px] font-mono text-slate-400 relative z-10">
        <span>66-WARD REPORT CARDS · CADRE DATABASE</span>
        <span className="text-rose-300">FIELD RESEARCH</span>
      </div>
    </div>
  );
}

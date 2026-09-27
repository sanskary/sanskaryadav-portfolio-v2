export function KartavyaVisual() {
  return (
    <div className="relative w-full aspect-auto sm:aspect-[16/9] bg-[#0A1020] rounded-sm border border-slate-800 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden text-slate-200 gap-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 sm:pb-3 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-purple-400" />
          <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.14em] sm:tracking-[0.18em] uppercase text-slate-300">
            Activity Reporting Automation
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.1em] uppercase text-purple-300">
          Audit Pipeline
        </span>
      </div>

      {/* 4 Pipeline Stages */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 items-center my-auto relative z-10">
        <div className="p-2 sm:p-3 bg-slate-900/90 border border-slate-800 rounded-sm flex flex-col gap-0.5 sm:gap-1 text-center">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">01 · HARVEST</span>
          <span className="text-[11px] sm:text-xs font-sans font-medium text-white">Social Activity</span>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-light">Monthly Scraping</span>
        </div>

        <div className="p-2 sm:p-3 bg-slate-900/90 border border-slate-800 rounded-sm flex flex-col gap-0.5 sm:gap-1 text-center">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">02 · CLEAN</span>
          <span className="text-[11px] sm:text-xs font-sans font-medium text-white">Caption Parsing</span>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-light">Hashtag Removal</span>
        </div>

        <div className="p-2 sm:p-3 bg-slate-900/90 border border-[var(--color-gold)]/40 rounded-sm flex flex-col gap-0.5 sm:gap-1 text-center">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">03 · CLASSIFY</span>
          <span className="text-[11px] sm:text-xs font-sans font-medium text-white">Gemini AI Filter</span>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-light">Discards Inactive</span>
        </div>

        <div className="p-2 sm:p-3 bg-slate-900/90 border border-slate-800 rounded-sm flex flex-col gap-0.5 sm:gap-1 text-center">
          <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)]">04 · AUDIT</span>
          <span className="text-[11px] sm:text-xs font-sans font-medium text-white">Structured Report</span>
          <span className="text-[9px] sm:text-[10px] text-slate-400 font-light">Excel Scheme</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-[9px] sm:text-[10px] font-mono text-slate-400 relative z-10">
        <span>HIGH-TRUST DESIGN: EXCLUSION LOG &amp; OVERRIDE</span>
        <span className="text-[var(--color-gold)]">STANDARDIZED</span>
      </div>
    </div>
  );
}

export function GwaliorVisual() {
  return (
    <div className="relative w-full aspect-auto sm:aspect-[16/9] bg-[#0A1020] rounded-sm border border-slate-800 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between overflow-hidden text-slate-200 gap-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 sm:pb-3 relative z-10">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400" />
          <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.14em] sm:tracking-[0.18em] uppercase text-slate-300">
            Ward Issue Intake &amp; Grievance System
          </span>
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.1em] uppercase text-emerald-400">
          Public System
        </span>
      </div>

      {/* Ward Issues Grid */}
      <div className="my-auto relative z-10 py-1 sm:py-2">
        <span className="text-[9px] sm:text-[10px] font-mono uppercase text-[var(--color-gold)] tracking-[0.12em] sm:tracking-[0.15em] block mb-2 sm:mb-3">
          STRUCTURED CIVIC INTAKE CATEGORIES
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2.5">
          {[
            'Water Supply',
            'Road Repair',
            'Sanitation',
            'Electricity',
            'Public Health',
          ].map((cat) => (
            <div
              key={cat}
              className="p-2 sm:p-3 bg-slate-900/90 border border-slate-800 rounded-sm text-center flex flex-col justify-center items-center h-12 sm:h-16"
            >
              <span className="text-[11px] sm:text-xs font-sans font-medium text-slate-200">{cat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Process Line */}
      <div className="flex items-center justify-between border-t border-slate-800 pt-2 text-[9px] sm:text-[10px] font-mono text-slate-400 relative z-10">
        <span>INTAKE ➔ WARD AGGREGATION ➔ DECISION</span>
        <span className="text-emerald-400">LIVE PORTAL</span>
      </div>
    </div>
  );
}

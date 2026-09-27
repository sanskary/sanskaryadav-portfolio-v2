import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { experience } from '@/data/experience';
import { DURATION, EASE } from '@/lib/motion';

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const reduced = useReducedMotion();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative scroll-mt-16 md:scroll-mt-20 py-10 sm:py-14 lg:py-18 px-4 sm:px-6 md:px-10 lg:px-14 bg-[#FAF9F5] text-[var(--color-ink)] border-t border-[#E6E3DB]"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[var(--color-gold)]" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[var(--color-gold)] font-semibold">
              03 · TRACK RECORD
            </span>
          </div>

          <h2 className="editorial-serif text-2xl sm:text-3xl md:text-5xl font-normal tracking-tight text-[var(--color-ink)] mb-2 leading-[1.08] sm:leading-[1.06]">
            Execution Log &amp; Professional History
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed font-light">
            A chronological record of operational responsibility across political communication, civic technology deployment, field research, and digital strategy.
          </p>
        </div>

        {/* Continuous Editorial Timeline Rail */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-[#DCD9D0] ml-2 sm:ml-4 flex flex-col max-w-5xl">
          {experience.map((item, index) => {
            const EntryContent = (
              <div className="group relative border-b border-[#E6E3DB] pb-5 sm:pb-6 mb-5 sm:mb-6 last:border-b-0 last:pb-0 last:mb-0">
                {/* Gold-accented timeline node */}
                <span className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF9F5] border-2 border-[var(--color-gold)] flex items-center justify-center group-hover:bg-[var(--color-gold)] transition-colors duration-300">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-gold)] group-hover:bg-white transition-colors duration-300" />
                </span>

                {/* Date & Organisation Context */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                  <span className="text-[11px] font-mono tracking-[0.15em] uppercase text-[var(--color-gold)] font-semibold">
                    {item.period}
                  </span>
                  <span className="text-slate-300 select-none hidden sm:inline">•</span>
                  <span className="text-xs font-sans uppercase tracking-[0.12em] text-slate-500 font-medium">
                    {item.organisation}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="editorial-serif text-2xl sm:text-3xl font-normal text-[var(--color-ink)] leading-snug mb-2 group-hover:text-[var(--color-gold)] transition-colors duration-200">
                  {item.role}
                </h3>

                {/* Operational Execution Bullets */}
                <ul className="flex flex-col gap-1.5 max-w-4xl lg:max-w-5xl">
                  {item.description.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-light"
                    >
                      <span className="font-mono text-xs text-[var(--color-gold)] select-none shrink-0 mt-0.5">
                        ›
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

            if (reduced) {
              return <div key={item.period + item.role}>{EntryContent}</div>;
            }

            return (
              <motion.div
                key={item.period + item.role}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: DURATION.emphasis,
                  ease: EASE.out,
                  delay: index * 0.08,
                }}
              >
                {EntryContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

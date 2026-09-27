import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { personal } from '@/data/personal';
import { skills } from '@/data/skills';
import { DURATION, EASE } from '@/lib/motion';

const METHODOLOGY_STEPS = [
  {
    title: 'Problem Identification',
    desc: 'Deconstructing policy, governance & field challenges.',
  },
  {
    title: 'Field & Ground Research',
    desc: 'Empirical data gathering & grassroots dialogue.',
  },
  {
    title: 'Information Structuring',
    desc: 'Transforming raw data into strategic frameworks.',
  },
  {
    title: 'Custom System Execution',
    desc: 'Deploying tailored digital platforms & AI pipelines.',
  },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const reduced = useReducedMotion();

  return (
    <section
      id="about"
      ref={ref}
      className="relative scroll-mt-16 md:scroll-mt-20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-14 bg-[#0D1527] text-slate-100 border-t border-white/10"
    >
      {/* Soft warm-gold ambient background glow */}
      <div
        className="absolute top-1/2 left-0 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] rounded-full pointer-events-none blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, var(--color-gold) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-[1400px] relative z-10">
        {/* Section Header */}
        <div className="mb-5 sm:mb-6 lg:mb-8 max-w-3xl">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[var(--color-gold)]" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[var(--color-gold)] font-semibold">
              02 · POSITIONING &amp; PRACTICE
            </span>
          </div>

          <h2 className="editorial-serif text-2xl sm:text-3xl md:text-5xl font-normal tracking-tight text-white mb-1.5 sm:mb-2 leading-[1.08] sm:leading-[1.06]">
            An Interdisciplinary Practice Grounded in Strategy &amp; Public Purpose
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-light leading-relaxed">
            Bridging analytical research, political communication, field strategy, and modern digital systems to solve complex real-world governance challenges.
          </p>
        </div>

        {/* ── 1. Primary Two-Column Composition (Matched Visual Height) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-stretch mb-8 sm:mb-10 lg:mb-14">

          {/* Left Column — Full uncropped portrait image (centered on mobile, shifted rightwards on desktop) */}
          <div className="lg:col-span-5 flex items-start justify-center lg:justify-start lg:pl-8">
            <motion.div
              initial={reduced ? undefined : { opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : undefined}
              transition={{ duration: DURATION.reveal, ease: EASE.out }}
              className="relative w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[430px] rounded-sm overflow-hidden border border-white/15 shadow-xl bg-[#0A1020]"
            >
              <img
                src="/images/sanskar/sanskar-portrait-about.webp"
                alt="Sanskar Yadav — Political Communication and Digital Strategy professional in Gwalior, Madhya Pradesh"
                width={1720}
                height={1720}
                className="w-full h-auto object-contain filter brightness-[1.02] contrast-[1.04] block"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1527] via-transparent to-transparent opacity-30 pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column — Philosophy Quote, About Narrative & Primary Spheres (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 sm:gap-5 text-slate-300 max-w-2xl">
            {/* Philosophy Quote */}
            <div className="p-3 sm:p-4 bg-[#111A30]/50 border-l-2 border-[var(--color-gold)] rounded-r-sm">
              <p className="text-white font-normal editorial-serif text-lg sm:text-xl lg:text-2xl leading-snug">
                "Technology is a tool within the practice, never the identity of the person."
              </p>
            </div>

            {/* Concise About Narrative with refined reading measure */}
            <div className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm lg:text-base leading-relaxed font-light">
              <p>
                My work connects an academic foundation in <strong className="text-white font-medium">Applied Economics</strong> with hands-on <strong className="text-white font-medium">Political Communication</strong> and digital strategy. I approach complex public challenges by combining analytical rigor, field research, and structured information design before building technology.
              </p>

              <p>
                Rather than applying pre-packaged software templates, I design and deploy custom platforms, AI workflows, and data pipelines built for the exact administrative constraints and field realities of public leadership.
              </p>
            </div>

            {/* Primary Spheres of Engagement (Compact Editorial List) */}
            <div className="pt-2.5 sm:pt-3.5 border-t border-white/10 flex flex-col gap-2 sm:gap-2.5">
              <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[var(--color-gold)] font-medium">
                PRIMARY SPHERES OF ENGAGEMENT
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-1.5 sm:gap-y-2 text-[11px] sm:text-xs font-sans text-slate-200">
                {personal.focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* ── 2. Problem-First Execution (Compact Methodology Flow on Mobile) ── */}
        <div className="pt-5 sm:pt-7 pb-2 sm:pb-3 border-t border-white/10 mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-5 gap-1 sm:gap-2">
            <span className="text-[11px] sm:text-xs font-sans tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[var(--color-gold)] font-semibold">
              HOW I APPROACH PROBLEMS
            </span>
            <span className="text-[10px] sm:text-[11px] font-sans text-slate-400">
              Problem-First Execution Methodology
            </span>
          </div>

          {/* 2-Column Mobile / 4-Column Desktop Flow with connecting line */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 relative">
            {/* Desktop Horizontal Connecting Line sitting cleanly at circle centers */}
            <div className="hidden lg:block absolute top-[12px] left-[4%] right-[4%] h-[1px] bg-white/15 z-0" />

            {METHODOLOGY_STEPS.map((step, i) => (
              <div key={step.title} className="relative z-10 flex flex-col gap-1.5 sm:gap-2 p-2.5 sm:p-0 bg-[#111A30]/30 sm:bg-transparent rounded-sm sm:rounded-none border border-white/5 sm:border-none">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0D1527] border border-[var(--color-gold)] text-[var(--color-gold)] flex items-center justify-center text-[9px] sm:text-[10px] font-mono font-bold shrink-0 shadow-sm">
                    0{i + 1}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[var(--color-gold)] tracking-wider uppercase font-semibold">
                    PHASE 0{i + 1}
                  </span>
                </div>

                <div className="pl-0 sm:pl-8 flex flex-col gap-0.5">
                  <h4 className="text-xs sm:text-sm font-sans font-medium text-white">
                    {step.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-light leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. Capability Matrix (Compact 2-Column Mobile Grid / 5-Column Desktop) ── */}
        <div className="pt-5 sm:pt-6 pb-2 sm:pb-2.5 border-t border-white/10 mb-3 sm:mb-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-1.5 sm:gap-2">
          <div>
            <h3 className="editorial-serif text-xl sm:text-2xl md:text-3xl font-normal text-white">
              Capability Matrix
            </h3>
          </div>
          <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.14em] sm:tracking-[0.15em] uppercase text-slate-400 font-medium">
            Multidisciplinary Skill Synthesis
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-3.5">
          {skills.map((group, index) => {
            const isLastOnMobile = index === skills.length - 1;

            if (reduced) {
              return (
                <div
                  key={group.category}
                  className={`p-2.5 sm:p-3.5 flex flex-col justify-between bg-[#111A30]/30 border border-white/5 rounded-sm ${isLastOnMobile ? 'col-span-2 lg:col-span-1' : ''
                    }`}
                >
                  <span className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.12em] sm:tracking-[0.14em] mb-1.5 sm:mb-2 pb-1 border-b border-white/5 text-[var(--color-gold)] uppercase">
                    {group.category}
                  </span>
                  <ul className="flex flex-col gap-0.5 sm:gap-1">
                    {group.skills.map((skill) => (
                      <li key={skill} className="text-[11px] sm:text-xs font-sans text-slate-300 font-light">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: DURATION.emphasis,
                  ease: EASE.out,
                  delay: 0.08 + index * 0.04,
                }}
                className={`group relative p-2.5 sm:p-3.5 flex flex-col justify-between bg-[#111A30]/30 border border-white/5 hover:border-[var(--color-gold)]/60 transition-colors duration-300 rounded-sm ${isLastOnMobile ? 'col-span-2 lg:col-span-1' : ''
                  }`}
              >
                <span className="text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.12em] sm:tracking-[0.14em] mb-1.5 sm:mb-2 pb-1 border-b border-white/5 text-[var(--color-gold)] uppercase">
                  {group.category}
                </span>
                <ul className="flex flex-col gap-0.5 sm:gap-1">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[11px] sm:text-xs font-sans text-slate-300 font-light group-hover:text-white transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

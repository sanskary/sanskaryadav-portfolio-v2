import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { personal } from '@/data/personal';
import { DURATION, EASE } from '@/lib/motion';
import { StrategicSignalField } from '@/components/visuals/StrategicSignalField';

const CORE_DISCIPLINES = [
  'Research',
  'Strategy',
  'Communication',
  'AI',
  'Data',
  'Digital Systems',
];

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-[auto] lg:min-h-[88vh] flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-14 pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 bg-[#0A1020] text-slate-100 overflow-hidden">
      <div className="mx-auto max-w-[1400px] w-full flex-1 flex flex-col justify-center relative z-10">
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-center py-2 sm:py-4 md:py-5">

          {/* Left Column — Editorial Headline & Positioning (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4 md:gap-5 max-w-2xl xl:max-w-3xl">

            {/* Positioning Category Tag */}
            <motion.div
              initial={reduced ? undefined : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.standard, ease: EASE.out }}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[var(--color-gold)]" />
              <span className="text-[10px] sm:text-[11px] lg:text-xs font-sans font-medium tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[var(--color-gold)]">
                {personal.title}
              </span>
            </motion.div>

            {/* Headline Block */}
            <motion.div
              initial={reduced ? undefined : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.reveal, ease: EASE.out, delay: 0.08 }}
              className="flex flex-col gap-1 sm:gap-1.5"
            >
              <span className="text-[10px] sm:text-xs font-mono tracking-[0.16em] sm:tracking-[0.2em] uppercase text-slate-400 font-normal">
                HELLO, I'M SANSKAR YADAV
              </span>
              <h1 className="editorial-serif font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.75rem] leading-[1.08] sm:leading-[1.04] tracking-tight text-white">
                Technology meets <br />
                <span className="italic font-serif font-normal text-[var(--color-gold)]">
                  Public Purpose.
                </span>
              </h1>
            </motion.div>

            {/* Core Narrative Paragraph */}
            <motion.p
              initial={reduced ? undefined : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.emphasis, ease: EASE.out, delay: 0.14 }}
              className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-light max-w-xl"
            >
              I start with complex real-world and public challenges: researching ground realities, structuring unstructured information, designing practical digital systems, and deploying technology-including AI-where it creates genuine value.
            </motion.p>

            {/* Primary & Secondary Action CTAs */}
            <motion.div
              initial={reduced ? undefined : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.emphasis, ease: EASE.out, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-0.5 sm:pt-1"
            >
              <a
                href="#work"
                className="btn-primary-gold inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 text-[11px] sm:text-xs font-mono tracking-[0.12em] sm:tracking-[0.15em] uppercase rounded-sm shadow-md"
              >
                <span>Explore My Work</span>
                <ArrowRight size={13} />
              </a>

              <a
                href="#contact"
                className="btn-secondary-dark inline-flex items-center gap-2 px-4.5 py-2.5 sm:px-6 sm:py-3.5 text-[11px] sm:text-xs font-mono tracking-[0.12em] sm:tracking-[0.15em] uppercase rounded-sm"
              >
                <span>Let's Connect</span>
                <MessageSquare size={12} className="text-[var(--color-gold)]" />
              </a>
            </motion.div>
          </div>

          {/* Right Column — Unboxed Hero Photograph Cutout (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-center relative items-end lg:items-center self-end lg:self-center pt-4 sm:pt-6 lg:pt-0 lg:-translate-x-4 xl:-translate-x-6">
            <div className="relative w-full max-w-[240px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[460px] flex justify-center items-center">
              {/* Golden Radiance Wave System & Ambient Atmospheric Field Centered Behind Hero Portrait */}
              <StrategicSignalField />

              <img
                src="/images/sanskar/sanskar-speaking-hero.webp"
                alt="Sanskar Yadav — Political Communication and Digital Strategy professional speaking at a public forum"
                width={860}
                height={884}
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
                }}
                className="relative z-10 w-full h-auto max-h-[290px] sm:max-h-[380px] lg:max-h-[520px] object-contain object-bottom lg:object-center filter brightness-[1.03] contrast-[1.04]"
              />
            </div>
          </div>

        </div>

        {/* Understated Editorial Discipline Line */}
        <motion.div
          initial={reduced ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.standard, delay: 0.28 }}
          className="pt-4 sm:pt-6 pb-0 sm:pb-1 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 mt-3 sm:mt-auto text-[10px] sm:text-xs font-sans font-light"
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-1.5 sm:gap-x-2 gap-y-1 text-slate-300">
            {CORE_DISCIPLINES.map((discipline, index) => (
              <span key={discipline} className="flex items-center gap-1.5 sm:gap-2">
                <span>{discipline}</span>
                {index < CORE_DISCIPLINES.length - 1 && (
                  <span className="text-[var(--color-gold)] opacity-60 font-serif">•</span>
                )}
              </span>
            ))}
          </div>

          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-slate-400">
            SANSKARYADAV.IN
          </span>
        </motion.div>
      </div>
    </section>
  );
}

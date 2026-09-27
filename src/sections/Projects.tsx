import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { DURATION, EASE } from '@/lib/motion';

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const reduced = useReducedMotion();

  return (
    <section
      id="work"
      ref={ref}
      className="relative scroll-mt-16 md:scroll-mt-20 py-10 sm:py-14 lg:py-18 px-4 sm:px-6 md:px-10 lg:px-14 bg-[#FAF9F5] text-[var(--color-ink)] border-t border-[#E6E3DB]"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 lg:mb-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[var(--color-gold)]" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase text-[var(--color-gold)] font-semibold">
              01 · SELECTED WORK
            </span>
          </div>

          <h2 className="editorial-serif text-2xl sm:text-3xl md:text-5xl font-normal tracking-tight text-[var(--color-ink)] mb-2 leading-[1.08] sm:leading-[1.06]">
            Evidence of Strategy, Data &amp; Digital Systems
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-slate-700 leading-relaxed font-light">
            A curated case study archive demonstrating how complex public challenges are researched, structured, and operationalised through custom digital platforms and AI workflows.
          </p>
        </div>

        {/* Unified 2x3 Project Grid on Desktop / 1-Col on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, index) => {
            const isFeatured = index < 2;

            if (reduced) {
              return (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                  isFeatured={isFeatured}
                />
              );
            }

            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: DURATION.emphasis,
                  ease: EASE.out,
                  delay: index * 0.06,
                }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  isFeatured={isFeatured}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

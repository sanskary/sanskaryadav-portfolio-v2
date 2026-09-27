import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { DURATION, EASE } from '@/lib/motion';

interface ProjectCardProps {
  project: Project;
  index: number;
  isFeatured?: boolean;
}

export function ProjectCard({
  project,
  index,
  isFeatured = false,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const reduced = useReducedMotion();

  const hasUrl = Boolean(project.url);
  const formattedIndex = String(index + 1).padStart(2, '0');

  const CardWrapper = hasUrl ? 'a' : 'div';
  const wrapperProps = hasUrl
    ? {
        href: project.url,
        target: '_blank',
        rel: project.rel || 'noopener noreferrer',
        'aria-label': `Explore ${project.title} (opens project link in new tab)`,
      }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={hasUrl ? 0 : undefined}
      className={`group relative flex flex-col justify-between p-3.5 sm:p-4 lg:p-5 bg-white border border-[#E2DFD8] hover:border-[var(--color-gold)] transition-colors duration-300 rounded-sm shadow-sm ${
        hasUrl ? 'cursor-pointer' : 'cursor-default'
      }`}
    >
      <div>
        {/* Top Header: Index / Featured Micro-Label & Status */}
        <div className="flex items-center justify-between gap-3 mb-2 sm:mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[var(--color-gold)] font-semibold">
              CASE STUDY {formattedIndex}
            </span>
            {isFeatured && (
              <>
                <span className="text-slate-300 select-none text-[10px]">•</span>
                <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.14em] text-[var(--color-gold)] font-medium bg-[var(--color-gold)]/10 px-1.5 py-0.5 rounded-sm">
                  FLAGSHIP
                </span>
              </>
            )}
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.1em] text-slate-500 bg-stone-100 px-1.5 sm:px-2 py-0.5 rounded-sm border border-stone-200">
            {project.status.toUpperCase()}
          </span>
        </div>

        {/* Authentic Project Thumbnail Embed (Uniform 16:9) */}
        <div className="mb-2.5 sm:mb-3 rounded-sm overflow-hidden border border-slate-800/80 bg-[#0A1020] aspect-[16/9] shadow-sm group-hover:shadow-md transition-shadow duration-300">
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt || project.title}
              width={640}
              height={360}
              className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-[1.02] block"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xs font-mono text-slate-500">
              PROJECT VISUAL
            </div>
          )}
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3
            className={`editorial-serif font-normal text-[var(--color-ink)] leading-snug group-hover:text-[var(--color-gold)] transition-colors duration-200 ${
              isFeatured ? 'text-xl sm:text-2xl font-medium' : 'text-lg sm:text-xl md:text-2xl'
            }`}
          >
            {project.title}
          </h3>

          {hasUrl ? (
            <motion.span
              animate={isHovered && !reduced ? { x: 2, y: -2 } : { x: 0, y: 0 }}
              transition={{ duration: DURATION.fast, ease: EASE.out }}
              className="mt-0.5 shrink-0 text-[var(--color-gold)]"
            >
              <ArrowUpRight size={15} />
            </motion.span>
          ) : (
            <span className="mt-0.5 shrink-0 text-slate-400">
              <ArrowRight size={14} />
            </span>
          )}
        </div>

        {/* Subtitle */}
        <p className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.1em] sm:tracking-[0.12em] text-[var(--color-gold)] font-medium mb-1.5 sm:mb-2">
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2.5 sm:mb-3 font-light">
          {project.description}
        </p>
      </div>

      {/* Takeaway & Capabilities Footer */}
      <div className="pt-2 sm:pt-2.5 border-t border-[#E6E3DB] flex flex-col gap-1.5 sm:gap-2 mt-auto">
        {project.takeaway && (
          <p className="text-[10px] sm:text-[11px] italic text-slate-700 font-serif border-l-2 border-[var(--color-gold)]/60 pl-2">
            "{project.takeaway}"
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-1.5 pt-0.5">
          <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-1.5 sm:px-2 py-0.5 text-[9px] font-sans bg-stone-100 text-slate-700 border border-stone-200 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.12em] uppercase text-[var(--color-gold)] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            <span>{hasUrl ? 'PORTAL' : 'DETAILS'}</span>
            {hasUrl ? <ArrowUpRight size={12} /> : <ArrowRight size={12} />}
          </span>
        </div>
      </div>
    </CardWrapper>
  );
}

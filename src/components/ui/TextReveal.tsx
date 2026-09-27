import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { DURATION, EASE } from '@/lib/motion';

interface TextRevealProps {
  /** Newline-delimited string — each line is revealed with a stagger. */
  text: string;
  className?: string;
  /** Delay before the first line starts (ms). */
  delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reduced = useReducedMotion();

  const lines = text.split('\n');
  const delayS = delay / 1000;

  if (reduced) {
    return (
      <span className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span ref={ref} className={className} style={{ display: 'block' }}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            animate={isInView ? { y: '0%' } : undefined}
            transition={{
              duration: DURATION.reveal,
              ease: EASE.out,
              delay: delayS + i * 0.12,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Motion timing tokens, easing presets, and reduced-motion utilities.
// Single source of truth for the approved animation language.
//
// For component-level reduced-motion handling, use:
//   import { useReducedMotion } from 'motion/react';
// ---------------------------------------------------------------------------

/** Approved duration tokens (in seconds). */
export const DURATION = {
  fast: 0.15,
  standard: 0.3,
  emphasis: 0.45,
  reveal: 0.65,
} as const;

/** Easing presets as cubic-bezier control points. */
export const EASE = {
  default: [0.25, 0.1, 0.25, 1.0] as const,
  out: [0, 0, 0.2, 1] as const,
  inOut: [0.42, 0, 0.58, 1] as const,
};

/**
 * Check the prefers-reduced-motion media query.
 * Use this for non-React contexts (e.g. vanilla event handlers).
 * Inside React components, prefer `useReducedMotion()` from `motion/react`.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

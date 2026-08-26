import type { Variants } from "framer-motion";

/** Shared spring physics — premium, no bounce. */
export const springSoft = { type: "spring", stiffness: 120, damping: 20, mass: 0.9 } as const;
export const springSnappy = { type: "spring", stiffness: 300, damping: 26 } as const;

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Fade-up reveal used across sections. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT, delay: i * 0.1 },
  }),
};

/** Staggered container / child for text entrances. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE_OUT },
  },
};

/** Standard viewport config — animate once, slightly early. */
export const viewportOnce = { once: true, margin: "-80px" } as const;

/** Word-by-word split for hero typography. */
export function splitWords(text: string): string[] {
  return text.split(" ");
}

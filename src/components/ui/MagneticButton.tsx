import { useRef, type ReactNode, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type Props = {
  children: ReactNode;
  /** Internal route (react-router) */
  to?: string;
  /** External URL */
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

/**
 * Magnetic button — gently follows the cursor with spring physics.
 */
export default function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  function handleMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.28);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.28);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-colors duration-300 select-none";
  const styles =
    variant === "primary"
      ? "text-white bg-gradient-to-r from-royal-600 via-indigo-glow to-violet-glow shadow-[0_10px_40px_-8px_rgba(79,107,255,0.55)] hover:shadow-[0_14px_50px_-6px_rgba(99,102,241,0.65)]"
      : "text-charcoal border border-charcoal/15 bg-white/60 backdrop-blur-sm hover:border-royal-500/40 hover:text-royal-600";

  const inner = (
    <>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </>
  );

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      className="inline-block"
    >
      {to ? (
        <Link to={to} className={`${base} ${styles} ${className}`} aria-label={ariaLabel}>
          {inner}
        </Link>
      ) : href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`} aria-label={ariaLabel}>
          {inner}
        </a>
      ) : (
        <button onClick={onClick} className={`${base} ${styles} ${className}`} aria-label={ariaLabel}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}

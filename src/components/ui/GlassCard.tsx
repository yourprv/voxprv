import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce, springSoft } from "../../lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** Enables subtle 3D tilt on pointer move */
  tilt?: boolean;
};

/**
 * Premium frosted-glass card with optional 3D tilt + soft glow.
 */
export default function GlassCard({ children, className = "", tilt = false }: Props) {
  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--rx", `${(-py * 6).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * 8).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(px * 100 + 50).toFixed(1)}%`);
    el.style.setProperty("--my", `${(py * 100 + 50).toFixed(1)}%`);
  };

  const reset = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--rx", "0deg");
    e.currentTarget.style.setProperty("--ry", "0deg");
  };

  return (
    <motion.div
      variants={fadeUp}
      transition={springSoft}
      onMouseMove={tilt ? handleMove : undefined}
      onMouseLeave={tilt ? reset : undefined}
      style={
        tilt
          ? {
              rotateX: "var(--rx, 0deg)",
              rotateY: "var(--ry, 0deg)",
              transformPerspective: 900,
            }
          : undefined
      }
      className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 shadow-[0_20px_60px_-30px_rgba(35,48,164,0.25)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(79,107,255,0.45)] ${className}`}
    >
      {/* Cursor-tracking glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(125,135,255,0.12), transparent 65%)",
        }}
      />
      {children}
    </motion.div>
  );
}

export function GlassGrid({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {children}
    </motion.div>
  );
}

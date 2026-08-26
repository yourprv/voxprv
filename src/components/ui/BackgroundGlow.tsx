import { motion, useReducedMotion } from "framer-motion";

/**
 * Floating blurred gradient orbs — the ambient brand light.
 * Purely decorative; GPU-friendly transforms only.
 */
export default function BackgroundGlow() {
  const reduce = useReducedMotion();

  const orbs = [
    { cls: "-top-32 -left-32 h-[34rem] w-[34rem] bg-royal-400/30", anim: "animate-float-slow" },
    { cls: "top-1/3 -right-40 h-[38rem] w-[38rem] bg-violet-glow/25", anim: "animate-float-med" },
    { cls: "bottom-[-10rem] left-1/4 h-[30rem] w-[30rem] bg-indigo-glow/20", anim: "animate-float-slow" },
  ];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {orbs.map((o, i) =>
        reduce ? (
          <div key={i} className={`absolute rounded-full blur-[120px] ${o.cls}`} />
        ) : (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-[120px] ${o.cls} ${o.anim}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: i * 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
        ),
      )}
    </div>
  );
}

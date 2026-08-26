import { motion } from "framer-motion";
import { staggerContainer, staggerChild, viewportOnce } from "../../lib/motion";

type Props = {
  eyebrow?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionTitle({
  eyebrow,
  title,
  accent,
  subtitle,
  align = "center",
}: Props) {
  const alignCls = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col ${alignCls} mb-16`}
    >
      {eyebrow && (
        <motion.span
          variants={staggerChild}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-royal-500"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={staggerChild}
        className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight text-charcoal sm:text-5xl"
      >
        {title}{" "}
        {accent && (
          <span className="font-display italic bg-gradient-to-r from-royal-500 via-indigo-glow to-violet-glow bg-clip-text text-transparent">
            {accent}
          </span>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p variants={staggerChild} className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/60 sm:text-lg">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

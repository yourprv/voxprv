import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { craft } from "../lib/site";
import { staggerContainer, staggerChild, viewportOnce } from "../lib/motion";

/**
 * The Craft — how a VoxPRV cover comes to life, in four steps.
 */
export default function CraftSection() {
  return (
    <section aria-label="The craft" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionTitle
        eyebrow="The Craft"
        title="How a cover"
        accent="comes to life"
        subtitle="No shortcuts — every performance passes through the same four rituals."
      />
      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      >
        {craft.map((c) => (
          <motion.li
            key={c.step}
            variants={staggerChild}
            className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_20px_60px_-30px_rgba(35,48,164,0.25)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-royal-200 hover:shadow-[0_30px_80px_-30px_rgba(79,107,255,0.45)]"
          >
            <span className="font-display bg-gradient-to-br from-royal-500/25 to-violet-glow/25 bg-clip-text text-6xl italic leading-none text-transparent">
              {c.step}
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-charcoal">{c.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-charcoal/60">{c.text}</p>
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-royal-500 via-indigo-glow to-violet-glow transition-transform duration-500 group-hover:scale-x-100"
            />
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}

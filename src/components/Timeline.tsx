import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { timeline } from "../lib/site";
import { fadeUp, viewportOnce } from "../lib/motion";

/**
 * Elegant vertical timeline with a scroll-drawn gradient line.
 */
export default function Timeline() {
  return (
    <section id="journey" className="mx-auto max-w-4xl px-6 py-28 sm:py-36 lg:px-10">
      <SectionTitle
        eyebrow="The Journey"
        title="From first post to"
        accent="first record"
        subtitle="Every milestone earned one listener at a time."
      />

      <div className="relative pl-10 sm:pl-14">
        {/* Track line */}
        <div aria-hidden className="absolute left-[9px] top-2 bottom-2 w-px bg-royal-200/70 sm:left-[13px]" />
        {/* Drawn line on scroll */}
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top" }}
          className="absolute left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-royal-500 via-indigo-glow to-violet-glow sm:left-[13px]"
        />

        <ol className="space-y-12">
          {timeline.map((m, i) => (
            <motion.li
              key={m.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="group relative"
            >
              {/* Node */}
              <span className="absolute -left-10 top-1.5 grid h-[19px] w-[19px] place-items-center sm:-left-14">
                <span className="absolute h-full w-full rounded-full bg-royal-200/60 transition-transform duration-500 group-hover:scale-150 group-hover:bg-royal-300/50" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-royal-500 to-violet-glow shadow-[0_0_12px_rgba(79,107,255,0.7)]" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-royal-500">{m.year}</span>
              <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-charcoal transition-colors duration-300 group-hover:text-royal-600">
                {m.title}
              </h3>
              <p className="mt-1.5 max-w-lg leading-relaxed text-charcoal/55">{m.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

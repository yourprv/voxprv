import { motion } from "framer-motion";
import { Disc3, Clapperboard, Languages } from "lucide-react";
import { features, languages } from "../lib/site";
import { staggerContainer, staggerChild, viewportOnce } from "../lib/motion";

const icons = [Disc3, Clapperboard, Languages];

/**
 * The three signature offerings — Long-Form Covers, AMVs,
 * Multilingual Performances.
 */
export default function FeatureCards() {
  return (
    <section id="features" aria-label="What VoxPRV offers" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 md:grid-cols-3"
      >
        {features.map((f, i) => {
          const Icon = icons[i];
          return (
            <motion.article
              key={f.title}
              variants={staggerChild}
              className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-9 shadow-[0_20px_60px_-30px_rgba(35,48,164,0.25)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_80px_-30px_rgba(79,107,255,0.45)]"
            >
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-royal-300/25 to-violet-glow/15 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-royal-500/12 to-violet-glow/18 text-royal-600">
                <Icon className="h-5.5 w-5.5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-charcoal">{f.title}</h3>
              <p className="mt-2.5 leading-relaxed text-charcoal/60">{f.text}</p>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Multilingual strip */}
      <motion.div
        variants={staggerChild}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-14 rounded-[2rem] border border-white/70 bg-gradient-to-r from-royal-50 via-white to-violet-glow/10 p-8 backdrop-blur-xl sm:p-10"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {languages.map((lang) => (
            <span
              key={lang}
              className="text-sm font-medium tracking-wide text-charcoal/55 transition-colors duration-300 hover:text-royal-600"
            >
              {lang}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-royal-500">
          One voice • {languages.length} languages
        </p>
      </motion.div>
    </section>
  );
}

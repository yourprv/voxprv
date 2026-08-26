import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { featuredPerformances } from "../lib/site";
import { staggerContainer, staggerChild, viewportOnce } from "../lib/motion";

/**
 * Featured Performances — live embeds on the homepage.
 * Two YouTube players + one TikTok player (lazy-loaded).
 */
export default function FeaturedPerformances() {
  return (
    <section id="performances" aria-label="Featured performances" className="mx-auto max-w-7xl px-6 py-28 sm:py-32 lg:px-10">
      <SectionTitle
        eyebrow="Featured Performances"
        title="Watch. Listen."
        accent="Feel something."
        subtitle="Three performances that define the VoxPRV sound — straight from the source."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-start"
      >
        {featuredPerformances.map((p) => (
          <motion.article
            key={p.title}
            variants={staggerChild}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/70 p-3 shadow-[0_24px_70px_-30px_rgba(35,48,164,0.35)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_36px_90px_-30px_rgba(79,107,255,0.5)]"
          >
            <div className="relative overflow-hidden rounded-[1.25rem] bg-charcoal/[0.04]">
              {p.platform === "YouTube" ? (
                <div className="aspect-video">
                  <iframe
                    src={p.embedUrl}
                    title={`${p.title} — ${p.artist} cover by VoxPRV`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
              ) : (
                /* TikTok vertical embed */
                <div className="mx-auto aspect-[329/580] w-full max-w-[340px]">
                  <iframe
                    src={p.embedUrl}
                    title={`${p.title} — ${p.artist} cover by VoxPRV on TikTok`}
                    loading="lazy"
                    allow="encrypted-media; picture-in-picture; fullscreen"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between gap-3 px-4 pb-3 pt-4">
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold tracking-tight text-charcoal">{p.title}</h3>
                <p className="truncate text-sm text-charcoal/50">
                  {p.artist} • {p.note}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-charcoal/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-charcoal/45">
                {p.platform}
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

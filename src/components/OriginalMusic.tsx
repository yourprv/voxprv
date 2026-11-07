import { motion } from "framer-motion";
import StreamingLinks from "./StreamingLinks";
import { originalSong, streamingLinks, site } from "../lib/site";
import { fadeUp, staggerContainer, staggerChild, viewportOnce } from "../lib/motion";

/**
 * Visual centerpiece — the original single.
 * Swap artwork in public/images/original-artwork.jpg and links in site.ts.
 */
export default function OriginalMusic() {
  return (
    <section id="music" className="relative overflow-hidden py-28 sm:py-36">
      {/* Cinematic backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-royal-50/70 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        {/* Artwork */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative mx-auto w-full max-w-lg">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[3rem] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(79,107,255,0.25),rgba(139,92,246,0.2),rgba(99,102,241,0.25),rgba(79,107,255,0.25))] blur-3xl"
            />
            <div className="relative aspect-square rotate-[-2deg] overflow-hidden rounded-[2rem] border border-white/80 shadow-[0_60px_120px_-40px_rgba(35,48,164,0.5)] transition-transform duration-700 hover:rotate-0">
              <img
                src={originalSong.artwork}
                alt={`${originalSong.title} — single artwork`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Copy + streaming buttons */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <motion.span variants={staggerChild} className="text-xs font-semibold uppercase tracking-[0.3em] text-royal-500">
            Original Release • Single
          </motion.span>
          <motion.h2 variants={staggerChild} className="font-display mt-5 max-w-xl text-5xl leading-[1.05] tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            Am I Really{" "}
            <span className="bg-gradient-to-r from-royal-500 via-indigo-glow to-violet-glow bg-clip-text italic text-transparent">
              Getting Old?
            </span>
          </motion.h2>
          <motion.p variants={staggerChild} className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal/60">
            {originalSong.description}
          </motion.p>
          <motion.div variants={staggerChild} className="mt-10">
            <StreamingLinks links={[
              { platform: "Spotify", href: streamingLinks.spotify, action: "Stream on", ariaLabel: `Listen to ${originalSong.title} on Spotify` },
              { platform: "Apple Music", href: streamingLinks.appleMusic, action: "Listen on", ariaLabel: `Listen to ${originalSong.title} on Apple Music` },
              { platform: "YouTube", href: streamingLinks.youtube, action: "Watch on", ariaLabel: `Watch ${originalSong.title} on YouTube` },
            ]} />
          </motion.div>
          <motion.p variants={staggerChild} className="mt-8 text-sm text-charcoal/40">
            © {new Date().getFullYear()} {site.artistName}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

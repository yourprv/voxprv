import { motion, useReducedMotion } from "framer-motion";
import { upcomingEP } from "../lib/site";
import { fadeUp, staggerChild, staggerContainer, viewportOnce } from "../lib/motion";
import StreamingLinks from "./StreamingLinks";

export default function UpcomingEP() {
  const reduce = useReducedMotion();

  return (
    <section id="ep" className="relative overflow-hidden bg-[#eee7d9] py-28 sm:py-36">

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:px-12 lg:grid-cols-2 lg:gap-24">
        {/* EP artwork — replace public/images/ep-artwork.jpg */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="group relative order-2 mx-auto max-w-sm lg:order-1">
          <motion.div
            animate={reduce ? {} : { scale: [1, 1.03, 1], rotate: [0, 1.2, 0] }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
            className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)]"
          >
            <img src={upcomingEP.artwork} alt={`${upcomingEP.title} — official EP artwork`} loading="lazy" className="h-full w-full object-cover" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-royal-800/40 via-transparent to-violet-glow/20 mix-blend-screen" />
          </motion.div>
          <span className="absolute inset-x-0 -bottom-5 text-center text-xs font-medium uppercase tracking-[0.35em] text-charcoal/55">
            Official EP artwork
          </span>
        </motion.div>

        <motion.div variants={staggerChild} initial="hidden" whileInView="visible" viewport={viewportOnce} className="order-1 text-left lg:order-2">
          <motion.span variants={staggerChild} className="text-xs font-semibold uppercase tracking-[0.35em] text-royal-600">
            Debut EP • Out Now
          </motion.span>
          <motion.h2 variants={staggerChild} className="font-display mt-5 text-6xl italic tracking-tight text-charcoal sm:text-7xl">
            {upcomingEP.title}
          </motion.h2>
          <motion.p variants={staggerChild} className="mt-3 text-lg font-medium tracking-wide text-charcoal/70">
            Stream the official album now.
          </motion.p>

          {/* Tracklist */}
          <motion.div variants={staggerChild} className="mt-12 max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-charcoal/55">Tracklist</p>
            <motion.ol
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-4 divide-y divide-[#ded5c6] overflow-hidden rounded-2xl border border-[#ded5c6] bg-[#f8f4ec]"
            >
              {upcomingEP.tracklist.map((t) => (
                <motion.li
                  key={t.no}
                  variants={staggerChild}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-[#eee5d6]"
                >
                  <span className="w-6 text-sm font-medium tabular-nums text-charcoal/40 transition-colors group-hover:text-charcoal/70">
                    {t.no}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-medium text-charcoal">{t.title}</span>
                  <span className="text-xs tabular-nums text-charcoal/50">{t.duration}</span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>

          <motion.div variants={staggerChild} className="mt-10">
            <StreamingLinks links={[
              { platform: "Spotify", href: upcomingEP.spotifyAlbumUrl, action: "Play on", ariaLabel: `Play ${upcomingEP.title} on Spotify` },
              { platform: "Apple Music", href: upcomingEP.appleMusicAlbumUrl, action: "Listen on", ariaLabel: `Listen to ${upcomingEP.title} on Apple Music` },
              { platform: "YouTube", href: upcomingEP.youtubeArtistUrl, action: "Watch on", ariaLabel: `${upcomingEP.title} on YouTube` },
            ]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

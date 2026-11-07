import { motion } from "framer-motion";
import { releasedSingles } from "../lib/site";
import { staggerChild, staggerContainer, viewportOnce } from "../lib/motion";
import StreamingLinks from "./StreamingLinks";

export default function ReleasedSingles() {
  return (
    <section aria-labelledby="released-singles-title" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <motion.p variants={staggerChild} className="text-xs font-semibold uppercase tracking-[0.3em] text-royal-500">
          New Releases • 2026
        </motion.p>
        <motion.h2
          id="released-singles-title"
          variants={staggerChild}
          className="font-display mt-4 text-4xl italic tracking-tight text-charcoal sm:text-5xl"
        >
          More Original Music
        </motion.h2>

        <motion.div variants={staggerContainer} className="mt-10 grid gap-6 md:grid-cols-2">
          {releasedSingles.map((single) => (
            <motion.article
              key={single.title}
              variants={staggerChild}
              className="grid gap-6 rounded-[1.75rem] border border-white/80 bg-white/70 p-5 shadow-[0_24px_70px_-35px_rgba(35,48,164,0.35)] backdrop-blur-xl sm:grid-cols-[minmax(0,200px)_1fr] sm:items-center sm:p-6"
            >
              <img
                src={single.artwork}
                alt={`${single.title} — single artwork`}
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-royal-500">
                  Original Single • {single.year}
                </p>
                <h3 className="font-display mt-3 text-3xl italic tracking-tight text-charcoal sm:text-4xl">
                  {single.title}
                </h3>
                <StreamingLinks className="mt-6" links={[
                  { platform: "Spotify", href: single.spotifyUrl, ariaLabel: `Listen to ${single.title} on Spotify` },
                  { platform: "Apple Music", href: single.appleMusicUrl, ariaLabel: `Listen to ${single.title} on Apple Music` },
                ]} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

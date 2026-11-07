import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { upcomingMusic } from "../lib/site";
import { staggerChild, staggerContainer, viewportOnce } from "../lib/motion";

export default function UpcomingMusic() {
  return (
    <section aria-label="Upcoming music" className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
      <SectionTitle
        eyebrow="Coming Soon"
        title="A few new songs"
        accent="on the way"
        subtitle="New stories, new sounds. These are the next releases in progress."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
      >
        {upcomingMusic.map((track, index) => (
          <motion.article
            key={track.title}
            variants={staggerChild}
            className="upcoming-track group overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/70 shadow-[0_20px_60px_-30px_rgba(35,48,164,0.2)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-square overflow-hidden bg-[#e3dbce]">
              <img
                src={track.artwork}
                alt={`${track.title} — upcoming release artwork`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-[#171923]/75 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.17em] text-white backdrop-blur-sm">
                Coming soon <span className="ml-1 text-white/55">· {String(index + 1).padStart(2, "0")}</span>
              </span>
            </div>
            <div className="px-5 py-4 sm:px-6 sm:py-5">
              <h3 className="font-display text-2xl leading-tight text-charcoal sm:text-[1.75rem]">{track.title}</h3>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.15em] text-charcoal/45">VoxPRV · Single</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

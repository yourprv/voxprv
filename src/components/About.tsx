import { motion } from "framer-motion";
import { Music4 } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { about, site } from "../lib/site";
import { fadeUp, staggerContainer, staggerChild, viewportOnce } from "../lib/motion";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:px-10">
      <div className="grid items-center gap-14 lg:grid-cols-[5fr_6fr] lg:gap-20">
        {/* Portrait — replace /images/portrait.jpg with a real photo */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} custom={0}>
          <div className="group relative mx-auto max-w-md">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-royal-400/30 via-indigo-glow/20 to-violet-glow/30 blur-2xl transition-opacity duration-700 group-hover:opacity-100"
            />
            <motion.div
              whileHover={{}}
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-royal-100 via-white to-violet-glow/10 shadow-[0_40px_90px_-40px_rgba(35,48,164,0.45)]"
            >
              <img
                src={about.portrait}
                alt={`${site.artistName} portrait`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-royal-900/25 via-transparent to-transparent" />
            </motion.div>
            <span className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/70 bg-white/85 px-5 py-2 text-xs font-semibold tracking-wide text-royal-600 shadow-lg backdrop-blur-xl">
              <Music4 className="h-3.5 w-3.5" /> {site.tagline}
            </span>
          </div>
        </motion.div>

        <div>
          <SectionTitle eyebrow="About" title="The voice behind" accent="the feeling" align="left" />
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            {about.bio.map((p, i) => (
              <motion.p key={i} variants={staggerChild} className="mb-6 text-lg leading-relaxed text-charcoal/70">
                {p}
              </motion.p>
            ))}
            <motion.p variants={staggerChild} className="font-display mt-8 text-xl italic text-charcoal/60">
              — {site.realName}, {site.artistName}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

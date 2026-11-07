import About from "../components/About";
import FeatureCards from "../components/FeatureCards";
import CraftSection from "../components/CraftSection";
import Stats from "../components/Stats";
import Socials from "../components/Socials";
import MagneticButton from "../components/ui/MagneticButton";
import SectionTitle from "../components/ui/SectionTitle";
import { motion } from "framer-motion";
import { fadeUp, staggerChild, viewportOnce } from "../lib/motion";
import { site } from "../lib/site";

/**
 * Full About page — story, features, craft, philosophy, stats, socials.
 */
export default function AboutPage() {
  return (
    <div className="pt-32">
      <About />
      <FeatureCards />
      <CraftSection />

      {/* Philosophy quote banner */}
      <section className="relative isolate overflow-hidden py-24">
        <div aria-hidden className="absolute inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-royal-900 via-[#1c2150] to-violet-glow/50 shadow-[0_80px_160px_-60px_rgba(35,48,164,0.8)]" />
        <div aria-hidden className="pointer-events-none absolute left-[12%] top-[25%] -z-10 h-64 w-64 rounded-full bg-royal-500/30 blur-[100px] animate-float-slow" />
        <div aria-hidden className="pointer-events-none absolute bottom-[15%] right-[10%] -z-10 h-64 w-64 rounded-full bg-violet-glow/30 blur-[100px] animate-float-med" />
        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl px-8 text-center"
        >
          <motion.p variants={staggerChild} className="font-display text-3xl italic leading-snug text-white sm:text-5xl">
            “A cover isn't about copying a song — it's about letting it hit someone all over again, like the first time.”
          </motion.p>
          <motion.footer variants={staggerChild} className="mt-6 text-sm font-medium uppercase tracking-[0.3em] text-white/55">
            — {site.artistName}
          </motion.footer>
        </motion.blockquote>
      </section>

      {/* Beyond music */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <SectionTitle eyebrow="Beyond Music" title="More than" accent="a voice" align="left" />
            <motion.div variants={staggerChild}>
              <p className="mb-6 text-lg leading-relaxed text-charcoal/70">
                Between recordings, {site.realName} edits every AMV himself, answers comments at 2 a.m., and treats his
                growing community as collaborators — many requested songs have become his most-loved covers.
              </p>
              <p className="text-lg leading-relaxed text-charcoal/70">
                The goal has never been virality. It's that one comment under a video:
                <em className="font-display not-italic text-royal-600"> “I felt this.”</em>
              </p>
            </motion.div>
          </motion.div>

          {/* Mini highlight cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {[
              { k: "Every video edited", v: "in-house", d: "From color grade to cut — no templates." },
              { k: "Community-driven", v: "setlists", d: "Followers vote on what gets covered next." },
              { k: "Native-language", v: "care", d: "Meaning checked before recording, always." },
              { k: "Three original", v: "singles released", d: `"Am I Really Getting Old?", "Wanna Do It", and "Destiny Of Us".` },
            ].map((card) => (
              <motion.div key={card.k} variants={staggerChild} className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_18px_50px_-24px_rgba(35,48,164,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal-500">{card.k}</p>
                <p className="mt-1.5 font-display text-2xl italic text-charcoal">{card.v}</p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/55">{card.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Stats />

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 text-center lg:px-10">
        <SectionTitle eyebrow="Say Hello" title="This story is still" accent="being written" />
        <div className="flex flex-wrap justify-center gap-4">
          <MagneticButton to="/request" ariaLabel="Request a song or collab">
            Request a Song / Collab
          </MagneticButton>
          <MagneticButton to="/music" variant="ghost" ariaLabel="Listen to the original music">
            Listen Now
          </MagneticButton>
        </div>
      </section>

      <Socials />
    </div>
  );
}

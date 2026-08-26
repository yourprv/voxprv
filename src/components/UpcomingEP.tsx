import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Bell, Play } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { upcomingEP } from "../lib/site";
import { fadeUp, staggerChild, staggerContainer, viewportOnce } from "../lib/motion";

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86_400_000),
      hours: Math.floor(diff / 3_600_000) % 24,
      minutes: Math.floor(diff / 60_000) % 60,
      seconds: Math.floor(diff / 1_000) % 60,
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return t;
}

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

export default function UpcomingEP() {
  const t = useCountdown(upcomingEP.releaseDate);
  const reduce = useReducedMotion();

  return (
    <section id="ep" className="relative overflow-hidden py-28 sm:py-36">
      {/* Cinematic dark stage */}
      <div aria-hidden className="absolute inset-0 -z-10 rounded-[3rem] mx-4 sm:mx-8 lg:mx-auto max-w-[calc(100vw-4rem)] bg-gradient-to-br from-royal-900 via-[#1c2150] to-violet-glow/40 shadow-[0_80px_160px_-60px_rgba(35,48,164,0.7)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        {!reduce && (
          <>
            <div className="absolute left-[15%] top-[30%] h-72 w-72 rounded-full bg-royal-500/30 blur-[100px] animate-float-slow" />
            <div className="absolute bottom-[20%] right-[12%] h-72 w-72 rounded-full bg-violet-glow/30 blur-[100px] animate-float-med" />
          </>
        )}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:px-12 lg:grid-cols-2 lg:gap-24">
        {/* EP artwork — replace public/images/ep-artwork.jpg */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="group relative order-2 mx-auto max-w-sm lg:order-1">
          <motion.div
            animate={reduce ? {} : { scale: [1, 1.03, 1], rotate: [0, 1.2, 0] }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
            className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.6)] blur-[3px] transition-all duration-700 group-hover:blur-0"
          >
            <img src={upcomingEP.artwork} alt={`${upcomingEP.title} — official EP artwork`} loading="lazy" className="h-full w-full object-cover" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-royal-800/40 via-transparent to-violet-glow/20 mix-blend-screen transition-opacity duration-700 group-hover:opacity-0" />
          </motion.div>
          <span className="absolute inset-x-0 -bottom-5 text-center text-xs font-medium uppercase tracking-[0.35em] text-white/50">
            Official artwork — revealed on hover
          </span>
        </motion.div>

        <motion.div variants={staggerChild} initial="hidden" whileInView="visible" viewport={viewportOnce} className="order-1 text-left lg:order-2">
          <motion.span variants={staggerChild} className="text-xs font-semibold uppercase tracking-[0.35em] text-royal-300">
            Debut EP
          </motion.span>
          <motion.h2 variants={staggerChild} className="font-display mt-5 text-6xl italic tracking-tight text-white sm:text-7xl">
            {upcomingEP.title}
          </motion.h2>
          <motion.p variants={staggerChild} className="mt-3 text-lg font-medium tracking-wide text-white/70">
            {upcomingEP.subtitle}
          </motion.p>

          {/* Countdown (dummy target date — edit releaseDate in src/lib/site.ts) */}
          <motion.div variants={staggerChild} className="mt-10 grid max-w-md grid-cols-4 gap-3" role="timer" aria-label="Countdown to EP release">
            {units.map((u) => (
              <div key={u.key} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-center backdrop-blur-md">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={t[u.key]}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-2xl font-bold tabular-nums text-white sm:text-3xl"
                  >
                    {String(t[u.key]).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
                <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">{u.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Tracklist */}
          <motion.div variants={staggerChild} className="mt-12 max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">Tracklist</p>
            <motion.ol
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-4 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md"
            >
              {upcomingEP.tracklist.map((t) => (
                <motion.li
                  key={t.no}
                  variants={staggerChild}
                  // TODO: link each track to its streaming page when released
                  className="group flex cursor-pointer items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-white/[0.07]"
                >
                  <span className="w-6 text-sm font-medium tabular-nums text-white/35 transition-colors group-hover:text-white/60">
                    {t.no}
                  </span>
                  {/* TODO: replace with real preview playback when available */}
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:opacity-100">
                    <Play className="ml-0.5 h-3 w-3 fill-white text-white" />
                  </span>
                  <span className="flex-1 truncate text-sm font-medium text-white/90">{t.title}</span>
                  <span className="text-xs tabular-nums text-white/40">{t.duration}</span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>

          <motion.div variants={staggerChild} className="mt-10">
            {/* TODO: hook this up to an email capture service (Formspree / Resend / Mailchimp) */}
            <MagneticButton to="/contact" variant="ghost" ariaLabel="Get notified when the EP drops">
              <Bell className="h-4 w-4" /> Notify Me
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

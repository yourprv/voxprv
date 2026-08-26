import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play, ArrowDown } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import BackgroundGlow from "./ui/BackgroundGlow";
import { site } from "../lib/site";
import { staggerContainer, staggerChild, springSoft, EASE_OUT } from "../lib/motion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  // Mouse parallax
  const handleMouse = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const { innerWidth, innerHeight } = window;
    ref.current.style.setProperty("--px", `${(e.clientX / innerWidth - 0.5).toFixed(3)}`);
    ref.current.style.setProperty("--py", `${(e.clientY / innerHeight - 0.5).toFixed(3)}`);
  };
  // Smooth-scroll further down this page
  const scrollDown = () =>
    document.getElementById("features")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouse}
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      <BackgroundGlow />

      {/* Parallax gradient light streaks */}
      {!reduce && (
        <>
          <motion.div
            aria-hidden
            style={{ x: useTransform(scrollYProgress, [0, 1], [0, -120]) }}
            className="pointer-events-none absolute left-[12%] top-[22%] h-72 w-72 rounded-full bg-gradient-to-br from-royal-300/50 to-transparent blur-3xl animate-float-med"
          />
          <motion.div
            aria-hidden
            style={{ x: useTransform(scrollYProgress, [0, 1], [0, 140]) }}
            className="pointer-events-none absolute right-[10%] bottom-[18%] h-96 w-96 rounded-full bg-gradient-to-tl from-violet-glow/30 to-transparent blur-3xl animate-float-slow"
          />
        </>
      )}

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex max-w-5xl flex-col items-center text-center"
      >
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col items-center">
          <motion.span
            variants={staggerChild}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-royal-200/80 bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide text-royal-600 backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-royal-500 to-violet-glow" />
            {site.roles.join(" • ")}
          </motion.span>

          <motion.h1
            variants={staggerChild}
            className="text-balance text-[clamp(4rem,14vw,11rem)] font-bold leading-none tracking-tighter text-charcoal"
          >
            Vox
            <span className="bg-gradient-to-r from-royal-500 via-indigo-glow to-violet-glow bg-clip-text text-transparent">
              PRV
            </span>
          </motion.h1>

          <motion.p variants={staggerChild} className="font-display mt-6 text-2xl italic text-charcoal/70 sm:text-3xl">
            “{site.tagline}”
          </motion.p>

          <motion.div
            variants={staggerChild}
            transition={springSoft}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          >
            <MagneticButton to="/music" ariaLabel="Listen now">
              <Play className="h-4 w-4 fill-current" /> Listen Now
            </MagneticButton>
            <MagneticButton onClick={scrollDown} variant="ghost" ariaLabel="Explore portfolio">
              Explore Portfolio
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1, ease: EASE_OUT }}
        className="absolute bottom-10 z-10"
      >
        <button onClick={scrollDown} aria-label="Scroll down" className="flex cursor-pointer flex-col items-center gap-2 text-charcoal/40 transition-colors hover:text-royal-600">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
          <motion.span animate={reduce ? {} : { y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}>
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </button>
      </motion.div>
    </section>
  );
}

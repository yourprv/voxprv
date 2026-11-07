import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { site, logo } from "../lib/site";

export default function Hero() {
  const reduce = useReducedMotion();
  const scrollDown = () => document.getElementById("features")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });

  return (
    <section id="top" className="hero-shell">
      <div className="hero-inner">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.2, 0.75, 0.25, 1] }}
          className="hero-copy"
        >
          <p className="hero-kicker"><span /> Independent artist · Nepal</p>
          <h1>Some songs<br />stay with <em>you.</em></h1>
          <p className="hero-description">
            I’m {site.realName} — the voice behind VoxPRV. I make covers and original music for the songs you can’t quite let go of.
          </p>
          <div className="hero-actions">
            <Link to="/music" className="hero-primary"><Play size={16} fill="currentColor" /> Hear the music</Link>
            <Link to="/about" className="hero-secondary">A little about me <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-note"><span className="hero-note-line" /> Covers in 14 languages <span className="hero-note-dot">·</span> Originals from the heart</div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.2, 0.75, 0.25, 1] }}
          className="hero-art"
        >
          <div className="hero-art-top"><span>VOXPRV</span><span>01 / 03</span></div>
          <div className="hero-artwork">
            <img src={logo} alt="VoxPRV music mark" fetchPriority="high" />
          </div>
          <div className="hero-art-caption">
            <div><span className="hero-caption-label">LATEST RELEASE</span><strong>Almost Us</strong><span>Debut EP · 2026</span></div>
            <Link to="/ep" aria-label="Explore Almost Us EP"><ArrowUpRight size={20} /></Link>
          </div>
        </motion.div>
      </div>
      <button onClick={scrollDown} className="hero-scroll" aria-label="Explore the site"><span>Scroll to explore</span><ArrowDown size={15} /></button>
    </section>
  );
}

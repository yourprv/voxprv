import { motion } from "framer-motion";
import { Music2, Youtube, AudioLines, Instagram } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { socials } from "../lib/site";
import { staggerContainer, staggerChild, viewportOnce } from "../lib/motion";

const platforms = [
  {
    key: "tiktok" as const,
    name: "TikTok",
    icon: Music2,
    gradient: "from-[#25F4EE]/20 via-white to-[#FE2C55]/20",
    hover: "group-hover:shadow-[0_24px_60px_-20px_rgba(37,244,238,0.45)]",
  },
  {
    key: "youtube" as const,
    name: "YouTube",
    icon: Youtube,
    gradient: "from-red-500/15 via-white to-rose-400/10",
    hover: "group-hover:shadow-[0_24px_60px_-20px_rgba(239,68,68,0.4)]",
  },
  {
    key: "spotify" as const,
    name: "Spotify",
    icon: AudioLines,
    gradient: "from-green-500/15 via-white to-emerald-400/10",
    hover: "group-hover:shadow-[0_24px_60px_-20px_rgba(34,197,94,0.4)]",
  },
  {
    key: "instagram" as const,
    name: "Instagram",
    icon: Instagram,
    gradient: "from-fuchsia-500/15 via-white to-amber-400/10",
    hover: "group-hover:shadow-[0_24px_60px_-20px_rgba(217,70,239,0.4)]",
  },
];

export default function Socials() {
  return (
    <section id="socials" className="mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:px-10">
      <SectionTitle
        eyebrow="Follow the Journey"
        title="One artist,"
        accent="everywhere you listen"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {platforms.map((p) => (
          <motion.a
            key={p.key}
            variants={staggerChild}
            href={socials[p.key].url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br ${p.gradient} p-8 shadow-[0_18px_50px_-24px_rgba(35,48,164,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${p.hover}`}
            aria-label={`${socials[p.key].username} on ${p.name}`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
              <p.icon className="h-5 w-5 text-charcoal" />
            </span>
            <h3 className="mt-6 text-lg font-semibold tracking-tight text-charcoal">{p.name}</h3>
            <p className="mt-0.5 text-sm text-charcoal/50">{socials[p.key].username}</p>
            <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.2em] text-royal-500 opacity-0 transition-all duration-500 group-hover:opacity-100">
              Follow →
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

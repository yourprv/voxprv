import { motion } from "framer-motion";
import { Music2, Youtube, Instagram, ArrowUpRight } from "lucide-react";
import { socials } from "../lib/site";
import { fadeUp, viewportOnce } from "../lib/motion";

const socialLinks = [
  { label: "TikTok", handle: socials.tiktok.username, url: socials.tiktok.url, icon: Music2 },
  { label: "YouTube", handle: socials.youtube.username, url: socials.youtube.url, icon: Youtube },
  { label: "Instagram", handle: socials.instagram.username, url: socials.instagram.url, icon: Instagram },
];

/**
 * "For more covers" card — directs visitors to social handles.
 */
export default function MoreCovers() {
  return (
    <motion.section
      aria-label="More covers on social media"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mx-auto max-w-4xl px-6 pb-28 lg:px-10"
    >
      <div className="rounded-[2rem] border border-white/70 bg-white/70 p-9 text-center shadow-[0_24px_70px_-30px_rgba(35,48,164,0.3)] backdrop-blur-xl sm:p-11">
        <h2 className="font-display text-2xl italic text-charcoal sm:text-3xl">For more covers…</h2>
        <p className="mt-2.5 text-sm leading-relaxed text-charcoal/55">
          …please visit the following social media handles — new performances drop there first:
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-white/80 p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-royal-300 hover:shadow-[0_16px_40px_-18px_rgba(79,107,255,0.5)]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-royal-500/12 to-violet-glow/15 text-royal-600 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <s.icon className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-charcoal">{s.label}</span>
                  <span className="block truncate text-xs text-charcoal/50">{s.handle}</span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-charcoal/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-royal-500" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

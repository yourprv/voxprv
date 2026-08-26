import { Music2, Youtube, AudioLines, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { site, socials, logo } from "../lib/site";

const icons = [
  { icon: Music2, ...socials.tiktok, label: "TikTok" },
  { icon: Youtube, ...socials.youtube, label: "YouTube" },
  { icon: AudioLines, ...socials.spotify, label: "Spotify" },
  { icon: Instagram, ...socials.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/5 px-6 py-14 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="Back to top">
          <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white shadow-lg transition-transform duration-300 group-hover:scale-105">
            {/* Replace /images/voxprv.jpeg (set in src/lib/site.ts → logo) to change the mark */}
            <img src={logo} alt={`${site.artistName} logo`} className="h-full w-full object-cover" />
          </span>
          <span className="text-xl font-bold tracking-tight text-charcoal">VoxPRV</span>
        </Link>

        <p className="font-display text-lg italic text-charcoal/50">{site.tagline}</p>

        <ul className="flex items-center gap-3">
          {icons.map(({ icon: Icon, url, label }) => (
            <li key={label}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.artistName} on ${label}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-charcoal/10 bg-white/70 text-charcoal/60 transition-all duration-300 hover:-translate-y-1 hover:border-royal-300 hover:text-royal-600 hover:shadow-[0_10px_24px_-8px_rgba(79,107,255,0.5)]"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs tracking-wide text-charcoal/35">
          © {new Date().getFullYear()} {site.artistName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

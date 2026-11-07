import { ArrowUpRight, Music2, Youtube } from "lucide-react";

export type StreamingPlatform = "Spotify" | "Apple Music" | "YouTube";
export type StreamingLinkItem = { platform: StreamingPlatform; href: string; action?: string; ariaLabel?: string };

function PlatformIcon({ platform }: { platform: StreamingPlatform }) {
  if (platform === "YouTube") return <Youtube aria-hidden="true" size={19} strokeWidth={2.2} />;
  if (platform === "Apple Music") return <Music2 aria-hidden="true" size={19} strokeWidth={2.2} />;

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-[19px] w-[19px]">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M6.3 9.1c3.8-1.1 7.9-.7 11.2 1.2M7.2 12c3.1-.8 6.4-.4 9.1 1M8.1 14.8c2.3-.5 4.7-.2 6.8.8" stroke="#f8f4ec" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function StreamingLinks({ links, className = "" }: { links: StreamingLinkItem[]; className?: string }) {
  return (
    <div className={`stream-links ${className}`}>
      {links.map(({ platform, href, action = "Listen on", ariaLabel }) => (
        <a
          key={platform}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel ?? `${action} ${platform}`}
          className={`stream-link stream-${platform === "Apple Music" ? "apple" : platform.toLowerCase()}`}
        >
          <span className="stream-icon"><PlatformIcon platform={platform} /></span>
          <span className="stream-copy"><span>{action}</span><strong>{platform}</strong></span>
          <ArrowUpRight className="stream-arrow" aria-hidden="true" size={15} />
        </a>
      ))}
    </div>
  );
}

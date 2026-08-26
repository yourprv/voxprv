/**
 * ─────────────────────────────────────────────────────────────
 *  VoxPRV — Site Configuration
 *  Edit THIS file only to update names, links, stats & artwork.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  artistName: "VoxPRV",
  realName: "Pravat",
  roles: ["Cover Artist", "Singer", "Storyteller"],
  tagline: "Covers That Hit Unexpectedly",
} as const;

export const about = {
  // Portrait photo shown beside "The voice behind the feeling"
  portrait: "/images/voxprv.jpeg",
  bio: [
    `${site.realName} is a Nepali cover artist known for emotionally driven performances that have reached millions of viewers across TikTok.`,
    "His music focuses on nostalgia, love, growing up, and heartfelt storytelling — spanning short-form covers, long-form performances, and anime music videos (AMVs).",
    "From English and Nepali to Japanese, Hindi and beyond, every cover is performed in its native language with care for its meaning.",
  ],
};

/** Languages VoxPRV has covered — edit freely */
export const languages = [
  "English",
  "Nepali",
  "Hindi",
  "Japanese",
  "Russian",
  "Korean",
  "Spanish",
  "Portuguese",
  "Bengali",
  "Punjabi",
];

/** What makes a VoxPRV performance special (icons mapped in FeatureCards) */
export const features = [
  {
    title: "Long-Form Covers",
    text: "Full-length, studio-polished performances on YouTube — not just 30-second hooks. Every verse, every bridge, every emotion.",
  },
  {
    title: "Anime Music Videos",
    text: "Opening & ending themes reimagined with cinematic AMV edits that blend storytelling and song into one experience.",
  },
  {
    title: "Multilingual Performances",
    text: `Covers in ${languages.length}+ languages — English, Nepali, Hindi, Japanese, Russian and more — sung with native authenticity.`,
  },
] as const;

export const stats = [
  { value: 4800, suffix: "+", label: "Followers" },
  { value: 550000, suffix: "+", label: "Likes" },
  { value: null, label: "Total Views", display: "Millions" },
  { value: 1, label: "Original Song" },
];

/**
 * Embedded performances shown on the homepage.
 * TODO: swap embedUrls / add more as new videos go live.
 */
export const featuredPerformances = [
  {
    title: "Chinta",
    artist: "Tribal Rain",
    note: "Cover",
    platform: "YouTube" as const,
    embedUrl: "https://www.youtube.com/embed/u8UOFlYCF4I?si=lRyJAY03Bpra4DuQ",
  },
  {
    title: "Magic",
    artist: "John Micheal Howell",
    note: "Cover",
    platform: "YouTube" as const,
    embedUrl: "https://www.youtube.com/embed/a-3kHOri31g?si=4gTe1SxVd8eA8ff_",
  },
  {
    title: "Mulaquatein",
    artist: "Rage The Rapper",
    note: "AMV",
    platform: "YouTube" as const,
    embedUrl: "https://www.youtube.com/embed/FQj3CGJr6GU?si=0hxMPFW73V-ombda",
  },
];

/** How a VoxPRV cover comes to life (icons mapped in CraftSection) */
export const craft = [
  {
    step: "01",
    title: "Discover",
    text: "Every cover starts with a song that means something — found in Nepali tea shops, Japanese anime endings, late-night playlists, or comments from followers.",
  },
  {
    step: "02",
    title: "Adapt",
    text: "Lyrics are studied in their native language so every syllable is sung with its true meaning and emotion, never just phonetically.",
  },
  {
    step: "03",
    title: "Perform",
    text: "Recorded raw and emotional first — short-form for TikTok, full-length takes with layered harmonies for YouTube.",
  },
  {
    step: "04",
    title: "Craft the Visual",
    text: "For AMVs, scenes are cut frame-by-frame to breathe with the music — turning a song into a story you can watch.",
  },
];

export const originalSong = {
  title: "Am I Really Getting Old?",
  description:
    "The first original release from VoxPRV — a quiet, aching reflection on time slipping by, wrapped in warm production and an unforgettable vocal performance.",
  // Real single artwork (public/images/original-artwork.jpg)
  artwork: "/images/original-artwork.jpg",
};

export const upcomingEP = {
  title: "Almost Us",
  subtitle: "Coming Soon",
  // Real EP artwork (public/images/ep-artwork.jpg)
  artwork: "/images/ep-artwork.jpg",
  // Release countdown target — currently ~126 days out
  releaseDate: new Date("2026-12-30T00:00:00"),
  /** Debut EP tracklist — durations are placeholders, edit freely */
  tracklist: [
    { no: "01", title: "A Dream That Looked Like You", duration: "5:05" },
    { no: "02", title: "Desperately Yours", duration: "2:50" },
    { no: "03", title: "Under The Same Moon", duration: "3:21" },
    { no: "04", title: "Almost Us", duration: "1:55" },
  ],
};

export const timeline = [
  { year: "2025 April", title: "Started Posting Covers", text: "First covers uploaded to TikTok — a voice begins to find its audience." },
  { year: "2025 April", title: "First Long-Form & AMV Releases", text: "Full-length covers and anime music video edits arrive on YouTube." },
  { year: "2025 December", title: "First Viral TikTok", text: "A raw late-night performance catches fire overnight." },
  { year: "2026 February", title: "100K Total Likes", text: "The community grows past one hundred thousand hearts" },
  { year: "2026 March", title: "14 Languages Milestone", text: "Covers now span English, Nepali, Hindi, Japanese, Russian and beyond." },
  { year: "2026 July", title: "Original Release", text: `"${originalSong.title}" marks the first step beyond covers.` },
  { year: "2026 August", title: "Almost Us Announced", text: "The debut EP is on the horizon." },
];

// ── Branding ─────────────────────────────────────────────────
export const logo = "/images/voxprv.jpeg"; // Replace with a transparent PNG/SVG for best results

export const socials = {
  tiktok: { username: "@voxprv", url: "https://tiktok.com/@voxprv" },
  youtube: { username: "@voxprv", url: "https://youtube.com/@voxprv" },
  spotify: { username: "VoxPRV", url: "https://open.spotify.com/artist/1JXiq22wGJIWf7JRKXTZR5" },
  instagram: { username: "@itsvoxprv", url: "https://instagram.com/itsvoxprv" },
};

// ── Original song streaming links ────────────────────────────
export const streamingLinks = {
  spotify: "https://open.spotify.com/track/6blr5HpKyZVcBJGzuFj5ys",
  appleMusic: "https://music.apple.com/us/album/am-i-really-getting-old-single/6802412916",
  appleMusicArtistId: "6802412917", // Apple Music artist ID
  // TODO: replace with the real video URL
  youtube: "https://youtube.com/@voxprv",
};

// TODO: Wire the contact form to Formspree or Resend.
export const contactFormEndpoint = "";

// TODO: Wire the request form (song requests / collabs) to Formspree or Resend.
export const requestFormEndpoint = "";

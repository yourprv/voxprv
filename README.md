# VoxPRV — Official Portfolio

A premium, cinematic portfolio website for cover artist **VoxPRV** (*Covers That Hit Unexpectedly*).

Built with **React 19 · Vite · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons**.
Licensed under the [MIT License](LICENSE) — free to use, modify and redistribute.
© 2026 **yourprv**

## Quick Start

```bash
npm install
npm run dev      # local development (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

> Requires Node.js 18+.

## Pages

| Route      | Page                                                                 |
| ---------- | -------------------------------------------------------------------- |
| `/`        | Home — hero, features, stats, **featured performances (live embeds)**, more-covers links, original music, EP (countdown + tracklist), journey timeline, request CTA, socials |
| `/about`   | About — story, signature features (long-form covers, AMVs, multilingual), the craft, philosophy, stats |
| `/music`   | "Am I Really Getting Old?" original single with streaming buttons     |
| `/ep`      | "Almost Us" EP — artwork reveal, live countdown, 4-song tracklist     |
| `/journey` | Animated milestone timeline                                           |
| `/contact` | Contact form                                                          |
| `/request` | Special Requests — song cover requests & collab requests              |

Unknown routes fall back to the homepage.

## Editing Content — One File Only

Everything editable lives in **`src/lib/site.ts`**:

| What                                   | Where in `site.ts`        |
| -------------------------------------- | ------------------------- |
| Artist name, roles, tagline            | `site`                    |
| Logo image path                        | `logo`                    |
| Bio text + portrait path               | `about`                   |
| Languages covered                      | `languages[]`             |
| Signature features                     | `features[]`              |
| The Craft steps                        | `craft[]`                 |
| Stats                                  | `stats`                   |
| Homepage embedded performances         | `featuredPerformances[]`  |
| Original song info + streaming links   | `originalSong`, `streamingLinks` |
| EP title, release date, tracklist      | `upcomingEP`              |
| Timeline milestones                    | `timeline[]`              |
| Social links                           | `socials`                 |
| Contact endpoint                       | `contactFormEndpoint`     |
| Request-form endpoint                  | `requestFormEndpoint`     |

## Replacing Images

All images live in `public/images/`:

```
public/images/
├── voxprv.jpeg               → brand mark (header logo, favicon, portrait)
├── original-artwork.jpg      → "Am I Really Getting Old?" single artwork
├── ep-artwork.jpg            → "Almost Us" EP artwork
└── covers/cover1.svg …       → spare placeholder thumbnails
```

Paths are referenced in `src/lib/site.ts` (`logo`, `about.portrait`,
`originalSong.artwork`, `upcomingEP.artwork`) and `index.html` (favicon).

## TODO Before Launch

- [ ] Set the real YouTube video URL in `streamingLinks.youtube`
- [ ] Set the real EP release date in `upcomingEP.releaseDate`
- [ ] Wire the contact form to Formspree/Resend (`contactFormEndpoint`,
      see the TODO block in `src/components/Contact.tsx`)
- [ ] Wire the request form to Formspree/Resend (`requestFormEndpoint`,
      see the TODO block in `src/components/RequestForm.tsx`)
- [ ] Optionally connect the "Notify Me" button to an email capture service
- [ ] Add per-track streaming URLs to `upcomingEP.tracklist` when released

## Structure

```
src/
├── lib/
│   ├── site.ts        # ← all content, links, languages & embeds
│   └── motion.ts      # shared spring physics & animation variants
├── components/
│   ├── ui/            # MagneticButton, GlassCard, AnimatedCounter,
│   │                  # SectionTitle, BackgroundGlow, NoiseTexture,
│   │                  # ErrorBoundary
│   ├── Navbar, Footer, Hero, About, Stats, OriginalMusic,
│   │   UpcomingEP, Timeline, Socials, Contact
│   ├── FeaturedPerformances.tsx   # YouTube embeds on the homepage
│   ├── FeatureCards.tsx           # Long-Form • AMVs • Multilingual
│   ├── CraftSection.tsx           # 4-step creative process
│   └── MoreCovers.tsx             # social-handles card
├── pages/             # HomePage, AboutPage, MusicPage, EPPage,
│                      # JourneyPage, ContactPage, RequestPage
└── App.tsx / main.tsx # routing (react-router) + error boundary
```

## Deployment Notes

- Client-side routing uses `BrowserRouter`. Vercel, Netlify and Cloudflare
  Pages work out of the box. For plain static hosting, rewrite all paths to
  `index.html`, or swap `BrowserRouter` → `HashRouter` in `src/App.tsx`.
- `base: "./"` is set in `vite.config.ts`, so the build works from any
  host or subfolder.

## Quality

- Animations use spring physics and respect `prefers-reduced-motion`
- Images are lazy-loaded; sections animate only while visible
- Fully responsive: mobile drawer nav, tablet grids, ultrawide max-width
- Semantic HTML, keyboard focus styles, accessible contrast
# voxprv

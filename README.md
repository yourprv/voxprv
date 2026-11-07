# VoxPRV Artist Website

The official portfolio website for **VoxPRV**, a Nepali singer and cover artist. It brings together performances, original releases, upcoming music, artist information, and contact links in a responsive single-page app.

## Built with

- React 19 and TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion
- React Router
- Lucide React icons

## Run locally

Requirements: Node.js 18 or newer and npm.

```bash
npm ci
npm run dev
```

Vite prints the local development URL after startup. Other available commands:

```bash
npm run build    # type-check and create the production build in dist/
npm run preview  # serve the production build locally
```

## Site pages

| Path | Content |
| --- | --- |
| `/` | Artist introduction, featured performances, music, upcoming releases, journey, and social links |
| `/about` | Artist story, creative process, milestones, and social links |
| `/music` | Original single, released singles, and upcoming music |
| `/ep` | *Almost Us* EP artwork, tracklist, and streaming destinations |
| `/journey` | Artist milestones |
| `/contact` | Contact form |
| `/request` | Song request and collaboration form |

The app uses React Router's `BrowserRouter`. Static hosts must send unknown paths to `index.html` so direct visits to these routes work. The Vite base path is set to `./` in `vite.config.ts` for relative asset URLs.

## Update site content

Most site copy, artwork paths, statistics, links, and release information live in [`src/lib/site.ts`](src/lib/site.ts):

- `site`, `about`, `languages`, `features`, and `craft` — artist profile and copy
- `stats` — follower, like, view, and release figures
- `featuredPerformances` — embedded YouTube videos
- `originalSong`, `streamingLinks`, `releasedSingles`, `upcomingMusic`, and `upcomingEP` — music and artwork
- `timeline` — journey milestones
- `socials` — social profile links

The page components render this data. For example, upcoming single cards are in `src/components/UpcomingMusic.tsx`, and reusable platform links are in `src/components/StreamingLinks.tsx`.

### Artwork and media

Put public images in `public/images/` and reference them from `src/lib/site.ts` with paths beginning `/images/`. Current release artwork includes:

- `original-artwork.jpg` — “Am I Really Getting Old?”
- `Wanna Do It.jpg` and `Destiny Of Us.jpg` — released singles
- `ep-artwork.jpg` — *Almost Us*
- `Pretty_Nerdy.png`, `Sensitive.jpg`, `Autism.jpg`, `Love.jpg`, `OneMore.jpg`, and `Stuck_On_Replay.jpg` — upcoming music

The brand image is `voxprv.jpeg`; the favicon is configured in `index.html`.

## Forms and external services

The contact and request forms currently show a client-side confirmation only; they do not send or store submissions. Connect a form service or backend in `src/components/Contact.tsx` and `src/components/RequestForm.tsx` before using them to receive messages. Video embeds, streaming buttons, and social links open third-party services.

## License

The source code is provided under the MIT License; see [`LICENSE`](LICENSE). Artwork, logos, photographs, music, video, and other media are excluded from that license and remain with their respective rights holders.

import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Socials from "../components/Socials";
import FeatureCards from "../components/FeatureCards";
import FeaturedPerformances from "../components/FeaturedPerformances";
import MoreCovers from "../components/MoreCovers";
import OriginalMusic from "../components/OriginalMusic";
import UpcomingEP from "../components/UpcomingEP";
import ReleasedSingles from "../components/ReleasedSingles";
import UpcomingMusic from "../components/UpcomingMusic";
import Timeline from "../components/Timeline";
import MagneticButton from "../components/ui/MagneticButton";

/**
 * Full-length homepage:
 * hero → features → stats → featured performances (live embeds)
 * → more-covers social links → original music → EP (Spotify link + tracklist)
 * → journey timeline → request CTA → socials.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <Stats />
      <FeaturedPerformances />
      <MoreCovers />

      <OriginalMusic />
      <UpcomingEP />
      <ReleasedSingles />
      <UpcomingMusic />
      <Timeline />

      {/* Request CTA banner */}
      <section className="relative isolate overflow-hidden py-20">
        <div aria-hidden className="absolute inset-4 -z-10 rounded-[3rem] bg-gradient-to-r from-royal-600 via-indigo-glow to-violet-glow shadow-[0_60px_120px_-50px_rgba(53,71,240,0.7)] sm:inset-x-8" />
        <div className="mx-auto max-w-3xl px-8 py-10 text-center text-white">
          <h2 className="font-display text-4xl italic leading-tight sm:text-5xl">Want to hear your favorite song?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75 leading-relaxed">
            Request a cover in any language — or pitch a collaboration. Every request gets listened to.
          </p>
          <div className="mt-9 flex justify-center">
            <MagneticButton
              to="/request"
              variant="ghost"
              className="!border-white/40 !bg-white/10 !text-white backdrop-blur-md hover:!border-white hover:!text-white"
              ariaLabel="Make a special request"
            >
              Make a Special Request
            </MagneticButton>
          </div>
        </div>
      </section>

      <Socials />
    </>
  );
}

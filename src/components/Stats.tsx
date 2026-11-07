import SectionTitle from "./ui/SectionTitle";
import GlassCard, { GlassGrid } from "./ui/GlassCard";
import AnimatedCounter from "./ui/AnimatedCounter";
import { stats } from "../lib/site";
import { Users, Heart, Eye, Disc3 } from "lucide-react";

const icons = [Users, Heart, Eye, Disc3];

/**
 * Animated stats — four premium glass cards with count-up numbers.
 */
export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-28 sm:pb-36 lg:px-10" aria-label="Achievements">
      <SectionTitle
        eyebrow="Milestones"
        title="Numbers that tell"
        accent="a story"
        subtitle="A growing community of listeners who feel every note."
      />
      <GlassGrid>
        {stats.map((s, i) => {
          const Icon = icons[i];
          return (
            <GlassCard key={s.label} tilt className="flex min-h-52 flex-col items-start justify-between p-8">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-royal-500/10 to-violet-glow/15 text-royal-600">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className={s.display
                  ? "stat-long-value font-bold text-charcoal"
                  : "text-4xl font-bold tracking-tight text-charcoal sm:text-5xl"}>
                  {s.display !== undefined ? (
                    s.display
                  ) : (
                    <AnimatedCounter value={s.value ?? 0} suffix={s.suffix} />
                  )}
                </p>
                <p className="mt-1.5 text-sm font-medium uppercase tracking-[0.18em] text-charcoal/50">{s.label}</p>
              </div>
            </GlassCard>
          );
        })}
      </GlassGrid>
    </section>
  );
}

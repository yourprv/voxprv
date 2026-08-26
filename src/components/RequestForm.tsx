import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic2, Handshake } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { site } from "../lib/site";
import { fadeUp, viewportOnce } from "../lib/motion";

type RequestType = "cover" | "collab";

/**
 * Special Request form — song cover requests & collab requests.
 *
 * TODO — Backend integration:
 * 1. Create a Formspree form (or Resend endpoint) for requests
 * 2. Set `requestFormEndpoint` in src/lib/site.ts
 * 3. Replace the fake submit below with a fetch POST of the JSON payload
 */
export default function RequestForm() {
  const [type, setType] = useState<RequestType>("cover");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send to requestFormEndpoint when backend is wired up
    setSent(true);
  }

  const field =
    "w-full rounded-2xl border border-charcoal/10 bg-white/80 px-5 py-4 text-sm text-charcoal placeholder:text-charcoal/35 backdrop-blur-md transition-all duration-300 focus:border-royal-400 focus:outline-none focus:ring-4 focus:ring-royal-500/10";
  const label = "mb-2 block text-xs font-semibold uppercase tracking-widest text-charcoal/50";

  const types: { key: RequestType; label: string; icon: typeof Mic2; hint: string }[] = [
    { key: "cover", label: "Song Request", icon: Mic2, hint: "Request any song for VoxPRV to cover" },
    { key: "collab", label: "Collab Request", icon: Handshake, hint: "Pitch a collaboration or duet" },
  ];

  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_90px_-40px_rgba(35,48,164,0.35)] backdrop-blur-xl sm:p-12"
    >
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-violet-glow/25 to-royal-300/20 blur-3xl" />

      <div className="relative grid gap-6">
        {/* Request type selector */}
        <fieldset>
          <legend className={label}>Request Type</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            {types.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setType(t.key)}
                aria-pressed={type === t.key}
                className={`flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                  type === t.key
                    ? "border-royal-400 bg-gradient-to-br from-royal-50 to-white shadow-[0_14px_36px_-18px_rgba(79,107,255,0.55)]"
                    : "border-charcoal/10 bg-white/70 hover:border-royal-300"
                }`}
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
                    type === t.key ? "bg-gradient-to-br from-royal-500 to-violet-glow text-white" : "bg-charcoal/5 text-charcoal/50"
                  }`}
                >
                  <t.icon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-charcoal">{t.label}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-charcoal/50">{t.hint}</span>
                </span>
              </button>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className={label}>Name</span>
            <input required name="name" type="text" placeholder="Your name" autoComplete="name" className={field} />
          </label>
          <label className="block">
            <span className={label}>Email</span>
            <input required name="email" type="email" placeholder="you@email.com" autoComplete="email" className={field} />
          </label>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={type}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid gap-5"
          >
            {type === "cover" ? (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className={label}>Song Title</span>
                    <input required name="song" type="text" placeholder="Song you want covered" className={field} />
                  </label>
                  <label className="block">
                    <span className={label}>Original Artist</span>
                    <input name="artist" type="text" placeholder="Who sings it?" className={field} />
                  </label>
                </div>
                <p className="-mt-2 text-xs text-charcoal/40">
                  Requests in any language are welcome — English, Nepali, Hindi, Japanese and beyond.
                </p>
              </>
            ) : (
              <label className="block">
                <span className={label}>Collab Idea</span>
                <input required name="idea" type="text" placeholder="Duet, AMV edit, original track…" className={field} />
              </label>
            )}
          </motion.div>
        </AnimatePresence>

        <label className="block">
          <span className={label}>Message (optional)</span>
          <textarea name="message" rows={4} placeholder={`Anything else ${site.artistName} should know?`} className={`${field} resize-none`} />
        </label>

        <div className="flex items-center justify-between gap-4 pt-1">
          <MagneticButton ariaLabel="Send request">
            <Mic2 className="h-4 w-4" /> Send Request
          </MagneticButton>
          {sent && (
            <motion.p initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} role="status" className="text-sm font-medium text-emerald-600">
              Request received — thank you! ✦
            </motion.p>
          )}
        </div>
      </div>
    </motion.form>
  );
}

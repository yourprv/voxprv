import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import MagneticButton from "./ui/MagneticButton";
import { site } from "../lib/site";
import { fadeUp, viewportOnce } from "../lib/motion";

/**
 * Premium minimal contact form.
 *
 * TODO — Backend integration:
 * 1. Create a form at https://formspree.io (or a Resend edge function)
 * 2. Set `contactFormEndpoint` in src/lib/site.ts
 * 3. Replace the fake submit below with:
 *      const res = await fetch(contactFormEndpoint, {
 *        method: "POST",
 *        headers: { "Content-Type": "application/json", Accept: "application/json" },
 *        body: JSON.stringify({ name, email, message }),
 *      });
 */
export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: send to contactFormEndpoint when backend is wired up
    setSent(true);
  }

  const field =
    "w-full rounded-2xl border border-charcoal/10 bg-white/80 px-5 py-4 text-sm text-charcoal placeholder:text-charcoal/35 backdrop-blur-md transition-all duration-300 focus:border-royal-400 focus:outline-none focus:ring-4 focus:ring-royal-500/10";

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-28 sm:py-36 lg:px-10">
      <SectionTitle
        eyebrow="Get in Touch"
        title="Let's create something"
        accent="unforgettable"
        subtitle="Bookings, collaborations, or just to say hi — the inbox is open."
      />

      <motion.form
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        onSubmit={handleSubmit}
        className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_30px_90px_-40px_rgba(35,48,164,0.35)] backdrop-blur-xl sm:p-12"
      >
        <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-royal-300/30 to-violet-glow/20 blur-3xl" />

        <div className="relative grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-charcoal/50">Name</span>
              <input required name="name" type="text" placeholder="Your name" autoComplete="name" className={field} />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-charcoal/50">Email</span>
              <input required name="email" type="email" placeholder="you@email.com" autoComplete="email" className={field} />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-charcoal/50">Message</span>
            <textarea required name="message" rows={5} placeholder={`Tell ${site.artistName} what's on your mind…`} className={`${field} resize-none`} />
          </label>

          <div className="flex items-center justify-between gap-4 pt-2">
            <MagneticButton ariaLabel="Send message">
              <Send className="h-4 w-4" /> Send Message
            </MagneticButton>
            {sent && (
              <motion.p
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                role="status"
                className="text-sm font-medium text-emerald-600"
              >
                Thank you — message received. ✦
              </motion.p>
            )}
          </div>
        </div>
      </motion.form>
    </section>
  );
}

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { site, logo } from "../lib/site";
import { springSnappy } from "../lib/motion";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Music", to: "/music" },
  { label: "EP", to: "/ep" },
  { label: "Contact", to: "/contact" },
];

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label={`${site.artistName} — home`}>
      <span className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white shadow-[0_6px_20px_-6px_rgba(79,107,255,0.7)] transition-transform duration-300 group-hover:scale-105">
        {/* Replace /images/voxprv.jpeg (set in src/lib/site.ts → logo) to change the mark */}
        <img src={logo} alt={`${site.artistName} logo`} className="h-full w-full object-cover" />
      </span>
      <span className="text-lg font-bold tracking-tight text-charcoal">
        Vox<span className="bg-gradient-to-r from-royal-500 to-violet-glow bg-clip-text text-transparent">PRV</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/60 bg-warm-white/75 shadow-[0_8px_30px_-18px_rgba(35,48,164,0.35)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:px-10">
          <Logo />
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-royal-500 after:to-violet-glow after:transition-all after:duration-300 hover:after:w-full ${
                      isActive ? "text-royal-600 after:w-full" : "text-charcoal/70 hover:text-royal-600"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            {/* Special Request CTA */}
            <Link
              to="/request"
              className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-royal-600 via-indigo-glow to-violet-glow px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-[0_10px_30px_-10px_rgba(79,107,255,0.7)] transition-all duration-300 hover:shadow-[0_14px_40px_-8px_rgba(99,102,241,0.8)] sm:inline-flex"
            >
              <Sparkles className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-12" />
              Request a Song
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 bg-white/70 backdrop-blur lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-warm-white/90 backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex h-[4.5rem] items-center justify-between px-6">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 bg-white/70"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-10 flex flex-col gap-2 px-8">
              {links.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...springSnappy, delay: 0.05 * i + 0.1 }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-3xl font-semibold tracking-tight transition-colors ${
                        isActive ? "text-royal-600" : "text-charcoal hover:text-royal-600"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ...springSnappy, delay: 0.45 }}
                className="pt-4"
              >
                <Link
                  to="/request"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-royal-600 via-indigo-glow to-violet-glow px-7 py-3.5 text-base font-semibold text-white shadow-lg"
                >
                  <Sparkles className="h-4 w-4" /> Request a Song / Collab
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

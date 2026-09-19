import { ArrowUp, Leaf, Mail, MapPin, Recycle } from "lucide-react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "./icons";

const EXPLORE = [
  { label: "The Event", href: "#event" },
  { label: "About", href: "#about" },
  { label: "Showcase", href: "#showcase" },
  { label: "Stories", href: "#stories" },
  { label: "Passes", href: "#passes" },
  { label: "Register", href: "#register" },
];

const SOCIALS = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/" },
  { icon: Mail, label: "Email", href: "mailto:ecoclub@kuk.ac.in" },
];

export default function Footer() {
  return (
    <footer className="tex-ink overflow-hidden text-cream">
      <div className="mx-auto max-w-7xl px-5 pt-20 lg:px-8 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.1fr_1.2fr]">
          {/* brand */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-cream/10 text-sage">
                <Leaf className="size-5" strokeWidth={2.25} />
              </span>
              <span className="leading-none">
                <span className="block font-display text-lg font-bold tracking-tight">Eco Club</span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.3em] text-cream/50">
                  UIET · Kurukshetra
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              The official environment club of UIET, Kurukshetra University. Making
              zero-waste the default campus culture since 2019 — one sapling, one
              workshop, one fresher at a time.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={`Eco Club UIET on ${s.label}`}
                  className="grid size-10 place-items-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:-translate-y-1 hover:border-cream hover:bg-cream hover:text-ink"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* explore */}
          <nav aria-label="Footer">
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-sage">Explore</p>
            <ul className="mt-5 space-y-3">
              {EXPLORE.map((l) => (
                <li key={l.href + l.label}>
                  <a
                    href={l.href}
                    className="text-sm font-semibold text-cream/60 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* the fest */}
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-sage">The Fest</p>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-cream/60">
              <li className="font-display text-base font-bold text-cream">Kaya Kalp '26</li>
              <li>Saturday, 3 October 2026</li>
              <li>10:00 AM – 5:00 PM</li>
              <li>Free entry · All batches welcome</li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.3em] text-sage">Reach Us</p>
            <address className="mt-5 space-y-4 text-sm font-semibold not-italic text-cream/60">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-cream/40" />
                UIET, Kurukshetra University,
                <br />
                Thanesar, Haryana 136119
              </p>
              <a
                href="mailto:ecoclub@kuk.ac.in"
                className="flex items-center gap-3 transition-colors hover:text-cream"
              >
                <Mail className="size-4 shrink-0 text-cream/40" />
                ecoclub@kuk.ac.in
              </a>
            </address>
          </div>
        </div>

        {/* giant wordmark */}
        <div aria-hidden className="pointer-events-none mt-16 select-none overflow-hidden lg:mt-20">
          <p className="bg-gradient-to-b from-cream/25 to-cream/[0.02] bg-clip-text text-center font-display text-[clamp(3.6rem,15.5vw,13.5rem)] font-bold uppercase leading-[0.8] tracking-tight text-transparent">
            Eco Club
          </p>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-xs font-semibold text-cream/40 sm:flex-row lg:px-8">
          <p>© 2026 Eco Club UIET · Zero waste since 2019</p>
          <p className="flex items-center gap-2">
            <Recycle className="size-3.5 text-sage" />
            Crafted from 100% recycled pixels
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-full border border-cream/15 py-2 pl-4 pr-2 transition-colors hover:border-cream/40 hover:text-cream"
          >
            Back to top
            <span className="grid size-6 place-items-center rounded-full bg-cream/10 transition-transform duration-300 group-hover:-translate-y-1">
              <ArrowUp className="size-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

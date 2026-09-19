import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarDays, Leaf, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "The Event", href: "#event" },
  { label: "About", href: "#about" },
  { label: "Showcase", href: "#showcase" },
  { label: "Stories", href: "#stories" },
  { label: "Passes", href: "#passes" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "relative transition-all duration-500",
            scrolled
              ? "border-b border-ink/10 bg-cream/85 shadow-[0_12px_40px_-18px_rgb(20_38_28/0.35)] backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          )}
        >
          <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 lg:px-8">
            {/* Brand */}
            <a href="#top" className="group flex items-center gap-3" aria-label="Eco Club UIET — home">
              <span className="grid size-10 place-items-center rounded-2xl bg-forest text-cream shadow-lg shadow-forest/30 transition-transform duration-500 group-hover:rotate-[15deg]">
                <Leaf className="size-5" strokeWidth={2.25} />
              </span>
              <span className="leading-none">
                <span className="block font-display text-lg font-bold tracking-tight">
                  Eco Club
                </span>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.3em] text-ink/55">
                  UIET · Kurukshetra
                </span>
              </span>
            </a>

            {/* Desktop links */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative rounded-full px-4 py-2 text-[13px] font-bold tracking-wide text-ink/70 transition-colors hover:text-ink"
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-clay transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#register"
                className="group hidden items-center gap-2 rounded-full bg-forest py-2.5 pl-5 pr-2.5 text-[13px] font-bold text-cream shadow-lg shadow-forest/30 transition-all duration-300 hover:bg-pine hover:shadow-xl hover:shadow-forest/40 sm:flex"
              >
                Register Free
                <span className="grid size-6 place-items-center rounded-full bg-cream/15 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-3.5" />
                </span>
              </a>
              <button
                onClick={() => setOpen(true)}
                className="grid size-10 place-items-center rounded-full border border-ink/15 bg-cream/60 text-ink backdrop-blur transition hover:bg-cream lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>

          {/* scroll progress */}
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-moss via-clay to-amber"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      {/* ——— Mobile menu ——— */}
      {open && (
        <div className="fixed inset-0 z-[90] flex flex-col bg-ink tex-ink text-cream lg:hidden">
          <div className="flex h-[4.25rem] items-center justify-between px-5">
            <span className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-2xl bg-cream/10">
                <Leaf className="size-5 text-sage" />
              </span>
              <span className="font-display text-lg font-bold">Eco Club UIET</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-full border border-cream/20 transition hover:bg-cream/10"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-8" aria-label="Mobile">
            {LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 border-b border-cream/10 py-4 animate-fade-swap"
                style={{ animationDelay: `${80 + i * 70}ms` }}
              >
                <span className="font-mono text-xs text-sage/70">0{i + 1}</span>
                <span className="font-display text-3xl font-semibold tracking-tight transition-colors group-hover:text-sage">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          {/* vertical scripture accent */}
          <p
            aria-hidden
            className="vertical-rl absolute right-5 top-1/3 font-script text-2xl text-cream/15"
          >
            माता भूमिः
          </p>

          <div className="px-8 pb-10">
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-sage/80">
              <CalendarDays className="size-4" /> Kaya Kalp · 3 October 2026
            </p>
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-cream py-4 text-sm font-bold text-ink transition active:scale-[0.98]"
            >
              Register for the Event <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

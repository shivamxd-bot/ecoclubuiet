import { useState } from "react";
import { Mail, Plus } from "lucide-react";
import { InstagramIcon } from "./icons";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const FAQS = [
  {
    q: "I'm a fresher with zero experience. Can I still join?",
    a: "That's literally who this is for. Every workshop starts from the basics — cutting, stitching, potting — with a senior beside you the whole way. Show up curious; leave with something you made.",
  },
  {
    q: "Is Kaya Kalp really free? What's the catch?",
    a: "Free entry, free workshops, free chai. No catch — the club runs on university support and bazaar proceeds. The only things priced at the fest are the handmade products, and every rupee from those plants next semester's saplings.",
  },
  {
    q: "Do I get a certificate? Will it actually matter?",
    a: "Yes — a university-recognised certificate of participation (printed, not just a PDF, for Warrior pass holders). Seniors have genuinely used them in internship and scholarship interviews.",
  },
  {
    q: "What should I bring on 3 October?",
    a: "Just yourself, a water bottle, and one item of 'scrap' from home — an old tee, a glass jar, anything. We'll show you what it can become. Wear something you don't mind a little paint on.",
  },
  {
    q: "How much time does the club take during the semester?",
    a: "Two to three hours a week, and everything is opt-in. Exams come first — we go quiet during midsems and endsems. Participation, never pressure.",
  },
  {
    q: "Can I join the club after the event?",
    a: "Anytime — our door stays open all year. But Kaya Kalp is where first-years claim their kits, their saplings and their people, so that Saturday is the best possible start.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="tex-paper scroll-mt-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1fr_1.35fr] lg:gap-20 lg:px-8 lg:py-32">
        {/* left — sticky heading */}
        <div className="self-start lg:sticky lg:top-28">
          <Reveal>
            <p className="text-[11px] font-black uppercase tracking-[0.32em] text-clay">
              Frequently asked
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl">
              Asked by <em className="italic text-moss">every</em> fresher.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              Collected from four years of welcome desks, WhatsApp groups and chai-stall
              conversations.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="tex-dark mt-9 rounded-3xl border border-forest p-6 text-cream shadow-xl shadow-forest/20">
              <p className="font-display text-xl font-semibold">Still curious?</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/65">
                Write to us — a real senior (not a bot) replies within a day.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href="mailto:ecoclub@kuk.ac.in"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cream px-4 py-3 text-[13px] font-bold text-forest transition hover:bg-sand"
                >
                  <Mail className="size-4" /> Email us
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Eco Club UIET on Instagram"
                  className="grid size-[2.9rem] place-items-center rounded-xl border border-cream/25 transition hover:bg-cream hover:text-forest"
                >
                  <InstagramIcon className="size-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* right — accordion */}
        <Reveal delay={150}>
          <div className="border-t border-ink/10">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-ink/10">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={cn(
                          "font-mono text-xs font-bold transition-colors",
                          isOpen ? "text-clay" : "text-ink/30"
                        )}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={cn(
                          "font-display text-lg font-semibold tracking-tight transition-colors duration-300 sm:text-xl",
                          isOpen ? "text-ink" : "text-ink/70 group-hover:text-ink"
                        )}
                      >
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-500",
                        isOpen
                          ? "rotate-45 border-clay bg-clay text-cream"
                          : "border-ink/15 text-ink/50 group-hover:border-ink/40"
                      )}
                    >
                      <Plus className="size-4" strokeWidth={2.5} />
                    </span>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-9 pr-6 text-[15px] leading-relaxed text-ink-soft sm:pl-10">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

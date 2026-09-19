import {
  BadgeCheck,
  Coffee,
  Heart,
  Sprout,
  TrendingUp,
  Wallet,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const SMALL = [
  {
    icon: BadgeCheck,
    title: "Certificates & credits",
    copy: "University-recognised certificates plus volunteer hours for every drive you show up to.",
  },
  {
    icon: Wallet,
    title: "₹0. Always.",
    copy: "Every workshop, kit and kulhad chai is free — funded by our bazaar and the university.",
  },
  {
    icon: Wrench,
    title: "Skills beyond syllabus",
    copy: "Design, carpentry, photography, event ops — graduate with a portfolio, not just a degree.",
  },
  {
    icon: TrendingUp,
    title: "Lead by second year",
    copy: "Freshers who show up get fast-tracked to the core team within a single semester.",
  },
];

const cardBase =
  "group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-cream p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-moss/40 hover:shadow-2xl hover:shadow-forest/10";

export default function Benefits() {
  return (
    <section id="why" className="tex-cream scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-black uppercase tracking-[0.32em] text-clay">
              Why first-years stay
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl lg:text-[3.4rem]">
              More than a club — your first{" "}
              <em className="italic text-moss">campus family.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* A — image statement card */}
          <Reveal className="md:col-span-2 lg:row-span-2">
            <article className="group relative h-full min-h-[26rem] overflow-hidden rounded-3xl border border-ink/10 shadow-lg lg:min-h-0">
              <img
                src="/images/plantation.jpg"
                alt="UIET students planting a sapling together on campus"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                loading="lazy"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-cream backdrop-blur-md">
                  <Heart className="size-3.5 text-sage" /> 800+ freshers joined last year
                </span>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-cream lg:text-4xl">
                  Find your people on day one.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
                  Most of us met our closest college friends over a pot of soil and a glass
                  of kulhad chai. Seniors become mentors. Batchmates become co-founders of
                  strange, beautiful ideas.
                </p>
              </div>
            </article>
          </Reveal>

          {SMALL.map((b, i) => (
            <Reveal key={b.title} delay={120 + i * 90}>
              <article className={cardBase}>
                <span className="grid size-12 place-items-center rounded-2xl bg-moss/12 text-forest transition-all duration-500 group-hover:rotate-6 group-hover:bg-forest group-hover:text-cream">
                  <b.icon className="size-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{b.copy}</p>
              </article>
            </Reveal>
          ))}

          {/* F — wide card */}
          <Reveal delay={140} className="md:col-span-2">
            <article className={cn(cardBase, "flex flex-col justify-between sm:flex-row sm:items-center sm:gap-8")}>
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-clay/12 text-clay-deep transition-all duration-500 group-hover:rotate-6 group-hover:bg-clay group-hover:text-cream">
                  <Sprout className="size-5" strokeWidth={1.9} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  Your ideas, funded
                </h3>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-ink-soft">
                  Pitch a green project at Kaya Kalp. The best ones walk away with the
                  club's budget, tools and a crew of volunteers.
                </p>
              </div>
              <span
                aria-hidden
                className="mt-6 hidden font-display text-[6rem] font-bold leading-none text-clay/15 transition-colors duration-500 group-hover:text-clay/25 sm:block"
              >
                '26
              </span>
            </article>
          </Reveal>

          {/* G — dark stat card */}
          <Reveal delay={220}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-forest bg-forest tex-dark p-7 text-cream transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-forest/30">
              <p className="font-display text-[4.2rem] font-bold leading-none tracking-tight">
                96<span className="text-sage">%</span>
              </p>
              <p className="mt-4 text-sm font-medium leading-relaxed text-cream/75">
                of first-years say they met close friends at an Eco Club drive. The other
                4% met them at the chai stand beside it.
              </p>
            </article>
          </Reveal>

          {/* H — chai card */}
          <Reveal delay={300}>
            <article className={cardBase}>
              <span className="grid size-12 place-items-center rounded-2xl bg-amber/15 text-clay-deep transition-all duration-500 group-hover:rotate-6 group-hover:bg-amber group-hover:text-ink">
                <Coffee className="size-5" strokeWidth={1.9} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                Kulhad chai &gt; paper cups
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">
                Every meet, every time. Small rules, big culture — you'll taste the
                difference.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

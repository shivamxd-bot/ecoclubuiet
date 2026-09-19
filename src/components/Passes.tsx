import { ArrowRight, Check, HandHeart, Leaf, Sparkles, Sprout } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const PASSES = [
  {
    icon: Sprout,
    name: "Sapling Pass",
    tag: "Limited to 500",
    value: 199,
    popular: false,
    perks: [
      "Entry to all 8 upcycling workshops",
      "Trash-to-Treasure bazaar access",
      "Green open-mic & felicitation evening",
      "Digital certificate of participation",
    ],
    cta: "Reserve Sapling Pass",
  },
  {
    icon: Leaf,
    name: "Green Warrior Pass",
    tag: "Limited to 300",
    value: 399,
    popular: true,
    perks: [
      "Everything in Sapling, plus:",
      "Upcycled welcome kit — tote, seed diary & badge",
      "Adopt-a-sapling with your name tag",
      "Printed certificate at felicitation",
      "Front-row open-mic seating",
    ],
    cta: "Reserve Warrior Pass",
  },
  {
    icon: HandHeart,
    name: "Roots Crew Pass",
    tag: "Only 60 seats",
    value: 499,
    popular: false,
    perks: [
      "Everything in Green Warrior, plus:",
      "Backstage crew pass & fest operations",
      "Fast-track to the Eco Club core team",
      "Letter of volunteering",
      "Upcycled crew tee",
    ],
    cta: "Reserve Crew Pass",
  },
];

export default function Passes() {
  return (
    <section id="passes" className="tex-cream scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-black uppercase tracking-[0.32em] text-clay">
              Kaya Kalp '26 · Event passes
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl lg:text-[3.4rem]">
              Pick your <em className="italic text-moss">shade</em> of green.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
              Every pass is free for freshers — the price tags below are what these kits
              would cost anywhere else. All you ever pay is attention.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {PASSES.map((p, i) => (
            <Reveal key={p.name} delay={i * 130} y={40}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-[1.75rem] border p-7 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  p.popular
                    ? "border-forest bg-cream shadow-2xl shadow-forest/20 lg:-translate-y-4 lg:scale-[1.02] hover:lg:-translate-y-6"
                    : "border-ink/10 bg-cream/70 shadow-sm hover:-translate-y-2 hover:border-moss/40 hover:shadow-xl hover:shadow-forest/10"
                )}
              >
                {p.popular && (
                  <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-clay px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-cream shadow-lg">
                    <Sparkles className="size-3" /> Most chosen by freshers
                  </span>
                )}

                <div className="flex items-start justify-between">
                  <span
                    className={cn(
                      "grid size-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:rotate-6",
                      p.popular ? "bg-forest text-cream" : "bg-moss/12 text-forest"
                    )}
                  >
                    <p.icon className="size-5" strokeWidth={1.9} />
                  </span>
                  <span className="rounded-full border border-clay/40 bg-clay/8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-clay-deep">
                    {p.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[1.65rem] font-semibold tracking-tight">
                  {p.name}
                </h3>

                <p className="mt-3 flex items-baseline gap-2.5">
                  <span className="text-sm font-semibold text-ink/35 line-through">
                    ₹{p.value}
                  </span>
                  <span className="font-display text-5xl font-bold tracking-tight text-forest">
                    ₹0
                  </span>
                  <span className="text-xs font-semibold text-ink/50">forever</span>
                </p>

                <div aria-hidden className="my-6 border-t border-dashed border-ink/15" />

                <ul className="space-y-3.5">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm">
                      <span
                        className={cn(
                          "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                          p.popular ? "bg-forest/10 text-forest" : "bg-moss/15 text-moss"
                        )}
                      >
                        <Check className="size-3" strokeWidth={3.5} />
                      </span>
                      <span className="font-semibold leading-snug text-ink/75">{perk}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#register"
                  className={cn(
                    "group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold transition-all duration-300 active:scale-[0.98]",
                    p.popular
                      ? "bg-forest text-cream shadow-lg shadow-forest/30 hover:bg-pine"
                      : "border-2 border-ink/15 text-ink hover:border-forest hover:bg-forest hover:text-cream"
                  )}
                >
                  {p.cta}
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mx-auto mt-12 flex max-w-xl items-center justify-center gap-3 text-center text-[13px] font-semibold leading-relaxed text-ink/55">
            <Leaf className="size-4 shrink-0 text-moss" />
            Free. Always. The club is funded by the university and the bazaar — passes are
            limited only by how many kits we can stitch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

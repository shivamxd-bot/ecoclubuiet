import { Lightbulb, Megaphone, Recycle, TreePine } from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: Lightbulb,
    title: "Upcycling Workshops",
    copy: "Weekly hands-on sessions where canteen bottles, old tees and answer sheets become lamps, totes and diaries.",
  },
  {
    icon: TreePine,
    title: "Plantation Drives",
    copy: "240+ neem, peepal and jamun saplings planted across KU. At the fest, you adopt one — name tag included.",
  },
  {
    icon: Recycle,
    title: "Recycling Circuits",
    copy: "Paper and e-waste points in every block. We weigh, sort and divert it all — 1,800 kg and counting.",
  },
  {
    icon: Megaphone,
    title: "Green Voices",
    copy: "Open mics, nukkad nataks and chai-talks that make the planet trend harder than the fest playlist.",
  },
];

export default function About() {
  return (
    <section id="about" className="tex-cream scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        {/* editorial header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-[11px] font-black uppercase tracking-[0.32em] text-clay">
                What the club actually does
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl lg:text-[3.4rem]">
                Campus life, <em className="italic text-moss">minus</em> the waste.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={220} className="max-w-md">
            <p className="border-l-2 border-clay/60 pl-5 text-[15px] leading-relaxed text-ink-soft">
              We're a 1,200-strong family of tinkerers, planters and poets proving that the
              best four years of your life can leave <em className="font-semibold text-ink">nothing</em> behind
              — except trees.
            </p>
          </Reveal>
        </div>

        {/* cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 110}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-cream p-7 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:border-moss/40 hover:shadow-2xl hover:shadow-forest/15">
                <span
                  aria-hidden
                  className="absolute -right-3 -top-5 font-display text-[5rem] font-bold leading-none text-moss/10 transition-colors duration-500 group-hover:text-moss/20"
                >
                  0{i + 1}
                </span>
                <span className="relative grid size-12 place-items-center rounded-2xl bg-moss/12 text-forest transition-all duration-500 group-hover:rotate-6 group-hover:bg-forest group-hover:text-cream">
                  <f.icon className="size-5.5" strokeWidth={1.9} />
                </span>
                <h3 className="relative mt-6 font-display text-[1.3rem] font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink-soft">{f.copy}</p>
                <span
                  aria-hidden
                  className="absolute inset-x-7 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-moss to-clay transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

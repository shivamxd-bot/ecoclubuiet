import { ArrowRight, CalendarDays, Clock3, Leaf, MapPin, Sprout } from "lucide-react";
import CountUp from "./CountUp";
import Marquee from "./Marquee";
import Reveal from "./Reveal";
import Scripture from "./Scripture";

const LEAVES = [
  { top: "16%", left: "3%", size: 26, dur: "9s", delay: "0s", op: 0.45, rot: -24 },
  { top: "10%", left: "44%", size: 18, dur: "11s", delay: "1.4s", op: 0.3, rot: 18 },
  { top: "58%", left: "2%", size: 20, dur: "10s", delay: "0.7s", op: 0.35, rot: 8 },
  { top: "30%", left: "93%", size: 24, dur: "12s", delay: "2s", op: 0.4, rot: -32 },
  { top: "82%", left: "52%", size: 16, dur: "8s", delay: "1.9s", op: 0.3, rot: 26 },
];

const STATS = [
  { to: 1200, suffix: "+", label: "Green Warriors on campus" },
  { to: 38, suffix: "", label: "drives & workshops every year" },
  { to: 240, suffix: "+", label: "saplings planted across KU" },
  { to: 1800, suffix: " kg", label: "of scrap upcycled, not dumped" },
];

const STRIP = ["Kaya Kalp '26", "Zero Waste", "Reuse", "Rethink", "Regrow", "3 October 2026", "Free Entry"];

const AVATARS = [
  { init: "AN", bg: "bg-moss" },
  { init: "RK", bg: "bg-clay" },
  { init: "SM", bg: "bg-pine" },
  { init: "KB", bg: "bg-amber" },
];

export default function Hero() {
  return (
    <section id="top" className="tex-paper relative overflow-hidden">
      {/* ambient color fields */}
      <div aria-hidden className="pointer-events-none absolute -left-40 -top-40 size-[30rem] rounded-full bg-sage/35 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-48 top-24 size-[32rem] rounded-full bg-clay/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 size-[24rem] rounded-full bg-amber/10 blur-3xl" />

      {/* floating leaves */}
      {LEAVES.map((l, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute animate-float-y text-moss"
          style={{
            top: l.top,
            left: l.left,
            opacity: l.op,
            animationDuration: l.dur,
            animationDelay: l.delay,
          }}
        >
          <Leaf className="animate-sway" style={{ width: l.size, height: l.size, rotate: `${l.rot}deg` }} strokeWidth={1.75} />
        </span>
      ))}

      {/* far-edge vertical caption */}
      <p
        aria-hidden
        className="vertical-rl absolute left-5 top-1/2 hidden -translate-y-1/2 text-[10px] font-bold uppercase tracking-[0.5em] text-ink/30 xl:block"
      >
        UIET Kurukshetra · Est. 2019
      </p>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:pt-36 lg:px-8 lg:pb-20 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ——— Copy ——— */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-moss/30 bg-cream/80 py-2 pl-3 pr-4 text-[11px] font-bold uppercase tracking-[0.2em] text-forest shadow-sm">
                <span className="relative grid size-2 place-items-center">
                  <span className="absolute size-2 animate-pulse-dot rounded-full bg-clay" />
                </span>
                Batch of 2029 — the green welcome awaits
              </span>
            </Reveal>

            <h1 className="mt-7 font-display text-[clamp(3.2rem,9.5vw,5.9rem)] font-medium leading-[0.95] tracking-[-0.02em]">
              <Reveal y={46} delay={80}>
                <span className="block">Reuse.</span>
              </Reveal>
              <Reveal y={46} delay={180}>
                <span className="block">Rethink.</span>
              </Reveal>
              <Reveal y={46} delay={280}>
                <span className="block italic text-moss">Regrow.</span>
              </Reveal>
            </h1>

            <Reveal delay={420} className="mt-7 max-w-xl">
              <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
                <strong className="font-bold text-ink">Kaya Kalp&nbsp;'26</strong> is UIET's
                one-day, zero-waste fest — where the Batch of 2029 turns campus scrap into
                art, plants its first saplings, and finds its people. Free entry, upcycled
                welcome kits and chai in kulhads. Obviously.
              </p>
            </Reveal>

            <Reveal delay={540} className="mt-9">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#register"
                  className="group inline-flex items-center gap-3 rounded-full bg-forest py-4 pl-7 pr-3 text-sm font-bold text-cream shadow-xl shadow-forest/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine hover:shadow-2xl hover:shadow-forest/40 active:translate-y-0"
                >
                  Register for the Event
                  <span className="grid size-8 place-items-center rounded-full bg-cream/15 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="size-4" />
                  </span>
                </a>
                <a
                  href="#showcase"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/60 px-7 py-4 text-sm font-bold text-ink backdrop-blur transition-all duration-300 hover:border-ink/40 hover:bg-cream"
                >
                  See what we make
                  <ArrowRight className="size-4 -rotate-45 text-clay transition-transform duration-300 group-hover:rotate-0" />
                </a>
              </div>
            </Reveal>

            {/* event chips */}
            <Reveal delay={640} className="mt-8">
              <ul className="flex flex-wrap gap-2.5 text-[12px] font-bold text-ink/75">
                {[
                  { icon: CalendarDays, text: "Sat, 3 October 2026" },
                  { icon: Clock3, text: "10 AM – 5 PM" },
                  { icon: MapPin, text: "UIET Auditorium Lawns" },
                ].map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2 rounded-full border border-ink/10 bg-cream/70 px-4 py-2 backdrop-blur"
                  >
                    <Icon className="size-3.5 text-clay" />
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* social proof */}
            <Reveal delay={740} className="mt-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {AVATARS.map((a) => (
                    <span
                      key={a.init}
                      className={`grid size-9 place-items-center rounded-full text-[10px] font-black text-cream ring-[2.5px] ring-paper ${a.bg}`}
                    >
                      {a.init}
                    </span>
                  ))}
                  <span className="grid size-9 place-items-center rounded-full bg-ink text-[9px] font-black text-cream ring-[2.5px] ring-paper">
                    +796
                  </span>
                </div>
                <p className="text-[13px] font-semibold leading-snug text-ink/60">
                  <span className="text-ink">800+ freshers</span> have reserved a pass.
                  <br />
                  No experience needed — ever.
                </p>
              </div>
            </Reveal>
          </div>

          {/* ——— Visual: image + scripture ——— */}
          <div className="lg:col-span-5">
            <Reveal delay={300} y={52}>
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border border-ink/10 shadow-2xl shadow-ink/25 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:rotate-1 sm:rotate-1">
                  <img
                    src="/images/hero.jpg"
                    alt="Flat lay of upcycled products made by Eco Club — a patchwork tote, glass bottle planters and recycled-paper notebooks on kraft paper"
                    className="aspect-[4/3] w-full animate-kenburns object-cover"
                    loading="eager"
                  />
                  <div aria-hidden className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-cream/20" />
                </div>

                {/* rotating badge */}
                <div
                  aria-hidden
                  className="absolute -left-4 -top-8 z-10 grid size-28 place-items-center rounded-full border border-cream/20 bg-forest text-cream shadow-xl sm:-left-8 sm:size-32"
                >
                  <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
                    <defs>
                      <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="fill-cream text-[8px] font-bold uppercase tracking-[0.14em]">
                      <textPath href="#badge-circle">Green movement · Eco Club UIET ·</textPath>
                    </text>
                  </svg>
                  <Leaf className="size-7 text-sage" strokeWidth={2} />
                </div>

                {/* caption chip */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-cream/30 bg-ink/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cream backdrop-blur-md">
                  <Sprout className="size-3.5 text-sage" /> Handmade on campus
                </div>
              </div>
            </Reveal>

            {/* Portrait scripture — hero scroll */}
            <Reveal delay={480} y={36} className="relative z-10 -mt-12 flex justify-center lg:-mt-16">
              <Scripture
                lines={["माता भूमिः", "पुत्रोऽहं पृथिव्याः"]}
                translation="Earth is my mother · I am her child"
                source="Atharva Veda 12.1"
                className="-rotate-2"
              />
            </Reveal>
          </div>
        </div>

        {/* ——— Stats ——— */}
        <Reveal delay={200} className="mt-20 lg:mt-24">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink/10 pt-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-4xl font-semibold tracking-tight text-forest lg:text-[2.75rem]">
                  <CountUp to={s.to} suffix={s.suffix} />
                </dd>
                <p className="mt-2 max-w-[12rem] text-[12px] font-semibold leading-snug text-ink/55">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* ——— Clay marquee strip ——— */}
      <div className="relative z-10 -ml-[3%] w-[106%] -rotate-1 border-y-2 border-ink/80 bg-clay py-3.5 text-cream shadow-xl">
        <Marquee>
          {STRIP.map((word) => (
            <span key={word} className="flex items-center">
              <span className="mx-6 font-display text-lg font-semibold uppercase tracking-[0.14em] sm:text-xl">
                {word}
              </span>
              <Sprout className="size-4 text-sand" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

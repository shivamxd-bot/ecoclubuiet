import { Quote } from "lucide-react";
import Marquee from "./Marquee";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const ROW_A = [
  {
    quote: "I joined for the free tote. Stayed for the people. Best trade of my life.",
    name: "Ananya Sharma",
    meta: "3rd Year · ECE",
    init: "AS",
    bg: "bg-moss",
  },
  {
    quote: "Kaya Kalp was the first time college felt like home. I painted one bottle and left with five friends.",
    name: "Rohit Verma",
    meta: "2nd Year · ME",
    init: "RV",
    bg: "bg-clay",
  },
  {
    quote: "We turned 40 kg of scrap into the entire fest stage. Nothing in my syllabus has topped that feeling.",
    name: "Simran Gill",
    meta: "4th Year · CSE",
    init: "SG",
    bg: "bg-pine",
  },
  {
    quote: "Met my best friend repotting a bottle planter at 8 AM on a Sunday. Ten out of ten.",
    name: "Kabir Ahlawat",
    meta: "2nd Year · IT",
    init: "KA",
    bg: "bg-amber",
  },
];

const ROW_B = [
  {
    quote: "The certificates genuinely helped my internship interview. The kulhad chai honestly helped more.",
    name: "Mehak Saini",
    meta: "3rd Year · EE",
    init: "MS",
    bg: "bg-clay-deep",
  },
  {
    quote: "Freshers, this is your sign. One Saturday. Zero waste. A hundred new inside jokes.",
    name: "Arjun Rana",
    meta: "3rd Year · Civil",
    init: "AR",
    bg: "bg-forest",
  },
  {
    quote: "My seed-paper diary sprouted tulsi on the hostel window. It outlived most of my deadlines.",
    name: "Nisha Yadav",
    meta: "2nd Year · Biotech",
    init: "NY",
    bg: "bg-moss",
  },
  {
    quote: "Came for the open mic, ended up performing, won a bamboo bottle stand. College peaked in week three.",
    name: "Dev Malik",
    meta: "2nd Year · ECE",
    init: "DM",
    bg: "bg-pine",
  },
];

function StoryCard({
  t,
  tilt,
}: {
  t: (typeof ROW_A)[number];
  tilt: number;
}) {
  return (
    <figure
      className={cn(
        "relative mx-2.5 w-[20.5rem] shrink-0 rounded-3xl border border-ink/10 bg-cream p-6 pt-8 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-forest/10 sm:w-[22.5rem]",
        tilt > 0 ? "rotate-[0.6deg]" : "-rotate-[0.6deg]"
      )}
    >
      {/* tape */}
      <span aria-hidden className="tape absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 -rotate-3 rounded-[3px]" />
      <Quote aria-hidden className="size-5 text-sage" fill="currentColor" strokeWidth={0} />
      <blockquote className="mt-3 text-[15px] font-medium leading-relaxed text-ink/85">
        {t.quote}
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span
          className={cn(
            "grid size-10 place-items-center rounded-full text-[11px] font-black text-cream ring-2 ring-paper",
            t.bg
          )}
        >
          {t.init}
        </span>
        <span>
          <span className="block text-sm font-bold text-ink">{t.name}</span>
          <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/45">
            {t.meta}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="stories" className="tex-paper scroll-mt-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 pt-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-[11px] font-black uppercase tracking-[0.32em] text-clay">
              Overheard in the workshop
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl lg:text-[3.4rem]">
              Seniors said it <em className="italic text-moss">better.</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
              Unfiltered words from the batches before you — the ones who now run the
              workshops, the bazaar and the chai rota.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={250} y={24} className="mt-14 pb-24 lg:pb-32">
        <div className="space-y-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <Marquee slow pauseOnHover className="py-2">
            {ROW_A.map((t, i) => (
              <StoryCard key={t.name} t={t} tilt={i % 2 === 0 ? 1 : -1} />
            ))}
          </Marquee>
          <Marquee slow reverse pauseOnHover className="py-2">
            {ROW_B.map((t, i) => (
              <StoryCard key={t.name} t={t} tilt={i % 2 === 0 ? 1 : -1} />
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
}

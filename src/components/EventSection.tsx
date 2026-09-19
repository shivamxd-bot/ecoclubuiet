import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  Ticket,
} from "lucide-react";
import Reveal from "./Reveal";

const PROMISES = [
  "Hands-on upcycling — leave with something you made",
  "Trash-to-Treasure bazaar, priced in rupees & good deeds",
  "Adopt a sapling with your name on it, planted that morning",
  "Green open mic — poetry, nukkad natak and acoustic sets",
];

const SCHEDULE = [
  { time: "10:00", label: "Sapling plantation & green oath" },
  { time: "11:30", label: "Eight parallel upcycling workshops" },
  { time: "14:00", label: "Trash-to-Treasure bazaar opens" },
  { time: "16:30", label: "Open mic, prizes & felicitation" },
];

const QR = ["##.##.", ".#..##", "##..#.", ".##.#.", "#..##.", "##.#.#"];

export default function EventSection() {
  return (
    <section id="event" className="tex-dark scroll-mt-20 text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-24 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-32">
        {/* ——— Copy ——— */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-sage/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-sage">
              <Ticket className="size-3.5" /> The Flagship Event
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 font-display text-4xl font-medium leading-[1.04] tracking-[-0.01em] sm:text-5xl lg:text-[3.4rem]">
              One day. Eight workshops.{" "}
              <em className="italic text-sage">Zero</em> waste.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70">
              Kaya Kalp — <span className="font-script text-sage">कायाकल्प</span>, the art of
              total transformation — is how Eco Club welcomes every new batch. Spend one
              Saturday seeing how much beauty hides inside "waste", and leave wondering why
              anyone throws anything away.
            </p>
          </Reveal>

          <ul className="mt-8 space-y-4">
            {PROMISES.map((p, i) => (
              <li key={p}>
                <Reveal delay={240 + i * 90}>
                  <div className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sage/20 text-sage">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] font-semibold text-cream/85">{p}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={620} className="mt-10">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#register"
                className="group inline-flex items-center gap-3 rounded-full bg-cream py-4 pl-7 pr-3 text-sm font-bold text-forest shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0"
              >
                Register for the Event
                <span className="grid size-8 place-items-center rounded-full bg-forest/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="size-4" />
                </span>
              </a>
              <a
                href="#passes"
                className="group inline-flex items-center gap-2 text-sm font-bold text-cream/80 transition-colors hover:text-cream"
              >
                Compare the passes
                <ArrowUpRight className="size-4 text-sage transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* ——— Ticket ——— */}
        <Reveal delay={200} x={44} y={0}>
          <div className="relative mx-auto max-w-md lg:ml-auto">
            {/* glow */}
            <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-sage/10 blur-2xl" />

            <div className="relative rotate-1 rounded-[1.75rem] bg-cream text-ink shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:rotate-0">
              {/* stamp */}
              <div
                aria-hidden
                className="absolute -top-6 right-8 z-10 grid size-20 rotate-[10deg] place-items-center rounded-full border-2 border-dashed border-clay bg-paper text-center text-[8.5px] font-black uppercase leading-[1.3] tracking-[0.18em] text-clay shadow-lg"
              >
                100%
                <br />
                Free
                <br />
                Entry
              </div>

              {/* header */}
              <div className="flex items-center justify-between rounded-t-[1.75rem] bg-forest px-7 py-5 text-cream">
                <div>
                  <p className="font-display text-xl font-bold tracking-tight">Kaya Kalp '26</p>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-sage">
                    Admit one fresher
                  </p>
                </div>
                <Ticket className="size-7 text-sage" strokeWidth={1.75} />
              </div>

              {/* details */}
              <div className="space-y-4 px-7 py-6">
                {[
                  { icon: CalendarDays, label: "Saturday, 3 October 2026" },
                  { icon: Clock3, label: "10:00 AM – 5:00 PM · drop in anytime" },
                  { icon: MapPin, label: "UIET Main Auditorium & Lawns, Kurukshetra University" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-moss/12 text-forest">
                      <Icon className="size-4" />
                    </span>
                    <span className="pt-1.5 text-sm font-bold leading-snug text-ink/85">{label}</span>
                  </div>
                ))}
              </div>

              {/* perforation */}
              <div className="relative px-7" aria-hidden>
                <span className="absolute -left-[0.9rem] top-1/2 size-7 -translate-y-1/2 rounded-full bg-forest" />
                <span className="absolute -right-[0.9rem] top-1/2 size-7 -translate-y-1/2 rounded-full bg-forest" />
                <div className="border-t-2 border-dashed border-ink/15" />
              </div>

              {/* schedule */}
              <div className="px-7 pb-6 pt-5">
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-ink/45">
                  Day highlights
                </p>
                <ul className="mt-3 space-y-2.5">
                  {SCHEDULE.map((s) => (
                    <li key={s.time} className="flex items-baseline gap-4 text-[13px]">
                      <span className="w-12 shrink-0 font-mono font-bold text-clay">{s.time}</span>
                      <span className="font-semibold text-ink/75">{s.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-4 rounded-2xl bg-paper p-4">
                  {/* faux QR */}
                  <div aria-hidden className="grid shrink-0 grid-cols-6 gap-[3px] rounded-lg border border-ink/15 bg-cream p-2">
                    {QR.flatMap((row, r) =>
                      row.split("").map((c, i) => (
                        <span
                          key={`${r}-${i}`}
                          className={`size-[5px] rounded-[1px] ${c === "#" ? "bg-ink" : "bg-transparent"}`}
                        />
                      ))
                    )}
                  </div>
                  <p className="text-[12px] font-semibold leading-snug text-ink/60">
                    No QR, no queues, no forms at the gate —{" "}
                    <span className="text-ink">your name is your pass.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

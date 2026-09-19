import { Leaf } from "lucide-react";
import Reveal from "./Reveal";
import Scripture from "./Scripture";

/** Full-bleed divider built entirely from portrait scriptures. */
export default function ScriptureBand() {
  return (
    <section className="tex-ink relative overflow-hidden text-cream" aria-label="Words we live by">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-0 size-[24rem] rounded-full bg-pine/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 size-[24rem] rounded-full bg-moss/25 blur-3xl" />

      {/* edge accents */}
      <p aria-hidden className="vertical-rl absolute left-6 top-1/2 hidden -translate-y-1/2 text-[10px] font-bold uppercase tracking-[0.55em] text-cream/25 md:block">
        Sow · Grow · Sustain
      </p>
      <p aria-hidden className="vertical-rl absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-180 text-[10px] font-bold uppercase tracking-[0.55em] text-cream/25 md:block">
        Est. 2019 · Kurukshetra
      </p>

      <div className="relative mx-auto max-w-6xl px-5 py-24 lg:py-28">
        <Reveal className="flex items-center justify-center gap-4">
          <span aria-hidden className="h-px w-10 bg-sage/50" />
          <p className="text-[11px] font-black uppercase tracking-[0.36em] text-sage">
            Wisdom we live by
          </p>
          <span aria-hidden className="h-px w-10 bg-sage/50" />
        </Reveal>

        <div className="mt-14 flex flex-wrap items-start justify-center gap-14 lg:gap-24">
          <Reveal delay={140} y={44}>
            <Scripture
              dark
              lines={["वसुधैव", "कुटुम्बकम्"]}
              translation="The world is one family"
              source="Maha Upanishad 6.71"
            />
          </Reveal>

          <Reveal
            delay={260}
            y={0}
            className="hidden flex-col items-center gap-4 self-center lg:flex"
          >
            <span aria-hidden className="h-16 w-px bg-gradient-to-b from-transparent via-sage/40 to-sage/40" />
            <span className="grid size-12 animate-float-y place-items-center rounded-full border border-sage/30 bg-cream/5">
              <Leaf className="size-5 text-sage" strokeWidth={1.75} />
            </span>
            <span aria-hidden className="h-16 w-px bg-gradient-to-t from-transparent via-sage/40 to-sage/40" />
          </Reveal>

          <Reveal delay={360} y={44}>
            <Scripture
              dark
              lines={["वृक्षो रक्षति", "रक्षितः"]}
              translation="Protect trees · they protect you"
              source="Indian proverb"
            />
          </Reveal>
        </div>

        <Reveal delay={420} className="mx-auto mt-14 max-w-xl">
          <p className="text-center text-sm leading-relaxed text-cream/55">
            Every drive, workshop and bazaar starts from these two lines. Old wisdom, new
            campus — <span className="text-sage">that is the whole idea.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

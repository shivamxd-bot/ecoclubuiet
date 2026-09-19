import { useState, type FormEvent } from "react";
import {
  CalendarDays,
  Check,
  Leaf,
  MapPin,
  RotateCcw,
  Wallet,
} from "lucide-react";
import Reveal from "./Reveal";

const BRANCHES = ["CSE", "IT", "ECE", "EE", "ME", "Civil", "Biotech", "Other"];
const PASS_OPTIONS = ["Green Warrior Pass", "Sapling Pass", "Roots Crew Pass"];

const BURST = [
  { top: "8%", left: "12%", size: 18, delay: "0.1s", rot: -30 },
  { top: "4%", left: "78%", size: 24, delay: "0.22s", rot: 20 },
  { top: "30%", left: "4%", size: 14, delay: "0.34s", rot: 45 },
  { top: "26%", left: "92%", size: 16, delay: "0.46s", rot: -50 },
  { top: "52%", left: "10%", size: 20, delay: "0.56s", rot: 12 },
  { top: "58%", left: "86%", size: 15, delay: "0.66s", rot: -14 },
];

const inputCls =
  "w-full rounded-xl border border-ink/15 bg-paper px-4 py-3.5 text-sm font-semibold text-ink placeholder:font-medium placeholder:text-ink/35 transition focus:border-moss focus:outline-none focus:ring-2 focus:ring-moss/25";
const labelCls = "mb-1.5 block text-[10px] font-black uppercase tracking-[0.22em] text-ink/55";

export default function FinalCTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    branch: "CSE",
    pass: "Green Warrior Pass",
  });
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  const firstName = form.name.trim().split(" ")[0];

  return (
    <section id="register" className="tex-paper scroll-mt-20 px-5 pb-24 pt-4 lg:px-8 lg:pb-32">
      <Reveal y={48}>
        <div className="tex-dark relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-pine/40 text-cream shadow-2xl shadow-forest/30">
          {/* decorations */}
          <div aria-hidden className="pointer-events-none absolute -right-36 -top-36 size-[26rem] rounded-full border border-cream/10" />
          <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-[20rem] rounded-full border border-cream/10" />
          <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-24 size-[24rem] rounded-full bg-sage/10 blur-3xl" />
          <p
            aria-hidden
            className="vertical-rl absolute bottom-10 right-8 hidden font-script text-xl text-cream/15 xl:block"
          >
            वसुधैव कुटुम्बकम्
          </p>

          <div className="relative grid items-center gap-14 p-7 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            {/* ——— Copy ——— */}
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-amber/40 bg-amber/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-amber">
                <span className="relative grid size-2 place-items-center">
                  <span className="absolute size-2 animate-pulse-dot rounded-full bg-amber" />
                </span>
                Passes are going fast
              </span>

              <h2 className="mt-6 font-display text-4xl font-medium leading-[1.04] tracking-[-0.01em] sm:text-5xl lg:text-[3.5rem]">
                Join the <em className="italic text-sage">Green</em> Movement.
              </h2>

              <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
                Thirty seconds now, and your first-semester story starts with mud on your
                hands, a tote on your shoulder and a table of people waving you over at
                lunch.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5 text-[12px] font-bold text-cream/85">
                {[
                  { icon: CalendarDays, text: "Sat, 3 October 2026" },
                  { icon: MapPin, text: "UIET Auditorium Lawns" },
                  { icon: Wallet, text: "₹0 — forever" },
                ].map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-2 rounded-full border border-cream/15 bg-cream/[0.06] px-4 py-2 backdrop-blur-sm"
                  >
                    <Icon className="size-3.5 text-sage" />
                    {text}
                  </li>
                ))}
              </ul>

              <blockquote className="mt-10 border-l-2 border-clay pl-5">
                <p className="font-script text-xl leading-relaxed text-sage">
                  माता भूमिः पुत्रोऽहं पृथिव्याः
                </p>
                <cite className="mt-1 block text-[11px] font-bold uppercase not-italic tracking-[0.24em] text-cream/45">
                  Earth is my mother — Atharva Veda
                </cite>
              </blockquote>
            </div>

            {/* ——— Form card ——— */}
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-sage/25 to-clay/15 blur-xl"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] bg-cream p-6 text-ink shadow-2xl sm:p-9">
                {done ? (
                  <div className="relative flex min-h-[26rem] flex-col items-center justify-center text-center">
                    {BURST.map((b, i) => (
                      <span
                        key={i}
                        aria-hidden
                        className="absolute animate-pop text-moss"
                        style={{
                          top: b.top,
                          left: b.left,
                          animationDelay: b.delay,
                          rotate: `${b.rot}deg`,
                        }}
                      >
                        <Leaf style={{ width: b.size, height: b.size }} strokeWidth={1.75} />
                      </span>
                    ))}
                    <span className="grid size-16 animate-pop place-items-center rounded-full bg-forest text-cream shadow-lg">
                      <Check className="size-7" strokeWidth={3} />
                    </span>
                    <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight">
                      You're in{firstName ? `, ${firstName}` : ""}!
                    </h3>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
                      Your <strong className="text-ink">{form.pass}</strong> is reserved.
                      We'll ping you on WhatsApp with the fest map, your kit counter and a
                      reminder the night before.
                    </p>
                    <p className="mt-5 flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-forest">
                      <CalendarDays className="size-3.5" /> See you on 3 October
                    </p>
                    <button
                      onClick={() => {
                        setDone(false);
                        setForm({ ...form, name: "", phone: "" });
                      }}
                      className="group mt-7 inline-flex items-center gap-2 text-[13px] font-bold text-clay-deep transition hover:text-clay"
                    >
                      <RotateCcw className="size-3.5 transition-transform duration-500 group-hover:-rotate-180" />
                      Register a friend too
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-2xl font-semibold tracking-tight">
                          Reserve your free pass
                        </h3>
                        <p className="mt-1.5 text-[13px] font-semibold text-ink/50">
                          Batch of 2029 · takes 30 seconds
                        </p>
                      </div>
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-forest text-cream">
                        <Leaf className="size-5" strokeWidth={1.9} />
                      </span>
                    </div>

                    <form onSubmit={submit} className="mt-7 space-y-4">
                      <div>
                        <label htmlFor="cta-name" className={labelCls}>
                          Full name
                        </label>
                        <input
                          id="cta-name"
                          required
                          autoComplete="name"
                          placeholder="Aarav Sharma"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label htmlFor="cta-phone" className={labelCls}>
                          WhatsApp number
                        </label>
                        <input
                          id="cta-phone"
                          required
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          title="10-digit mobile number"
                          autoComplete="tel"
                          placeholder="98765 43210"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value.replace(/[^\d]/g, "").slice(0, 10) })
                          }
                          className={inputCls}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="cta-branch" className={labelCls}>
                            Branch
                          </label>
                          <select
                            id="cta-branch"
                            value={form.branch}
                            onChange={(e) => setForm({ ...form, branch: e.target.value })}
                            className={inputCls}
                          >
                            {BRANCHES.map((b) => (
                              <option key={b}>{b}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="cta-year" className={labelCls}>
                            Year
                          </label>
                          <input id="cta-year" value="1st Year" readOnly className={`${inputCls} bg-paper-deep/60 text-ink/50`} />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="cta-pass" className={labelCls}>
                          Choose your pass
                        </label>
                        <select
                          id="cta-pass"
                          value={form.pass}
                          onChange={(e) => setForm({ ...form, pass: e.target.value })}
                          className={inputCls}
                        >
                          {PASS_OPTIONS.map((p) => (
                            <option key={p}>{p}</option>
                          ))}
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-forest py-4.5 text-sm font-bold text-cream shadow-lg shadow-forest/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine hover:shadow-xl active:translate-y-0 active:scale-[0.99]"
                      >
                        Join the Green Movement
                        <Leaf className="size-4 transition-transform duration-500 group-hover:rotate-[20deg]" />
                      </button>
                      <p className="pt-1 text-center text-[11px] font-semibold text-ink/40">
                        No spam — only saplings, workshop invites and the odd chai alert.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

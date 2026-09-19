import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, IndianRupee, Leaf } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

const PRODUCTS = [
  {
    name: "Patchwork Tote",
    line: "Kantha-stitched from last year's fest tees and tailor offcuts — every single bag is one of one.",
    img: "/images/product-tote.jpg",
    alt: "Handmade tote bag stitched from colourful patchwork upcycled fabric scraps",
    made: ["Fest tees", "Tailor offcuts", "Jute thread"],
    price: 150,
  },
  {
    name: "Bottle Planters",
    line: "Cold-cut canteen bottles rooting pothos in plain water. Zero soil, zero mess — hostel-desk approved.",
    img: "/images/product-planter.jpg",
    alt: "Planters made from cut glass bottles with pothos cuttings rooting in water",
    made: ["Canteen glass", "Pothos cuttings", "Coco coir"],
    price: 80,
  },
  {
    name: "Seed-Paper Diaries",
    line: "Hand-pulped from old answer sheets with tulsi seeds pressed into the cover. Fill it up — then plant it.",
    img: "/images/product-notebook.jpg",
    alt: "Handmade recycled paper notebooks with botanical leaf prints and jute binding",
    made: ["Waste paper", "Tulsi seeds", "Botanical prints"],
    price: 120,
  },
  {
    name: "Glow Bottles",
    line: "Amber bottles and woven cane shades, rewired into the warmest corner of any hostel room.",
    img: "/images/product-lamp.jpg",
    alt: "Warm glowing lamp handcrafted from an upcycled amber glass bottle and cane shade",
    made: ["Amber bottles", "Bamboo cane", "LED filament"],
    price: 350,
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const product = PRODUCTS[active];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % PRODUCTS.length), 5600);
    return () => clearInterval(t);
  }, [paused, active]);

  return (
    <section id="showcase" className="tex-paper scroll-mt-20 overflow-hidden">
      <div
        className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        {/* header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-[11px] font-black uppercase tracking-[0.32em] text-clay">
                From the campus scrapyard
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] sm:text-5xl lg:text-[3.4rem]">
                Trash, but make it <em className="italic text-clay">treasure.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={220} className="max-w-md">
            <p className="border-l-2 border-moss/60 pl-5 text-[15px] leading-relaxed text-ink-soft">
              Everything below was rescued from a UIET dustbin and reborn in our workshop.
              Each piece sells at the Kaya Kalp bazaar — and every rupee funds next
              semester's saplings.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ——— Image stage ——— */}
          <Reveal y={44}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ink/10 shadow-2xl shadow-ink/20">
                {PRODUCTS.map((p, i) => (
                  <img
                    key={p.name}
                    src={p.img}
                    alt={i === active ? p.alt : ""}
                    aria-hidden={i !== active}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                      i === active ? "scale-100 opacity-100" : "scale-108 opacity-0"
                    )}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                ))}
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-ink/10" />

                {/* price chip */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-cream/30 bg-cream/90 px-4 py-2 text-sm font-black text-forest backdrop-blur">
                  <IndianRupee className="size-3.5" />
                  <span key={active} className="animate-fade-swap">
                    {product.price}
                  </span>
                </div>

                {/* bottom caption */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                  <p className="flex items-center gap-2 rounded-full bg-ink/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cream backdrop-blur-md">
                    <Leaf className="size-3.5 text-sage" /> Rescued · Remade · UIET
                  </p>
                  {/* dots */}
                  <div className="flex gap-1.5 rounded-full bg-ink/55 px-3 py-2.5 backdrop-blur-md">
                    {PRODUCTS.map((p, i) => (
                      <button
                        key={p.name}
                        onClick={() => setActive(i)}
                        aria-label={`Show ${p.name}`}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-500",
                          i === active ? "w-6 bg-cream" : "w-1.5 bg-cream/40 hover:bg-cream/70"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ——— Tabs + detail ——— */}
          <Reveal delay={160} y={40}>
            <div role="tablist" aria-label="Upcycled products" className="border-t border-ink/10">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.name}
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={i === active}
                  aria-controls="product-panel"
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative flex w-full items-center gap-5 border-b border-ink/10 py-5 text-left transition-all duration-500",
                    i === active ? "pl-3" : "hover:pl-2"
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute bottom-[-1px] left-0 h-[2px] bg-clay transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      i === active ? "w-full" : "w-0"
                    )}
                  />
                  <span
                    className={cn(
                      "font-mono text-xs font-bold transition-colors",
                      i === active ? "text-clay" : "text-ink/30"
                    )}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={cn(
                      "font-display text-2xl font-semibold tracking-tight transition-colors duration-300 lg:text-[1.7rem]",
                      i === active ? "text-ink" : "text-ink/35 group-hover:text-ink/65"
                    )}
                  >
                    {p.name}
                  </span>
                  <ArrowUpRight
                    className={cn(
                      "ml-auto size-5 shrink-0 transition-all duration-300",
                      i === active
                        ? "rotate-45 text-clay opacity-100"
                        : "text-ink/30 opacity-0 group-hover:opacity-100"
                    )}
                  />
                </button>
              ))}
            </div>

            {/* detail panel */}
            <div
              key={active}
              id="product-panel"
              role="tabpanel"
              aria-labelledby={`tab-${active}`}
              className="mt-8 animate-fade-swap"
            >
              <p className="max-w-md text-lg font-medium leading-relaxed text-ink-soft">
                {product.line}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.made.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-moss/35 bg-cream px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-forest"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
                <p className="flex items-baseline gap-2">
                  <span className="flex items-center font-display text-3xl font-bold text-forest">
                    <IndianRupee className="size-5" />
                    {product.price}
                  </span>
                  <span className="text-xs font-semibold text-ink/50">
                    at the bazaar · funds saplings
                  </span>
                </p>
                <a
                  href="#register"
                  className="group ml-auto inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[13px] font-bold text-cream shadow-lg shadow-forest/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pine"
                >
                  Reserve a free pass
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

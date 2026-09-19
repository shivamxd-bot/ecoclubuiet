import { Leaf } from "lucide-react";
import { cn } from "../utils/cn";

interface ScriptureProps {
  /** Vertical columns of Devanagari text — rendered right-to-left like a classic scroll */
  lines: string[];
  /** Small caps vertical translation */
  translation: string;
  source?: string;
  dark?: boolean;
  className?: string;
}

/**
 * Portrait scripture — a hanging scroll with vertical classic text,
 * wooden rods, and a clay leaf seal. The brand's signature hero element.
 */
export default function Scripture({
  lines,
  translation,
  source,
  dark = false,
  className,
}: ScriptureProps) {
  const rod = (
    <span
      aria-hidden
      className={cn(
        "relative z-10 block h-2 w-40 rounded-full shadow-[0_3px_8px_rgb(10_22_15/0.4)]",
        dark ? "bg-sand" : "bg-ink"
      )}
    >
      <span
        className={cn(
          "absolute -left-2 top-1/2 size-3 -translate-y-1/2 rounded-full",
          dark ? "bg-sand" : "bg-ink"
        )}
      />
      <span
        className={cn(
          "absolute -right-2 top-1/2 size-3 -translate-y-1/2 rounded-full",
          dark ? "bg-sand" : "bg-ink"
        )}
      />
    </span>
  );

  return (
    <figure className={cn("group flex flex-col items-center", className)}>
      {rod}
      <div
        className={cn(
          "relative z-0 -my-0.5 flex items-stretch gap-3.5 border-x-2 px-4 py-6 shadow-[0_24px_50px_-22px_rgb(10_22_15/0.55)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-rotate-1 group-hover:shadow-[0_28px_60px_-22px_rgb(10_22_15/0.65)] sm:px-5",
          dark ? "border-sage/30 bg-cream/[0.05] backdrop-blur-sm" : "border-ink/20 bg-cream"
        )}
      >
        {/* clay leaf seal */}
        <span
          aria-hidden
          className="absolute right-2 top-2 grid size-6 rotate-6 place-items-center rounded-[5px] bg-clay text-cream shadow-md"
        >
          <Leaf className="size-3.5" strokeWidth={2.5} />
        </span>

        {/* scripture columns — vertical, right to left */}
        <div className="flex flex-row-reverse items-start gap-3">
          {lines.map((line, i) => (
            <p
              key={i}
              className={cn(
                "vertical-rl font-script text-xl leading-[2.15] tracking-[0.06em] sm:text-[1.35rem]",
                dark ? "text-cream" : "text-ink",
                i > 0 && (dark ? "text-cream/75" : "text-ink/75")
              )}
            >
              {line}
            </p>
          ))}
        </div>

        {/* vertical translation */}
        <p
          aria-hidden
          className={cn(
            "vertical-rl self-center text-[8.5px] font-bold uppercase leading-none tracking-[0.3em]",
            dark ? "text-sage/90" : "text-clay"
          )}
        >
          {translation}
        </p>
      </div>
      {rod}
      {source && (
        <figcaption
          className={cn(
            "mt-4 text-center text-[10px] font-bold uppercase tracking-[0.32em]",
            dark ? "text-cream/50" : "text-ink/50"
          )}
        >
          {source}
        </figcaption>
      )}
    </figure>
  );
}

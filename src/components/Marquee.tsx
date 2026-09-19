import type { ReactNode } from "react";
import { cn } from "../utils/cn";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  slow?: boolean;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

/** Seamless infinite marquee — children are duplicated for a perfect loop. */
export default function Marquee({
  children,
  className,
  innerClassName,
  slow = false,
  reverse = false,
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max items-center",
          slow ? "animate-marquee-slow" : "animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "hover:[animation-play-state:paused]",
          innerClassName
        )}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

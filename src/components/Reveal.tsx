import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** ms before the transition starts — use for staggered entrances */
  delay?: number;
  /** vertical offset while hidden */
  y?: number;
  /** horizontal offset while hidden */
  x?: number;
  scale?: number;
  className?: string;
  once?: boolean;
}

/** Butter-smooth scroll reveal powered by IntersectionObserver. */
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  x = 0,
  scale,
  className,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const hidden = `translate3d(${x}px, ${y}px, 0)${scale ? ` scale(${scale})` : ""}`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0) scale(1)" : hidden,
        transitionProperty: "opacity, transform",
        transitionDuration: "950ms",
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

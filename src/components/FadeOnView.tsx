"use client";

import { useState, useEffect, useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "zoom" | "zoomOut" | "zoomOutUp" | "flipLeft" | "flipRight" | "flipDown";

const config: Record<
  Direction,
  { animate: string; initial: string }
> = {
  up: { animate: "animate-fade-up-on-view", initial: "opacity-0 translate-y-12" },
  down: { animate: "animate-fade-down", initial: "opacity-0 -translate-y-12" },
  left: { animate: "animate-fade-left", initial: "opacity-0 -translate-x-8" },
  right: { animate: "animate-fade-right", initial: "opacity-0 translate-x-8" },
  zoom: { animate: "animate-zoom-in", initial: "opacity-0 scale-[0.88] origin-center" },
  zoomOut: { animate: "animate-zoom-out", initial: "opacity-0 scale-[1.15] origin-center" },
  zoomOutUp: { animate: "animate-zoom-out-up", initial: "opacity-0 scale-[1.12] -translate-y-6 origin-center" },
  flipLeft: { animate: "animate-flip-left", initial: "opacity-0 [transform:perspective(800px)_rotateY(-50deg)] origin-left" },
  flipRight: { animate: "animate-flip-right", initial: "opacity-0 [transform:perspective(800px)_rotateY(50deg)] origin-right" },
  flipDown: { animate: "animate-flip-down", initial: "opacity-0 [transform:perspective(800px)_rotateX(-45deg)] origin-top" },
};

type FadeOnViewProps = {
  children: React.ReactNode;
  direction: Direction;
  className?: string;
};

export default function FadeOnView({ children, direction, className = "" }: FadeOnViewProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { animate, initial } = config[direction];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      {
        threshold: ["zoom", "zoomOut", "zoomOutUp", "flipLeft", "flipRight", "flipDown"].includes(direction) ? 0.12 : 0.05,
        rootMargin: "0px 0px -60px 0px",
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [direction]);

  return (
    <div ref={ref} className={`${inView ? animate : initial} ${className}`}>
      {children}
    </div>
  );
}

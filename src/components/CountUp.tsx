"use client";

import { useState, useEffect, useRef } from "react";

type CountUpProps = {
  end: number;
  duration?: number;
  start?: number;
  className?: string;
};

export default function CountUp({ end, duration = 1000, start = 1, className = "" }: CountUpProps) {
  const [value, setValue] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasStarted) setHasStarted(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = performance.now();
    const startVal = start;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuart = 1 - (1 - progress) ** 4;
      const current = Math.floor(startVal + (end - startVal) * easeOutQuart);
      setValue(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [hasStarted, end, start, duration]);

  return (
    <p ref={ref} className={className}>
      {value.toLocaleString()}
    </p>
  );
}

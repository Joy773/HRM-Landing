"use client";

import { useState, useEffect, useRef } from "react";

type FadeLeftOnViewProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FadeLeftOnView({ children, className = "" }: FadeLeftOnViewProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { threshold: 0.05, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <FadeLeftOnView
      className={`${inView ? "animate-fade-left" : "opacity-0 -translate-x-8"} ${className}`}
    >
      <div ref={ref}>
        {children}
      </div>
    </FadeLeftOnView>
  );
}

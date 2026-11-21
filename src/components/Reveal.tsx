"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Smooth scroll reveal: fades and rises into view when it enters the viewport.
 * Uses IntersectionObserver + CSS transitions (no scroll-linked jank).
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.classList.contains("is-in")) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);

    // If already in view or motion reduced, reveal immediately
    const rect = el.getBoundingClientRect();
    if (reduce || (rect.top < window.innerHeight && rect.bottom > 0)) {
      el.classList.add("is-in");
      io.unobserve(el);
    }

    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

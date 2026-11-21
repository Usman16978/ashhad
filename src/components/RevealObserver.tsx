"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveals every `.reveal` element as it scrolls into view.
 * Re-scans on route change so client-side navigation reveals correctly.
 */
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
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

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (reduce || (rect.top < window.innerHeight && rect.bottom > 0)) {
        el.classList.add("is-in");
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}

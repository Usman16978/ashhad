import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Star, WhatsApp } from "./Icons";
import PageQuranArt, { type PageArtTone } from "./PageQuranArt";
import { whatsappLink } from "@/lib/site";

/* ─────────────────────────  Section heading  ───────────────────────── */

export function SectionHead({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`reveal ${centered ? "mx-auto text-center" : ""} ${className}`}>
      <p className={`eyebrow ${centered ? "eyebrow-center" : ""} ${tone === "light" ? "eyebrow-light" : ""}`}>
        {eyebrow}
      </p>
      <h2
        className={`display-2 mt-4 text-balance ${centered ? "mx-auto max-w-3xl" : "max-w-2xl"} ${
          tone === "light" ? "text-ivory-50" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`lead mt-4 max-w-2xl ${centered ? "mx-auto" : ""} ${
            tone === "light" ? "text-ivory-200/70" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* ─────────────────────────  Stars  ───────────────────────── */

export function Stars({ rating = 5, className = "" }: { rating?: number; className?: string }) {
  return (
    <div
      className={`flex items-center gap-0.5 text-brass-500 ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          <Star className={`h-3.5 w-3.5 ${i < rating ? "" : "opacity-25"}`} />
        </span>
      ))}
    </div>
  );
}

/* ─────────────────────────  Ornament  ───────────────────────── */

export function Ornament({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <div className={`divider-ornament ${className}`} aria-hidden="true">
      <span className={`h-px w-10 ${light ? "bg-brass-300/50" : "bg-brass-500/50"}`} />
      <svg viewBox="0 0 20 20" className={`h-3 w-3 ${light ? "text-brass-300" : "text-brass-500"}`} fill="currentColor">
        <path d="M10 1.5 12 7l5.5 2-5.5 2-2 5.5L8 11 2.5 9 8 7Z" />
      </svg>
      <span className={`h-px w-10 ${light ? "bg-brass-300/50" : "bg-brass-500/50"}`} />
    </div>
  );
}

/* ─────────────────────────  Page hero  ───────────────────────── */

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  art,
  artTone = "forest",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumb: string;
  children?: ReactNode;
  art?: ReactNode;
  artTone?: PageArtTone;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ivory-300 bg-ivory-200/50">
      <div className="pointer-events-none absolute inset-0 bg-geo opacity-50" aria-hidden="true" />
      <div
        className="animate-drift pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brass-200/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:py-20">
        <div className="reveal">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10.5px] tracking-[0.12em] text-ink-400">
            <Link href="/" className="transition-colors hover:text-forest-900">
              Home
            </Link>
            <span className="text-brass-500/60">/</span>
            <span className="text-ink-500">{breadcrumb}</span>
          </nav>

          <p className="eyebrow mt-6">{eyebrow}</p>
          <h1 className="display-1 mt-4 max-w-3xl text-balance">{title}</h1>
          {description ? <p className="lead mt-5 max-w-2xl">{description}</p> : null}
          {children ? <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div> : null}
        </div>
        <div className="flex justify-center">
          {art ?? <PageQuranArt tone={artTone} />}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  CTA band  ───────────────────────── */

export function CtaBand({
  eyebrow = "Admissions are open",
  title = "Begin with three free classes. Continue for a lifetime.",
  description = "Meet your teacher, experience a real lesson and decide with complete peace of mind. No card details, no obligation.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="section pt-0 sm:pt-0 lg:pt-0">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[12px] bg-forest-950 px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16">
          <div className="absolute inset-0 bg-geo-light opacity-50" aria-hidden="true" />
          <div
            className="animate-drift pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-brass-500/15 blur-3xl"
            aria-hidden="true"
          />
          <div className="reveal relative mx-auto max-w-2xl">
            <p className="eyebrow eyebrow-center eyebrow-light justify-center">{eyebrow}</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.6vw,2.9rem)] leading-[1.12] text-ivory-50">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-ivory-200/65">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/free-trial" className="btn btn-gold">
                Book your free trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light"
              >
                <WhatsApp className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
            <p className="mt-5 text-[11px] tracking-[0.08em] text-ivory-200/40">
              3 free classes · Male &amp; female teachers · All time zones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  Small UI  ───────────────────────── */

export function Tick({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-500">
      <svg viewBox="0 0 20 20" className="mt-[3px] h-4 w-4 shrink-0 text-brass-600" fill="none">
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeOpacity="0.25" />
        <path d="m6 10.5 2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </li>
  );
}

export function Tag({ children, tone = "brass" }: { children: ReactNode; tone?: "brass" | "forest" | "clay" }) {
  const tones = {
    brass: "border-brass-400/40 bg-brass-50 text-brass-700",
    forest: "border-forest-200 bg-forest-50 text-forest-700",
    clay: "border-clay-200 bg-clay-100 text-clay-600",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.14em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

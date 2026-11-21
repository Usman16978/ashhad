"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ArrowRight, Close, Mail, Menu, Phone, Sparkle } from "./Icons";
import { navLinks, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-forest-950 text-ivory-200">
        <div className="container-x flex h-9 items-center justify-between gap-4 text-[10px] tracking-[0.1em] sm:text-[10.5px]">
          <p className="flex items-center gap-2 text-ivory-200/90">
            <Sparkle className="h-3 w-3 shrink-0 text-brass-300" />
            <span className="hidden sm:inline">Three free trial classes — no card required</span>
            <span className="sm:hidden">3 free trial classes</span>
          </p>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center gap-1.5 transition-colors hover:text-brass-300"
            >
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">{site.phoneDisplay}</span>
              <span className="sm:hidden">Call us</span>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="hidden items-center gap-1.5 transition-colors hover:text-brass-300 md:flex"
            >
              <Mail className="h-3 w-3" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 border-b bg-ivory-50/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "border-ivory-300 shadow-[0_10px_30px_-24px_rgba(8,36,30,0.6)]" : "border-ivory-300/70"
        }`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex xl:gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`group relative rounded-[3px] px-2.5 py-3 text-[12.5px] font-medium transition-colors xl:px-3 xl:text-[13px] ${
                  isActive(link.href)
                    ? "text-forest-950"
                    : "text-ink-500 hover:text-forest-950"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-2.5 -bottom-[1px] h-[1.5px] origin-left bg-brass-500 transition-transform duration-300 xl:inset-x-3 ${
                    isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/free-trial" className="btn btn-primary hidden !px-5 !py-3 sm:inline-flex">
              Book Free Trial
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid h-11 w-11 place-items-center rounded-[4px] border border-forest-900/15 text-forest-950 transition-colors hover:bg-forest-900/5 active:bg-forest-900/10 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[90] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-forest-950/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,400px)] flex-col overflow-y-auto bg-ivory-50 shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-ivory-300 px-6 py-5">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-[4px] border border-forest-900/15 text-forest-950 transition-colors hover:bg-forest-900/5"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="flex-1 px-6 py-6">
            <ul className="space-y-0.5">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-baseline justify-between border-b border-ivory-200 py-4 font-serif text-[22px] transition-colors active:text-brass-700 ${
                      isActive(link.href) ? "text-brass-600" : "text-forest-950 hover:text-brass-600"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="font-sans text-[9px] font-medium tracking-[0.2em] text-ink-400">
                      0{i + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-3">
              <Link href="/free-trial" className="btn btn-primary w-full">
                Book 3 Free Trial Classes
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center justify-center gap-2 border border-forest-900/15 px-4 py-3 text-[12px] font-medium text-ink-700"
              >
                <Phone className="h-4 w-4 text-brass-600" />
                {site.phoneDisplay}
              </a>
            </div>

            <div className="mt-8 rounded-[6px] border border-ivory-300 bg-ivory-100 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brass-600">
                Admissions open
              </p>
              <p className="mt-2 font-serif text-xl text-forest-950">
                Classes available 24/7, in every time zone.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-flex items-center gap-2 text-[12px] text-ink-500 hover:text-forest-900"
              >
                <Mail className="h-4 w-4 text-brass-600" />
                {site.email}
              </a>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}

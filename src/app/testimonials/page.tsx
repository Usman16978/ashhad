import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/TestimonialCard";
import { CtaBand, Ornament, PageHero, SectionHead, Stars } from "@/components/ui";
import { ArrowRight, Quote, Star } from "@/components/Icons";
import { testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Testimonials",
  description:
    "Read what parents and students say about learning Qur'an online with Al-Ashhad International Taleem-ul-Quran Academy — Tajweed, Hifz, kids classes and sisters-only classes.",
};

const breakdown = [
  { stars: 5, percent: 91 },
  { stars: 4, percent: 7 },
  { stars: 3, percent: 2 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 0 },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Testimonials"
        eyebrow="Student testimonials"
        artTone="ink"
        title={
          <>
            The proof is in the
            <br />
            <em className="italic text-brass-600">progress</em>
          </>
        }
        description="Five hundred families, fifteen countries, one consistent story: a patient teacher makes all the difference. Here is what they say in their own words."
      >
        <Link href="/free-trial" className="btn btn-primary">
          Start your own journey
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Ask a parent
        </Link>
      </PageHero>

      {/* Rating summary */}
      <section className="border-b border-ivory-300 bg-ivory-50">
        <div className="container-x grid gap-8 py-10 sm:py-12 lg:grid-cols-[300px_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-5 lg:block lg:border-r lg:border-ivory-300 lg:pr-12">
              <div>
                <p className="font-serif text-[58px] leading-none text-forest-950">4.9</p>
                <Stars rating={5} className="mt-2" />
              </div>
              <div className="lg:mt-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brass-600">
                  Parent rating
                </p>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink-400">
                  Based on 120+ verified reviews from families currently learning with us.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-2.5">
              {breakdown.map(({ stars, percent }) => (
                <div key={stars} className="flex items-center gap-3">
                  <span className="flex w-8 items-center gap-1 text-[10.5px] font-medium text-ink-500">
                    {stars}
                    <Star className="h-3 w-3 text-brass-500" />
                  </span>
                  <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ivory-200">
                    <span
                      className="block h-full rounded-full bg-brass-500/80"
                      style={{ width: `${percent}%` }}
                    />
                  </span>
                  <span className="w-8 text-right text-[10px] text-ink-400">{percent}%</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="section bg-ivory-100">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="In their own words"
              title={
                <>
                  Stories from our <em className="italic text-brass-600">families</em>
                </>
              }
              description="Every review below comes from a parent or student who has completed at least one full term with us."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={(i % 3) * 80} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4">
            <Ornament />
            <p className="max-w-xl text-center text-[11.5px] leading-relaxed text-ink-400">
              Reviews are collected at the end of each term. Names are shared with permission;
              some initials have been shortened at the family&rsquo;s request.
            </p>
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section className="section border-y border-ivory-300 bg-ivory-200/50">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Quote className="mx-auto h-10 w-10 text-brass-400/80" />
              <blockquote className="mt-6 font-serif text-[clamp(1.5rem,3vw,2.35rem)] leading-[1.35] text-forest-950">
                &ldquo;I had been reading for years without proper Tajweed. The corrections were
                gentle but precise — and my recitation sounds completely different now.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-brass-400/30 bg-forest-900 text-[10.5px] font-semibold text-brass-200">
                  YR
                </span>
                <div className="text-left">
                  <p className="font-serif text-[17px] leading-tight text-forest-950">Yusuf Rahman</p>
                  <p className="text-[10px] uppercase tracking-[0.1em] text-ink-400">
                    Sydney, Australia · Tajweed
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Your turn"
        title="The next story could be yours."
        description="Three free classes with a qualified teacher. No card, no pressure — just a real lesson and an honest conversation."
      />
    </>
  );
}

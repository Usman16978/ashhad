import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import QuranHeroArt from "@/components/QuranHeroArt";
import QuranArtwork from "@/components/QuranArtwork";
import PhotoCard from "@/components/PhotoCard";
import CourseCard from "@/components/CourseCard";
import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/TestimonialCard";
import { CtaBand, SectionHead, Stars, Tick } from "@/components/ui";
import {
  ArrowRight,
  ArrowUpRight,
  Book,
  Check,
  Clock,
  Shield,
  User,
} from "@/components/Icons";
import { activities, courses, site, steps, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Learn Quran Online with Expert Hafiz Teachers",
  description:
    "One-to-one live Qur'an classes for kids and adults with certified Hafiz and Qaria teachers. Noorani Qaida, Tajweed, Hifz, Arabic and Islamic studies — start with 3 free trial classes.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Crescent Avenue, Suite 400",
    addressLocality: "Wilmington",
    addressRegion: "DE",
    postalCode: "19801",
    addressCountry: "US",
  },
  sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
  areaServed: "Worldwide",
};

export default function HomePage() {
  const featured = courses.filter((course) => course.featured).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden border-b border-ivory-300">
        <div
          className="absolute inset-0 bg-[radial-gradient(120%_90%_at_82%_0%,#f5edde_0%,#faf5ea_52%,#faf5ea_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-geo opacity-40 [mask-image:linear-gradient(to_right,transparent_10%,black_65%)]"
          aria-hidden="true"
        />

        <div className="container-x relative grid gap-9 pb-10 pt-8 sm:pb-12 sm:pt-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-8 lg:pb-14 lg:pt-12">
          <div className="stagger-in">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-brass-500/70" />
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.26em] text-brass-600 sm:text-[10px]">
                Online Qur&rsquo;an Academy · Since 2015
              </p>
            </div>

            <h1 className="mt-4 max-w-[20ch] font-serif text-[clamp(2.2rem,4.2vw,3.45rem)] leading-[1.08] tracking-[-0.02em] text-forest-950">
              Learn Qur&rsquo;an online — <em className="italic text-brass-600">one-to-one</em>
            </h1>

            <p className="mt-4 max-w-[54ch] text-[13.5px] leading-[1.8] text-ink-500 sm:text-[14.5px]">
              Live lessons for children and adults — Noorani Qaida, Tajweed, Hifz and Arabic with
              certified male &amp; female teachers, at a time that suits you.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/free-trial" className="btn btn-primary">
                Book 3 free trial classes
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/courses" className="btn btn-outline">
                Explore our courses
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] tracking-[0.04em] text-ink-500">
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-brass-600" />
                No card required
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-brass-600" />
                Male &amp; female teachers
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-brass-600" />
                All time zones
              </span>
            </div>

            <dl className="mt-6 grid max-w-md grid-cols-3 gap-3 border-t border-ivory-300 pt-5 sm:gap-5">
              {[
                ["100%", "Free trial classes"],
                ["25+", "Certified teachers"],
                ["500+", "Students worldwide"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-serif text-[24px] leading-none text-forest-950 sm:text-[28px]">
                    {value}
                  </dt>
                  <dd className="mt-1.5 text-[9px] uppercase leading-snug tracking-[0.12em] text-ink-400 sm:text-[9.5px]">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Single 3D Qur'an — no background */}
          <QuranHeroArt />
        </div>
      </section>

      {/* ───────────────────────── Trust strip ───────────────────────── */}
      <section className="border-b border-ivory-300 bg-ivory-50">
        <div className="container-x grid grid-cols-2 gap-x-5 gap-y-6 py-7 sm:py-8 lg:grid-cols-4">
          {[
            { icon: User, text: "One-to-one private lessons" },
            { icon: Shield, text: "Certified Hafiz & Qaria teachers" },
            { icon: Clock, text: "Flexible 24/7 scheduling" },
            { icon: Book, text: "Monthly progress reports" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={text} className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brass-400/30 text-brass-600">
                <Icon className="h-4 w-4" />
              </span>
              <p className="text-[11px] leading-snug text-ink-700 sm:text-[11.5px]">{text}</p>
              {i < 3 ? <span className="ml-auto hidden h-6 w-px bg-ivory-300 lg:block" /> : null}
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────── About preview ───────────────────────── */}
      <section className="section bg-ivory-50">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[460px]">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/about-quran.webp"
                  alt="An open Qur'an on an ornate wooden rehal"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-contain drop-shadow-[0_18px_24px_rgba(8,36,30,0.22)]"
                />
              </div>
              <div className="absolute -left-3 top-20 hidden rounded-[8px] border border-ivory-300 bg-ivory-50 px-4 py-2.5 shadow-lg sm:block">
                <p className="font-serif text-lg leading-none text-brass-600">Since 2015</p>
                <p className="mt-1 text-[8.5px] uppercase tracking-[0.16em] text-ink-400">Serving families</p>
              </div>
              <div className="absolute -bottom-5 right-2 flex items-center gap-4 rounded-[6px] border border-ivory-300 bg-ivory-50 px-5 py-4 shadow-[0_20px_40px_-28px_rgba(8,36,30,0.55)] sm:-right-4">
                <p className="font-serif text-[34px] leading-none text-forest-950">10+</p>
                <p className="max-w-[92px] text-[9.5px] uppercase leading-relaxed tracking-[0.12em] text-ink-400">
                  Years of teaching experience
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <SectionHead
              align="left"
              eyebrow="About the academy"
              title={
                <>
                  A house of learning,
                  <br />
                  <em className="italic text-brass-600">wherever you are</em>
                </>
              }
              description="Al-Ashhad was founded on a simple belief: every Muslim deserves a teacher who is patient, qualified and genuinely invested in their progress. Today our faculty teaches families across fifteen countries — one student at a time."
            />

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              <Tick>Certified Huffaz and Qaria teachers</Tick>
              <Tick>Male and female teachers available</Tick>
              <Tick>Structured, age-appropriate curriculum</Tick>
              <Tick>Monthly reports and lesson recordings</Tick>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/about" className="btn btn-primary">
                Our story
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/teaching-method" className="link-underline ml-1">
                How we teach
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ───────────────────────── Courses preview ───────────────────────── */}
      <section className="section border-y border-ivory-300 bg-ivory-100">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHead
                align="left"
                eyebrow="Qur'an courses"
                title={
                  <>
                    A course for every <em className="italic text-brass-600">learner</em>
                  </>
                }
                description="From the first letter of Noorani Qaida to complete memorisation — each path is taught one-to-one, at your pace."
              />
            </Reveal>
            <Reveal delay={100}>
              <Link href="/courses" className="link-underline shrink-0 sm:mb-1">
                View all eight courses
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featured.map((course, i) => (
              <Reveal key={course.id} delay={i * 80} className="h-full">
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Teaching method ───────────────────────── */}
      <section className="section relative overflow-hidden bg-ivory-200/40">
        <div className="pointer-events-none absolute inset-0 bg-geo opacity-40" aria-hidden="true" />
        <div className="container-x relative">
          <Reveal>
            <SectionHead
              eyebrow="The teaching method"
              title={
                <>
                  Simple for you. <em className="italic text-brass-600">Serious</em> about progress.
                </>
              }
              description="Four calm, clear steps from your first message to a confident, lifelong relationship with the Qur'an."
            />
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[10px] border border-ivory-300 bg-ivory-300 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 90} className="h-full">
                <div className="group h-full bg-ivory-50 p-6 transition-colors duration-500 hover:bg-ivory-100 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[32px] leading-none text-brass-500/80">{step.number}</span>
                    {i === 0 ? (
                      <span className="rounded-full border border-brass-400/40 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-brass-700">
                        Start here
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-6 font-serif text-[21px] leading-tight text-forest-950">{step.title}</h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.8] text-ink-500">{step.description}</p>
                  <p className="mt-4 flex items-center gap-2 text-[9.5px] uppercase tracking-[0.1em] text-brass-600">
                    <span className="h-px w-4 bg-brass-500/60" />
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link href="/teaching-method" className="btn btn-outline">
              See the full teaching method
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Activities preview ───────────────────────── */}
      <section className="section border-t border-ivory-300 bg-ivory-50">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHead
                align="left"
                eyebrow="Activities & programmes"
                title={
                  <>
                    Made for <em className="italic text-brass-600">little hearts</em> and private spaces
                  </>
                }
                description="Dedicated classes for children and for sisters, each with its own pace, tone and teacher."
              />
            </Reveal>
            <Reveal delay={100}>
              <Link href="/activities" className="link-underline shrink-0 sm:mb-1">
                Explore all activities
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {activities.map((activity, i) => (
              <Reveal key={activity.id} delay={i * 120}>
                <article className="group overflow-hidden rounded-[10px] border border-ivory-300 bg-ivory-50">
                  <div className="relative">
                    {activity.id === "kids" ? (
                      <PhotoCard src="/images/kids-quran.webp" alt={activity.title} />
                    ) : (
                      <QuranArtwork
                        ratio="aspect-[4/3] sm:aspect-[16/10]"
                        variant="dusk"
                        alt={activity.title}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    <span className="absolute left-4 top-4 rounded-full border border-ivory-300 bg-ivory-50/90 px-3 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-brass-700 backdrop-blur sm:left-5 sm:top-5 sm:text-[8.5px]">
                      {activity.eyebrow}
                    </span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-[21px] leading-tight text-forest-950 sm:text-[26px]">{activity.title}</h3>
                    <p className="mt-2.5 text-[13px] leading-[1.8] text-ink-500">{activity.description}</p>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {activity.points.slice(0, 4).map((point) => (
                        <Tick key={point}>{point}</Tick>
                      ))}
                    </ul>
                    <Link
                      href={`/activities#${activity.id}`}
                      className="link-underline mt-6 inline-flex"
                    >
                      Explore {activity.id === "kids" ? "kids classes" : "sisters classes"}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Testimonials preview ───────────────────────── */}
      <section className="section border-y border-ivory-300 bg-ivory-200/40">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHead
                align="left"
                eyebrow="Student testimonials"
                title={
                  <>
                    Trusted by <em className="italic text-brass-600">500+ families</em>
                  </>
                }
                description="Real words from parents and students who began exactly where you are now."
              />
            </Reveal>
            <Reveal delay={80}>
              <div className="flex items-center gap-4 rounded-[6px] border border-ivory-300 bg-ivory-50 px-5 py-4">
                <p className="font-serif text-[40px] leading-none text-forest-950">4.9</p>
                <div>
                  <Stars rating={5} className="text-brass-500" />
                  <p className="mt-1.5 text-[9.5px] uppercase tracking-[0.12em] text-ink-400">
                    120+ verified reviews
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={i * 100} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/testimonials" className="link-underline">
              Read all student testimonials
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

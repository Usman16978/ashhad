import Link from "next/link";
import type { Metadata } from "next";
import QuranArtwork from "@/components/QuranArtwork";
import PhotoCard from "@/components/PhotoCard";
import Reveal from "@/components/Reveal";
import TestimonialCard from "@/components/TestimonialCard";
import { CtaBand, PageHero, SectionHead, Stars, Tick } from "@/components/ui";
import {
  ArrowRight,
  Clock,
  GraduationCap,
  Moon,
  Shield,
  Sparkle,
  Star,
  Users,
} from "@/components/Icons";
import { activities, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Activities & Programmes",
  description:
    "Kids Qur'an classes for ages 4–12 and private female Qur'an classes for sisters, plus Ramadan and summer intensives at Al-Ashhad International Taleem-ul-Quran Academy.",
};

const seasonal = [
  {
    icon: Moon,
    title: "Ramadan Intensive",
    duration: "30 days · daily",
    description:
      "A focused month of recitation, tajweed revision and du'a memorisation, with a lighter schedule for younger children.",
    tags: ["All ages", "Daily", "Ramadan only"],
  },
  {
    icon: GraduationCap,
    title: "Summer Hifz Camp",
    duration: "8 weeks · 4 days/week",
    description:
      "A gentle introduction to memorisation with daily sabaq, revision circles and a certificate at the end of the camp.",
    tags: ["Ages 7–16", "June – August", "Small goals"],
  },
  {
    icon: Sparkle,
    title: "New Muslim Foundations",
    duration: "6 weeks · 2 days/week",
    description:
      "The essentials at a comfortable pace: short surahs, salah, wudu and the meaning behind what we recite.",
    tags: ["Adults", "Beginner", "Private"],
  },
];

export default function ActivitiesPage() {
  const kidsTestimonials = testimonials.filter((t) =>
    ["Qur'an for Kids", "Qur'an for Sisters"].includes(t.course)
  );

  return (
    <>
      <PageHero
        breadcrumb="Activities"
        eyebrow="Activities & programmes"
        artTone="ember"
        title={
          <>
            Classes shaped for
            <br />
            <em className="italic text-brass-600">children and sisters</em>
          </>
        }
        description="Some learners need a shorter lesson, a gentler voice or a private space. Our dedicated programmes are designed around those needs — never as an afterthought."
      >
        <Link href="/free-trial" className="btn btn-primary">
          Book a free trial
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/courses" className="btn btn-outline">
          See all courses
        </Link>
      </PageHero>

      {/* Intro strip */}
      <section className="border-b border-ivory-300 bg-ivory-50">
        <div className="container-x grid grid-cols-2 gap-6 py-7 sm:grid-cols-4">
          {[
            ["4+", "Youngest age"],
            ["25 min", "Kids lessons"],
            ["100%", "Female teachers for sisters"],
            ["1:1", "Always private"],
          ].map(([value, label]) => (
            <div key={label} className="border-l border-brass-500/30 pl-4">
              <p className="font-serif text-[24px] leading-none text-forest-950">{value}</p>
              <p className="mt-1.5 text-[9px] uppercase leading-snug tracking-[0.12em] text-ink-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Kids */}
      <section id="kids" className="section scroll-mt-24 bg-ivory-100">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_.95fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Ages 4 – 12</p>
            <h2 className="display-2 mt-4">
              Kids Qur&rsquo;an classes that feel like <em className="italic text-brass-600">play</em>
            </h2>
            <p className="lead mt-5">
              Little learners cannot sit through a long, serious lesson — and they should not have
              to. Our kids&rsquo; classes are short, warm and full of encouragement, with a teacher
              who knows how to make a seven-year-old proud of one correct letter.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {activities[0].points.map((point) => (
                <Tick key={point}>{point}</Tick>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Clock, title: "25–30 min", text: "Short, focused lessons" },
                { icon: Star, title: "Rewards", text: "Charts & certificates" },
                { icon: Users, title: "Parents", text: "Weekly updates" },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-t border-ivory-300 pt-3.5">
                  <Icon className="h-4 w-4 text-brass-600" />
                  <p className="mt-2 font-serif text-[17px] leading-tight text-forest-950">{title}</p>
                  <p className="mt-0.5 text-[10.5px] leading-relaxed text-ink-400">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/free-trial" className="btn btn-primary">
                Book a kids&rsquo; trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/courses#kids" className="link-underline ml-1">
                Course details
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-[480px]">
              <PhotoCard src="/images/kids-quran.webp" alt="Colourful 3D illustration of a Qur'an, Arabic letter blocks and a tablet" />
              <span className="absolute left-4 top-24 rounded-full border border-ivory-300 bg-ivory-50/90 px-3.5 py-1.5 text-[8.5px] font-semibold uppercase tracking-[0.16em] text-brass-700 backdrop-blur">
                Ages 4 – 12
              </span>
              <div className="absolute -bottom-5 right-2 rounded-[6px] border border-ivory-300 bg-ivory-50 px-4 py-3 shadow-[0_20px_40px_-28px_rgba(8,36,30,0.55)] sm:-right-4">
                <div className="flex items-center gap-2">
                  <Stars rating={5} />
                  <span className="text-[10px] font-semibold text-forest-950">Loved by parents</span>
                </div>
                <p className="mt-1 text-[9px] uppercase tracking-[0.1em] text-ink-400">
                  Gentle, patient teaching
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sisters */}
      <section id="sisters" className="section scroll-mt-24 border-y border-ivory-300 bg-ivory-50">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[.95fr_1fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-[480px]">
              <QuranArtwork ratio="aspect-[4/3]" variant="dusk" />
              <div className="absolute -left-3 top-24 hidden rounded-[6px] border border-ivory-300 bg-ivory-50 px-4 py-2.5 shadow-lg sm:block">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-brass-600">
                  Private by design
                </p>
                <p className="mt-1 font-serif text-[17px] text-forest-950">Female teachers only</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <p className="eyebrow">Girls 13+ &amp; women</p>
            <h2 className="display-2 mt-4">
              A comfortable space for <em className="italic text-brass-600">sisters</em>
            </h2>
            <p className="lead mt-5">
              Learn with a qualified female Qaria teacher, in complete privacy. Ask the questions you
              have always wanted to ask, at a pace that fits around work, study and family life.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {activities[1].points.map((point) => (
                <Tick key={point}>{point}</Tick>
              ))}
            </ul>

            <div className="mt-8 rounded-[8px] border border-brass-400/30 bg-brass-50/60 p-5">
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-brass-700" />
                <div>
                  <p className="font-serif text-[18px] text-forest-950">Your privacy is our baseline</p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-ink-500">
                    Lessons are never recorded without your permission, and your details are never
                    shared with third parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/free-trial" className="btn btn-primary">
                Book a sisters&rsquo; trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/courses#sisters" className="link-underline ml-1">
                Course details
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Seasonal programmes */}
      <section className="section bg-ivory-100">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Seasonal programmes"
              title={
                <>
                  Short courses for a <em className="italic text-brass-600">fresh start</em>
                </>
              }
              description="Focused programmes throughout the year — ideal for building momentum without a long commitment."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {seasonal.map(({ icon: Icon, title, duration, description, tags }, i) => (
              <Reveal key={title} delay={i * 90} className="h-full">
                <article className="card card-hover flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-full border border-brass-400/30 bg-brass-50 text-brass-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-ink-400">
                      {duration}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-[23px] leading-tight text-forest-950">{title}</h3>
                  <p className="mt-2.5 flex-1 text-[12.5px] leading-[1.8] text-ink-500">{description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-ivory-200 pt-4">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ivory-300 bg-ivory-100 px-2.5 py-1 text-[8.5px] font-semibold uppercase tracking-[0.08em] text-ink-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/free-trial" className="link-underline mt-5 inline-flex self-start">
                    Register interest
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parent words */}
      <section className="section border-y border-ivory-300 bg-ivory-200/40">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHead
                align="left"
                eyebrow="Parent stories"
                title={
                  <>
                    In their <em className="italic text-brass-600">own words</em>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={80}>
              <Link href="/testimonials" className="link-underline sm:mb-1">
                All testimonials
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {kidsTestimonials.slice(0, 2).map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={i * 100} className="h-full">
                <TestimonialCard testimonial={testimonial} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Reserve a place"
        title="Give your child a teacher they will look forward to."
        description="Book three free classes — for a child, a sister, or yourself. Meet the teacher first, then decide."
      />
    </>
  );
}

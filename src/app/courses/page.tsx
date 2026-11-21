import Link from "next/link";
import type { Metadata } from "next";
import CourseCard from "@/components/CourseCard";
import Reveal from "@/components/Reveal";
import { CtaBand, Ornament, PageHero, SectionHead, Tick } from "@/components/ui";
import { ArrowRight, Book, Calendar, Clock, Globe, Shield, User, Video } from "@/components/Icons";
import { courses } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quran Courses",
  description:
    "Explore eight one-to-one online Qur'an courses: Noorani Qaida, Tajweed, Hifz, Tafseer, Arabic, Islamic studies, kids classes and sisters-only classes.",
};

const included = [
  "One-to-one live lessons on Zoom or Google Meet",
  "A personal learning plan reviewed every month",
  "Printed and digital course materials",
  "Lesson recordings on request",
  "Monthly written progress reports",
  "Direct WhatsApp access to your teacher",
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Courses"
        eyebrow="Qur'an courses"
        artTone="jade"
        title={
          <>
            A course for every age,
            <br />
            <em className="italic text-brass-600">every stage</em>
          </>
        }
        description="Eight structured programmes, all taught one-to-one. Whether you are opening the Qur'an for the first time or refining a nearly-complete memorisation, there is a path for you."
      >
        <Link href="/free-trial" className="btn btn-primary">
          Book a free trial
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Ask a question
        </Link>
      </PageHero>

      <section className="section bg-ivory-50">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-ivory-300 pb-6">
              <div className="flex flex-wrap gap-2">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses#${course.id}`}
                    className="rounded-full border border-ivory-300 bg-ivory-100 px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.02em] text-ink-700 transition-colors hover:border-brass-400/70 hover:bg-brass-50 hover:text-brass-700"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-ink-400">8 courses · Ages 4+</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {courses.map((course, i) => (
              <Reveal key={course.id} delay={(i % 4) * 70} className="h-full">
                <CourseCard course={course} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Ornament />
            <p className="max-w-xl text-center text-[11.5px] leading-relaxed text-ink-400">
              Not sure where to begin? Book a free assessment — your teacher will recommend the right
              starting point after the first lesson.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section border-y border-ivory-300 bg-ivory-200/40">
        <div className="container-x grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHead
              align="left"
              eyebrow="What's included"
              title={
                <>
                  More than a weekly <em className="italic text-brass-600">call</em>
                </>
              }
              description="Every enrolment includes the structure, materials and communication a family needs to stay consistent."
            />
            <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
              {included.map((item) => (
                <Tick key={item}>{item}</Tick>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/free-trial" className="btn btn-primary">
                Start with a free trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Video,
                  title: "Live, recorded",
                  text: "Every lesson is live. Recordings are available on request for revision between classes.",
                },
                {
                  icon: Calendar,
                  title: "Flexible schedule",
                  text: "Choose your days and times. Reschedule any class with four hours' notice.",
                },
                {
                  icon: Shield,
                  title: "Qualified teachers",
                  text: "Certified Huffaz and Qaria teachers, assessed before they join the faculty.",
                },
                {
                  icon: Globe,
                  title: "Any time zone",
                  text: "Classes run around the clock, seven days a week — including weekends.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="card p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-brass-400/30 bg-brass-50 text-brass-700">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <p className="mt-4 font-serif text-[19px] leading-tight text-forest-950">{title}</p>
                  <p className="mt-2 text-[11.5px] leading-[1.75] text-ink-500">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* How enrolment works */}
      <section className="section bg-ivory-50">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Enrolment"
              title={
                <>
                  Three steps to your first <em className="italic text-brass-600">lesson</em>
                </>
              }
              description="No lengthy forms, no registration fees. Just a conversation and a class."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Tell us about the student",
                text: "Share age, current level and preferred times through the trial form or WhatsApp.",
                icon: User,
              },
              {
                n: "02",
                title: "Meet your teacher",
                text: "We arrange a free 30-minute trial with a teacher suited to your needs.",
                icon: Book,
              },
              {
                n: "03",
                title: "Choose your plan",
                text: "If it feels right, pick a schedule. Fees are quoted clearly in writing.",
                icon: Clock,
              },
            ].map(({ n, title, text, icon: Icon }, i) => (
              <Reveal key={n} delay={i * 90} className="h-full">
                <div className="relative h-full border-t border-ivory-300 pt-6">
                  <span className="absolute -top-px left-0 h-px w-14 bg-brass-500" />
                  <div className="flex items-center justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-brass-400/30 text-brass-700">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="font-serif text-xl text-brass-500">{n}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-[22px] leading-tight text-forest-950">{title}</h3>
                  <p className="mt-2 text-[12.5px] leading-[1.8] text-ink-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Not sure which course?"
        title="Let a teacher guide you — in a free class."
        description="We will assess the student's level, explain the options honestly and recommend the right starting point."
      />
    </>
  );
}

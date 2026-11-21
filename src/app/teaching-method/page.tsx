import Link from "next/link";
import type { Metadata } from "next";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero, SectionHead } from "@/components/ui";
import {
  ArrowRight,
  Book,
  Calendar,
  Check,
  Clock,
  Heart,
  Shield,
  User,
  Users,
  Video,
} from "@/components/Icons";
import { faqs, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teaching Method",
  description:
    "How Al-Ashhad teaches Qur'an online: a four-step method built on one-to-one live lessons, qualified teachers, clear goals and monthly progress reports.",
};

const details = [
  {
    icon: Calendar,
    points: ["Choose a slot in your own time zone", "Confirm by WhatsApp or email", "No card details required"],
  },
  {
    icon: User,
    points: ["Male or female teacher, your choice", "English, Arabic or Urdu", "A short assessment in the first class"],
  },
  {
    icon: Book,
    points: ["Course, schedule and goals agreed in writing", "Materials posted or sent digitally", "Monthly plan review"],
  },
  {
    icon: Video,
    points: ["Live one-to-one lessons", "Recordings available on request", "Parent updates and termly reports"],
  },
];

const principles = [
  {
    icon: User,
    title: "One student, one teacher",
    text: "No group calls, no shared attention. Every minute of the lesson belongs to one student.",
  },
  {
    icon: Heart,
    title: "Patience over pressure",
    text: "Children are never rushed or compared. Progress is celebrated, mistakes are corrected gently.",
  },
  {
    icon: Shield,
    title: "Authentic and balanced",
    text: "A mainstream curriculum, taught with adab and without extremism or innovation.",
  },
  {
    icon: Users,
    title: "Parents as partners",
    text: "Clear reports, honest feedback and an open line to the teacher at all times.",
  },
];

const week = [
  ["Monday", "Live lesson", "Tajweed — new rule and recitation"],
  ["Tuesday", "Self revision", "15 minutes with the practice sheet"],
  ["Wednesday", "Live lesson", "Tajweed — application and correction"],
  ["Thursday", "Practice at home", "Read aloud to a parent"],
  ["Friday", "Live lesson", "Sabaq, sabqi and du'a"],
  ["Saturday", "Rest", "No written work — revise gently if you wish"],
  ["Sunday", "Report", "Teacher's weekly note to parents"],
];

export default function TeachingMethodPage() {
  return (
    <>
      <PageHero
        breadcrumb="Teaching Method"
        eyebrow="The teaching method"
        artTone="night"
        title={
          <>
            Calm, structured teaching —
            <br />
            <em className="italic text-brass-600">built around one student</em>
          </>
        }
        description="Good Qur'an teaching is not complicated. It is a qualified teacher, a clear plan, a patient pace and a family that stays involved. Everything we do is built on those four things."
      >
        <Link href="/free-trial" className="btn btn-primary">
          Experience a free class
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/courses" className="btn btn-outline">
          Browse courses
        </Link>
      </PageHero>

      {/* Statement */}
      <section className="border-b border-ivory-300 bg-ivory-50">
        <div className="container-x py-12 sm:py-16">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-arabic text-2xl leading-relaxed text-brass-600 sm:text-[30px]" lang="ar" dir="rtl">
                وَقُل رَّبِّ زِدْنِي عِلْمًا
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-ink-400">
                &ldquo;My Lord, increase me in knowledge.&rdquo; — Ta-Ha 20:114
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Steps */}
      <section className="section bg-ivory-100">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="From first message to first lesson"
              title={
                <>
                  Four steps. <em className="italic text-brass-600">No confusion.</em>
                </>
              }
              description="You will always know what happens next, who your teacher is and what is expected."
            />
          </Reveal>

          <div className="mt-12 space-y-0">
            {steps.map((step, i) => {
              const detail = details[i];
              const Icon = detail.icon;
              return (
                <Reveal key={step.number} delay={60}>
                  <div className="grid gap-6 border-t border-ivory-300 py-10 last:border-b lg:grid-cols-[110px_1.1fr_.9fr] lg:gap-10 lg:py-12">
                    <div className="flex items-start gap-4 lg:block">
                      <span className="font-serif text-[44px] leading-none text-brass-500/80 lg:text-[56px]">
                        {step.number}
                      </span>
                      <span className="mt-1 h-px w-10 bg-brass-500/50 lg:mt-5 lg:block" />
                    </div>

                    <div>
                      <h2 className="font-serif text-[26px] leading-tight text-forest-950 sm:text-[30px]">
                        {step.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-[13.5px] leading-[1.9] text-ink-500">
                        {step.description}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-brass-600">
                        <Check className="h-3.5 w-3.5" />
                        {step.detail}
                      </p>
                    </div>

                    <div className="rounded-[8px] border border-ivory-300 bg-ivory-50 p-5 sm:p-6">
                      <div className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-900 text-brass-200">
                          <Icon className="h-4 w-4" />
                        </span>
                        <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                          What to expect
                        </p>
                      </div>
                      <ul className="mt-4 space-y-2.5">
                        {detail.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-[12px] leading-relaxed text-ink-500">
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brass-500" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section border-y border-ivory-300 bg-ivory-200/40">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Our teaching principles"
              title={
                <>
                  What good teaching <em className="italic text-brass-600">looks like</em>
                </>
              }
              description="These are not slogans. They are the standards we use when reviewing every teacher, every term."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className="h-full">
                <div className="card h-full p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-brass-400/30 bg-brass-50 text-brass-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-[21px] leading-snug text-forest-950">{title}</h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.8] text-ink-500">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Week */}
      <section className="section bg-ivory-50">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-16">
          <Reveal>
            <SectionHead
              align="left"
              eyebrow="A typical week"
              title={
                <>
                  Small, steady steps —
                  <br />
                  <em className="italic text-brass-600">every week</em>
                </>
              }
              description="Three lessons, two short revisions and a note home. Enough to make real progress without overwhelming a young learner."
            />
            <div className="mt-7 flex flex-wrap gap-4">
              {[
                ["3", "Live lessons"],
                ["90", "Minutes taught"],
                ["1", "Written report"],
              ].map(([value, label]) => (
                <div key={label} className="border-l border-brass-500/30 pl-4">
                  <p className="font-serif text-[28px] leading-none text-forest-950">{value}</p>
                  <p className="mt-1.5 text-[9px] uppercase tracking-[0.12em] text-ink-400">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 flex items-center gap-2 text-[11px] text-ink-400">
              <Clock className="h-3.5 w-3.5 text-brass-600" />
              Timings shown are examples — everything is adapted to your family.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-[10px] border border-ivory-300 bg-ivory-50">
              <div className="flex items-center justify-between border-b border-ivory-300 bg-ivory-200/60 px-5 py-3.5 sm:px-6">
                <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-brass-700">
                  Sample schedule — Tajweed, age 9
                </p>
                <p className="text-[9.5px] uppercase tracking-[0.12em] text-ink-400">Week 06</p>
              </div>
              <ul>
                {week.map(([day, activity, note]) => (
                  <li
                    key={day}
                    className="flex flex-col gap-1 border-b border-ivory-200 px-5 py-4 last:border-b-0 sm:grid sm:grid-cols-[90px_130px_1fr] sm:items-center sm:gap-4 sm:px-6"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-forest-900">
                      {day}
                    </span>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.1em] ${
                        activity === "Live lesson"
                          ? "text-brass-600"
                          : activity === "Report"
                            ? "text-forest-600"
                            : "text-ink-400"
                      }`}
                    >
                      {activity}
                    </span>
                    <span className="text-[11.5px] leading-relaxed text-ink-500">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tools + FAQ */}
      <section className="section border-t border-ivory-300 bg-ivory-100">
        <div className="container-x grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHead
              align="left"
              eyebrow="Simple technology"
              title={
                <>
                  All you need is a screen
                  <br />
                  and an <em className="italic text-brass-600">intention</em>
                </>
              }
              description="We keep the technology invisible so the lesson stays front and centre."
            />
            <ul className="mt-7 space-y-3.5">
              {[
                "Zoom or Google Meet — whichever you prefer",
                "Digital Mushaf and printable worksheets",
                "Lesson recordings on request",
                "WhatsApp support between classes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-500">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass-600" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-outline">
                Ask about your setup
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="eyebrow">Common questions</p>
              <h2 className="display-3 mt-3">Before your first class</h2>
              <Faq items={faqs.slice(0, 5)} className="mt-6" />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Try the method"
        title="You will feel the difference in the first lesson."
        description="Meet a teacher, ask your questions and see how a calm, personal class feels — free of charge."
      />
    </>
  );
}

import Link from "next/link";
import type { Metadata } from "next";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import TrialForm from "@/components/TrialForm";
import { PageHero, SectionHead, Stars, Tick } from "@/components/ui";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Shield,
  User,
  Video,
  WhatsApp,
} from "@/components/Icons";
import { faqs, whatsappLink, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Trial",
  description:
    "Book three free one-to-one Qur'an classes with a certified Hafiz or Qaria teacher. No card details, no obligation — all ages and time zones welcome.",
};

const nextSteps = [
  {
    icon: Calendar,
    title: "You send this form",
    text: "It takes two minutes. Tell us the student's age, level and preferred time.",
  },
  {
    icon: User,
    title: "We match a teacher",
    text: "Our admissions team chooses a teacher who fits your language and preference.",
  },
  {
    icon: Video,
    title: "You meet in class",
    text: "Three complete one-to-one lessons, at a time that suits your family.",
  },
];

export default function FreeTrialPage() {
  return (
    <>
      <PageHero
        breadcrumb="Free Trial"
        eyebrow="Three classes, on us"
        artTone="plum"
        title={
          <>
            Try us properly.
            <br />
            <em className="italic text-brass-600">Then decide.</em>
          </>
        }
        description="Not a taster call or a sales pitch — three complete one-to-one lessons with a qualified teacher, so you can judge the teaching for yourself."
      >
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-ink-500">
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-brass-600" />
            No card details
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-brass-600" />
            No obligation
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="h-3.5 w-3.5 text-brass-600" />
            Reply within one day
          </span>
        </div>
      </PageHero>

      <section className="section bg-ivory-100">
        <div className="container-x grid gap-8 lg:grid-cols-[1.12fr_.88fr] lg:gap-12">
          <Reveal>
            <TrialForm />
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <div className="card p-6 sm:p-7">
              <p className="eyebrow">What happens next</p>
              <ol className="mt-5 space-y-5">
                {nextSteps.map(({ icon: Icon, title, text }, i) => (
                  <li key={title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brass-400/40 bg-brass-50 text-brass-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      {i < nextSteps.length - 1 ? (
                        <span className="mt-1 min-h-6 w-px flex-1 bg-ivory-300" aria-hidden="true" />
                      ) : null}
                    </div>
                    <div className="pb-1">
                      <p className="font-serif text-[18px] leading-tight text-forest-950">{title}</p>
                      <p className="mt-1 text-[11.5px] leading-relaxed text-ink-500">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="card p-6 sm:p-7">
              <p className="eyebrow">Included in your trial</p>
              <ul className="mt-5 space-y-3">
                <Tick>30-minute one-to-one lesson</Tick>
                <Tick>Level assessment and honest advice</Tick>
                <Tick>Course and schedule recommendation</Tick>
                <Tick>No payment details requested</Tick>
              </ul>
              <div className="mt-5 flex items-center gap-3 border-t border-ivory-200 pt-5">
                <Shield className="h-5 w-5 shrink-0 text-brass-600" />
                <p className="text-[10.5px] leading-relaxed text-ink-400">
                  Your details are used only to arrange your trial. We never sell or share them.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[10px] border border-ivory-300 bg-forest-950 p-6 text-ivory-100 sm:p-7">
              <div className="absolute inset-0 bg-geo-light opacity-50" aria-hidden="true" />
              <div className="relative">
                <Stars rating={5} className="text-brass-400" />
                <blockquote className="mt-4 font-serif text-[19px] leading-[1.5] text-ivory-50">
                  &ldquo;The trial class convinced us immediately. The teacher assessed my daughter,
                  explained the plan and never once pushed us to pay.&rdquo;
                </blockquote>
                <p className="mt-4 text-[10px] uppercase tracking-[0.1em] text-brass-300">
                  Bilal Siddiqui · Riyadh, Saudi Arabia
                </p>
                <Link
                  href="/testimonials"
                  className="mt-5 inline-flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-ivory-200/70 transition-colors hover:text-ivory-50"
                >
                  Read more stories
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-[10px] border border-brass-400/30 bg-brass-50/60 p-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-brass-700">
                Need help booking?
              </p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-ink-500">
                Message us on WhatsApp and we will book the trial for you.
              </p>
              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex-1 !py-3"
                >
                  <WhatsApp className="h-4 w-4" />
                  WhatsApp
                </a>
                <a href={`tel:${site.phoneHref}`} className="btn btn-outline flex-1 !py-3">
                  <Clock className="h-4 w-4" />
                  Call us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="border-y border-ivory-300 bg-ivory-50">
        <div className="container-x grid gap-6 py-9 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Shield, title: "No card required", text: "We never ask for payment details for a trial." },
            { icon: Clock, title: "All time zones", text: "Classes from early morning to late night." },
            { icon: User, title: "Male or female", text: "Choose the teacher you are comfortable with." },
            { icon: Video, title: "Live & one-to-one", text: "A real class, not a recorded demo." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brass-400/30 text-brass-600">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11.5px] font-semibold text-forest-950">{title}</p>
                <p className="mt-0.5 text-[10.5px] leading-relaxed text-ink-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-ivory-100">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Before you book"
              title={
                <>
                  A few honest <em className="italic text-brass-600">answers</em>
                </>
              }
              description="Everything families usually ask before their first class."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-9 max-w-3xl">
              <Faq items={[faqs[0], faqs[1], faqs[2], faqs[5]]} />
            </div>
          </Reveal>
          <div className="mt-8 text-center">
            <Link href="/contact" className="link-underline">
              Ask us something else
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

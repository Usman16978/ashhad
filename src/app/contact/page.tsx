import Link from "next/link";
import type { Metadata } from "next";
import { MapArt } from "@/components/Art";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { PageHero, SectionHead, Tick } from "@/components/ui";
import {
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Shield,
  WhatsApp,
  YouTube,
} from "@/components/Icons";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Al-Ashhad International Taleem-ul-Quran Academy — call, WhatsApp or email our admissions team. We reply within one working day and teach across all time zones.",
};

const mapQuery = encodeURIComponent(site.addressLines.join(", "));

export default function ContactPage() {
  const contactCards = [
    {
      icon: Phone,
      label: "Call us",
      value: site.phoneDisplay,
      note: "Mon – Sun · all time zones",
      href: `tel:${site.phoneHref}`,
      external: false,
    },
    {
      icon: WhatsApp,
      label: "WhatsApp",
      value: "Message our team",
      note: "The fastest way to reach us",
      href: whatsappLink(),
      external: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: site.email,
      note: "Replies within one working day",
      href: `mailto:${site.email}`,
      external: false,
    },
    {
      icon: MapPin,
      label: "Visit / post",
      value: "Wilmington, Delaware",
      note: "Full address below",
      href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
      external: true,
    },
  ];

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Contact us"
        artTone="moss"
        title={
          <>
            We would love to
            <br />
            <em className="italic text-brass-600">hear from you</em>
          </>
        }
        description="A question about a course, a fee, a teacher or your child's first lesson — ask us anything. A real person from our admissions team will reply."
      >
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <WhatsApp className="h-4 w-4" />
          Chat on WhatsApp
        </a>
        <Link href="/free-trial" className="btn btn-outline">
          Book a free trial
        </Link>
      </PageHero>

      {/* Contact cards */}
      <section className="border-b border-ivory-300 bg-ivory-50">
        <div className="container-x grid grid-cols-1 gap-px bg-ivory-300 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map(({ icon: Icon, label, value, note, href, external }, i) => (
            <Reveal key={label} delay={i * 60} className="h-full">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full items-start gap-4 bg-ivory-50 px-5 py-7 transition-colors hover:bg-ivory-100 lg:py-8"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brass-400/30 bg-brass-50 text-brass-700 transition-colors group-hover:border-brass-500/60">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-brass-600">
                    {label}
                  </p>
                  <p className="mt-1.5 break-words font-serif text-[17px] leading-tight text-forest-950">
                    {value}
                  </p>
                  <p className="mt-1 text-[10.5px] leading-relaxed text-ink-400">{note}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + info */}
      <section className="section bg-ivory-100">
        <div className="container-x grid gap-8 lg:grid-cols-[1.02fr_.98fr] lg:gap-12">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <div className="card p-6 sm:p-8">
              <p className="eyebrow">Admissions office</p>
              <h2 className="mt-3 font-serif text-[26px] leading-tight text-forest-950">
                Speak to a human, not a bot.
              </h2>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink-500">
                Our team is small and answers personally. Tell us the student&rsquo;s age and what you
                are hoping for, and we will recommend the right next step.
              </p>

              <div className="mt-6 space-y-4 border-t border-ivory-200 pt-6 text-[12.5px]">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass-600" />
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                      Head office
                    </p>
                    {site.addressLines.map((line) => (
                      <p key={line} className="mt-0.5 leading-relaxed text-ink-500">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brass-600" />
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                      Class hours
                    </p>
                    <p className="mt-0.5 text-ink-500">{site.hours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-4 w-4 shrink-0 text-brass-600" />
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-ink-400">
                      Response time
                    </p>
                    <p className="mt-0.5 text-ink-500">{site.responseTime}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2.5 border-t border-ivory-200 pt-5">
                <p className="mr-1 text-[9px] uppercase tracking-[0.14em] text-ink-400">Follow</p>
                {[
                  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
                  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
                  { label: "YouTube", href: site.social.youtube, Icon: YouTube },
                ].map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-8 w-8 place-items-center rounded-full border border-ivory-300 text-ink-500 transition-colors hover:border-brass-500 hover:text-brass-700"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[10px] border border-ivory-300 bg-ivory-200">
              <div className="relative h-[240px]">
                <MapArt className="h-full w-full" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/5 to-transparent" />
                <div className="absolute left-4 top-4 rounded-[6px] border border-ivory-300/70 bg-ivory-50/95 px-3.5 py-2.5 shadow-sm backdrop-blur">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-brass-600">
                    Head office
                  </p>
                  <p className="mt-1 font-serif text-[14px] leading-tight text-forest-950">
                    Wilmington, Delaware
                  </p>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-brass-300">
                    Online, worldwide
                  </p>
                  <p className="mt-1.5 font-serif text-[24px] leading-tight text-ivory-50">
                    Students in 15+ countries
                  </p>
                  <p className="mt-1.5 text-[11px] text-ivory-200/65">
                    Every class is live and one-to-one — wherever you are.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] border border-brass-400/30 bg-brass-50/60 p-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-brass-700">
                Prefer to talk?
              </p>
              <p className="mt-2 font-serif text-[20px] leading-snug text-forest-950">
                Message us on WhatsApp — we usually reply within minutes.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-4 w-full !py-3.5"
              >
                <WhatsApp className="h-4 w-4" />
                Open WhatsApp
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section border-t border-ivory-300 bg-ivory-50">
        <div className="container-x grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHead
                align="left"
                eyebrow="Frequently asked"
                title={
                  <>
                    Answers before
                    <br />
                    you <em className="italic text-brass-600">ask</em>
                  </>
                }
                description="Still unsure about something? Send us a message — no question is too small."
              />
              <ul className="mt-6 space-y-3">
                <Tick>No registration fee</Tick>
                <Tick>No card required for the trial</Tick>
                <Tick>Cancel or pause any time</Tick>
              </ul>
              <Link href="/free-trial" className="btn btn-primary mt-7">
                Book a free trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Faq />
          </Reveal>
        </div>
      </section>
    </>
  );
}

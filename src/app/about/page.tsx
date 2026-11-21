import Link from "next/link";
import type { Metadata } from "next";
import QuranArtwork from "@/components/QuranArtwork";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero, SectionHead, Tick } from "@/components/ui";
import { ArrowRight, Award, Book, Globe, Heart, Shield, User, Users } from "@/components/Icons";
import { stats, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Our Academy",
  description:
    "Meet Al-Ashhad International Taleem-ul-Quran Academy — a home of Qur'anic learning for families in 15+ countries, built on qualified teachers, structured teaching and genuine care.",
};

const valueIcons = {
  heart: Heart,
  book: Book,
  user: User,
  users: Users,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About"
        eyebrow="About our academy"
        artTone="forest"
        title={
          <>
            A home of Qur&rsquo;an learning,
            <br />
            <em className="italic text-brass-600">built on trust</em>
          </>
        }
        description="Al-Ashhad began with one teacher, one student and a shared intention. Today we serve more than five hundred families across the world — with the same care we began with."
      >
        <Link href="/free-trial" className="btn btn-primary">
          Book a free trial
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/teaching-method" className="btn btn-outline">
          How we teach
        </Link>
      </PageHero>

      {/* Story */}
      <section className="section bg-ivory-50">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-[16px] border border-brass-400/40 bg-gradient-to-br from-ivory-50 via-ivory-100 to-ivory-200 px-7 py-12 text-center shadow-[0_30px_60px_-40px_rgba(8,36,30,0.45)] sm:px-10 sm:py-16">
              <div className="bg-geo pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
              <span className="pointer-events-none absolute inset-3 rounded-[10px] border border-brass-400/25" aria-hidden="true" />
              <div className="relative">
                <span className="mx-auto block h-px w-10 bg-brass-500/70" aria-hidden="true" />
                <p className="mt-7 font-arabic text-[clamp(2rem,5vw,3.1rem)] font-bold leading-[1.7] tracking-wide text-brass-600" lang="ar" dir="rtl">
                  وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
                </p>
                <span className="mx-auto mt-7 block h-px w-10 bg-brass-500/70" aria-hidden="true" />
                <p className="mt-6 font-serif text-[19px] italic leading-relaxed text-forest-800 sm:text-[22px]">
                  &ldquo;And recite the Qur&rsquo;an with measured recitation.&rdquo;
                </p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-brass-700">
                  Surah Al-Muzzammil · 73:4
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHead
              align="left"
              eyebrow="Our story"
              title={
                <>
                  Founded by teachers,
                  <br />
                  <em className="italic text-brass-600">for families</em>
                </>
              }
            />
            <div className="mt-5 space-y-4 text-[14px] leading-[1.9] text-ink-500">
              <p>
                In 2015, our founding teacher began teaching Qur&rsquo;an online to a handful of
                families who struggled to find a qualified teacher near home. Lessons were simple:
                one teacher, one student, a shared screen and a great deal of patience.
              </p>
              <p>
                That approach never changed — only the number of families it reached. Today Al-Ashhad
                is a small, deliberately personal academy with certified Huffaz and Qaria teachers
                in several countries, teaching in English, Arabic and Urdu.
              </p>
              <p>
                We are not a content library or a recorded course. Every lesson is live, personal
                and adapted to the student in front of the teacher. That is slower to scale, but it
                is the only way we know how to teach the Book of Allah.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/courses" className="btn btn-primary">
                Explore courses
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="link-underline ml-1">
                Speak to our team
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-ivory-300 bg-ivory-200/50">
        <div className="container-x grid grid-cols-2 gap-x-6 gap-y-8 py-10 sm:py-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="border-l border-brass-500/30 pl-5">
                <p className="font-serif text-[34px] leading-none text-forest-950 sm:text-[40px]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[9.5px] uppercase leading-relaxed tracking-[0.14em] text-ink-400">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section bg-ivory-100">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Mission &amp; vision"
              title={
                <>
                  Why we exist, and where we are <em className="italic text-brass-600">going</em>
                </>
              }
              description="Two simple commitments shape every decision we make as an academy."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="relative h-full overflow-hidden rounded-[10px] bg-forest-950 p-8 sm:p-10">
                <div className="absolute inset-0 bg-geo-light opacity-50" aria-hidden="true" />
                <div
                  className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-brass-400/20"
                  aria-hidden="true"
                />
                <div className="relative">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-brass-300/40 text-brass-300">
                    <Globe className="h-5 w-5" />
                  </span>
                  <p className="eyebrow eyebrow-light mt-7">Our mission</p>
                  <h3 className="mt-3 font-serif text-[28px] leading-[1.2] text-ivory-50 sm:text-[32px]">
                    Excellent Qur&rsquo;an education, within reach of every home.
                  </h3>
                  <p className="mt-4 max-w-lg text-[13.5px] leading-[1.9] text-ivory-200/70">
                    To connect every student with a qualified, patient teacher — regardless of
                    country, time zone or budget — and to make learning the Qur&rsquo;an a joyful,
                    lifelong habit rather than a childhood chore.
                  </p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {[
                      "One-to-one attention",
                      "Qualified, verified teachers",
                      "Affordable, transparent fees",
                      "Respect for every learner",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[12px] text-ivory-200/75">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brass-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="card h-full p-8 sm:p-10">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-brass-400/40 bg-brass-50 text-brass-700">
                  <Award className="h-5 w-5" />
                </span>
                <p className="eyebrow mt-7">Our vision</p>
                <h3 className="mt-3 font-serif text-[28px] leading-[1.2] text-forest-950 sm:text-[32px]">
                  A generation that recites, understands and lives the Qur&rsquo;an.
                </h3>
                <p className="mt-4 max-w-lg text-[13.5px] leading-[1.9] text-ink-500">
                  We are working towards a future where distance is no barrier to sound learning —
                  where a child in a small town has the same access to a Hafiz teacher as a child in
                  a major city.
                </p>
                <ul className="mt-7 space-y-3.5 border-t border-ivory-200 pt-6">
                  <Tick>Every student matched to the right teacher</Tick>
                  <Tick>Parents kept informed at every stage</Tick>
                  <Tick>Authentic, balanced and non-judgemental teaching</Tick>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section border-y border-ivory-300 bg-ivory-50">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Our values"
              title={
                <>
                  The principles behind every <em className="italic text-brass-600">lesson</em>
                </>
              }
              description="Four commitments we hold ourselves to, with every student, every week."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = valueIcons[value.icon];
              return (
                <Reveal key={value.title} delay={i * 80} className="h-full">
                  <div className="card group h-full p-6 transition duration-500 hover:-translate-y-1 hover:border-brass-400/60">
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-brass-400/30 bg-brass-50 text-brass-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-serif text-lg text-ivory-400">0{i + 1}</span>
                    </div>
                    <h3 className="mt-5 font-serif text-[21px] leading-snug text-forest-950">{value.title}</h3>
                    <p className="mt-2.5 text-[12.5px] leading-[1.8] text-ink-500">{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Teachers */}
      <section className="section bg-ivory-100">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHead
              align="left"
              eyebrow="Our teachers"
              title={
                <>
                  Chosen with care.
                  <br />
                  <em className="italic text-brass-600">Tested for knowledge.</em>
                </>
              }
              description="Every teacher completes a recitation assessment, a teaching trial and a background check before joining the faculty."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Shield, title: "Verified credentials", text: "Ijazah or formal Hifz certification reviewed by our academic lead." },
                { icon: Users, title: "Male & female faculty", text: "Choose a teacher who suits your family's preference and comfort." },
                { icon: Globe, title: "Language matched", text: "Lessons in English, Arabic or Urdu — matched to your comfort." },
                { icon: Heart, title: "Patience first", text: "Teachers are assessed on warmth and clarity, not just speed." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[8px] border border-ivory-300 bg-ivory-50 p-5">
                  <Icon className="h-5 w-5 text-brass-600" />
                  <p className="mt-3 font-serif text-[18px] leading-tight text-forest-950">{title}</p>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-ink-500">{text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mx-auto w-full max-w-[480px]">
              <QuranArtwork ratio="aspect-[4/3]" variant="ink" />
              <div className="mt-2 rounded-[6px] border border-ivory-300 bg-ivory-50 px-5 py-4 text-center">
                <p className="font-serif text-xl text-forest-950">Every class is one-to-one.</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-brass-600">
                  No group calls. No shared attention.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Join the academy"
        title="Come and see what a good teacher feels like."
        description="Three free classes, a personal learning plan and honest advice — whether you continue with us or not."
      />
    </>
  );
}

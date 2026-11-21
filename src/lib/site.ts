/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — edit this file to change academy details
 *  (name, phone, WhatsApp, email, address, social links, etc.)
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Al-Ashhad International Taleem-ul-Quran Academy",
  shortName: "Al-Ashhad",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://al-ashhad-quran-academy.vercel.app",
  description:
    "Learn the Qur'an online with certified Hafiz and Qaria teachers. One-to-one live classes in Noorani Qaida, Tajweed, Hifz, Arabic and Islamic studies for kids and adults — with a 3-day free trial.",

  // Contact details — replace with the real ones
  phoneDisplay: "+92 3347902548",
  phoneHref: "+923347902548",
  whatsappNumber: "923347902548", // digits only, used for wa.me links
  email: "chashhad128@gmail.com",
  supportEmail: "chashhad128@gmail.com",
  addressLines: [
    "Al-Ashhad International Taleem-ul-Quran Academy",
    "Online — teaching students worldwide",
  ],
  hours: "Classes available 24/7 — all time zones",
  responseTime: "We reply within one working day",

  social: {
    facebook: "https://www.facebook.com/profile.php?id=61593471631624",
    instagram: "https://www.instagram.com/teacherquran009/",
    youtube: "https://www.youtube.com",
  },

  freeTrialDays: 3,
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    message ?? `Assalamu alaikum ${site.name}, I would like to book a free trial class.`
  )}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/pricing", label: "Fee Plans" },
  { href: "/teaching-method", label: "Teaching Method" },
  { href: "/activities", label: "Activities" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export type Plan = {
  id: string;
  name: string;
  priceUsd: number;
  priceGbp: number;
  schedule: string;
  duration: string;
  platform: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "free-trial",
    name: "Free Trial",
    priceUsd: 0,
    priceGbp: 0,
    schedule: "3 classes",
    duration: "30 Mins Per Class",
    platform: "1-on-1 Zoom Class",
    description: "Meet your teacher and experience a real lesson before you decide anything.",
    features: [
      "3 complete one-to-one lessons",
      "No card details required",
      "Level assessment & honest advice",
      "Choose male or female teacher",
      "All time zones",
    ],
  },
  {
    id: "basic-starter",
    name: "Basic Starter Plan",
    priceUsd: 25,
    priceGbp: 20,
    schedule: "2 Days a Week",
    duration: "30 Mins Per Class",
    platform: "1-on-1 Zoom Class",
    description: "A smooth start with basic Qaida and Nazara Qur'an — ideal for busy children or beginners.",
    features: [
      "8 one-to-one classes a month",
      "Noorani Qaida & Nazara Qur'an",
      "Personal learning plan",
      "Monthly progress report",
      "Direct WhatsApp support",
    ],
  },
  {
    id: "standard-popular",
    name: "Standard Popular Plan",
    priceUsd: 35,
    priceGbp: 30,
    schedule: "3 Days a Week",
    duration: "30 Mins Per Class",
    platform: "1-on-1 Zoom Class",
    description: "Our most recommended plan for steady progress in Nazra, Tajweed mastery and daily Masnoon Duas.",
    features: [
      "12 one-to-one classes a month",
      "Nazra, Tajweed & Masnoon Duas",
      "Priority teacher matching",
      "Lesson recordings on request",
      "Fortnightly progress updates",
    ],
    featured: true,
  },
  {
    id: "premium-intensive",
    name: "Premium Intensive Plan",
    priceUsd: 50,
    priceGbp: 45,
    schedule: "5 Days a Week",
    duration: "30 Mins Per Class",
    platform: "1-on-1 Zoom Class",
    description: "For families who want faster, consistent progress with the closest teacher support.",
    features: [
      "20 one-to-one classes a month",
      "Tajweed, Hifz & Tafseer tracks",
      "Daily sabaq and revision plan",
      "Weekly written reports",
      "Priority scheduling & support",
    ],
  },
];

export function getPlan(id?: string) {
  return plans.find((p) => p.id === id);
}

export const stats = [
  { value: "500+", label: "Students worldwide" },
  { value: "25+", label: "Certified teachers" },
  { value: "15+", label: "Countries served" },
  { value: "4.9/5", label: "Average parent rating" },
];

export const trustPoints = [
  "One-to-one live classes",
  "Certified Hafiz & Qaria teachers",
  "Flexible 24/7 scheduling",
  "Monthly progress reports",
];

export type Book = {
  title: string;
  subtitle: string;
  tag: string;
  tone: "parchment" | "forest" | "sand" | "clay";
  glyph: string;
};

export const books: Book[] = [
  {
    title: "Noorani Qaida",
    subtitle: "The first step to reading the Qur'an",
    tag: "Foundation",
    tone: "parchment",
    glyph: "قاعدة",
  },
  {
    title: "Qur'an Majeed",
    subtitle: "Clear 13-line Indo-Pak script",
    tag: "Mushaf",
    tone: "forest",
    glyph: "قرآن",
  },
  {
    title: "Tajweed Rules",
    subtitle: "Rules explained in English & Arabic",
    tag: "Tajweed",
    tone: "sand",
    glyph: "تجويد",
  },
  {
    title: "Duas & Adhkaar",
    subtitle: "Daily supplications for children",
    tag: "Supplications",
    tone: "clay",
    glyph: "دعاء",
  },
];

export type Course = {
  id: string;
  title: string;
  description: string;
  level: string;
  format: string;
  ages: string;
  icon: "qaida" | "tajweed" | "hifz" | "tafseer" | "kids" | "sisters" | "arabic" | "studies";
  featured?: boolean;
};

export const courses: Course[] = [
  {
    id: "noorani-qaida",
    title: "Noorani Qaida",
    description:
      "Begin at the very beginning — Arabic letters, harakat, joining letters and confident pronunciation with a patient teacher.",
    level: "Beginner",
    format: "3 classes / week · 30 min",
    ages: "Ages 4 and above",
    icon: "qaida",
    featured: true,
  },
  {
    id: "quran-tajweed",
    title: "Qur'an Reading with Tajweed",
    description:
      "Read the Qur'an fluently with the rules of Tajweed applied step by step, corrected in every single lesson.",
    level: "Beginner – Intermediate",
    format: "3–5 classes / week · 30 min",
    ages: "Ages 6 and above",
    icon: "tajweed",
    featured: true,
  },
  {
    id: "hifz",
    title: "Hifz ul Qur'an",
    description:
      "A structured memorisation plan with daily sabaq, sabqi and manzil revision under a certified Hafiz.",
    level: "Intermediate – Advanced",
    format: "5 classes / week · 45 min",
    ages: "Ages 7 and above",
    icon: "hifz",
  },
  {
    id: "tafseer",
    title: "Translation & Tafseer",
    description:
      "Understand what you recite — word-by-word translation, context and tafseer of selected surahs.",
    level: "Intermediate",
    format: "2–3 classes / week · 45 min",
    ages: "Ages 12 and above",
    icon: "tafseer",
  },
  {
    id: "kids",
    title: "Qur'an for Kids",
    description:
      "Short, gentle and playful lessons that build a child's love for the Qur'an through stories, rewards and repetition.",
    level: "All levels",
    format: "2–3 classes / week · 25 min",
    ages: "Ages 4 – 12",
    icon: "kids",
    featured: true,
  },
  {
    id: "sisters",
    title: "Qur'an for Sisters",
    description:
      "A comfortable, private setting with female Qaria teachers for girls and women of every age.",
    level: "All levels",
    format: "2–5 classes / week · 30 min",
    ages: "Girls 13+ & women",
    icon: "sisters",
    featured: true,
  },
  {
    id: "arabic",
    title: "Arabic Language",
    description:
      "Classical Arabic grammar, vocabulary and conversation designed for understanding the Qur'an.",
    level: "Beginner – Advanced",
    format: "2–3 classes / week · 45 min",
    ages: "Ages 10 and above",
    icon: "arabic",
  },
  {
    id: "islamic-studies",
    title: "Islamic Studies",
    description:
      "Fiqh, Seerah, daily duas and sunnah — a simple, structured curriculum for the whole family.",
    level: "All levels",
    format: "2 classes / week · 30 min",
    ages: "Ages 6 and above",
    icon: "studies",
  },
];

export const steps = [
  {
    number: "01",
    title: "Book your free trial",
    description:
      "Share a few details and pick a time that suits your family. There is no card, no commitment and no cost.",
    detail: "A 30-minute one-to-one lesson",
  },
  {
    number: "02",
    title: "Meet your teacher",
    description:
      "We match you with a certified male or female teacher who speaks your language and suits your learning style.",
    detail: "Male & female teachers available",
  },
  {
    number: "03",
    title: "Set your learning plan",
    description:
      "Together, you agree on a course, weekly schedule and clear goals — reviewed every month as you progress.",
    detail: "A plan made for your time zone",
  },
  {
    number: "04",
    title: "Learn and grow",
    description:
      "Attend live one-to-one lessons from home, with recordings, monthly reports and open contact with your teacher.",
    detail: "Progress reports for parents",
  },
];

export const values = [
  {
    title: "Ihsan in teaching",
    description:
      "Every lesson is prepared with care, delivered with patience and taught with adab.",
    icon: "heart" as const,
  },
  {
    title: "Authentic knowledge",
    description:
      "A balanced, mainstream curriculum taught by certified Huffaz and Qaria teachers.",
    icon: "book" as const,
  },
  {
    title: "One student, one teacher",
    description:
      "Private lessons mean full attention, faster progress and a relationship built on trust.",
    icon: "user" as const,
  },
  {
    title: "Partnership with parents",
    description:
      "Monthly reports, lesson recordings and honest feedback keep parents involved at every step.",
    icon: "users" as const,
  },
];

export type Testimonial = {
  name: string;
  location: string;
  course: string;
  quote: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Ahmed",
    location: "London, United Kingdom",
    course: "Qur'an for Kids",
    quote:
      "My seven-year-old used to avoid Qur'an practice. Within two months she is reciting Noorani Qaida confidently and asking for her lesson. Her teacher is endlessly patient.",
    rating: 5,
    initials: "SA",
  },
  {
    name: "Muhammad Bilal",
    location: "Dallas, United States",
    course: "Hifz ul Qur'an",
    quote:
      "The hifz plan is genuinely structured. My son has a daily sabaq, revision and a monthly report — I always know exactly where he stands.",
    rating: 5,
    initials: "MB",
  },
  {
    name: "Aisha Khan",
    location: "Toronto, Canada",
    course: "Qur'an for Sisters",
    quote:
      "As a working mother I needed flexibility. I take my lessons after Isha and my teacher has never missed a single class in eight months.",
    rating: 5,
    initials: "AK",
  },
  {
    name: "Yusuf Rahman",
    location: "Sydney, Australia",
    course: "Tajweed",
    quote:
      "I had been reading for years without proper Tajweed. The corrections were gentle but precise, and my recitation sounds completely different now.",
    rating: 5,
    initials: "YR",
  },
  {
    name: "Fatima Noor",
    location: "Dubai, United Arab Emirates",
    course: "Arabic Language",
    quote:
      "The Arabic classes connect directly to the Qur'an. I finally understand the words I recite every day — that has changed my salah.",
    rating: 5,
    initials: "FN",
  },
  {
    name: "Omar Farooq",
    location: "Berlin, Germany",
    course: "Qur'an Reading",
    quote:
      "Both of my children learn with Al-Noor. Two teachers, one schedule, one monthly report each. Communication is excellent and the fees are transparent.",
    rating: 5,
    initials: "OF",
  },
  {
    name: "Hafsa Iqbal",
    location: "Manchester, United Kingdom",
    course: "Tafseer",
    quote:
      "Every tafseer lesson leaves me with something to reflect on during the week. It feels like a proper class, not a rushed online call.",
    rating: 5,
    initials: "HI",
  },
  {
    name: "Bilal Siddiqui",
    location: "Riyadh, Saudi Arabia",
    course: "Noorani Qaida",
    quote:
      "The trial class convinced us immediately. The teacher assessed my daughter, explained the plan and never once pushed us to pay. Very professional.",
    rating: 5,
    initials: "BS",
  },
  {
    name: "Maryam Tariq",
    location: "Kuala Lumpur, Malaysia",
    course: "Islamic Studies",
    quote:
      "My children look forward to their Islamic studies lesson more than any other class. The stories, the duas, the little rewards — it all works.",
    rating: 5,
    initials: "MT",
  },
];

export const activities = [
  {
    id: "kids",
    eyebrow: "Ages 4 – 12",
    title: "Kids Qur'an Classes",
    description:
      "Short, joyful lessons built for little attention spans — with stories, praise, reward charts and a teacher who makes every child feel special.",
    points: [
      "25–30 minute lessons, 2–3 times per week",
      "Noorani Qaida, short surahs and daily duas",
      "Reward charts and progress certificates",
      "Weekly updates for parents",
    ],
    tone: "sand" as const,
  },
  {
    id: "sisters",
    eyebrow: "Girls 13+ & women",
    title: "Female Qur'an Classes",
    description:
      "Private classes with qualified female Qaria teachers — a comfortable, respectful space for sisters to learn, ask questions and grow.",
    points: [
      "Female teachers only",
      "Flexible timings around work and family",
      "Tajweed, Hifz or Tafseer tracks",
      "Complete privacy and confidentiality",
    ],
    tone: "forest" as const,
  },
];

export const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Book a slot through our free trial form and we will confirm your teacher and time by WhatsApp or email. You receive three complete one-to-one lessons at no cost — no card details, no obligation to continue.",
  },
  {
    question: "Which platform do you use for classes?",
    answer:
      "Lessons take place live on Zoom or Google Meet, whichever suits your family. All you need is a stable internet connection, a laptop or tablet, and headphones for clearer recitation.",
  },
  {
    question: "Are male and female teachers available?",
    answer:
      "Yes. We have certified male Huffaz and female Qaria teachers. You can request a specific gender when you book, and we will match you accordingly.",
  },
  {
    question: "What if we need to reschedule a class?",
    answer:
      "Life happens. You can reschedule any class with at least four hours' notice at no extra cost, directly with your teacher or through our support team.",
  },
  {
    question: "Do you teach adults who are complete beginners?",
    answer:
      "Absolutely. Many of our students are adults starting from the Arabic alphabet. Lessons are completely private, so there is no pressure and no comparison with anyone else.",
  },
  {
    question: "How much do classes cost?",
    answer:
      "Fees depend on the course, the number of weekly classes and the plan you choose. After your free trial we share a clear written quote — there are no registration charges or hidden extras.",
  },
  {
    question: "Can parents sit in on lessons?",
    answer:
      "Parents are always welcome to observe, especially for younger children. We also share progress reports and can record lessons on request.",
  },
];

export const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "United Arab Emirates",
  "Saudi Arabia",
  "Germany",
  "France",
  "Netherlands",
  "Malaysia",
  "Singapore",
  "South Africa",
  "Pakistan",
  "India",
  "Bangladesh",
  "Other",
];

export const timeSlots = [
  "Morning (8am – 12pm)",
  "Afternoon (12pm – 4pm)",
  "Evening (4pm – 8pm)",
  "Night (8pm – 11pm)",
  "Flexible — advise me",
];

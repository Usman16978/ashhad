# Al-Ashhad International Taleem-ul-Quran Academy — Website

A complete, fully responsive, Vercel-ready marketing website for an online Qur'an academy.
Built with Next.js 15 (App Router), TypeScript and Tailwind CSS v4. Photography is bundled locally
under `public/images`, so the site has no external image dependencies at runtime.

---

## Pages

| Route               | Page                                                        |
| ------------------- | ----------------------------------------------------------- |
| `/`                 | Home — hero, about, courses, method, activities, social proof |
| `/about`            | About the academy, mission, values, teachers, stats          |
| `/courses`          | All eight courses with levels, formats and age groups        |
| `/teaching-method`  | The four-step teaching process, principles and tools         |
| `/activities`       | Kids Qur'an classes, female classes and seasonal programmes  |
| `/testimonials`     | Rating summary and student / parent testimonials             |
| `/contact`          | Contact details, enquiry form, map card and FAQs             |
| `/free-trial`       | Three-class free trial registration form                     |

---

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Production build:

```bash
npm run build
npm run start
```

---

## Where to change the contact details

Everything lives in **`src/lib/site.ts`** at the top of the file:

```ts
name: "Al-Ashhad International Taleem-ul-Quran Academy",
shortName: "Al-Ashhad",
phoneDisplay: "+92 3347902548",
phoneHref: "+923347902548",
whatsappNumber: "923347902548", // digits only
email: "chashhad128@gmail.com",
addressLines: [...],
hours: "...",
social: { facebook, instagram, youtube }, // footer shows WhatsApp, Facebook, Instagram
```

Change them once and they update in the header, footer, contact page, forms and WhatsApp buttons.
Course, testimonial, FAQ and activity content is in the same file below the config.

---

## Forms (trial + contact)

Both forms post to Next.js route handlers:

- `src/app/api/trial/route.ts`
- `src/app/api/contact/route.ts`

Out of the box (no environment variables) submissions are logged to the server console and the
form shows its success state — ideal for previews and client review.

To receive real emails, create a free [Resend](https://resend.com) account and add these
environment variables in Vercel → Project → Settings → Environment Variables:

| Variable             | Purpose                                                |
| -------------------- | ------------------------------------------------------ |
| `RESEND_API_KEY`     | Resend API key                                         |
| `NOTIFICATION_EMAIL` | Where enquiries should be delivered (comma-separated)  |
| `MAIL_FROM`          | Verified sender, e.g. `Al-Ashhad <hello@yourdomain.com>` |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, e.g. `https://yourdomain.com`    |

Until a domain is verified in Resend, keep the default `onboarding@resend.dev` sender and send
to the email address that owns the Resend account.

---

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New → Project** and import the repository.
3. Framework preset: **Next.js** (auto-detected). No build settings need changing.
4. Add the environment variables above (optional for the demo).
5. Deploy.

Or from the CLI:

```bash
npx vercel
```

---

## Notes

- Fully responsive from 320 px phones up to large desktops.
- Accessible: skip link, labelled form fields, keyboard-friendly menu and accordion, reduced-motion support.
- SEO: per-page metadata, sitemap, robots, Open Graph data.
- Brand name, logo (`public/images/academy-logo*.{png,webp}`) and colours live in `src/lib/site.ts`,
  `src/components/Logo.tsx` and `src/app/globals.css`.
- Photography: `quran-rehal.jpg`, `quran-together.jpg` and the derived cut-outs in `public/images`
  (Wikimedia Commons). Verify each licence before launch.

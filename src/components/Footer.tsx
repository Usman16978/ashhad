import Link from "next/link";
import Logo from "./Logo";
import { Facebook, Instagram, Mail, MapPin, Phone, WhatsApp } from "./Icons";
import { allNavLinks, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-ivory-200">
      <div className="container-x py-5 sm:py-6">
        {/* Single compact rectangle */}
        <div className="grid gap-5 rounded-[14px] border border-ivory-100/10 bg-forest-900/50 p-5 sm:grid-cols-2 md:grid-cols-[1.1fr_.8fr_1.1fr] md:gap-7">
          <div>
            <Logo light />
            <p className="mt-2 text-[11.5px] leading-relaxed text-ivory-200/60">
              One-to-one live Qur&rsquo;an classes, worldwide.
            </p>
            <div className="mt-3 flex items-center gap-2">
              {[
                { label: "WhatsApp", href: whatsappLink(), Icon: WhatsApp },
                { label: "Facebook", href: site.social.facebook, Icon: Facebook },
                { label: "Instagram", href: site.social.instagram, Icon: Instagram },
              ].map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-8 w-8 place-items-center rounded-full border border-ivory-100/15 text-ivory-200/80 transition-colors hover:border-brass-400/60 hover:text-brass-300"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-sans text-[9.5px] font-semibold uppercase tracking-[0.2em] text-brass-300">
              Explore
            </h3>
            <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1">
              {allNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[11.5px] text-ivory-200/65 transition-colors hover:text-ivory-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/free-trial"
                  className="text-[11.5px] text-brass-300 transition-colors hover:text-brass-200"
                >
                  Free Trial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[9.5px] font-semibold uppercase tracking-[0.2em] text-brass-300">
              Get in touch
            </h3>
            <ul className="mt-2 space-y-1.5 text-[11.5px] text-ivory-200/65">
              <li>
                <a href={`tel:${site.phoneHref}`} className="flex items-start gap-2 transition-colors hover:text-ivory-50">
                  <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass-400" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-2 break-all transition-colors hover:text-ivory-50">
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass-400" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brass-400" />
                <span>
                  {site.addressLines.map((line) => (
                    <span key={line} className="block leading-relaxed">{line}</span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-3 flex flex-col gap-1 text-[10px] text-ivory-200/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="h-px w-5 bg-brass-400/50" />
            Serving students in 15+ countries
          </p>
        </div>
      </div>
    </footer>
  );
}

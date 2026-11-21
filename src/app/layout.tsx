import type { Metadata, Viewport } from "next";
import { Amiri, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/lib/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const arabic = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Learn Quran Online with Expert Hafiz Teachers`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "online quran classes",
    "learn quran online",
    "quran academy",
    "hifz classes",
    "tajweed course",
    "quran classes for kids",
    "female quran teacher",
    "noorani qaida",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Learn Quran Online with Expert Hafiz Teachers`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Learn Quran Online`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f322a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${arabic.variable}`}>
      <body className="overflow-x-clip">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-forest-900 focus:px-4 focus:py-2 focus:text-sm focus:text-ivory-50"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
        <RevealObserver />
      </body>
    </html>
  );
}

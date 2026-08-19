import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import { translations } from '@/translations';
import {
  alternatesFor,
  DEFAULT_LOCALE,
  HTML_LANG,
  OG_LOCALE,
  SITE_URL,
  urlFor,
} from '@/lib/site';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body-sans',
});

const copy = translations[DEFAULT_LOCALE].ui;
const SITE_IMAGE = `${SITE_URL}/banner.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: copy.metaTitle,
    template: '%s — Hammurabi',
  },
  description: copy.metaDescription,
  alternates: alternatesFor(DEFAULT_LOCALE),
  openGraph: {
    type: 'website',
    siteName: 'Hammurabi',
    url: urlFor(DEFAULT_LOCALE),
    locale: OG_LOCALE[DEFAULT_LOCALE],
    title: copy.metaTitle,
    description: copy.metaDescription,
    images: [
      { url: SITE_IMAGE, width: 1600, height: 643, alt: copy.metaTitle },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: copy.metaTitle,
    description: copy.metaDescription,
    images: [SITE_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // One root layout owns <html> for every route, so this is the default locale.
  // Per-route correction happens in two places: scripts/postbuild.mjs rewrites
  // the exported Japanese documents, and <HtmlLang> handles client navigation.
  return (
    <html
      lang={HTML_LANG[DEFAULT_LOCALE]}
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <body className="antialiased">
        <div className="stele-wash" />
        <div className="stele-rules" />
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}

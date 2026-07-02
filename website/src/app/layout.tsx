import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { translations } from '@/translations';

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

const SITE_URL = 'https://kanywst.github.io/hammurabi';
const SITE_TITLE = 'Hammurabi — Laws Every Engineer Should Know';
const SITE_DESCRIPTION =
  'A codex of engineering laws, each paired with its counter-force, a field guideline, and a primary source. Named for the first written code of laws.';
const SITE_IMAGE = `${SITE_URL}/banner.jpg`;

const CODEX_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  name: SITE_TITLE,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  hasDefinedTerm: translations.en.heuristics.map((h, i) => ({
    '@type': 'DefinedTerm',
    '@id': `${SITE_URL}/#law-${String(i + 1).padStart(2, '0')}`,
    name: h.title,
    description: h.mechanism,
    termCode: `§ ${String(i + 1).padStart(2, '0')}`,
    inDefinedTermSet: SITE_URL,
  })),
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    siteName: 'Hammurabi',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: SITE_IMAGE,
        width: 1600,
        height: 643,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(CODEX_JSON_LD) }}
        />
        <div className="stele-wash" />
        <div className="stele-rules" />
        <div className="grain" />
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </LanguageProvider>
      </body>
    </html>
  );
}

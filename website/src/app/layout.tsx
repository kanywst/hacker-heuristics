import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';
import Header from '@/components/Header';

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

export const metadata: Metadata = {
  title: 'Hammurabi — Laws Every Engineer Should Know',
  description:
    'A codex of engineering laws, each paired with its counter-force, a field guideline, and a primary source. Named for the first written code of laws.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="antialiased">
        <div className="stele-wash" />
        <div className="stele-rules" />
        <div className="grain" />
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <footer className="border-t border-hairline py-16 text-center">
            <div className="rule-diamond mx-auto mb-6 w-24">
              <span className="text-bronze">◆</span>
            </div>
            <p className="display text-lg text-carve">Hammurabi</p>
            <p className="mt-2 text-sm text-carve-dim">
              Laws Every Engineer Should Know · MIT License © 2026
            </p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}

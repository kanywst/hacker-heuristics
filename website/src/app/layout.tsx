import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Hacker Heuristics | Decisions Under Uncertainty',
  description:
    'Mental models for engineers to navigate uncertainty and time allocation.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <footer className="py-20 border-t border-white/10 text-center text-white/40 text-sm">
            <p>
              © 2026 Hacker Heuristics Project. Built for the next decade of
              engineering.
            </p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}

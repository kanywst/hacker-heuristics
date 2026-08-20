import type { Metadata } from 'next';
import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { translations } from '@/translations';
import { DEFAULT_LOCALE, routeFor } from '@/lib/site';

const t = translations[DEFAULT_LOCALE];

export const metadata: Metadata = {
  title: t.notFound.title,
  description: t.notFound.body,
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell lang={DEFAULT_LOCALE} counterpart={routeFor('ja')}>
      <section className="flex min-h-[70vh] flex-col justify-center px-5 sm:px-8 lg:pl-28">
        <p className="numeral text-3xl">—</p>
        <h1 className="mt-4 text-2xl font-medium uppercase tracking-[0.02em]">
          {t.notFound.title}
        </h1>
        <p className="mt-3 max-w-[52ch] text-relief-dim">{t.notFound.body}</p>
        <Link
          href={routeFor(DEFAULT_LOCALE)}
          className="btn-ghost mt-8 self-start px-5 py-2.5"
        >
          {t.law.backToCodex}
        </Link>
      </section>
    </PageShell>
  );
}

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
      <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow text-bronze">§ —</p>
        <h1 className="display mt-6 text-4xl text-carve sm:text-5xl">
          {t.notFound.title}
        </h1>
        <p className="mt-4 text-carve-dim">{t.notFound.body}</p>
        <Link
          href={routeFor(DEFAULT_LOCALE)}
          className="btn-bronze mt-10 rounded-full px-7 py-3 text-sm"
        >
          {t.law.backToCodex}
        </Link>
      </section>
    </PageShell>
  );
}

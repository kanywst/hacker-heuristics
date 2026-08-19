import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import { codexJsonLd } from '@/lib/jsonld';
import { alternatesFor, OG_LOCALE, routeFor, urlFor } from '@/lib/site';
import { translations } from '@/translations';

const LOCALE = 'ja' as const;
const copy = translations[LOCALE].ui;

export const metadata: Metadata = {
  title: { absolute: copy.metaTitle },
  description: copy.metaDescription,
  alternates: alternatesFor(LOCALE),
  openGraph: {
    url: urlFor(LOCALE),
    locale: OG_LOCALE[LOCALE],
    title: copy.metaTitle,
    description: copy.metaDescription,
  },
};

export default function Page() {
  return (
    <PageShell lang={LOCALE} counterpart={routeFor('en')}>
      <JsonLd data={codexJsonLd(LOCALE)} />
      <HomePage lang={LOCALE} />
    </PageShell>
  );
}

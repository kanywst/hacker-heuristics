import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LawArticle from '@/components/LawArticle';
import PageShell from '@/components/PageShell';
import JsonLd from '@/components/JsonLd';
import { lawJsonLd } from './jsonld';
import { alternatesFor, article, OG_LOCALE, routeFor, urlFor } from './site';
import { laws, lawBySlug, type Locale } from '@/data/laws';

type Params = { slug: string };

/**
 * Both locales render the same article page, so the route modules under
 * app/laws and app/ja/laws are only a locale binding over this.
 */
export function makeLawRoute(locale: Locale) {
  const other: Locale = locale === 'en' ? 'ja' : 'en';

  function generateStaticParams(): Params[] {
    return laws.map((law) => ({ slug: law.slug }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<Params>;
  }): Promise<Metadata> {
    const { slug } = await params;
    const law = lawBySlug.get(slug);
    if (!law) return {};

    const text = law[locale];
    const title = `§ ${article(law.number)} · ${text.title}`;
    const description = `${text.concept} ${text.mechanism}`.slice(0, 200);

    return {
      title,
      description,
      alternates: alternatesFor(locale, law.slug),
      openGraph: {
        type: 'article',
        url: urlFor(locale, law.slug),
        locale: OG_LOCALE[locale],
        title,
        description,
      },
      twitter: { card: 'summary_large_image', title, description },
    };
  }

  async function Page({ params }: { params: Promise<Params> }) {
    const { slug } = await params;
    const law = lawBySlug.get(slug);
    if (!law) notFound();

    return (
      <PageShell lang={locale} counterpart={routeFor(other, law.slug)}>
        <JsonLd data={lawJsonLd(law, locale)} />
        <LawArticle law={law} lang={locale} />
      </PageShell>
    );
  }

  return { generateStaticParams, generateMetadata, Page };
}

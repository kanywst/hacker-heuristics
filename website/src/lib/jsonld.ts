import { laws, tags, type Law, type Locale } from '@/data/laws';
import { article, REPO_URL, SITE_URL, urlFor } from './site';
import { translations } from '@/translations';

/**
 * The codex as a DefinedTermSet, with every article as a DefinedTerm that has
 * its own URL. Search engines get one machine-readable list per locale rather
 * than a wall of anonymous cards.
 */
export function codexJsonLd(locale: Locale) {
  const copy = translations[locale].ui;
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': urlFor(locale),
    name: copy.metaTitle,
    description: copy.metaDescription,
    url: urlFor(locale),
    inLanguage: locale,
    license: `${REPO_URL}/blob/main/LICENSE`,
    hasDefinedTerm: laws.map((law) => ({
      '@type': 'DefinedTerm',
      '@id': urlFor(locale, law.slug),
      name: law[locale].title,
      description: law[locale].concept,
      termCode: `§ ${article(law.number)}`,
      url: urlFor(locale, law.slug),
      inDefinedTermSet: urlFor(locale),
    })),
  };
}

export function lawJsonLd(law: Law, locale: Locale) {
  const tag = tags.find((candidate) => candidate.key === law.tag);
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': urlFor(locale, law.slug),
    name: law[locale].title,
    // The English name is the one people search for, so it is worth carrying on
    // the Japanese article — but repeating it as an alternate of itself is not.
    ...(locale === 'en' ? {} : { alternateName: law.en.title }),
    description: law[locale].mechanism,
    termCode: `§ ${article(law.number)}`,
    url: urlFor(locale, law.slug),
    inLanguage: locale,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      '@id': urlFor(locale),
      name: translations[locale].ui.metaTitle,
      url: urlFor(locale),
    },
    ...(tag ? { about: tag[locale] } : {}),
    subjectOf: {
      '@type': 'CreativeWork',
      name: law[locale].source,
      url: law.sourceUrl,
    },
    image: `${SITE_URL}/banner.jpg`,
  };
}

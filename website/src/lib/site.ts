import type { Locale } from '@/data/laws';

export const SITE_URL = 'https://kanywst.github.io/hammurabi';
export const REPO_URL = 'https://github.com/kanywst/hammurabi';
export const DATA_URL = `${REPO_URL}/blob/main/data/laws.yaml`;

export const LOCALES: Locale[] = ['en', 'ja'];
export const DEFAULT_LOCALE: Locale = 'en';

/** The html lang attribute for a locale. */
export const HTML_LANG: Record<Locale, string> = { en: 'en', ja: 'ja' };

/** The og:locale for a locale. */
export const OG_LOCALE: Record<Locale, string> = { en: 'en_US', ja: 'ja_JP' };

/**
 * Route for a page, relative to the site root. English is unprefixed so the URL
 * the site was first published under keeps working; Japanese lives under /ja.
 * Trailing slashes everywhere, because `trailingSlash: true` is what makes the
 * static export serve directory URLs correctly on GitHub Pages.
 */
export function routeFor(locale: Locale, slug?: string): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return slug ? `${prefix}/laws/${slug}/` : `${prefix}/`;
}

/** Absolute URL for a page — used for canonicals, hreflang, sitemap and JSON-LD. */
export function urlFor(locale: Locale, slug?: string): string {
  return `${SITE_URL}${routeFor(locale, slug)}`;
}

/**
 * Canonical + hreflang for one page. The canonical is the page's own URL — the
 * two locales are alternates of each other, not duplicates of the English one.
 */
export function alternatesFor(locale: Locale, slug?: string) {
  return {
    canonical: urlFor(locale, slug),
    languages: {
      en: urlFor('en', slug),
      ja: urlFor('ja', slug),
      'x-default': urlFor(DEFAULT_LOCALE, slug),
    },
  };
}

/** § 07 — display only. */
export function article(number: number): string {
  return String(number).padStart(2, '0');
}

const TEN = '\u{1230B}'; // 𒌋 CUNEIFORM SIGN U
const ONE = '\u{12079}'; // 𒁹 CUNEIFORM SIGN DISH

/**
 * The article number as a Babylonian would have written it.
 *
 * The system is sexagesimal and positional with no zero: within a digit, tens
 * are 𒌋 and units are 𒁹, and past fifty-nine the digits separate — 71 is one
 * sixty and eleven, written 𒁹 𒌋𒁹. It is decorative here in the sense that the
 * Arabic numeral is always beside it, but it is not invented: it is what the
 * number looks like in the script the original was cut in.
 */
export function babylonian(number: number): string {
  if (!Number.isInteger(number) || number < 1) return '';
  const digits: number[] = [];
  for (let n = number; n > 0; n = Math.floor(n / 60)) digits.unshift(n % 60);
  return digits
    .map((d) => TEN.repeat(Math.floor(d / 10)) + ONE.repeat(d % 10))
    .join('\u2009');
}

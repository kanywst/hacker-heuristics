import Link from 'next/link';
import { translations } from '@/translations';
import { HTML_LANG } from '@/lib/site';
import type { Locale } from '@/data/laws';

/**
 * Language selection is navigation, not client state. The two locales are two
 * sets of URLs, so a crawler (and a shared link) sees the language it was given
 * rather than whatever the last visitor picked.
 */
export default function LanguageSwitcher({
  lang,
  counterpart,
}: {
  lang: Locale;
  counterpart: string;
}) {
  const other: Locale = lang === 'en' ? 'ja' : 'en';
  const t = translations[lang].switcher;

  return (
    <Link
      href={counterpart}
      hrefLang={HTML_LANG[other]}
      lang={HTML_LANG[other]}
      aria-label={`${t.label}: ${t.other}`}
      className="rounded-full border border-hairline bg-stone px-3 py-1 text-xs font-bold text-carve-dim transition-colors hover:border-bronze/40 hover:text-carve"
    >
      {t.other}
    </Link>
  );
}

'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, Link2, Search } from 'lucide-react';
import { translations } from '@/translations';
import { laws, tags, type Locale } from '@/data/laws';
import { article, routeFor, urlFor } from '@/lib/site';
import RichText from './RichText';

const chip =
  'rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors';

// The searchable, filterable codex. Kept as its own component so typing in the
// search box only re-renders this section, not the animated hero/prologue.
export default function LawsCodex({ lang }: { lang: Locale }) {
  const t = translations[lang];

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear a pending "copied" reset if the component unmounts first.
  useEffect(() => {
    return () => {
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
    };
  }, []);

  const label = useMemo(
    () => new Map(tags.map((tag) => [tag.key, tag[lang]])),
    [lang]
  );

  const usedTags = useMemo(() => {
    const seen = new Set(laws.map((law) => law.tag));
    return tags.filter((tag) => seen.has(tag.key));
  }, []);

  const filtered = useMemo(() => {
    // Match each whitespace-separated term independently (AND), so a query
    // like "distributed failure" hits a law that contains both words apart.
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return laws
      .filter((law) => !activeTag || law.tag === activeTag)
      .filter((law) => {
        if (terms.length === 0) return true;
        const text = law[lang];
        const content = [
          text.title,
          text.concept,
          text.mechanism,
          text.counter.name,
          text.counter.note ?? '',
          text.guideline,
          text.source,
          label.get(law.tag) ?? '',
          law.slug,
        ]
          .join(' ')
          .toLowerCase();
        return terms.every((term) => content.includes(term));
      });
  }, [lang, activeTag, query, label]);

  // The permalink is the article's own page, not an index-derived fragment, so
  // a link copied today still points at the same law after the codex grows.
  const copyLink = (slug: string) => {
    if (!navigator.clipboard) return;
    navigator.clipboard
      .writeText(urlFor(lang, slug))
      .then(() => {
        setCopied(slug);
        if (copyTimeout.current) clearTimeout(copyTimeout.current);
        copyTimeout.current = setTimeout(() => {
          setCopied((c) => (c === slug ? null : c));
          copyTimeout.current = null;
        }, 1500);
      })
      .catch(() => {});
  };

  return (
    <section id="laws" className="mx-auto max-w-6xl px-6 py-28">
      <header className="mb-12 text-center">
        <p className="eyebrow text-bronze">Codex</p>
        <h2 className="display mt-3 text-4xl text-carve sm:text-5xl">
          {t.ui.laws}
        </h2>
      </header>

      <div className="relative mx-auto mb-6 max-w-sm">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-carve-dim"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.ui.searchPlaceholder}
          aria-label={t.ui.searchPlaceholder}
          className="w-full rounded-full border border-hairline bg-stone/60 py-2.5 pl-11 pr-4 text-sm text-carve placeholder:text-carve-dim focus-visible:border-bronze/60 focus-visible:outline-none"
        />
      </div>

      <div
        role="group"
        aria-label={t.ui.filterGroupLabel}
        className="mb-12 flex flex-wrap items-center justify-center gap-2"
      >
        <button
          onClick={() => setActiveTag(null)}
          aria-pressed={activeTag === null}
          className={`${chip} ${
            activeTag === null
              ? 'border-bronze/50 bg-bronze/10 text-carve'
              : 'border-hairline text-carve-dim hover:border-bronze/40 hover:text-carve'
          }`}
        >
          {t.ui.filterAll}
        </button>
        {usedTags.map((tag) => (
          <button
            key={tag.key}
            onClick={() => setActiveTag(tag.key)}
            aria-pressed={activeTag === tag.key}
            className={`${chip} ${
              activeTag === tag.key
                ? 'border-bronze/50 bg-bronze/10 text-carve'
                : 'border-hairline text-carve-dim hover:border-bronze/40 hover:text-carve'
            }`}
          >
            {tag[lang]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-carve-dim">{t.ui.resultsNone}</p>
      ) : (
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((law) => {
            const text = law[lang];
            return (
              <motion.article
                key={law.slug}
                id={law.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="tablet flex flex-col gap-5 p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => copyLink(law.slug)}
                    aria-label={`${t.ui.copyLink} — § ${article(law.number)}`}
                    className="tablet__num group/num flex items-center gap-2 text-5xl"
                  >
                    <span aria-hidden>§</span> {article(law.number)}
                    {copied === law.slug ? (
                      <Check className="h-4 w-4 text-bronze" />
                    ) : (
                      <Link2 className="h-4 w-4 opacity-0 transition-opacity group-hover/num:opacity-60 group-focus-visible/num:opacity-60" />
                    )}
                  </button>
                  <span className="eyebrow mt-2 text-right text-carve-dim">
                    {label.get(law.tag)}
                  </span>
                </div>

                <h3 className="display text-2xl leading-tight text-carve">
                  <Link
                    href={routeFor(lang, law.slug)}
                    className="transition-colors hover:text-bronze-bright"
                  >
                    {text.title}
                  </Link>
                </h3>

                <p className="text-sm leading-relaxed text-carve-dim">
                  <RichText>{text.mechanism}</RichText>
                </p>

                <div className="mt-auto space-y-4 pt-2">
                  <div className="flex items-baseline gap-2 text-sm">
                    <span className="eyebrow shrink-0 text-lapis-bright">
                      {t.ui.counter}
                    </span>
                    <span className="text-carve">{text.counter.name}</span>
                  </div>

                  <div className="directive rounded-r px-4 py-3">
                    <p className="display text-[15px] italic leading-relaxed text-carve">
                      {t.ui.quoteOpen}
                      <RichText>{text.guideline}</RichText>
                      {t.ui.quoteClose}
                    </p>
                  </div>

                  <p className="border-t border-hairline pt-3 text-xs text-carve-dim">
                    <span className="text-bronze">§</span>{' '}
                    <RichText>{text.source}</RichText>
                  </p>

                  <Link
                    href={routeFor(lang, law.slug)}
                    className="link-bronze block text-xs text-carve-dim"
                  >
                    {t.ui.readArticle} →
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
    </section>
  );
}

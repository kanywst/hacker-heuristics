'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, Link2 } from 'lucide-react';
import { translations } from '@/translations';
import { laws, tags, type Locale } from '@/data/laws';
import { article, babylonian, routeFor, urlFor } from '@/lib/site';
import RichText from './RichText';

/**
 * The body of the instrument: seventy-one articles set as one continuous
 * document, divided by rules rather than dealt out as cards. Each carries a line
 * count in the margin, its number in both Arabic and Babylonian, and the
 * conditional the original was written in.
 */
export default function LawsCodex({ lang }: { lang: Locale }) {
  const t = translations[lang];

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState<string | null>(null);
  const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    <section id="laws" className="border-t border-rule">
      {/* The finding aid, set as one line of the instrument rather than as a
          search widget with chips. */}
      <div className="border-b border-rule-soft px-5 py-4 sm:px-8">
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <label className="label shrink-0" htmlFor="codex-search">
            {t.ui.searchPlaceholder}
          </label>
          <input
            id="codex-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="field min-w-0 flex-1 px-3 py-1.5 text-xs"
          />
          <span className="label text-relief-faint">
            {filtered.length}/{laws.length}
          </span>
        </div>

        <div
          role="group"
          aria-label={t.ui.filterGroupLabel}
          className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1"
        >
          <button
            onClick={() => setActiveTag(null)}
            aria-pressed={activeTag === null}
            className="term"
          >
            {t.ui.filterAll}
          </button>
          {usedTags.map((tag) => (
            <button
              key={tag.key}
              onClick={() => setActiveTag(tag.key)}
              aria-pressed={activeTag === tag.key}
              className="term"
            >
              {tag[lang]}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="px-5 py-20 text-center text-relief-dim sm:px-8">
          {t.ui.resultsNone}
        </p>
      ) : (
        filtered.map((law) => {
          const text = law[lang];
          const lines = 4 + (text.counter.note ? 1 : 0);
          return (
            <article
              key={law.slug}
              id={law.slug}
              className="article-row grid grid-cols-[2.25rem_1fr] sm:grid-cols-[3rem_1fr] xl:grid-cols-[3rem_minmax(0,42rem)_1fr]"
            >
              <div className="linecount border-r border-rule-soft px-2 py-5">
                {Array.from({ length: lines }, (_, i) => (
                  <div key={i}>{String(i + 1).padStart(2, '0')}</div>
                ))}
              </div>

              <div className="min-w-0 px-4 py-5 sm:px-8">
                <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <button
                    type="button"
                    onClick={() => copyLink(law.slug)}
                    aria-label={`${t.ui.copyLink} — § ${article(law.number)}`}
                    className="article-row__no numeral group/no inline-flex items-baseline gap-2"
                  >
                    {article(law.number)}
                    <span className="cuneiform text-sm" aria-hidden>
                      {babylonian(law.number)}
                    </span>
                    {copied === law.slug ? (
                      <Check className="h-3 w-3 self-center text-rubric" />
                    ) : (
                      <Link2 className="h-3 w-3 self-center opacity-0 transition-opacity group-hover/no:opacity-50 group-focus-visible/no:opacity-50" />
                    )}
                  </button>

                  <h3 className="text-sm font-medium uppercase tracking-[0.06em]">
                    <Link
                      href={routeFor(lang, law.slug)}
                      className="hover:text-rubric"
                    >
                      {text.title}
                    </Link>
                  </h3>

                  <span className="label ml-auto text-relief-faint xl:hidden">
                    {label.get(law.tag)}
                  </span>
                </div>

                <div className="clause">
                  <p className="clause__op">{t.law.opIf}</p>
                  <p className="clause__v">
                    <RichText>{text.mechanism}</RichText>
                  </p>

                  <p className="clause__op clause__op--then">{t.law.opThen}</p>
                  <p className="clause__v clause__v--then">
                    {t.ui.quoteOpen}
                    <RichText>{text.guideline}</RichText>
                    {t.ui.quoteClose}
                  </p>

                  <p className="clause__op">{t.law.opUnless}</p>
                  <p className="clause__v">
                    <span className="text-relief">{text.counter.name}</span>
                    {text.counter.note ? (
                      <>
                        {' — '}
                        <RichText>{text.counter.note}</RichText>
                      </>
                    ) : null}
                  </p>
                </div>

                <p className="mt-1 text-[0.6875rem] text-relief-faint xl:hidden">
                  <span className="label mr-2">{t.law.source}</span>
                  <RichText>{text.source}</RichText>
                </p>
              </div>

              {/* The right margin is not empty space; on a wide sheet it holds
                  what a statute puts in its margin — the classification and the
                  authority the article rests on. */}
              <aside className="hidden py-5 pr-8 xl:block">
                <p className="label text-relief-faint">{label.get(law.tag)}</p>
                <p className="mt-3 max-w-[34ch] text-[0.6875rem] leading-relaxed text-relief-faint">
                  <RichText>{text.source}</RichText>
                </p>
              </aside>
            </article>
          );
        })
      )}
    </section>
  );
}

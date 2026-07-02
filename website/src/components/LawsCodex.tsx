'use client';

import { motion } from 'motion/react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Check, Link2, Search } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { translations } from '@/translations';

const chip =
  'rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors';

// The searchable, filterable codex. Kept as its own component so typing in the
// search box only re-renders this section, not the animated hero/prologue.
export default function LawsCodex() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState<number | null>(null);
  const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear a pending "copied" reset if the component unmounts first.
  useEffect(() => {
    return () => {
      if (copyTimeout.current) clearTimeout(copyTimeout.current);
    };
  }, []);

  const tags = useMemo(
    () => Array.from(new Set(t.heuristics.map((h) => h.tag))),
    [t]
  );

  // Category tags are localized, so a filter chosen in one language no longer
  // exists after switching — fall back to "all" rather than showing nothing.
  const effectiveTag = activeTag && tags.includes(activeTag) ? activeTag : null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return t.heuristics
      .map((h, i) => ({ h, n: i + 1 }))
      .filter(({ h }) => !effectiveTag || h.tag === effectiveTag)
      .filter(({ h }) =>
        !q
          ? true
          : [h.title, h.mechanism, h.counter, h.guideline, h.source, h.tag]
              .join(' ')
              .toLowerCase()
              .includes(q)
      );
  }, [t, effectiveTag, query]);

  const copyLink = (n: number) => {
    const id = `law-${String(n).padStart(2, '0')}`;
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    window.history.replaceState(null, '', `#${id}`);
    setCopied(n);
    // Reset the previous timer so rapid clicks restart the 1.5s confirmation.
    if (copyTimeout.current) clearTimeout(copyTimeout.current);
    copyTimeout.current = setTimeout(() => {
      setCopied((c) => (c === n ? null : c));
      copyTimeout.current = null;
    }, 1500);
  };

  return (
    <section id="laws" className="mx-auto max-w-6xl px-6 py-28">
      <header className="mb-12 text-center">
        <p className="eyebrow text-bronze">Codex</p>
        <h2 className="display mt-3 text-4xl text-carve sm:text-5xl">
          {t.ui.laws}
        </h2>
      </header>

      {/* Search */}
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

      {/* Category filter */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setActiveTag(null)}
          aria-pressed={effectiveTag === null}
          className={`${chip} ${
            effectiveTag === null
              ? 'border-bronze/50 bg-bronze/10 text-carve'
              : 'border-hairline text-carve-dim hover:border-bronze/40 hover:text-carve'
          }`}
        >
          {t.ui.filterAll}
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            aria-pressed={effectiveTag === tag}
            className={`${chip} ${
              effectiveTag === tag
                ? 'border-bronze/50 bg-bronze/10 text-carve'
                : 'border-hairline text-carve-dim hover:border-bronze/40 hover:text-carve'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-carve-dim">{t.ui.resultsNone}</p>
      ) : (
        <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(({ h, n }) => {
            const id = `law-${String(n).padStart(2, '0')}`;
            return (
              <motion.article
                key={id}
                id={id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="tablet flex flex-col gap-5 p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => copyLink(n)}
                    aria-label={`${t.ui.copyLink} — § ${String(n).padStart(2, '0')}`}
                    className="tablet__num group/num flex items-center gap-2 text-5xl"
                  >
                    <span aria-hidden>§</span> {String(n).padStart(2, '0')}
                    {copied === n ? (
                      <Check className="h-4 w-4 text-bronze" />
                    ) : (
                      <Link2 className="h-4 w-4 opacity-0 transition-opacity group-hover/num:opacity-60" />
                    )}
                  </button>
                  <span className="eyebrow mt-2 text-right text-carve-dim">
                    {h.tag}
                  </span>
                </div>

                <h3 className="display text-2xl leading-tight text-carve">
                  {h.title}
                </h3>

                <p className="text-sm leading-relaxed text-carve-dim">
                  {h.mechanism}
                </p>

                <div className="mt-auto space-y-4 pt-2">
                  <div className="flex items-baseline gap-2 text-sm">
                    <span className="eyebrow shrink-0 text-lapis-bright">
                      {t.ui.counter}
                    </span>
                    <span className="text-carve">{h.counter}</span>
                  </div>

                  <div className="directive rounded-r px-4 py-3">
                    <p className="display text-[15px] italic leading-relaxed text-carve">
                      {t.ui.quoteOpen}
                      {h.guideline}
                      {t.ui.quoteClose}
                    </p>
                  </div>

                  <p className="border-t border-hairline pt-3 text-xs text-carve-dim">
                    <span className="text-bronze">§</span> {h.source}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      )}
    </section>
  );
}

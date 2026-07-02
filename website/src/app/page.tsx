'use client';

import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Link2, Search } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { translations } from '@/translations';

const GITHUB_URL = 'https://github.com/kanywst/hammurabi';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const lastArticle = String(t.heuristics.length).padStart(2, '0');

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState<number | null>(null);

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
    navigator.clipboard?.writeText(url).catch(() => {});
    window.history.replaceState(null, '', `#${id}`);
    setCopied(n);
    window.setTimeout(() => setCopied((c) => (c === n ? null : c)), 1500);
  };

  const chip =
    'rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors';

  return (
    <div className="relative">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        id="top"
        className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="eyebrow text-bronze"
        >
          § 01–{lastArticle} · {t.hero.tagLabel}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="display mt-6 text-6xl font-light leading-[0.92] tracking-tight text-carve sm:text-8xl md:text-[10rem]"
        >
          Hammurabi
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="display mt-4 text-2xl italic text-bronze-bright sm:text-3xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="rule-diamond mx-auto my-8 w-40"
        >
          <span aria-hidden className="text-bronze">
            ◆
          </span>
        </motion.div>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-2xl text-base leading-relaxed text-carve-dim"
        >
          {t.hero.lede}
        </motion.p>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#laws"
            className="btn-bronze flex items-center gap-2 rounded-full px-7 py-3 text-sm"
          >
            {t.hero.ctaPrimary} <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-2 rounded-full px-7 py-3 text-sm"
          >
            {t.hero.ctaSecondary} <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>

      {/* ── Prologue ─────────────────────────────────────────── */}
      <section
        id="prologue"
        className="mx-auto max-w-3xl px-6 py-28 text-center"
      >
        <p className="eyebrow text-bronze">{t.ui.prologueLabel}</p>
        <blockquote className="display mt-8 text-2xl italic leading-snug text-carve sm:text-3xl">
          {t.ui.prologueQuote}
        </blockquote>
        <p className="eyebrow mt-6 text-carve-dim">{t.ui.prologueQuoteBy}</p>
        <div className="rule-diamond mx-auto my-10 w-32">
          <span aria-hidden className="text-bronze">
            ◆
          </span>
        </div>
        <p className="text-base leading-relaxed text-carve-dim">
          {t.ui.prologueBody}
        </p>
      </section>

      {/* ── The Laws ─────────────────────────────────────────── */}
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

      {/* ── Epilogue ─────────────────────────────────────────── */}
      <section
        id="about"
        className="mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center"
      >
        <p className="eyebrow text-bronze">{t.ui.epilogueLabel}</p>
        <div className="rule-diamond my-10 w-24">
          <span aria-hidden className="text-bronze">
            ◆
          </span>
        </div>
        <blockquote className="display text-3xl leading-snug text-carve sm:text-4xl">
          {t.ui.maxim}
        </blockquote>
        <p className="eyebrow mt-8 text-bronze">{t.ui.maximBy}</p>
        <p className="mt-12 max-w-2xl text-sm italic leading-relaxed text-carve-dim">
          {t.ui.epilogueCurse}
        </p>
      </section>
    </div>
  );
}

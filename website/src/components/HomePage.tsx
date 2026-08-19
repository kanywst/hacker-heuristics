'use client';

import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { translations } from '@/translations';
import LawsCodex from './LawsCodex';
import { laws, lawBySlug, type Locale } from '@/data/laws';
import { article, REPO_URL } from '@/lib/site';

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

export default function HomePage({ lang }: { lang: Locale }) {
  const t = translations[lang];
  const lastArticle = article(laws.length);
  // Goodhart is short enough to read at a glance and famous enough that the
  // form, not the content, is what the reader notices.
  const demo = lawBySlug.get('goodharts-law');

  return (
    <div className="relative">
      {/* ── Hero ─────────────────────────────────────────────────
          The thesis, demonstrated rather than described: the page opens by
          showing one real article in the conditional form the original code was
          written in, so the claim in the lede is already proved by the time you
          finish reading it. */}
      <section
        id="top"
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24"
      >
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="eyebrow text-carve-dim"
        >
          <span className="text-gold">§ 01–{lastArticle}</span> ·{' '}
          {t.hero.tagLabel}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="display mt-5 text-[3.5rem] leading-[0.9] tracking-tight text-carve sm:text-8xl md:text-[9.5rem]"
        >
          Hammurabi
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mono mt-6 max-w-3xl text-xs leading-relaxed tracking-wide text-carve-dim sm:text-sm"
        >
          {t.hero.lede}
        </motion.p>

        {demo ? (
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="tablet mt-10 max-w-3xl p-6 sm:p-8"
          >
            <p className="eyebrow mb-5 text-carve-dim">
              <span className="text-gold">§ {article(demo.number)}</span> ·{' '}
              {demo[lang].title}
            </p>
            <div className="clause">
              <p className="clause__op">{t.law.opIf}</p>
              <p className="text-sm leading-relaxed text-carve-dim">
                {demo[lang].mechanism}
              </p>
              <p className="clause__op clause__op--then">{t.law.opThen}</p>
              <p className="quoted display text-lg leading-relaxed text-carve sm:text-xl">
                {t.ui.quoteOpen}
                {demo[lang].guideline}
                {t.ui.quoteClose}
              </p>
              <p className="clause__op">{t.law.opUnless}</p>
              <p className="text-sm text-carve">{demo[lang].counter.name}</p>
            </div>
          </motion.div>
        ) : null}

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#laws"
            className="btn-solid flex items-center gap-2 px-6 py-3 text-sm"
          >
            {t.hero.ctaPrimary} <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-2 px-6 py-3 text-sm"
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
        <p className="eyebrow text-lapis-bright">{t.ui.prologueLabel}</p>
        <blockquote className="quoted display mt-8 text-2xl leading-snug text-carve sm:text-3xl">
          {t.ui.prologueQuote}
        </blockquote>
        <p className="eyebrow mt-6 text-carve-dim">{t.ui.prologueQuoteBy}</p>
        <p className="text-base leading-relaxed text-carve-dim">
          {t.ui.prologueBody}
        </p>
      </section>

      {/* ── The Laws ─────────────────────────────────────────── */}
      <LawsCodex lang={lang} />

      {/* ── Epilogue ─────────────────────────────────────────── */}
      <section
        id="about"
        className="mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center"
      >
        <p className="eyebrow text-lapis-bright">{t.ui.epilogueLabel}</p>
        <blockquote className="display text-3xl leading-snug text-carve sm:text-4xl">
          {t.ui.maxim}
        </blockquote>
        <p className="eyebrow mt-8 text-carve-dim">{t.ui.maximBy}</p>
        <p className="quoted mt-12 max-w-2xl text-sm leading-relaxed text-carve-dim">
          {t.ui.epilogueCurse}
        </p>
      </section>
    </div>
  );
}

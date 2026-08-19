'use client';

import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { translations } from '@/translations';
import LawsCodex from './LawsCodex';
import { laws, type Locale } from '@/data/laws';
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
            href={REPO_URL}
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
      <LawsCodex lang={lang} />

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

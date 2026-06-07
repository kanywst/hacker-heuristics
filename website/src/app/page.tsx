'use client';

import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
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
          {t.hero.tag}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="display mt-6 text-7xl font-light leading-[0.92] tracking-tight text-carve sm:text-8xl md:text-[10rem]"
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
          <span className="text-bronze">◆</span>
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

      {/* ── The Laws ─────────────────────────────────────────── */}
      <section id="laws" className="mx-auto max-w-6xl px-6 py-28">
        <header className="mb-16 text-center">
          <p className="eyebrow text-bronze">Codex</p>
          <h2 className="display mt-3 text-4xl text-carve sm:text-5xl">
            {t.ui.laws}
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-hairline md:grid-cols-2 lg:grid-cols-3">
          {t.heuristics.map((h, i) => (
            <article key={i} className="tablet flex flex-col gap-5 p-7">
              <div className="flex items-start justify-between gap-4">
                <span className="tablet__num text-5xl">
                  § {String(i + 1).padStart(2, '0')}
                </span>
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
            </article>
          ))}
        </div>
      </section>

      {/* ── Maxim ────────────────────────────────────────────── */}
      <section
        id="about"
        className="mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center"
      >
        <div className="rule-diamond mb-10 w-24">
          <span className="text-bronze">◆</span>
        </div>
        <blockquote className="display text-3xl leading-snug text-carve sm:text-4xl">
          {t.ui.maxim}
        </blockquote>
        <p className="eyebrow mt-8 text-bronze">{t.ui.maximBy}</p>
      </section>
    </div>
  );
}

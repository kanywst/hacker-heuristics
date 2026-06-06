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

      {/* ── The Laws — each one a tension between a pull and its counter ── */}
      <section id="laws" className="mx-auto max-w-5xl px-6 py-28">
        <header className="mb-16 text-center">
          <p className="eyebrow text-bronze">Codex</p>
          <h2 className="display mt-3 text-4xl text-carve sm:text-5xl">
            {lang === 'en' ? 'The Laws' : '法則'}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-carve-dim">
            {lang === 'en'
              ? 'Every law is a pull; every pull has a counter. Read the tension, then the ruling.'
              : 'すべての法則は引力であり、すべての引力には対抗力がある。緊張を読み、裁定を下せ。'}
          </p>
        </header>

        <div className="border-y border-hairline">
          {t.heuristics.map((h, i) => (
            <article
              key={i}
              className="border-t border-hairline py-12 first:border-t-0 md:py-14"
            >
              <div className="mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <span className="tablet__num text-4xl sm:text-5xl">
                  § {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="display text-2xl text-carve sm:text-3xl">
                  {h.title}
                </h3>
                <span className="eyebrow ml-auto text-carve-dim">{h.tag}</span>
              </div>

              <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-0">
                {/* The pull */}
                <div className="md:pr-10">
                  <p className="eyebrow mb-3 text-bronze">
                    {lang === 'en' ? 'The Law' : '法則 — 引力'}
                  </p>
                  <p className="text-[15px] leading-relaxed text-carve-dim">
                    {h.mechanism}
                  </p>
                </div>

                {/* The balance seam */}
                <div className="hidden md:flex md:flex-col md:items-center md:self-stretch">
                  <span className="w-px flex-1 bg-hairline" />
                  <span className="py-3 text-bronze">◆</span>
                  <span className="w-px flex-1 bg-hairline" />
                </div>

                {/* The counter + its ruling */}
                <div className="md:pl-10">
                  <p className="eyebrow mb-3 text-lapis-bright">
                    {lang === 'en' ? 'The Counter' : '対抗 — 反力'}
                  </p>
                  <p className="display text-lg text-lapis-bright">
                    {h.counter}
                  </p>
                  <p className="mt-3 border-l-2 border-bronze pl-4 text-[15px] italic leading-relaxed text-carve">
                    {h.guideline}
                  </p>
                </div>
              </div>

              <p className="mt-8 text-xs text-carve-dim md:text-center">
                <span className="text-bronze">§</span> {h.source}
              </p>
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
          {lang === 'en'
            ? 'Good engineering is not the avoidance of all risk, but the deliberate choice of which risks are worth taking.'
            : '優れたエンジニアリングとは、すべてのリスクを避けることではない。どのリスクを取る価値があるかを、意図して選ぶことである。'}
        </blockquote>
        <p className="eyebrow mt-8 text-bronze">
          {lang === 'en' ? '— The Code' : '— 法典より'}
        </p>
      </section>
    </div>
  );
}

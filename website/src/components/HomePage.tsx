import { translations } from '@/translations';
import LawsCodex from './LawsCodex';
import { laws, type Locale } from '@/data/laws';
import { article, babylonian } from '@/lib/site';

/**
 * There is no hero. An instrument opens with its own title page — what it is,
 * what it covers, where the original is — then the prologue, then the articles,
 * in that order, because that is the order the stele is carved in.
 */
export default function HomePage({ lang }: { lang: Locale }) {
  const t = translations[lang];
  const last = article(laws.length);

  return (
    <div className="lg:pl-14">
      {/* ── Title page ───────────────────────────────────────── */}
      <section
        id="top"
        className="border-b border-rule px-5 pb-10 pt-24 sm:px-8 sm:pb-14 sm:pt-28"
      >
        <p className="label">
          § 01–{last} · {t.hero.tagLabel}
        </p>

        <h1 className="mt-5 text-[clamp(2.5rem,9vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.05em]">
          HAMMURABI
        </h1>

        <p className="cuneiform mt-4 text-2xl sm:text-3xl" aria-hidden>
          {'\u{12129}\u{12000}\u{12220}\u{12261}\u{12049}'}
        </p>

        <p className="label mt-6 text-relief-faint">{t.ui.provenance}</p>

        <p className="mt-4 max-w-[62ch] leading-relaxed text-relief-dim">
          {t.hero.lede}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#laws" className="btn-solid px-5 py-2.5">
            {t.hero.ctaPrimary}
          </a>
          <a href="#prologue" className="btn-ghost px-5 py-2.5">
            {t.ui.prologueLabel}
          </a>
        </div>
      </section>

      {/* ── Prologue ─────────────────────────────────────────── */}
      <section
        id="prologue"
        className="grid border-b border-rule lg:grid-cols-[10rem_1fr]"
      >
        <p className="label px-5 pb-2 pt-6 sm:px-8 lg:px-0 lg:py-8 lg:pr-6 lg:text-right">
          {t.ui.prologueLabel}
        </p>
        <div className="px-5 pb-8 sm:px-8 lg:py-8 lg:pl-0 lg:pr-8">
          <blockquote className="max-w-[58ch] font-display text-xl leading-snug text-relief sm:text-2xl">
            {t.ui.prologueQuote}
          </blockquote>
          <p className="label mt-4 text-relief-faint">{t.ui.prologueQuoteBy}</p>
          <p className="mt-6 max-w-[62ch] leading-relaxed text-relief-dim">
            {t.ui.prologueBody}
          </p>
        </div>
      </section>

      {/* ── The articles ─────────────────────────────────────── */}
      <LawsCodex lang={lang} />

      {/* ── Epilogue ─────────────────────────────────────────────
          The original ends with curses on anyone who defaces the stone. This
          one keeps the position and changes the target. */}
      <section
        id="about"
        className="grid border-t border-rule lg:grid-cols-[10rem_1fr]"
      >
        <p className="label px-5 pb-2 pt-8 sm:px-8 lg:px-0 lg:py-10 lg:pr-6 lg:text-right">
          {t.ui.epilogueLabel}
        </p>
        <div className="px-5 pb-12 sm:px-8 lg:py-10 lg:pl-0 lg:pr-8">
          <blockquote className="max-w-[54ch] font-display text-2xl leading-snug text-relief sm:text-3xl">
            {t.ui.maxim}
          </blockquote>
          <p className="label mt-4 text-relief-faint">{t.ui.maximBy}</p>
          <p className="mt-8 max-w-[62ch] leading-relaxed text-rubric">
            {t.ui.epilogueCurse}
          </p>
          <p className="cuneiform mt-8 text-lg" aria-hidden>
            {babylonian(laws.length)}
          </p>
        </div>
      </section>
    </div>
  );
}

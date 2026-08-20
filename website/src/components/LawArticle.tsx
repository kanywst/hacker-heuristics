import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { translations } from '@/translations';
import { laws, lawBySlug, tags, type Law, type Locale } from '@/data/laws';
import { article, babylonian, DATA_URL, routeFor } from '@/lib/site';
import RichText from './RichText';
import LawDiagram from './diagrams';

/**
 * A labelled division of the instrument. On wide screens the label sits out in
 * the margin, the way a statute puts its marginal notes — which is also what
 * keeps the sheet from being a narrow column in an empty room.
 */
function Division({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid border-t border-rule-soft lg:grid-cols-[8rem_1fr]">
      <p className="label px-5 pb-1 pt-5 sm:px-8 lg:px-0 lg:py-6 lg:pr-6 lg:text-right">
        {label}
      </p>
      <div className="px-5 pb-6 text-relief-dim sm:px-8 lg:py-6 lg:pl-0 lg:pr-8">
        {children}
      </div>
    </section>
  );
}

export default function LawArticle({ law, lang }: { law: Law; lang: Locale }) {
  const t = translations[lang];
  const text = law[lang];
  const tag = tags.find((candidate) => candidate.key === law.tag);
  const related = law.seeAlso
    .map((slug) => lawBySlug.get(slug))
    .filter((candidate): candidate is Law => Boolean(candidate));

  const index = laws.findIndex((candidate) => candidate.slug === law.slug);
  const previous = index > 0 ? laws[index - 1] : null;
  const next = index < laws.length - 1 ? laws[index + 1] : null;

  return (
    <article className="lg:pl-14">
      <div className="border-b border-rule px-5 pb-2 pt-20 sm:px-8 sm:pt-24">
        <Link
          href={`${routeFor(lang)}#laws`}
          className="term inline-flex items-center gap-2 pb-4"
        >
          <ArrowLeft className="h-3 w-3" /> {t.law.backToCodex}
        </Link>
      </div>

      {/* The head of the article: the number in both scripts, the name, and the
          one-line concept. */}
      <header className="grid border-b border-rule lg:grid-cols-[8rem_1fr]">
        <div className="px-5 pt-6 sm:px-8 lg:px-0 lg:py-8 lg:pr-6 lg:text-right">
          <p className="numeral text-3xl">{article(law.number)}</p>
          <p className="cuneiform mt-1 text-sm" aria-hidden>
            {babylonian(law.number)}
          </p>
          {tag ? <p className="label mt-2">{tag[lang]}</p> : null}
        </div>
        <div className="px-5 pb-8 pt-4 sm:px-8 lg:py-8 lg:pl-0 lg:pr-8">
          <h1 className="text-2xl font-medium uppercase leading-tight tracking-[0.02em] sm:text-3xl">
            {text.title}
          </h1>
          <p className="mt-3 max-w-[60ch] text-relief-dim">{text.concept}</p>
        </div>
      </header>

      {/* Every article in the Code of Hammurabi is a conditional — šumma
          awīlum, "if a man…". So is every article here: the mechanism is the
          condition, the guideline is the consequence, and the counter-force is
          the exception that keeps the rule from hardening into dogma. */}
      <Division label={t.law.article}>
        <div className="clause max-w-[74ch]">
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
        <LawDiagram slug={law.slug} lang={lang} />
      </Division>

      <Division label={t.law.source}>
        <p className="max-w-[74ch]">
          <RichText>{text.source}</RichText>
        </p>
        <a
          href={law.sourceUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="link-quiet mt-3 inline-flex items-center gap-1.5"
        >
          {t.law.sourceLink} <ArrowUpRight className="h-3 w-3 shrink-0" />
        </a>
      </Division>

      {related.length > 0 && (
        <Division label={t.law.seeAlso}>
          <ul className="space-y-1.5">
            {related.map((other) => (
              <li key={other.slug}>
                <Link
                  href={routeFor(lang, other.slug)}
                  className="link-quiet inline-flex items-baseline gap-2"
                >
                  <span className="numeral text-sm">
                    {article(other.number)}
                  </span>
                  <span className="uppercase tracking-[0.04em]">
                    {other[lang].title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Division>
      )}

      {/* Reading straight through is a legitimate way to use a numbered code,
          so the next article is one click away rather than a trip through the
          index. */}
      <nav
        aria-label={t.law.adjacent}
        className="grid border-t border-rule sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={routeFor(lang, previous.slug)}
            className="group/nav flex flex-col gap-1 border-b border-rule-soft px-5 py-5 hover:bg-field-sunk sm:border-b-0 sm:border-r sm:px-8"
          >
            <span className="label flex items-center gap-2">
              <ArrowLeft className="h-3 w-3" /> {article(previous.number)}
            </span>
            <span className="text-sm uppercase tracking-[0.04em] group-hover/nav:text-rubric">
              {previous[lang].title}
            </span>
          </Link>
        ) : (
          <span aria-hidden className="hidden sm:block" />
        )}
        {next ? (
          <Link
            href={routeFor(lang, next.slug)}
            className="group/nav flex flex-col items-end gap-1 px-5 py-5 text-right hover:bg-field-sunk sm:px-8"
          >
            <span className="label flex items-center gap-2">
              {article(next.number)} <ArrowRight className="h-3 w-3" />
            </span>
            <span className="text-sm uppercase tracking-[0.04em] group-hover/nav:text-rubric">
              {next[lang].title}
            </span>
          </Link>
        ) : null}
      </nav>

      <div className="border-t border-rule px-5 py-5 sm:px-8">
        <a
          href={DATA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="term inline-flex items-center gap-1.5"
        >
          {t.law.editOnGitHub} <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
    </article>
  );
}

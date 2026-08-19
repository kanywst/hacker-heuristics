import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { translations } from '@/translations';
import { laws, lawBySlug, tags, type Law, type Locale } from '@/data/laws';
import { article, DATA_URL, routeFor } from '@/lib/site';
import RichText from './RichText';
import LawDiagram from './diagrams';

/**
 * A labelled section of the article. On wide screens the label sits out in the
 * margin, the way a scholarly edition annotates a text — which is both what the
 * subject calls for and what stops the page from being a narrow column floating
 * in an empty room.
 */
function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-hairline pt-6 lg:grid lg:grid-cols-[8rem_1fr] lg:gap-8">
      <p className="eyebrow text-lapis-bright lg:pt-1 lg:text-right">{label}</p>
      <div className="mt-3 text-base leading-relaxed text-carve-dim lg:mt-0">
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

  // The codex is a sequence, so an article knows the ones either side of it.
  const index = laws.findIndex((candidate) => candidate.slug === law.slug);
  const previous = index > 0 ? laws[index - 1] : null;
  const next = index < laws.length - 1 ? laws[index + 1] : null;

  return (
    <article className="mx-auto max-w-4xl px-6 pb-24 pt-32">
      <Link
        href={`${routeFor(lang)}#laws`}
        className="link-quiet inline-flex items-center gap-2 text-sm text-carve-dim"
      >
        <ArrowLeft className="h-4 w-4" /> {t.law.backToCodex}
      </Link>

      <header className="mb-14 mt-10 lg:grid lg:grid-cols-[8rem_1fr] lg:gap-8">
        <p className="eyebrow text-carve-dim lg:pt-4 lg:text-right">
          <span className="text-gold">§ {article(law.number)}</span>
          {tag ? <span className="mt-1.5 block">{tag[lang]}</span> : null}
        </p>
        <div>
          <h1 className="display text-4xl leading-tight text-carve sm:text-5xl">
            {text.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-carve-dim">
            {text.concept}
          </p>
        </div>
      </header>

      <div className="space-y-10">
        {/* Every article in the Code of Hammurabi is a conditional — šumma
            awīlum, "if a man…". So is every article here: the mechanism is the
            condition, the guideline is the consequence, and the counter-force is
            the exception that keeps the rule from becoming dogma. */}
        <Field label={t.law.article}>
          <div className="clause">
            <p className="clause__op">{t.law.opIf}</p>
            <p>
              <RichText>{text.mechanism}</RichText>
            </p>

            <p className="clause__op clause__op--then">{t.law.opThen}</p>
            <div className="directive rounded-r px-5 py-4">
              <p className="quoted display text-xl leading-relaxed text-carve sm:text-2xl">
                {t.ui.quoteOpen}
                <RichText>{text.guideline}</RichText>
                {t.ui.quoteClose}
              </p>
            </div>

            <p className="clause__op">{t.law.opUnless}</p>
            <p>
              <strong className="text-carve">{text.counter.name}</strong>
              {text.counter.note ? (
                <>
                  {' — '}
                  <RichText>{text.counter.note}</RichText>
                </>
              ) : null}
            </p>
          </div>
          <LawDiagram slug={law.slug} lang={lang} />
        </Field>

        <Field label={t.law.source}>
          <p>
            <RichText>{text.source}</RichText>
          </p>
          <a
            href={law.sourceUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="link-quiet mt-3 inline-flex items-center gap-1.5 text-sm text-lapis-bright"
          >
            {t.law.sourceLink} <ArrowUpRight className="h-4 w-4 shrink-0" />
          </a>
        </Field>

        {related.length > 0 && (
          <Field label={t.law.seeAlso}>
            <ul className="space-y-2">
              {related.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={routeFor(lang, other.slug)}
                    className="link-quiet text-carve"
                  >
                    <span className="text-gold">§ {article(other.number)}</span>{' '}
                    {other[lang].title}
                  </Link>
                </li>
              ))}
            </ul>
          </Field>
        )}
      </div>

      {/* Reading straight through is a legitimate way to use a numbered code, so
          the article that comes next is one click away rather than a trip back
          through the index. */}
      <nav
        aria-label={t.law.adjacent}
        className="mt-16 grid gap-px border border-hairline sm:grid-cols-2"
      >
        {previous ? (
          <Link
            href={routeFor(lang, previous.slug)}
            className="tablet group/nav flex flex-col gap-1 p-6"
          >
            <span className="eyebrow flex items-center gap-2 text-carve-dim">
              <ArrowLeft className="h-3.5 w-3.5" /> § {article(previous.number)}
            </span>
            <span className="display text-lg text-carve transition-colors group-hover/nav:text-lapis-bright">
              {previous[lang].title}
            </span>
          </Link>
        ) : (
          <span aria-hidden className="hidden sm:block" />
        )}
        {next ? (
          <Link
            href={routeFor(lang, next.slug)}
            className="tablet group/nav flex flex-col items-end gap-1 p-6 text-right"
          >
            <span className="eyebrow flex items-center gap-2 text-carve-dim">
              § {article(next.number)} <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="display text-lg text-carve transition-colors group-hover/nav:text-lapis-bright">
              {next[lang].title}
            </span>
          </Link>
        ) : null}
      </nav>

      <footer className="mt-10 text-sm">
        <a
          href={DATA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-quiet inline-flex items-center gap-1.5 text-carve-dim"
        >
          {t.law.editOnGitHub} <ArrowUpRight className="h-4 w-4" />
        </a>
      </footer>
    </article>
  );
}

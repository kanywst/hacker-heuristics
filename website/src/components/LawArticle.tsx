import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { translations } from '@/translations';
import { lawBySlug, tags, type Law, type Locale } from '@/data/laws';
import { article, DATA_URL, routeFor } from '@/lib/site';
import RichText from './RichText';

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-hairline pt-6">
      <p className="eyebrow text-bronze">{label}</p>
      <div className="mt-3 text-base leading-relaxed text-carve-dim">
        {children}
      </div>
    </div>
  );
}

export default function LawArticle({ law, lang }: { law: Law; lang: Locale }) {
  const t = translations[lang];
  const text = law[lang];
  const tag = tags.find((candidate) => candidate.key === law.tag);
  const related = law.seeAlso
    .map((slug) => lawBySlug.get(slug))
    .filter((related): related is Law => Boolean(related));

  return (
    <article className="mx-auto max-w-3xl px-6 pb-28 pt-36">
      <Link
        href={`${routeFor(lang)}#laws`}
        className="link-bronze inline-flex items-center gap-2 text-sm text-carve-dim"
      >
        <ArrowLeft className="h-4 w-4" /> {t.law.backToCodex}
      </Link>

      <header className="mt-10">
        <p className="eyebrow text-carve-dim">
          <span className="text-bronze">§ {article(law.number)}</span>
          {tag ? ` · ${tag[lang]}` : null}
        </p>
        <h1 className="display mt-4 text-4xl leading-tight text-carve sm:text-5xl">
          {text.title}
        </h1>
        <p className="mt-4 text-lg text-bronze-bright">{text.concept}</p>
      </header>

      <div className="rule-diamond mx-auto my-12 w-32">
        <span aria-hidden className="text-bronze">
          ◆
        </span>
      </div>

      <div className="space-y-8">
        <Field label={t.law.mechanism}>
          <RichText>{text.mechanism}</RichText>
        </Field>

        <Field label={t.law.counter}>
          <strong className="text-carve">{text.counter.name}</strong>
          {text.counter.note ? (
            <>
              {' — '}
              <RichText>{text.counter.note}</RichText>
            </>
          ) : null}
        </Field>

        <Field label={t.law.guideline}>
          <div className="directive rounded-r px-5 py-4">
            <p className="display text-lg italic leading-relaxed text-carve">
              {t.ui.quoteOpen}
              <RichText>{text.guideline}</RichText>
              {t.ui.quoteClose}
            </p>
          </div>
        </Field>

        <Field label={t.law.source}>
          <p>
            <RichText>{text.source}</RichText>
          </p>
          <a
            href={law.sourceUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="link-bronze mt-3 inline-flex items-center gap-1.5 break-all text-sm text-bronze-bright"
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
                    className="link-bronze text-carve"
                  >
                    <span className="text-bronze">
                      § {article(other.number)}
                    </span>{' '}
                    {other[lang].title}
                  </Link>
                </li>
              ))}
            </ul>
          </Field>
        )}
      </div>

      <footer className="mt-16 border-t border-hairline pt-6 text-sm">
        <a
          href={DATA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="link-bronze inline-flex items-center gap-1.5 text-carve-dim"
        >
          {t.law.editOnGitHub} <ArrowUpRight className="h-4 w-4" />
        </a>
      </footer>
    </article>
  );
}

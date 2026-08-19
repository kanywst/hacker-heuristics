#!/usr/bin/env node
/**
 * data/laws.yaml -> README.md, translations/ja.md, website/src/data/laws.ts
 *
 * Run with --check to fail instead of writing when a target is out of date.
 * That is what CI uses, so a pull request that edits a generated file by hand,
 * or edits the data without regenerating, cannot merge.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { anchor, article, heading, requireCodex, ROOT } from './lib/codex.mjs';

const CHECK = process.argv.includes('--check');
const START = '<!-- CODEX:START -->';
const END = '<!-- CODEX:END -->';
const WARNING = "<!-- Generated from data/laws.yaml by scripts/generate.mjs. Do not edit by hand. -->";

const COPY = {
  en: {
    indexHead: ['§', 'Law', 'Category', 'The core idea'],
    concept: 'Concept',
    mechanism: 'Mechanism',
    counter: 'Counter',
    guideline: 'Guideline',
    source: 'Source',
    seeAlso: 'See also',
    sourceLink: 'source ↗',
    backToIndex: 'Back to the index',
  },
  ja: {
    indexHead: ['§', '法則', 'カテゴリ', '核心'],
    concept: '概念',
    mechanism: 'メカニズム',
    counter: '対立概念',
    guideline: '判断の指針',
    source: '出典',
    seeAlso: '関連',
    sourceLink: '原典 ↗',
    backToIndex: '目次に戻る',
  },
};

function indexTable(laws, tags, locale) {
  const t = COPY[locale];
  const rows = laws.map((law) => {
    const title = heading(law, locale);
    const cells = [
      `\`${article(law.number)}\``,
      `[${title}](#${anchor(title)})`,
      tags[law.tag][locale],
      law[locale].concept.replace(/\|/g, '\\|'),
    ];
    return `| ${cells.join(' | ')} |`;
  });
  return [
    `| ${t.indexHead.join(' | ')} |`,
    `| ${t.indexHead.map(() => '---').join(' | ')} |`,
    ...rows,
  ].join('\n');
}

function entry(law, tags, locale, bySlug) {
  const t = COPY[locale];
  const loc = law[locale];
  const stop = locale === 'ja' ? '。' : '.';
  const counter = loc.counter.note
    ? `**${loc.counter.name}** — ${loc.counter.note}${stop}`
    : `**${loc.counter.name}**${stop}`;

  const lines = [
    `### ${heading(law, locale)}`,
    '',
    `\`§ ${article(law.number)}\` · ${tags[law.tag][locale]}`,
    '',
    `- **${t.concept}:** ${loc.concept}`,
    `- **${t.mechanism}:** ${loc.mechanism}`,
    `- **${t.counter}:** ${counter}`,
    `- **${t.guideline}:** ${loc.guideline}`,
    `- **${t.source}:** ${loc.source} — [${t.sourceLink}](${law.source_url})`,
  ];

  if (law.see_also.length > 0) {
    const refs = law.see_also.map((slug) => {
      const other = bySlug.get(slug);
      const title = heading(other, locale);
      return `[${title}](#${anchor(title)})`;
    });
    lines.push(`- **${t.seeAlso}:** ${refs.join(' · ')}`);
  }

  return lines.join('\n');
}

function codexSection(laws, tags, locale) {
  const bySlug = new Map(laws.map((l) => [l.slug, l]));
  return [
    WARNING,
    '',
    indexTable(laws, tags, locale),
    '',
    ...laws.flatMap((law) => [entry(law, tags, locale, bySlug), '']),
  ]
    .join('\n')
    .trimEnd();
}

/** The "laws-56" shield in the header is a fact about the data, so it is kept
 *  in step here rather than remembered by hand. */
function retallyBadge(markdown, count) {
  return markdown.replace(
    /(img\.shields\.io\/badge\/(?:laws|%E6%B3%95%E5%89%87)-)\d+(-)/g,
    `$1${count}$2`
  );
}

function spliceMarkdown(path, section, count) {
  const current = readFileSync(path, 'utf8');
  const from = current.indexOf(START);
  const to = current.indexOf(END);
  if (from === -1 || to === -1 || to < from) {
    throw new Error(`${path}: missing or reversed ${START} / ${END} markers`);
  }
  const next =
    current.slice(0, from + START.length) + '\n\n' + section + '\n\n' + current.slice(to);
  return retallyBadge(next, count);
}

function websiteModule(laws, tags) {
  const payload = {
    tags: Object.entries(tags).map(([key, value]) => ({ key, ...value })),
    laws: laws.map((law) => ({
      slug: law.slug,
      number: law.number,
      tag: law.tag,
      sourceUrl: law.source_url,
      seeAlso: law.see_also,
      en: law.en,
      ja: law.ja,
    })),
  };

  return `// Generated from data/laws.yaml by scripts/generate.mjs. Do not edit by hand.

export type Locale = 'en' | 'ja';

export interface Counter {
  name: string;
  note?: string;
}

export interface LawText {
  title: string;
  concept: string;
  mechanism: string;
  counter: Counter;
  guideline: string;
  source: string;
}

export interface Law {
  slug: string;
  number: number;
  tag: string;
  sourceUrl: string;
  seeAlso: string[];
  en: LawText;
  ja: LawText;
}

export interface Tag {
  key: string;
  en: string;
  ja: string;
}

export const tags: Tag[] = ${JSON.stringify(payload.tags, null, 2)};

export const laws: Law[] = ${JSON.stringify(payload.laws, null, 2)};

export const lawBySlug: ReadonlyMap<string, Law> = new Map(
  laws.map((law) => [law.slug, law])
);
`;
}

const { tags, laws } = requireCodex();

const targets = [
  { path: join(ROOT, 'README.md'), build: () => spliceMarkdown(join(ROOT, 'README.md'), codexSection(laws, tags, 'en'), laws.length) },
  { path: join(ROOT, 'translations', 'ja.md'), build: () => spliceMarkdown(join(ROOT, 'translations', 'ja.md'), codexSection(laws, tags, 'ja'), laws.length) },
  { path: join(ROOT, 'website', 'src', 'data', 'laws.ts'), build: () => websiteModule(laws, tags) },
];

let stale = 0;
for (const target of targets) {
  const next = target.build();
  const rel = target.path.slice(ROOT.length + 1);
  if (CHECK) {
    const current = readFileSync(target.path, 'utf8');
    if (current !== next) {
      stale += 1;
      console.error(`stale: ${rel}`);
    }
  } else {
    writeFileSync(target.path, next);
    console.log(`wrote: ${rel}`);
  }
}

if (CHECK) {
  if (stale > 0) {
    console.error(`\n${stale} generated file(s) are out of date. Run \`npm run generate\` and commit the result.`);
    process.exit(1);
  }
  console.log(`ok: ${targets.length} generated files are up to date`);
}

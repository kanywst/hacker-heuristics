import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parse } from 'yaml';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
export const LOCALES = ['en', 'ja'];
export const SITE_URL = 'https://kanywst.github.io/hammurabi';
export const REPO_URL = 'https://github.com/kanywst/hammurabi';

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const REQUIRED_TEXT = ['title', 'concept', 'mechanism', 'guideline', 'source'];

/**
 * GitHub's heading-anchor algorithm: lowercase, drop everything that is not a
 * word character, space or hyphen, then turn runs of whitespace into hyphens.
 * Used for in-markdown links so the table of contents can never rot.
 */
export function anchor(heading) {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-');
}

/** § 07 — display only, derived from position so it can never drift. */
export function article(number) {
  return String(number).padStart(2, '0');
}

/**
 * The markdown heading a law gets in a given locale. The Japanese codex keeps
 * the English name alongside the translated one, because that is the string
 * readers actually search for.
 */
export function heading(law, locale) {
  return locale === 'en' ? law.en.title : `${law.ja.title} (${law.en.title})`;
}

export function loadCodex({ file = join(ROOT, 'data', 'laws.yaml') } = {}) {
  const raw = parse(readFileSync(file, 'utf8'));
  const problems = [];
  const fail = (msg) => problems.push(msg);

  if (!raw || typeof raw !== 'object') fail('laws.yaml did not parse to an object');
  const tags = raw?.tags ?? {};
  const laws = raw?.laws ?? [];

  if (!Array.isArray(laws) || laws.length === 0) fail('laws: expected a non-empty list');

  for (const [key, value] of Object.entries(tags)) {
    if (!SLUG_RE.test(key)) fail(`tags: "${key}" is not a valid key`);
    for (const locale of LOCALES) {
      if (!value?.[locale]) fail(`tags.${key}.${locale} is missing`);
    }
  }

  const seenSlugs = new Map();
  const seenAnchors = Object.fromEntries(LOCALES.map((l) => [l, new Map()]));

  laws.forEach((law, index) => {
    const at = `laws[${index}]${law?.slug ? ` (${law.slug})` : ''}`;

    if (!law?.slug) fail(`${at}: slug is missing`);
    else if (!SLUG_RE.test(law.slug)) fail(`${at}: slug must be lowercase kebab-case`);
    else if (seenSlugs.has(law.slug)) fail(`${at}: duplicate slug, first seen at index ${seenSlugs.get(law.slug)}`);
    else seenSlugs.set(law.slug, index);

    if (!law?.tag) fail(`${at}: tag is missing`);
    else if (!tags[law.tag]) fail(`${at}: tag "${law.tag}" is not declared under tags:`);

    if (!law?.source_url) fail(`${at}: source_url is missing`);
    else if (!/^https:\/\/\S+$/.test(law.source_url)) fail(`${at}: source_url must be an https URL`);

    for (const ref of law?.see_also ?? []) {
      if (ref === law.slug) fail(`${at}: see_also refers to itself`);
    }

    for (const locale of LOCALES) {
      const loc = law?.[locale];
      if (!loc) {
        fail(`${at}: the "${locale}" block is missing`);
        continue;
      }
      for (const field of REQUIRED_TEXT) {
        const value = loc[field];
        if (typeof value !== 'string' || value.trim() === '') {
          fail(`${at}.${locale}.${field} is empty`);
        } else if (value !== value.trim()) {
          fail(`${at}.${locale}.${field} has leading or trailing whitespace`);
        } else if ((value.match(/\*\*/g) ?? []).length % 2 !== 0) {
          fail(`${at}.${locale}.${field} has an unbalanced ** emphasis marker`);
        }
      }
      if (typeof loc.counter?.name !== 'string' || loc.counter.name.trim() === '') {
        fail(`${at}.${locale}.counter.name is empty`);
      }
      if (loc.counter && 'note' in loc.counter && !loc.counter.note?.trim()) {
        fail(`${at}.${locale}.counter.note is present but empty`);
      }
      if (typeof loc.title === 'string') {
        const a = anchor(loc.title);
        const seen = seenAnchors[locale];
        if (seen.has(a)) fail(`${at}.${locale}.title collides with "${seen.get(a)}" (both anchor to #${a})`);
        else seen.set(a, loc.title);
      }
    }
  });

  // see_also is resolved after every slug is known, so order in the file does
  // not decide whether a forward reference is legal.
  laws.forEach((law, index) => {
    for (const ref of law?.see_also ?? []) {
      if (!seenSlugs.has(ref)) fail(`laws[${index}] (${law.slug}): see_also "${ref}" matches no law`);
    }
  });

  const numbered = laws.map((law, index) => ({
    ...law,
    number: index + 1,
    see_also: law.see_also ?? [],
  }));

  return { tags, laws: numbered, problems };
}

/** Load and throw on the first structural problem. Callers that want to report
 *  every problem at once should use loadCodex directly. */
export function requireCodex() {
  const codex = loadCodex();
  if (codex.problems.length > 0) {
    throw new Error(`data/laws.yaml is invalid:\n  - ${codex.problems.join('\n  - ')}`);
  }
  return codex;
}

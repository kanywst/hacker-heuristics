#!/usr/bin/env node
/**
 * Lift the diagrams out of the built site and write them as standalone SVGs the
 * markdown can use.
 *
 * They are extracted from `website/out` rather than authored a second time,
 * because a figure that says something different from the site is worse than no
 * figure. The site draws them with CSS custom properties; a file loaded through
 * an <img> cannot see those, so the tokens are substituted for literal values —
 * once against a dark ground and once against a light one, since GitHub renders
 * the README in whichever theme the reader chose.
 *
 * Requires a site build first:
 *   npm --prefix website run build && npm run generate:diagrams
 *
 * Run with --check to fail instead of writing when a file is out of date, which
 * is what CI uses so a change to a diagram component cannot land without the
 * markdown's copy of it following.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { LOCALES, requireCodex, ROOT } from './lib/codex.mjs';

const OUT = join(ROOT, 'website', 'out');
const ASSETS = join(ROOT, 'assets', 'diagrams');

/* The site's own tokens, and a light set built from GitHub's own greys so the
   figures sit in the README rather than on top of it. */
const THEMES = {
  dark: {
    '--color-field': '#100e0c',
    '--color-field-sunk': '#171410',
    '--color-relief': '#ece6d9',
    '--color-relief-dim': '#8b8478',
    '--color-relief-faint': '#5a554c',
    '--color-rule': '#ece6d9',
    '--color-rule-soft': '#322d26',
    '--color-rubric': '#c9543a',
    '--color-rubric-bright': '#e0684c',
  },
  light: {
    '--color-field': '#ffffff',
    '--color-field-sunk': '#f6f8fa',
    '--color-relief': '#1f2328',
    '--color-relief-dim': '#59636e',
    '--color-relief-faint': '#818b98',
    '--color-rule': '#1f2328',
    '--color-rule-soft': '#d1d9e0',
    '--color-rubric': '#a3260f',
    '--color-rubric-bright': '#cf3a1c',
  },
};

const FONTS = {
  '--font-mono': "ui-monospace, SFMono-Regular, Menlo, monospace",
  '--font-display': "Georgia, 'Times New Roman', serif",
};

function pageFor(locale, slug) {
  const path =
    locale === 'en'
      ? join(OUT, 'laws', slug, 'index.html')
      : join(OUT, locale, 'laws', slug, 'index.html');
  return existsSync(path) ? readFileSync(path, 'utf8') : null;
}

/**
 * Pull the diagram out of a rendered page.
 *
 * Scoped to the <figure> rather than to the first <svg> on the page — the first
 * <svg> is the masthead's menu icon, and most articles have no diagram at all.
 */
function extract(html) {
  const figure = html.match(/<figure[^>]*>[\s\S]*?<\/figure>/);
  if (!figure) return null;
  const svg = figure[0].match(/<svg[^>]*>[\s\S]*?<\/svg>/);
  if (!svg) return null;
  const title = svg[0].match(/<title>([\s\S]*?)<\/title>/);
  if (!title) return null;
  const caption = figure[0].match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/);
  const viewBox = svg[0].match(/viewBox="([^"]+)"/);
  if (!viewBox) return null;
  return {
    svg: svg[0],
    viewBox: viewBox[1],
    title: decode(title[1]),
    caption: decode(stripTags(caption?.[1] ?? '')),
  };
}

const stripTags = (s) => s.replace(/<[^>]*>/g, '');

const decode = (s) =>
  s
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

/** Turn the page's inline <svg> into a standalone file for one theme. */
function standalone({ svg, viewBox }, theme) {
  const [, , w, h] = viewBox.split(/\s+/).map(Number);
  let out = svg;

  for (const [token, value] of Object.entries({ ...THEMES[theme], ...FONTS })) {
    out = out.split(`var(${token})`).join(value);
  }

  // The page's utility classes mean nothing in a file, and an <img> needs a
  // namespace and real dimensions rather than the page's role and aria-label.
  out = out
    .replace(/\sclass="[^"]*"/g, '')
    .replace(
      /^<svg[^>]*>/,
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="${viewBox}" role="img">`
    );

  // A transparent figure reads as broken on whichever theme it was not drawn
  // for, so the ground is painted in.
  const ground = `<rect width="${w}" height="${h}" fill="${THEMES[theme]['--color-field']}"/>`;
  return out.replace(/(<title>[\s\S]*?<\/title>)/, `$1${ground}`);
}

if (!existsSync(OUT)) {
  console.error(
    'website/out is missing. Run `npm --prefix website run build` first.'
  );
  process.exit(1);
}

const CHECK = process.argv.includes('--check');

const { laws } = requireCodex();
if (!CHECK) mkdirSync(ASSETS, { recursive: true });

const manifest = {};
let written = 0;
const stale = [];

/** Write, or in --check mode record a mismatch instead. */
function emit(path, contents) {
  const rel = path.slice(ROOT.length + 1);
  if (CHECK) {
    if (!existsSync(path) || readFileSync(path, 'utf8') !== contents) {
      stale.push(rel);
    }
    return;
  }
  writeFileSync(path, contents);
  written += 1;
}

for (const law of laws) {
  const perLocale = {};

  for (const locale of LOCALES) {
    const html = pageFor(locale, law.slug);
    if (!html) continue;
    const found = extract(html);
    if (!found) continue;

    perLocale[locale] = { title: found.title, caption: found.caption };

    // One file per locale as well as per theme: the labels are inside the
    // drawing, so an English figure under a Japanese article is a figure the
    // reader cannot read.
    for (const theme of Object.keys(THEMES)) {
      emit(
        join(ASSETS, `${law.slug}-${locale}-${theme}.svg`),
        standalone(found, theme) + '\n'
      );
    }
  }

  if (Object.keys(perLocale).length > 0) manifest[law.slug] = perLocale;
}

emit(join(ASSETS, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

const count = Object.keys(manifest).length;

if (count === 0) {
  console.error('no diagrams found — did the build succeed?');
  process.exit(1);
}

if (CHECK) {
  if (stale.length > 0) {
    console.error(`${stale.length} diagram file(s) are out of date:`);
    for (const path of stale) console.error(`  - ${path}`);
    console.error(
      '\nRun `npm --prefix website run build && npm run generate:diagrams`,'
    );
    console.error('then `npm run generate`, and commit the result.');
    process.exit(1);
  }
  console.log(`ok: diagram files for ${count} articles are up to date`);
} else {
  console.log(`wrote: ${written} files for ${count} articles`);
}

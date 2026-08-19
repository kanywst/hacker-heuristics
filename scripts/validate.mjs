#!/usr/bin/env node
/**
 * Structural gate for data/laws.yaml.
 *
 * The codex used to live in three hand-maintained copies and they drifted: the
 * numbering in the markdown and the numbering on the site disagreed. This is the
 * check that makes that class of bug impossible to commit.
 */
import { loadCodex, LOCALES } from './lib/codex.mjs';

const { tags, laws, problems } = loadCodex();
const warnings = [];

// Every declared category should be in use; an orphan is nearly always a typo
// in a law's tag rather than a deliberately empty category.
const used = new Set(laws.map((l) => l.tag));
for (const key of Object.keys(tags)) {
  if (!used.has(key)) warnings.push(`tags.${key} is declared but no law uses it`);
}

// A counter that merely restates the law is the failure mode the form exists to
// prevent, and the cheapest machine-checkable version of that is "the counter is
// not the title again".
for (const law of laws) {
  for (const locale of LOCALES) {
    const { title, counter } = law[locale];
    if (counter?.name && counter.name.toLowerCase() === title.toLowerCase()) {
      problems.push(`${law.slug}.${locale}: counter restates the title`);
    }
  }
}

// see_also should be mutual: if A points at B, B should point back at A. A
// one-way reference is usually a half-finished edit.
const bySlug = new Map(laws.map((l) => [l.slug, l]));
for (const law of laws) {
  for (const ref of law.see_also) {
    if (!bySlug.get(ref)?.see_also.includes(law.slug)) {
      warnings.push(`${law.slug} -> ${ref} in see_also is not reciprocated`);
    }
  }
}

for (const warning of warnings) console.warn(`warn: ${warning}`);

if (problems.length > 0) {
  console.error(`\ndata/laws.yaml is invalid (${problems.length} problem(s)):`);
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

const counts = Object.entries(
  laws.reduce((acc, l) => ({ ...acc, [l.tag]: (acc[l.tag] ?? 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([tag, n]) => `${tag} ${n}`)
  .join(', ');

console.log(`ok: ${laws.length} laws, ${Object.keys(tags).length} categories, ${LOCALES.length} locales`);
console.log(`    ${counts}`);
if (warnings.length > 0) console.log(`    ${warnings.length} warning(s)`);

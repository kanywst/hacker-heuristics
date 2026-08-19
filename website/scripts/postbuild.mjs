#!/usr/bin/env node
/**
 * Stamp the right `lang` on the exported Japanese documents.
 *
 * Next.js gives one root layout to every route, and that layout owns <html>, so
 * a static export ships `lang="en"` on the Japanese pages too. A crawler reads
 * the served attribute, not the one React sets after hydration, so the fix has
 * to happen in the output.
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// fileURLToPath rather than URL.pathname: the latter leaves the path
// percent-encoded, so a checkout under a directory with a space in its name
// would silently find nothing.
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'out');
const JA = join(OUT, 'ja');

async function htmlFiles(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
  const found = await Promise.all(
    entries.map(async (entry) => {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) return htmlFiles(path);
      return entry.name.endsWith('.html') ? [path] : [];
    })
  );
  return found.flat();
}

const files = await htmlFiles(JA);

if (files.length === 0) {
  console.error(
    'postbuild: no Japanese documents found under out/ja — did the export change?'
  );
  process.exit(1);
}

let patched = 0;
for (const file of files) {
  const html = await readFile(file, 'utf8');
  const next = html.replace(/<html([^>]*?)\slang="en"/, '<html$1 lang="ja"');
  if (next !== html) {
    await writeFile(file, next);
    patched += 1;
  }
}

if (patched !== files.length) {
  console.error(
    `postbuild: expected to stamp lang="ja" on ${files.length} documents but only ${patched} matched.`
  );
  process.exit(1);
}

console.log(`postbuild: stamped lang="ja" on ${patched} exported documents`);

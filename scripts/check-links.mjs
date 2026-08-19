#!/usr/bin/env node
/**
 * Verify that every source URL in the codex still resolves.
 *
 * A citation nobody can follow is only marginally better than no citation, and
 * link rot is silent. Run it locally before adding a law; CI runs it on a
 * schedule rather than per-commit so a publisher's outage never blocks a merge.
 */
import { requireCodex } from './lib/codex.mjs';

// A publisher answering 401/403/405/429 has told us the URL exists and that it
// does not serve robots — which is most of academic publishing, and the SEC.
// That is a different fact from "this citation is dead", so it is reported
// separately and does not fail the run.
const BLOCKED = new Set([401, 403, 405, 429]);
const CONCURRENCY = 6;
const TIMEOUT_MS = 20_000;
const UA =
  'Mozilla/5.0 (compatible; hammurabi-linkcheck/1.0; +https://github.com/kanywst/hammurabi)';

async function probe(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'user-agent': UA, accept: '*/*' },
    });
    return { status: res.status, url: res.url };
  } finally {
    clearTimeout(timer);
  }
}

async function check(law) {
  const url = law.source_url;
  try {
    // Some publishers (and every DOI resolver) answer HEAD with a 4xx while
    // serving GET fine, so a failed HEAD is retried rather than reported.
    let result = await probe(url, 'HEAD');
    if (result.status >= 400) result = await probe(url, 'GET');
    return { law, ...result };
  } catch (error) {
    return { law, status: 0, error: error.name === 'AbortError' ? 'timeout' : String(error.cause ?? error) };
  }
}

const { laws } = requireCodex();
const queue = [...laws];
const results = [];

await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    for (let law = queue.shift(); law; law = queue.shift()) {
      results.push(await check(law));
    }
  })
);

results.sort((a, b) => a.law.number - b.law.number);

const verbose = process.argv.includes('--verbose');
const failed = [];
const blocked = [];

for (const result of results) {
  const { law, status, error } = result;
  const ok = status >= 200 && status < 400;
  const isBlocked = BLOCKED.has(status);
  if (!ok && !isBlocked) failed.push(result);
  if (isBlocked) blocked.push(result);

  const mark = ok ? 'ok  ' : isBlocked ? 'bot ' : 'FAIL';
  const detail = error ? ` (${error})` : ` (${status})`;
  if (!ok || verbose) console.log(`${mark} ${law.slug}${detail} ${law.source_url}`);
}

const resolved = results.length - failed.length - blocked.length;
console.log(
  `\n${resolved} resolved, ${blocked.length} refused robots, ${failed.length} broken (of ${results.length})`
);

if (failed.length > 0) {
  console.error(`\n${failed.length} source URL(s) are broken. Fix data/laws.yaml or replace the citation.`);
  process.exit(1);
}

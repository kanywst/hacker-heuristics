# Contributing to Hammurabi

Corrections are the most valuable thing you can send. A law credited to the wrong person, a source that turns out to be a blog post quoting the real source, a guideline that does not survive contact with a real on-call rotation — those are the defects that matter here, and they are worth an issue on their own.

## The one rule

**`data/laws.yaml` is the only content file you edit.**

`README.md`, `translations/ja.md` and `website/src/data/laws.ts` are generated from it. CI regenerates them and fails if what you committed differs, so editing them by hand cannot merge.

```bash
npm install
npm run validate      # structural checks on data/laws.yaml
npm run generate      # rewrite every generated file
npm run check:links   # verify every source URL still resolves
```

Run `npm run generate` before you commit, and commit its output alongside your data change.

## What belongs in the codex

A law earns a place if it meets all four:

1. **It is a recurring force, not a preference.** Something that keeps happening to systems, teams or decisions whether or not anyone believes in it. "Use tabs" is a preference. Conway's Law is a force.
2. **It has a real origin.** A named paper, book, letter, RFC or talk. Folklore is allowed (Eagleson's Law is folklore) but it must be labelled as folklore rather than dressed up with a fake citation.
3. **It has a genuine counter-force.** Not a restatement of the law and not a caveat — a different principle that pushes the other way, and that a reasonable engineer would sometimes follow instead. If you cannot name one, the entry is probably a slogan rather than a law.
4. **It survives the "so what" test.** The guideline has to tell somebody what to do differently on Monday.

A law does *not* earn a place just because it is famous. If Hammurabi cannot say something the entry's own source does not, leave it out.

## Adding a law

Append to the end of `laws:` in `data/laws.yaml`. Never insert into the middle — `§` numbers are assigned in file order, and inserting renumbers everything after it.

```yaml
  - slug: some-law
    tag: systems
    source_url: https://doi.org/10.1145/…
    see_also:
      - conways-law
    en:
      title: Some Law
      concept: One line. What force is this?
      mechanism: |-
        Why it happens. Usually a fact about people or about systems, not about software.
      counter:
        name: The Counter-Force
        note: optional gloss on when the counter wins
      guideline: |-
        What to do on Monday, in the imperative.
      source: |-
        Author, *Work* (Venue, Year) — what this source is cited for.
    ja:
      title: 何々の法則
      # …the same five fields
```

Notes on the fields:

- **`slug`** is permanent. It is the article's URL on the website (`/laws/<slug>/`) and its identity in `see_also`. Once it has shipped it must not change, even if the title does.
- **`tag`** must already exist under `tags:` at the top of the file. Adding a category is fine, but a category with one member is usually a sign the law belongs in an existing one.
- **`source_url`** must be `https` and should point at the primary source: the DOI, the RFC, the author's own page, the publisher's record. Not a summary, not a Medium post. Where the primary source is offline or paywalled, an encyclopedia entry that cites it properly is acceptable.
- **`see_also`** must be reciprocated. If A lists B, B lists A — `npm run validate` warns when it is not.
- **`ja`** is required. A law that only exists in one language leaves the two codices asserting different things, which is exactly the drift this repository is built to prevent. If you cannot write the Japanese, say so in the pull request and it can be filled in for you.

Long values use YAML's `|-` block form. Do not hard-wrap prose; one paragraph is one line.

## Correcting a source

Open an issue or a pull request that says what the current citation claims, what the source actually says, and where you checked. Attribution fixes are merged fast and do not need to be bundled with anything else.

## Translations

The site and the codex ship in English and Japanese. A new language means adding a locale to `data/laws.yaml`, `scripts/lib/codex.mjs`, `website/src/translations/index.ts` and a route under `website/src/app/`. That is a real amount of work — open an issue first so it does not get half-done.

## Style

- Guidelines are instructions. "Cap concurrent requests", not "it can be helpful to cap concurrent requests".
- These are heuristics, not laws of nature. An entry that forgets that will get flagged in review.
- No em-dash-free rewriting of someone else's entry for taste alone. Substance changes only.
- Commit messages follow conventional commits: `feat(codex): add …`, `fix(source): …`, `docs: …`.

## Code of conduct

By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).

## Licensing

Content contributions are licensed under [CC BY-SA 4.0](./LICENSE); code contributions under [MIT](./website/LICENSE). By opening a pull request you agree to license your contribution under those terms.

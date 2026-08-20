# Changelog

## [1.0.1](https://github.com/kanywst/hammurabi/compare/v1.0.0...v1.0.1) (2026-08-20)


### Corrections

* **ci:** let release-please keep the token it releases with ([#84](https://github.com/kanywst/hammurabi/issues/84)) ([9057426](https://github.com/kanywst/hammurabi/commit/9057426027e05241618e50631184e26966042b2b))
* **ci:** the release guard was blocking the release it guarded ([#83](https://github.com/kanywst/hammurabi/issues/83)) ([bb203b2](https://github.com/kanywst/hammurabi/commit/bb203b25f4feae417551f08f8b9ddb96197b9dce))

## [1.0.0](https://github.com/kanywst/hammurabi/compare/v0.1.0...v1.0.0) (2026-08-20)


### ⚠ BREAKING CHANGES

* **site:** the palette tokens are replaced. carve/bronze/lapis/gold/ hairline/stone are gone; field/relief/rule/rubric take their place.
* **codex:** content/en.md, translations/jp.md and README.jp.md are gone. The English codex is README.md, the Japanese one is translations/ja.md, and both are generated. Site fragment links of the form #law-NN no longer resolve; the replacement is /laws/<slug>/.

### Added to the codex

* **codex:** add 15 articles, closing the counter-force gaps ([78f1113](https://github.com/kanywst/hammurabi/commit/78f111313945004886efb12b284e0b5d8fd13330))
* **content:** add 10 laws and a Security category to the codex ([4cb3d8f](https://github.com/kanywst/hammurabi/commit/4cb3d8f7c713b83a7ab3eb1bba71074bdfb11e8d))
* **content:** add Source citations, 5 new heuristics, drop "30" framing ([7ad20d0](https://github.com/kanywst/hammurabi/commit/7ad20d00e63aab905ab98ea55044325ae2b6ed0b))
* **docs:** put the figures in the markdown, in both themes and both languages ([9093e9d](https://github.com/kanywst/hammurabi/commit/9093e9dcb505d39e8bdbeb794add281bb2212ad1))
* expand and enrich the Hammurabi codex ([4179b68](https://github.com/kanywst/hammurabi/commit/4179b68f230fc255d2a4a20e61f14750e62b9e74))
* **rebrand:** rename to Hammurabi and redesign as an engraved codex ([107c88f](https://github.com/kanywst/hammurabi/commit/107c88f0eabcdcf6071b971ed47c601ad7c12737))
* **seo:** add OpenGraph and Twitter card metadata ([1115a7a](https://github.com/kanywst/hammurabi/commit/1115a7a5bb30e1fb663a4ae9c9aae06c7eca9b8c))
* **site:** diorite and lapis, and the article set as the conditional it is ([de46aeb](https://github.com/kanywst/hammurabi/commit/de46aeb7cdeb1a45477ca0e3b6b5a9994371c164))
* **site:** draw the six laws whose mechanism is a shape ([c1acd36](https://github.com/kanywst/hammurabi/commit/c1acd364c0bda7441b755fb92c2c4679e1963d80))
* **site:** rebuild as an estampage, not a website ([d94ea58](https://github.com/kanywst/hammurabi/commit/d94ea58ae8c94b158cd8891e111d4cd69f4e238d))
* **web:** add § favicon (SVG) ([6f689f8](https://github.com/kanywst/hammurabi/commit/6f689f839f271b91824af866a3379207d44d5cda))
* **web:** restructure laws as law-vs-counter tension layout ([3b6e3a2](https://github.com/kanywst/hammurabi/commit/3b6e3a2a3090523f2d8ee0832a9dee5537e0d8e7))
* **website:** accessibility and reading polish ([32b7458](https://github.com/kanywst/hammurabi/commit/32b74583d4baadd4f5c9c6c393f3c33f9d2ca6da))
* **website:** add sitemap, robots, and codex structured data ([f40158b](https://github.com/kanywst/hammurabi/commit/f40158b76b0d47763c7ca879aa936b086496a675))
* **website:** make the codex browsable — permalinks, filter, search ([006c543](https://github.com/kanywst/hammurabi/commit/006c5436691374d17e9175bf80df6290e8216a88))
* **website:** match codex search terms independently (AND) ([638dc54](https://github.com/kanywst/hammurabi/commit/638dc541c88210af976f23e9068c9792af7c817f))


### Corrections

* address CodeRabbit review on PR [#1](https://github.com/kanywst/hammurabi/issues/1) ([21bff99](https://github.com/kanywst/hammurabi/commit/21bff99b9cbc639b1e1e458a09034c11886f99aa))
* close the gaps a review of the migration found ([01547f3](https://github.com/kanywst/hammurabi/commit/01547f3cecda0f10be928ff36e94743260b3b227))
* **codex:** a counter that restated its own rule, and two citations that did not match their links ([3115a46](https://github.com/kanywst/hammurabi/commit/3115a46095ccb3c375c12e3a70ad7e4021a8c8a5))
* **codex:** four attribution and form defects found in review ([dfef092](https://github.com/kanywst/hammurabi/commit/dfef09227ff70bf17fb7a59b3cf5598686ddf565))
* **deps:** bump nanoid to 3.3.18 for GHSA-2v37-7h3g-55p8 ([8196062](https://github.com/kanywst/hammurabi/commit/8196062546a338eb557fa34e2dce7c36510804d5))
* **deps:** resolve high-severity advisories in production dependencies ([89e8ed4](https://github.com/kanywst/hammurabi/commit/89e8ed4ac9c5e9a2bff6741078c0cf66b37300ea))
* **site:** actually reserve gold, instead of only claiming to ([f7ea347](https://github.com/kanywst/hammurabi/commit/f7ea3478f3e6417bbeb061306ec9b8df7779089d))
* **site:** five defects a design review turned up ([d5e08dd](https://github.com/kanywst/hammurabi/commit/d5e08ddec602298eb45bbabff2e6c6fc1ef27eb6))
* **site:** pin the masthead to the viewport, and stop clipping the wedges ([dc63d6d](https://github.com/kanywst/hammurabi/commit/dc63d6d1ada26ed73310ba12d634664cd965c868))
* **site:** stop the masthead picking a side the stylesheet says it will not ([cce04ef](https://github.com/kanywst/hammurabi/commit/cce04ef1df09912b5f3a84c47d0a743acdd63fb2))
* **website:** guard clipboard and localStorage against throwing contexts ([3df5fa6](https://github.com/kanywst/hammurabi/commit/3df5fa65370e6d68e2b4d0a25e285d97704ad12e))
* **website:** point Open Graph image to the existing banner asset ([0347684](https://github.com/kanywst/hammurabi/commit/034768413fe857f7d1206ea9782844095c94b919))
* **website:** reset codex filter across language switch, sync back-to-top on mount ([518075c](https://github.com/kanywst/hammurabi/commit/518075ccc1d0cf0bee08bb9872d55dcc7abd497e))
* **website:** sync html lang, dedupe iconMap, harden external links ([0d228a5](https://github.com/kanywst/hammurabi/commit/0d228a51f6823ff217b9214e386c1d32c72a7101))
* **website:** track copy timeout and guard SSR globals ([85f8c21](https://github.com/kanywst/hammurabi/commit/85f8c2117b8fbcc503db8cce499ff518a26e396d))
* **web:** use array index as law card key to avoid remount on language toggle ([b6b5a00](https://github.com/kanywst/hammurabi/commit/b6b5a007c0dad52e631e8f504f8feff27ec12592))


### Documentation

* give the project the front door an outside contributor needs ([1b4edb8](https://github.com/kanywst/hammurabi/commit/1b4edb8ecb9b645ab20fb5cb78f84331596a0345))
* point READMEs at renamed banner.jpg ([f6c4eed](https://github.com/kanywst/hammurabi/commit/f6c4eed3db8189b871a504ac82e7103bc969dcdd))
* remove generator watermark from README banner ([11c7836](https://github.com/kanywst/hammurabi/commit/11c7836837b6cc91d676d8a3fe058645d3da7a29))
* rename banner to bust GitHub's stale image cache ([b487f95](https://github.com/kanywst/hammurabi/commit/b487f959b92ea324cb03ab7bd73eafdf49548be8))
* use stele banner as README header (optimized 1600px JPEG, 68KB) ([faaa140](https://github.com/kanywst/hammurabi/commit/faaa140e9bcdf8158980bed70a2304a77b172178))


### Internal

* **codex:** generate every surface from data/laws.yaml ([16e15b1](https://github.com/kanywst/hammurabi/commit/16e15b1f3dd5fcf204971c996e0711108db5636e))
* **i18n:** move inline UI strings to dict, localize quotes + tab title ([6d79951](https://github.com/kanywst/hammurabi/commit/6d799519b85878056e21213d1d583f91c5adb620))
* **website:** scope language store per provider, drop focus radius ([602173b](https://github.com/kanywst/hammurabi/commit/602173b7a6c80b4e355bd4682b60fcc586c34e02))

# Security Policy

## What is in scope

This repository is a content project with a static companion site. There is no server, no database and no user data, so the realistic attack surface is small:

- the build and release tooling under `scripts/` and `.github/workflows/`
- the Next.js site under `website/`, which is exported to static HTML and served from GitHub Pages
- supply-chain issues in the dependencies of either

## Reporting a vulnerability

Use GitHub's private vulnerability reporting: **[Report a vulnerability](https://github.com/kanywst/hammurabi/security/advisories/new)**.

Please do not open a public issue for anything you believe is exploitable. You should get an acknowledgement within a week.

Include what you would want to receive: what the issue is, how to reproduce it, and what an attacker gets out of it.

## Supported versions

The `main` branch is the only supported version. Fixes land there and go out with the next deploy.

## Out of scope

- Findings from an automated scanner with no demonstrated impact.
- Missing hardening headers on GitHub Pages, which this project does not control.
- Disagreements about the content of the codex. Those are issues, and they are welcome — see [CONTRIBUTING.md](./CONTRIBUTING.md).

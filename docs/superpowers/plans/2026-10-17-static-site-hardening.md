# Static Site Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Harden the deploy-only repository with repeatable SEO generation, artifact validation, and safe static-hosting headers.

**Architecture:** A dependency-free Node.js module owns both deterministic metadata generation and validation. Generated HTML and sitemap files remain deployable as-is, while tests exercise the module against temporary fixtures.

**Tech Stack:** Node.js built-ins, `node:test`, static HTML/XML, Cloudflare Pages headers

**Spec:** `docs/superpowers/specs/2026-10-17-static-site-hardening-design.md`

## Global Constraints

- Do not modify minified application JavaScript.
- Do not add dependencies.
- Keep transformations idempotent.
- Do not touch untracked user files.

## Review Focus

- Running the generator twice must not duplicate canonical tags or sitemap entries.
- A missing HTML/JSON briefing pair must fail validation.
- Malformed JSONL must report the exact file and line.
- Graph links referencing missing nodes must fail validation.
- Stats totals that disagree with event data must fail validation.

---

### Task 1: Static-site metadata generator and validator

**Files:**
- Create: `scripts/site-tools.mjs`
- Create: `test/site-tools.test.mjs`
- Modify: `briefing/*.html`, `growth/index.html`, `ai/index.html`, `sitemap.xml`

**Interfaces:**
- Produces: `hardenSite(rootDir)` and `validateSite(rootDir)` exports plus `harden`/`validate` CLI commands.

- [ ] Write fixture-based failing tests for idempotent canonicals, sitemap generation, JSONL errors, briefing pairs, graph links, and stats totals.
- [ ] Run `node --test test/site-tools.test.mjs` and confirm it fails because the module is absent.
- [ ] Implement the minimal generator and validator.
- [ ] Run the tests and confirm they pass.
- [ ] Run `node scripts/site-tools.mjs harden .` against the repository.
- [ ] Run `node scripts/site-tools.mjs validate .` against the repository.

### Task 2: Hosting headers and root metadata

**Files:**
- Create: `_headers`
- Modify: `index.html`
- Modify: `scripts/site-tools.mjs`
- Modify: `test/site-tools.test.mjs`

**Interfaces:**
- Consumes: `validateSite(rootDir)` from Task 1.
- Produces: validation of required headers and root metadata.

- [ ] Add failing tests for required security headers, immutable hashed assets, theme color, and a no-JavaScript fallback.
- [ ] Run the targeted test and confirm the expected failures.
- [ ] Add the minimal `_headers` rules and root metadata.
- [ ] Run the complete test suite and repository validator.


# Static Site Hardening Design

## Intent

Improve the deployed `bess-ai-control` artifact without editing minified application logic. The change should make generated content easier to discover, add safe hosting defaults, and detect corrupt or incomplete generated data before deployment.

## Scope

- Add canonical URLs to briefing, growth, and AI static pages.
- Generate sitemap entries for every dated briefing page.
- Add non-breaking security and cache headers supported by the current static hosting layout.
- Add a dependency-free Node.js tool that applies the repeatable SEO transformation and validates site artifacts.
- Add tests for the tool using temporary fixtures.

## Constraints

- Do not edit minified JavaScript application behavior.
- Do not use or modify untracked user files.
- Do not add runtime dependencies or a package manager.
- Transformations must be idempotent.
- Validation must fail with actionable messages and a non-zero exit code.

## Non-goals

- Moving Anthropic API-key handling to a backend; that requires the missing source project.
- Redesigning the UI or changing application routes.
- Publishing, pushing, or merging changes.


# CLAUDE.md — tempso-com

Guidance for Claude Code working in this repo. Workspace-wide rules live in the
parent folder's `CLAUDE.md` (`Tempso New/`). Setup, the gate and CI are in
`README.md`; the skill bindings are in `.claude/PROJECT-FACTS.md`.

## What this is

The Tempso marketing site, tempso.com: Next.js 16 (App Router), TypeScript,
Tailwind, one route (`src/app/page.tsx`). Content is static and authored; there
is no backend, database or analytics.

## Non-negotiables

- **A merge to `main` deploys tempso.com.** There's no staging step, so the
  gate and the PR review are the only checks before production.
- **`public/app-config.json` controls the live mobile apps.** The Flutter app
  (and later the v2 apps) fetch it on launch and resume to decide whether a
  build may run. A wrong `min_supported_build` locks every user below it out
  of the app. Read `docs/app-config.md` before touching it, and raise a value
  only once that build is live in its store. `scripts/check-app-config.mjs`
  (run by the gate) validates the shape and `min_supported_build <= latest_build`.
- Its `Cache-Control` header is set in `next.config.js`. Clients see a change
  within about 5 minutes. The Flutter app requests the `www.tempso.com` host,
  so both hosts must keep serving the file.
- **One gate: `bin/check`** (`npm run check`); `--fast` skips the build. Hooks
  come from `npm ci` (the `prepare` script sets `core.hooksPath`). Fix a red
  gate; never `--no-verify`.

## Working here

- Node 24+. `dev` and `build` pass `--webpack` (not Turbopack). The `build`
  script uses `PIPESTATUS`, so npm must run scripts with bash.
- Lint allows up to 50 warnings (`--max-warnings 50`). Don't add new ones, and
  say how many there were when you report lint as passing.
- Styling is mixed: Tailwind plus CSS modules (`*.module.css`), with a
  migration described in `src/styles/CSS_MIGRATION_STRATEGY.md`.
  `src/lib/theme.ts` is the closest thing to design tokens.
- Many files in `src/components/sections/` are unreferenced leftovers from a
  redesign, several with casing-variant twins (`HeroSection` vs `hero`). Check
  what `src/app/page.tsx` actually imports before editing a section.
- Config files come in pairs. `next.config.js` holds the live settings (the
  app-config header); `next.config.ts` is empty scaffolding. `postcss.config.js`
  (Tailwind 3) and `postcss.config.mjs` (Tailwind 4's plugin, which isn't
  installed) disagree, and which one Next loads hasn't been verified, so check
  before changing either.
- `tempso-landing-structure.md` is an early blueprint, not a description of
  the current page.

## Linear

Workspace **Tempso**, prefix `TEM-`, ticket prefix `[Site]`.

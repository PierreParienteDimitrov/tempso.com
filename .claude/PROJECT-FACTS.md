# PROJECT-FACTS — tempso-com

Bindings for the shared `eval-*` / ops skills at `~/.claude/skills/`. Those are
procedures ported from another codebase; this file is what makes them true here.

Measured 2026-08-16 at `315e16e`. §2, §6, §12 and the baselines were updated
2026-10-12 (TEM-127) for the gate and CI added by TEM-125 and TEM-127; the rest
is as measured in August. `CLAUDE.md` (added 2026-10-13) holds the working
rules; this file holds only the skill bindings.

## 1. Deployables

One Next.js 16 marketing site (App Router). Single route: `src/app/page.tsx`.

`package.json` name is **`tempso-com-temp`** — stale from scaffolding.

## 2. Language, tooling, invocation

TypeScript, Next.js 16 (webpack, not turbopack — both `dev` and `build` pass
`--webpack`), Tailwind, npm.

```
npm run lint         eslint . --ext .js,.jsx,.ts,.tsx --max-warnings 50
npm run type-check   tsc --noEmit
npm run build        next build --webpack (stderr filtered through grep)
bin/check            the gate: hook self-test, app-config.json, lint, type-check, build
bin/check --fast     the same without the build
bin/check --full     what CI runs (same steps as the default today)
npm run check        alias for bin/check
```

The build script uses `PIPESTATUS`, so npm must run scripts with bash. That is
the default on macOS; CI sets `NPM_CONFIG_SCRIPT_SHELL: bash` because ubuntu's
`/bin/sh` is dash.

`--max-warnings 50` is a **calibrated tolerance, not zero** — any skill
reporting "lint passes" here must say how many warnings were tolerated, or the
green is meaningless.

## 3. Database

None. Content is static: `src/data/mockHomepage.ts`,
`src/data/bachGoldbergAlbumData.json`.

## 4. Production-side health/coverage function

None.

## 5. Background jobs

None.

## 6. Deploy platform + logs

Vercel (assumed from the sibling repos and the Next.js stack — **not verified**;
there is no `vercel.json` in this repo). Use the `vercel` skill, but confirm the
project slug before trusting output.

**CI** (`.github/workflows/`):

- `ci.yml` — job `gate` runs `bin/check --full` on every pull request to `main`
  (plus `workflow_dispatch`), Node 24, no path filters, no push trigger. The
  build reads no environment variable, so CI sets no secrets.
- `dependency-audit.yml` — `npm audit --omit=dev` every Monday 13:00 UTC (plus
  `workflow_dispatch`); red on any advisory in the production tree.

The CI run is the backstop for the pre-push hook (§12), which `--no-verify` and
cloud sessions skip. Whether GitHub requires the `gate` check to pass before
merging is branch protection, a repo setting that is not in this repo.

## 7. Error tracking

None. No Sentry, no PostHog, no analytics of any kind.

## 8. Issue tracker

Linear workspace **Tempso**, prefix `TEM-`, claude.ai Linear (Tempso) connector.

## 9. Frontend structure

- App Router, `src/app/` — one page, one layout, `globals.css`.
- `src/components/ui/` — local primitives: `button`, `card`, `grid`,
  `text-field`, `icons`, `animations`. Mixed styling: Tailwind **and**
  CSS modules (`*.module.css`), plus `src/styles/preserved.module.css` and a
  `CSS_MIGRATION_STRATEGY.md` describing a migration in progress.
- `src/lib/theme.ts` — the closest thing to design tokens.
- **No shared component package.** Nothing is imported from `web-app`
  (renamed from `tempso-app` 2026-08-16);
  the dark theme was copied from it by hand (`c0ff78f`).
- 3D: `@react-three/fiber` + `drei` + `postprocessing`; animation:
  `framer-motion`.

## 10. External source of truth

None. Content is authored, so **parity audits are `SKIP` here** — there is no
authority to diff against and the audit would degrade into a style checker.

## 11. LLM content

None.

## 12. Git workflow

`main`, plus a merged `animation` branch. Hooks are version-controlled in
`.githooks/` and wired by `npm ci` / `npm install` through the `prepare` script
(`git config core.hooksPath .githooks`, shared by worktrees):

- `pre-commit` — fast checks on staged blobs only: forbidden paths (`.env*`,
  `node_modules/`, `.next/`, key files), conflict markers, blobs over 2 MB.
  `--self-test` pins its rules.
- `pre-push` — `ggshield secret scan pre-push` when installed, then `bin/check`.

Both hooks and CI call the one gate, `bin/check`. Fix a red gate; don't
`--no-verify`.

---

## Skill scope verdict

| In scope now | Out of scope (and why) |
|---|---|
| `eval-dead-code` — **highest value here** | `eval-data-coverage`, `migration-check` — no DB |
| `eval-accessibility` — real UI, no a11y tooling | `eval-sync-health` — no jobs |
| `eval-health`, `eval-dependencies`, `eval-performance` | `incident`, `sentry` — no error tracking |
| `eval-design-system` — deferred but closer than elsewhere | parity audits — content is authored |

## Measured baselines (recalibrate against these, don't copy thresholds)

- **14 of ~24 section components are unreferenced** from anywhere in `src/`:
  `AboutSection`, `ComingSoonSection`, `cta`, `DevSection`, `HeroSection`,
  `integration`, `machine-learning`, `MissionSection`, `music-library`,
  `press`, `ScreensSection`, `SolutionSection`, `stats`, `testimonials`.
  Several are casing-variant twins of live ones (`HeroSection` vs the imported
  `hero`; `stats` vs `StatsSection`; `testimonials` vs `TestimonialsSection`),
  which is the signature of a redesign that left the old set in place.
- **Duplicate config files**: `next.config.js` *and* `next.config.ts`;
  `postcss.config.js` *and* `postcss.config.mjs`. Which one Next resolves is
  not determined here — a skill must not assume.
- Zero test files. (CI exists since TEM-127; the only automated checks are the
  gate's: hook self-test, `scripts/check-app-config.mjs`, lint, type-check,
  build.)
- **Dev-only advisories, left open on purpose** (`npm audit`, 2026-10-12: 9, of
  which 2 moderate and 7 high; `npm audit --omit=dev` reports 0, which is what
  `dependency-audit.yml` enforces). All sit in the build/lint toolchain:
  `tailwindcss` 3.x via `braces` (GHSA-vfj7-8cjw-p6xm), `micromatch`,
  `chokidar`, `postcss-nested` and `postcss-selector-parser`
  (GHSA-rj75-hqrm-r3gf); and `eslint-config-next` via
  `@next/eslint-plugin-next` and `fast-glob`. `npm audit fix --force` would
  move Tailwind to 4.x and `eslint-config-next` to 14.x (a downgrade), so
  clearing them is a separate ticket. Re-run `npm audit` before trusting this
  list.

## Limits

Static read at `315e16e`. The orphan list is computed from string matches on
`sections/<Name>` across `src/**/*.ts{,x}` — it would miss a dynamic import or
a barrel re-export, so treat entries as **deletion candidates**, not a delete
list. The Vercel deployment claim is unverified. The August measurements
(§1–5, §7–11, orphan list) were read statically, not run. The `npm audit`
figures were run locally on 2026-10-12; the workflows have not run on GitHub
as of that date.

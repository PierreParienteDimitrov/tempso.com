# PROJECT-FACTS — tempso-com

Bindings for the shared `eval-*` / ops skills at `~/.claude/skills/`. Those are
procedures ported from another codebase; this file is what makes them true here.

Measured 2026-08-16 at `315e16e`. **This repo has no `CLAUDE.md`** — unlike the
other three — so until one exists this file is the only written guidance here.

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
npm run check        lint + type-check + build
```

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

**No CI.** No `.github/workflows/` at all — the only gate is a local pre-push
hook (see §12).

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

`main`, plus a merged `animation` branch. **A pre-push hook already exists** and
is installed by `npm run prepare`, which writes `.git/hooks/pre-push` calling
`npm run pre-push` (type-check + lint + build).

This is the precedent for the workspace kernel's pre-push wiring — but note it
writes into `.git/hooks/` directly rather than using a version-controlled
`.githooks/` + `core.hooksPath`, so the hook body is not reviewable and not
shared.

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
- Zero test files, zero CI.

## Limits

Static read at `315e16e`. The orphan list is computed from string matches on
`sections/<Name>` across `src/**/*.ts{,x}` — it would miss a dynamic import or
a barrel re-export, so treat entries as **deletion candidates**, not a delete
list. The Vercel deployment claim is unverified. Nothing was run.

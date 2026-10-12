# tempso-com

The Tempso marketing site, [tempso.com](https://tempso.com): Next.js 16 (App Router), TypeScript and Tailwind, deployed from `main` when a change merges.

It also serves `public/app-config.json`, which the live mobile apps read for their force-update gate. See [docs/app-config.md](docs/app-config.md) before touching it.

## Setup

Needs Node 24 or newer (`engines` in `package.json`).

```bash
npm ci        # installs dependencies and wires the git hooks (core.hooksPath -> .githooks)
npm run dev   # http://localhost:3000
```

`npm ci` runs the `prepare` script, which sets `core.hooksPath` to `.githooks`. Worktrees share that setting.

## The gate

`bin/check` is the one gate. The pre-push hook, `npm run check` and CI all call it.

```bash
bin/check          # hook self-test, app-config.json, lint, type-check, production build
bin/check --fast   # the same without the build
bin/check --full   # what CI runs (the same steps as the default today)
```

Each step prints a count, so a step that checked nothing can't pass as green. Fix a red gate; don't use `--no-verify`.

The pre-commit hook (`.githooks/pre-commit`) is a fast check on staged files only: it refuses `.env*`, `node_modules/`, `.next/` and key files, conflict markers, and blobs over 2 MB.

## CI

`.github/workflows/ci.yml` runs `bin/check --full` on every pull request to `main`, with no path filters. `.github/workflows/dependency-audit.yml` runs `npm audit --omit=dev` every Monday and goes red on any advisory in the production dependency tree.

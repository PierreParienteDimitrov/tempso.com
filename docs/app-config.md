# Mobile app config (`/app-config.json`)

`public/app-config.json` is served at `https://tempso.com/app-config.json`. The Tempso mobile apps fetch it on launch and on resume to decide whether the installed build is still allowed to run. It is deliberately a static file on the marketing site, not a Laravel endpoint, so it keeps working after Laravel is retired.

It is served with `Cache-Control: public, max-age=300, must-revalidate` (see `next.config.js`), so a change reaches clients within about 5 minutes of the deploy.

## Fields (per platform: `ios`, `android`)

| Field | Effect |
| --- | --- |
| `min_supported_build` | Installed build **below** this number gets a blocking "Update Tempso" screen that links to `store_url`. The app can't be used until it is updated. |
| `latest_build` | Installed build below this number (but at or above `min_supported_build`) gets an optional, dismissible "update available" prompt. |
| `store_url` | App Store / Play Store listing the update screens open. |

`schema_version` is the file format version. Bump it only when the shape changes in a way old apps can't read.

All values are `0` by default, which turns the gate off.

## Build numbers

Use the **build number**: the `+N` part of the app version, not the marketing version. For example, the Flutter app at `1.2.24+162` is build `162`. The v2 native apps (SwiftUI / Jetpack Compose) will start at build `1000` and up. That way, setting `min_supported_build: 1000` blocks every Flutter install once v2 ships.

iOS and Android build numbers are independent, so set each platform on its own.

## How to raise them

1. Make sure the target build is **live** in that store (approved and fully rolled out). Otherwise users get stuck on a screen pointing at an update they can't install.
2. Edit `public/app-config.json`:
   - Soft prompt: set `latest_build` to the new build number.
   - Force update: set `min_supported_build` to the oldest build you still allow. Users below it are blocked.
3. Keep `min_supported_build <= latest_build`.
4. Validate with `bin/check` (runs `scripts/check-app-config.mjs`; `bin/check --fast` skips the build), then commit and deploy. CI runs the same gate on every pull request. A wrong `min_supported_build` locks users out, so double-check the numbers before merging.

#!/usr/bin/env node
// Validates public/app-config.json, the file the live Flutter app's force-update
// gate reads on every launch (see docs/app-config.md). A merge to main deploys
// it, so a typo here goes straight to every user.
//
//   node scripts/check-app-config.mjs [path]      # default: public/app-config.json
//   node scripts/check-app-config.mjs --self-test # planted violations must fire
//
// The app fails open on a malformed file (no gate at all), so a broken file
// does not lock users out; it silently switches the gate off. Either way it
// must never ship.
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PLATFORMS = ["ios", "android"];
const BUILD_KEYS = ["min_supported_build", "latest_build"];

// The ONE implementation of the rules. Both the real run and --self-test call
// this, so the test can't drift into asserting a second copy of the logic.
// Returns { errors, platforms } where platforms counts the valid sections.
export function validate(text) {
  const errors = [];
  let json;
  try {
    json = JSON.parse(text);
  } catch (e) {
    return { errors: [`not valid JSON: ${e.message}`], platforms: 0 };
  }
  if (json === null || typeof json !== "object" || Array.isArray(json)) {
    return { errors: ["top level is not an object"], platforms: 0 };
  }

  if (json.schema_version !== 1) {
    errors.push(`schema_version must be 1, got ${JSON.stringify(json.schema_version)}`);
  }

  // Dart's jsonDecode reads `5.0` as a double, which the app rejects, while
  // JSON.parse turns it into the integer 5. Check the literal text too.
  for (const key of BUILD_KEYS) {
    const re = new RegExp(`"${key}"\\s*:\\s*(-?[0-9][0-9.eE+-]*)`, "g");
    for (const m of text.matchAll(re)) {
      if (!/^-?[0-9]+$/.test(m[1])) {
        errors.push(`${key} is written as ${m[1]}; write a plain integer`);
      }
    }
  }

  let platforms = 0;
  for (const platform of PLATFORMS) {
    const section = json[platform];
    if (section === null || typeof section !== "object" || Array.isArray(section)) {
      errors.push(`${platform}: missing platform section`);
      continue;
    }
    const before = errors.length;
    for (const key of BUILD_KEYS) {
      const v = section[key];
      if (!Number.isSafeInteger(v) || v < 0) {
        errors.push(`${platform}.${key} must be a non-negative integer, got ${JSON.stringify(v)}`);
      }
    }
    const { min_supported_build: min, latest_build: latest, store_url: url } = section;
    if (Number.isSafeInteger(min) && Number.isSafeInteger(latest) && min > latest) {
      errors.push(`${platform}: min_supported_build (${min}) > latest_build (${latest})`);
    }
    if (typeof url !== "string" || !url.startsWith("https://") || !URL.canParse(url)) {
      errors.push(`${platform}.store_url must be an https:// URL, got ${JSON.stringify(url)}`);
    }
    if (errors.length === before) platforms++;
  }
  return { errors, platforms };
}

function selfTest() {
  const good = {
    schema_version: 1,
    ios: { min_supported_build: 0, latest_build: 3, store_url: "https://apps.apple.com/app/x/id1" },
    android: { min_supported_build: 2, latest_build: 2, store_url: "https://play.google.com/store/apps/details?id=x" },
  };
  const variant = (mutate) => {
    const c = structuredClone(good);
    mutate(c);
    return JSON.stringify(c, null, 2);
  };
  // [name, text, expected: "pass" | substring of an expected error]
  const cases = [
    ["valid file", JSON.stringify(good, null, 2), "pass"],
    ["min equal to latest", variant((c) => (c.ios.min_supported_build = 3)), "pass"],
    ["min > latest", variant((c) => (c.android.min_supported_build = 5)), "min_supported_build (5) > latest_build (2)"],
    ["negative build", variant((c) => (c.ios.min_supported_build = -1)), "ios.min_supported_build must be a non-negative integer"],
    ["string build", variant((c) => (c.ios.latest_build = "3")), "ios.latest_build must be a non-negative integer"],
    ["fractional build", variant((c) => (c.ios.latest_build = 3.5)), "ios.latest_build must be a non-negative integer"],
    ["float literal build", JSON.stringify(good).replace('"latest_build":3', '"latest_build":3.0'), "written as 3.0"],
    ["non-https store_url", variant((c) => (c.android.store_url = "http://play.google.com/x")), "android.store_url must be an https:// URL"],
    ["missing store_url", variant((c) => delete c.ios.store_url), "ios.store_url must be an https:// URL"],
    ["missing platform", variant((c) => delete c.android), "android: missing platform section"],
    ["schema_version 2", variant((c) => (c.schema_version = 2)), "schema_version must be 1"],
    ["missing schema_version", variant((c) => delete c.schema_version), "schema_version must be 1"],
    ["invalid JSON", "{", "not valid JSON"],
    ["top-level array", "[]", "top level is not an object"],
  ];
  let failed = 0;
  for (const [name, text, want] of cases) {
    const { errors, platforms } = validate(text);
    const ok =
      want === "pass"
        ? errors.length === 0 && platforms === PLATFORMS.length
        : errors.some((e) => e.includes(want));
    console.log(`  ${ok ? "ok" : "x"} ${name} -> ${errors.length ? errors.join("; ") : "pass"}`);
    if (!ok) failed++;
  }
  if (failed) {
    console.error(`[app-config] Self-test FAILED (${failed} of ${cases.length} cases)`);
    process.exit(1);
  }
  console.log(`[app-config] Self-test passed (${cases.length} cases)`);
}

const args = process.argv.slice(2);
if (args[0] === "--self-test") {
  selfTest();
} else {
  const root = join(dirname(fileURLToPath(import.meta.url)), "..");
  const file = args[0] ?? join(root, "public/app-config.json");
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch (e) {
    console.error(`[app-config] cannot read ${file}: ${e.message}`);
    process.exit(1);
  }
  const { errors, platforms } = validate(text);
  if (errors.length || platforms === 0) {
    for (const e of errors) console.error(`  x ${e}`);
    console.error(`[app-config] ${file} is invalid (${platforms} valid platforms)`);
    process.exit(1);
  }
  console.log(`[app-config] ${platforms} platforms valid (${PLATFORMS.join(", ")})`);
}

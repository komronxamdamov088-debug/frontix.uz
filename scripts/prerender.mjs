// Post-build step: renders each route with a real headless browser and writes the
// fully-formed HTML (title/meta/JSON-LD/content produced by the client app) into
// dist/<route>/index.html. This lets crawlers that don't execute JavaScript (many
// AI answer engines, social-link previews) see real content instead of an empty
// <div id="root">. If anything here fails (e.g. no browser available in the build
// environment), we log a warning and exit 0 so the normal SPA build still ships.
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { SOLUTION_ROUTES } from "./solutionRoutes.mjs";
import { BLOG_ROUTES } from "./blogRoutes.mjs";
import { PROJECT_ROUTES } from "./projectRoutes.mjs";
import { PARTNER_PATHS } from "./partnerRoutes.mjs";
import { SERVICE_PATHS } from "./serviceRoutes.mjs";

const PORT = 4321;
const ROOT = process.cwd();
const DIST = join(ROOT, "dist");
// Keep PAGE_PATHS/LANG_PREFIXES in sync with src/App.tsx and scripts/generate-sitemap.mjs.
const PAGE_PATHS = [
  "/",
  "/services",
  ...SERVICE_PATHS,
  "/team",
  "/partners",
  ...PARTNER_PATHS,
  "/about",
  "/contact",
  "/yechimlar",
  ...SOLUTION_ROUTES,
  "/blog",
  ...BLOG_ROUTES,
  "/loyihalar",
  ...PROJECT_ROUTES,
];
const LANG_PREFIXES = ["", "/ru", "/en"];
const ROUTES = LANG_PREFIXES.flatMap((prefix) => PAGE_PATHS.map((p) => (prefix + (p === "/" ? "" : p)) || "/"));

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      fetch(url)
        .then(() => resolve())
        .catch(() => {
          if (Date.now() - start > timeoutMs) reject(new Error("timed out waiting for preview server"));
          else setTimeout(tryOnce, 300);
        });
    };
    tryOnce();
  });
}

// Vercel's build image has no apt/system-library access, so Playwright's own
// downloaded Chromium fails to launch there (missing shared libs like
// libnspr4.so). @sparticuz/chromium ships a self-contained binary built for
// exactly this kind of constrained Linux environment — use it (via Playwright's
// executablePath override) whenever we're building on Vercel, and fall back to
// Playwright's normal bundled browser everywhere else (e.g. local dev on macOS,
// where the sparticuz binary — Linux-only — can't run at all).
async function launchBrowser(chromium) {
  // Rendering in parallel tabs means all but one tab are "in the background",
  // and Chromium throttles background tabs (timers, rAF) — on Vercel that made
  // every visibility wait time out. Turn the throttling off.
  const noThrottle = [
    "--disable-background-timer-throttling",
    "--disable-backgrounding-occluded-windows",
    "--disable-renderer-backgrounding",
  ];
  if (!process.env.VERCEL) return chromium.launch({ args: noThrottle });
  const sparticuzChromium = (await import("@sparticuz/chromium")).default;
  return chromium.launch({
    executablePath: await sparticuzChromium.executablePath(),
    args: [...sparticuzChromium.args, ...noThrottle],
  });
}

async function run() {
  const { chromium } = await import("playwright");

  const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], {
    cwd: ROOT,
    stdio: "ignore",
  });

  try {
    await waitForServer(`http://localhost:${PORT}/`);

    const browser = await launchBrowser(chromium);

    // Capture every route into memory first, and only write files to disk
    // after the whole loop finishes. Writing dist/index.html mid-loop would
    // make vite preview's SPA fallback serve that already-prerendered (and
    // now stale) document as the initial shell for every route captured
    // afterwards, leaking its <head> tags (hreflang, JSON-LD) into them.
    const captured = [];

    // One route's failure (timeout, transient nav error) shouldn't sink the
    // others — catch per-route and keep going.
    const failed = [];

    async function capture(page, route) {
      try {
        await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle", timeout: 30000 });
        // "attached", not the default "visible": visibility checks need a
        // rendered frame, which a background tab may not produce promptly.
        await page.waitForSelector("footer", { state: "attached", timeout: 15000 });
        await page.waitForTimeout(500);
        // Strip the splash screen and mark the document so a real browser's
        // hydration doesn't replay it over content that's already visible.
        await page.evaluate(() => {
          document.querySelectorAll("[data-preloader-root]").forEach((el) => el.remove());
          document.documentElement.setAttribute("data-prerendered", "true");
        });
        const html = "<!doctype html>\n" + (await page.content());
        const outDir = route === "/" ? DIST : join(DIST, route.slice(1));
        captured.push({ route, outDir, html });
      } catch (err) {
        failed.push(route);
        console.warn(`[prerender] failed on ${route} (skipping):`, err.message);
      }
    }

    // ~730 routes rendered one at a time took 20+ minutes on Vercel, close to
    // its build time limit — render in parallel tabs sharing one queue.
    const CONCURRENCY = process.env.VERCEL ? 4 : 6;
    const queue = [...ROUTES];
    await Promise.all(
      Array.from({ length: CONCURRENCY }, async () => {
        const page = await browser.newPage();
        while (queue.length > 0) await capture(page, queue.shift());
        await page.close();
      }),
    );

    await browser.close();

    for (const { route, outDir, html } of captured) {
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, "index.html"), html, "utf-8");
      console.log(`[prerender] ${route} -> ${join(outDir, "index.html").replace(ROOT + "/", "")}`);
    }

    console.log(`[prerender] done: ${captured.length}/${ROUTES.length} routes captured` + (failed.length ? `, ${failed.length} failed` : ""));
    if (captured.length === 0) throw new Error("every route failed to prerender");
  } finally {
    server.kill();
  }
}

run().catch((err) => {
  console.warn("[prerender] skipped (non-fatal):", err.message);
  process.exit(0);
});

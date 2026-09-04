// Post-build step: renders each route with a real headless browser and writes the
// fully-formed HTML (title/meta/JSON-LD/content produced by the client app) into
// dist/<route>/index.html. This lets crawlers that don't execute JavaScript (many
// AI answer engines, social-link previews) see real content instead of an empty
// <div id="root">. If anything here fails (e.g. no browser available in the build
// environment), we log a warning and exit 0 so the normal SPA build still ships.
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PORT = 4321;
const ROOT = process.cwd();
const DIST = join(ROOT, "dist");
// Keep PAGE_PATHS/LANG_PREFIXES in sync with src/App.tsx and scripts/generate-sitemap.mjs.
const PAGE_PATHS = ["/", "/services", "/team", "/partners", "/about", "/contact"];
const LANG_PREFIXES = ["", "/ru", "/en"];
const ROUTES = LANG_PREFIXES.flatMap((prefix) =>
  PAGE_PATHS.map((p) => (prefix + (p === "/" ? "" : p)) || "/"),
);

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

async function run() {
  const { chromium } = await import("playwright");

  const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], {
    cwd: ROOT,
    stdio: "ignore",
  });

  try {
    await waitForServer(`http://localhost:${PORT}/`);

    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Capture every route into memory first, and only write files to disk
    // after the whole loop finishes. Writing dist/index.html mid-loop would
    // make vite preview's SPA fallback serve that already-prerendered (and
    // now stale) document as the initial shell for every route captured
    // afterwards, leaking its <head> tags (hreflang, JSON-LD) into them.
    const captured = [];

    for (const route of ROUTES) {
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForSelector("footer", { timeout: 15000 });
      await page.waitForTimeout(500);
      // Strip the splash screen and mark the document so a real browser's
      // hydration doesn't replay it over content that's already visible.
      await page.evaluate(() => {
        document.querySelectorAll("[data-preloader-root]").forEach((el) => el.remove());
        document.documentElement.setAttribute("data-prerendered", "true");
      });
      const html = "<!doctype html>\n" + (await page.content());
      const outDir = route === "/" ? DIST : join(DIST, route.slice(1));
      captured.push({ route, outDir });
      captured[captured.length - 1].html = html;
    }

    await browser.close();

    for (const { route, outDir, html } of captured) {
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, "index.html"), html, "utf-8");
      console.log(`[prerender] ${route} -> ${join(outDir, "index.html").replace(ROOT + "/", "")}`);
    }
  } finally {
    server.kill();
  }
}

run().catch((err) => {
  console.warn("[prerender] skipped (non-fatal):", err.message);
  process.exit(0);
});

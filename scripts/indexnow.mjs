// Notifies all IndexNow engines (Yandex, Bing, Naver, Seznam) about every URL in
// public/sitemap.xml so new/changed pages get crawled quickly.
// Run manually AFTER a deploy is live: node scripts/indexnow.mjs
import { readFileSync } from "node:fs";

const KEY = "b9490c83dcfe0c740f9f3d29c8d9fb51";
const HOST = "frontix.uz";
const urls = [...readFileSync("public/sitemap.xml", "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

for (let i = 0; i < urls.length; i += 10000) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls.slice(i, i + 10000) }),
  });
  console.log(`[indexnow] ${urls.slice(i, i + 10000).length} URLs -> HTTP ${res.status}`);
}

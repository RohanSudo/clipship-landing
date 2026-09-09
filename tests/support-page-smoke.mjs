import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const base = process.env.SUPPORT_CHECK_BASE || "http://127.0.0.1:4186";
const get = async path => {
  const response = await fetch(new URL(path, base));
  return { response, text: await response.text() };
};
const support = await get("/support?fixture=public-page-check");
assert.equal(support.response.status, 200);
assert.match(support.text, /Get help with ClipShip/);
assert.match(support.text, /href="https:\/\/clipship.co\/support"/);
assert.match(support.text, /name="referrer" content="no-referrer"/);
assert.match(support.text, /content="https:\/\/clipship.co\/opengraph-image"/);
assert.match(support.text, /href="\/icon.svg"/);
assert.match(support.text, /mailto:hello@clipship.co/);
assert.doesNotMatch(support.text, /<form|googletagmanager\.com|clarity\.ms|challenges\.cloudflare\.com|rohankumarvg\.atlassian\.net|http:\/\/localhost:3000/);

const sitemap = await get("/sitemap.xml");
assert.equal(sitemap.response.status, 200);
const paths = [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => new URL(match[1]).pathname);
assert.ok(paths.includes("/support"));
for (const path of paths) {
  const result = await get(path);
  assert.equal(result.response.status, 200, path);
  assert.ok(result.text.includes('href="/support"') || path === "/support", `Support not discoverable on ${path}`);
}
const home = await get("/");
assert.doesNotMatch(home.text, /no support ticket system/i);
assert.match(home.text, /https:\/\/api.clipship.co\/download\/windows/);
assert.match(home.text, /https:\/\/api.clipship.co\/download\/macos/);
const privacy = await get("/privacy");
assert.match(privacy.text, /When you contact support/);
assert.match(privacy.text, /does not subscribe you to marketing/);
const missing = await get("/does-not-exist-support-check");
assert.equal(missing.response.status, 404);
assert.match(missing.text, /name="robots" content="noindex/);
assert.doesNotMatch(missing.text, /http:\/\/localhost:3000/);
for (const path of ["/oauth/tiktok", "/oauth/instagram"]) {
  const result = await get(path);
  assert.equal(result.response.status, 200);
  assert.match(result.text, /noindex, nofollow/);
}
for (const path of ["/opengraph-image", "/twitter-image", "/icon.svg", "/favicon.ico"]) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, path);
  assert.match(response.headers.get("content-type"), /image\//, path);
  await response.arrayBuffer();
}
const llms = await get("/llms.txt");
assert.equal(llms.response.status, 200);
assert.match(llms.response.headers.get("content-type"), /text\/plain/);
assert.equal(llms.text, await readFile(new URL("../public/llms.txt", import.meta.url), "utf8"));
const robots = await get("/robots.txt");
assert.equal(robots.response.status, 200);
assert.match(robots.text, /User-Agent: GPTBot[\s\S]*?Allow: \//i);
assert.match(robots.text, /User-Agent: ClaudeBot[\s\S]*?Allow: \//i);
console.log(JSON.stringify({base,sitemapPagesChecked:paths.length,support:200,form:"disabled",metadataAndImages:"passed",oauthNoindex:"passed",unmatchedRoute:404,llmsSha256:createHash("sha256").update(llms.text).digest("hex"),crawlerAccess:"passed"},null,2));

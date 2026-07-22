# ClipShip Landing Page

**This is the landing page / marketing site for ClipShip** — Rohan's AI video repurposing product. Live at https://clipship.co.

## Status

- **Tech:** Next.js (App Router) + TypeScript + Tailwind. Created via `create-next-app`.
- **Hosted at:** clipship.co (verify deployment target in Vercel dashboard)
- **Phase:** Public v1.0.0 launch completed 2026-05-20/21. Site is in public download/pricing mode, not waitlist mode.
- **Download entrypoint:** `https://api.clipship.co/download/windows`.
- **Launch signal:** Weak activation so far. D1 download tracking is more reliable than GA4 download_click.
- **SEO/AIO state:** The original local/no-upload pages are indexed. A tighter keyword pass deployed on 2026-07-22 added focused free/no-watermark OpusClip and podcast-to-Shorts pages, refreshed comparison/content pages, and resubmitted discovery signals.

## SEO/AIO cluster status

Live high-intent pages:
- `/no-upload-opusclip-alternative`
- `/local-ai-video-clip-generator`
- `/youtube-to-shorts-clip-maker`
- `/vs/opus-clip`
- `/opusclip-alternative-free-no-watermark`
- `/podcast-to-shorts-ai`

2026-07-22 update:
- Added the public $5-per-month founding Pro option for the first 50 paid subscribers alongside the $99 lifetime purchase. Both unlock the same Pro features.
- Added changelog entry and anchor `/changelog#v1.0.7`, which is the destination opened by the desktop updater's What's New link.
- Replaced `/ai-video-clipper-without-credits` with `/opusclip-alternative-free-no-watermark` and `/no-upload-podcast-clipper-windows` with `/podcast-to-shorts-ai`; both retired URLs permanently redirect to their replacement.
- Strengthened titles, descriptions, comparison copy, internal links, structured data, proof sections, and `llms.txt` around ClipShip's real wedge: local processing, no upload, no usage credits, Windows, and monthly-or-lifetime Pro.
- Production verification passed: canonical HTTPS URLs return 200, `www` and HTTP redirect, both retired routes return 308, the sitemap and robots file return 200, the Open Graph image returns 200, and an invented URL returns 404.
- Resubmitted `https://clipship.co/sitemap.xml` through the Search Console API. Google downloaded it immediately with 0 errors and 0 warnings.
- Search Console URL Inspection confirmed the homepage, original three focused pages, `/vs/opus-clip`, and the talking-head guide are indexed with successful mobile crawls and matching canonicals.
- Manually requested indexing through Search Console for the two new pages and recrawls for the homepage, original three focused pages, and `/vs/opus-clip`. All seven requests returned `Indexing requested` and entered Google's priority crawl queue.
- Submitted all 20 sitemap URLs to IndexNow using the existing live key. IndexNow returned HTTP 200.
- GSC baseline for 2026-06-25 through 2026-07-22: 35 page-level impressions and 2 clicks, versus 23 impressions and 0 clicks in the preceding 28-day window. This is still extremely low volume. The remaining SEO constraint is query demand/authority, not a robots, canonical, sitemap, or page-fetch failure.

2026-05-27 update:
- Added proof visuals from the ClipShip promo asset set under `public/seo/`.
- Added reusable SEO blocks in `src/app/components/SeoBlocks.tsx`.
- Strengthened the three SEO cluster pages with direct-answer sections, proof figures, clearer local-vs-cloud explanations, pricing/proof copy, and internal links.
- Fixed stale `/vs/opus-clip` copy that still mentioned Postiz and early access.
- Updated `src/app/sitemap.ts` to use stable `lastmod` dates instead of `new Date()` for every URL.
- Updated `public/llms.txt` with explicit AI-answer snippets for no-upload OpusClip alternative, local AI video clip generator, and YouTube-to-Shorts queries.

Validation/deploy on 2026-05-27:
- Targeted ESLint passed on the modified SEO files.
- `npm run build` passed.
- Local preview opened at `http://127.0.0.1:3000/no-upload-opusclip-alternative`.
- Pushed to GitHub commit `c869a30`; Vercel deployed and live pages returned updated content.
- Submitted `https://clipship.co/sitemap.xml` to Search Console.
- Submitted updated URLs to IndexNow, response `200 {}`.
- Rohan manually used Search Console URL Inspection -> Request indexing for the important changed URLs on 2026-05-27.
- Google Search Console inspection after deploy:
  - Submitted and indexed: homepage, `/vs/opus-clip`, `/vs/heygen`, `/for/youtubers`, `/for/course-creators`, `/for/coaches`, `/no-upload-opusclip-alternative`.
  - Discovered, currently not indexed: `/local-ai-video-clip-generator`, `/vs/descript`, `/vs/gling`, `/vs/capcut`, the three blog pages, `/privacy`, `/terms`.
  - Crawled, currently not indexed: `/youtube-to-shorts-clip-maker`.
  These are not robots/noindex/canonical failures. They are Google quality/priority indexing states.

2026-07-02 technical SEO cleanup:
- Found `https://www.clipship.co/` returned 200 instead of redirecting. Added a permanent host redirect from `www.clipship.co/:path*` to `https://clipship.co/:path*` in `next.config.ts`.
- Moved the homepage client UI into `src/app/HomePageClient.tsx` so `src/app/page.tsx` can export server metadata with a self-referencing canonical.
- Added self-referencing canonicals to all sitemap pages that were missing them: comparison pages, audience pages, blog pages, privacy, and terms.
- Added explicit Open Graph image metadata to the three focused SEO pages so their page-specific OG title/description does not drop the preview image.
- Added `src/app/oauth/layout.tsx` with `noindex,nofollow` for TikTok/Instagram OAuth callback helper pages.
- Local verification on `http://localhost:3001/`: `www` host returns 308, public pages emit self-canonicals, focused SEO pages emit OG images, OAuth pages emit `noindex,nofollow`.
- `npm run build` passed. Full `npm run lint` still fails on pre-existing React lint issues in homepage animation/OAuth/legal pages; do not treat lint as clean until those are separately fixed.
- Live GSC URL Inspection on 2026-07-02 showed `/no-upload-opusclip-alternative`, `/local-ai-video-clip-generator`, `/youtube-to-shorts-clip-maker`, and `/vs/opus-clip` are all `Submitted and indexed`, robots allowed, indexing allowed, fetch successful. Sitemap summary still showed 0 indexed, but URL Inspection is the page-specific source of truth.
- GSC performance for 2026-06-01 to 2026-07-01 showed almost no query demand: only `audioship`, `clipship`, and `clip and ship` surfaced, all with 0 clicks. This means the main SEO problem is not indexing failure; it is lack of narrow query surface and authority.
- LastSend comparison for the same window showed traffic came from very specific intent pages and queries around `dead man's switch`, `posthumous message`, and related terms. For ClipShip, the next SEO work should find similarly weird, specific creator-video queries instead of broad `best AI video editor` pages.

IndexNow:
- Key file: `public/b7d4d3b0cf594c4fa5e37cc4b7c0b62a.txt`
- Key URL: `https://clipship.co/b7d4d3b0cf594c4fa5e37cc4b7c0b62a.txt`
- Use this to submit fresh ClipShip URLs to IndexNow/Bing after deploy.

## What this site does

- Communicates ClipShip's positioning (OpusClip alternative, local processing, monthly or lifetime Pro)
- Sends visitors to the Windows download
- Shows product positioning / pricing / FAQ

## NOT a video editor

ClipShip is a **video repurposing tool** — takes long-form video (up to 2 hours) and outputs 10-15 vertical 9:16 short clips. **NEVER describe ClipShip as a video editor.** It's a clip generator / shorts maker.

## Where the product CLAUDE.md lives

The actual ClipShip product (Tauri desktop app + AI pipeline) has its own folder:

👉 `D:/Work/Brand Jet/AAA/my projects/clipship/CLAUDE.md`

That file covers the product features, transcription stack, face tracking, caption styles, target audience, differentiation vs OpusClip/HeyGen.

**This landing page repo is JUST the marketing site.** Product changes happen in the main clipship folder, not here.

## Marketing plan

Full launch playbook (directory submissions, content marketing, etc.):

👉 `D:/Work/Brand Jet/AAA/my projects/clipship/marketing/launch-plan.md`

## Files to know about

- `AGENTS.md` — Auto-generated Next.js agent rules (warns AI agents that this Next.js version has breaking changes; read `node_modules/next/dist/docs/` before writing code). Leave it alone.
- `README.md` — Generic create-next-app readme. Can be replaced with project-specific README later but not urgent.
- `app/`, `package.json`, etc. — Standard Next.js structure.

## What I'd do if I were picking this up cold

1. Run `npm install` then `npm run dev` to see the current state at `http://localhost:3000`
2. Cross-reference any product copy with the main ClipShip CLAUDE.md to stay accurate
3. Check the current deployment (Vercel dashboard) for the live URL + custom domain config
4. Use the writing rules from `D:/Work/Claude Code Career/CLAUDE.md` for any marketing copy edits (no em dashes, no "passionate," etc.)

---

**Related:**
- `D:/Work/Brand Jet/AAA/my projects/clipship/CLAUDE.md` — Product source of truth
- `D:/Work/Brand Jet/AAA/my projects/clipship/marketing/launch-plan.md` — Marketing playbook

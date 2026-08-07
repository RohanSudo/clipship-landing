# ClipShip Landing Page

## Referral release (prepared 2026-08-07)

- `/referral` explains the public lifetime referral terms.
- `/r/[code]` is a `noindex, nofollow` personal landing page. Its Windows and
  macOS downloads pass the code to the existing tracked Worker routes.
- The homepage referral band appears immediately after pricing.
- Do not publish these claims ahead of desktop 1.0.13. The page says the
  personal link is available in ClipShip Settings, so landing and installers
  must be released together.

**This is the landing page / marketing site for ClipShip** — Rohan's AI video repurposing product. Live at https://clipship.co.

## Status

- **Tech:** Next.js (App Router) + TypeScript + Tailwind. Created via `create-next-app`.
- **Hosted at:** clipship.co (verify deployment target in Vercel dashboard)
- **Phase:** Public v1.0.0 launch completed 2026-05-20/21. Site is in public download/pricing mode, not waitlist mode.
- **Download entrypoint:** `https://api.clipship.co/download/windows`.
- **Launch signal:** Weak activation so far. D1 download tracking is more reliable than GA4 download_click.
- **SEO/AIO state:** The original local/no-upload pages are indexed. A tighter keyword pass deployed on 2026-07-22 added focused free/no-watermark OpusClip and podcast-to-Shorts pages, refreshed comparison/content pages, and resubmitted discovery signals.
- **Latest SEO page:** `/blog/best-local-opusclip-alternatives-2026` added on 2026-08-04 as a narrow, source-checked local/no-upload comparison page.

## SEO/AIO cluster status

Live high-intent pages:
- `/no-upload-opusclip-alternative`
- `/local-ai-video-clip-generator`
- `/youtube-to-shorts-clip-maker`
- `/vs/opus-clip`
- `/opusclip-alternative-free-no-watermark`
- `/podcast-to-shorts-ai`
- `/blog/best-local-opusclip-alternatives-2026`

2026-08-04 update:
- Added a source-checked comparison of ClipShip, ReClipStudio, Clippie, Blinklip, and LocalClip for local OpusClip-alternative intent.
- The page discloses that ClipShip publishes it, distinguishes local video processing from fully offline AI, credits competitors where they are stronger, and links directly to every official product source.
- Added Article, BreadcrumbList, and visible FAQ structured data; canonical, Open Graph, and Twitter metadata; one ClipShip proof asset; and direct-answer copy for search and AI answer engines.
- Added the page to `sitemap.ts`, `llms.txt`, homepage resources, the broader clip-generator article, and the reusable internal-link cluster.
- `npm run build` passed and generated the route statically. Targeted ESLint passed for the new and directly related SEO files. Full lint still reports the previously documented homepage, OAuth, and legal-page issues.
- Browser checks passed at 1280x720 and 390x844. The mobile page has no body-level horizontal overflow; the comparison table scrolls inside its own container.
- Pushed code commit `fef3a2b`; Vercel deployment `GBCQXTUiBy5wp7cnFY3Ex5VvbHiF` completed successfully and the live page returned the new content.
- Production checks passed for HTTP 200, title, self-canonical, sitemap inclusion, `llms.txt` inclusion, robots availability, and a real 404 for an invented URL.
- Resubmitted `https://clipship.co/sitemap.xml` through the Search Console API; Google returned HTTP 204. URL Inspection initially reported the new page as unknown, which is expected for a new URL.
- Requested indexing for the new page through the authenticated Search Console UI. Google confirmed `Indexing requested` and added it to the priority crawl queue.
- Submitted the 10 changed or newly linked URLs to IndexNow. IndexNow returned HTTP 200.

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

## 2026-08-06 Mac discovery and product guidance

- Published `/mac` as the crawlable Apple Silicon download page for ClipShip
  1.0.12. It links to the tracked DMG route and states the macOS 15+, Apple
  Silicon, unified-memory, local-processing, installation, and updater facts.
- Added `/how-clipship-works` with real product screenshots and plain-language
  definitions for headline, spoken opening, post caption, and word-level
  captions.
- Added both pages to the sitemap, homepage resources, internal SEO cluster,
  and `llms.txt` answer snippets.
- Corrected the privacy boundary across the site: source video remains local;
  Local AI keeps transcript processing local; optional API mode sends
  transcript text directly to the provider selected by the user.
- Documented the new opt-in anonymous product milestones and the fields that
  are never collected.
- Removed the shared content-page viewport animation after responsive QA found
  it could leave mobile page content invisible. Desktop and 390px mobile
  previews show no horizontal overflow.
- Production build passes. Full repository lint still has the pre-existing
  homepage and legal-page issues documented above; new pages are not the source
  of those failures.
- Commit `4616cf0` was fast-forwarded to `main` and verified live. The homepage
  and pricing cards expose separate Windows and macOS downloads; `/changelog`
  contains 1.0.12; `/mac`, `robots.txt`, `sitemap.xml`, and `llms.txt` return
  HTTP 200.
- Search Console sitemap resubmission succeeded with zero warnings and errors.
  URL Inspection showed the established cluster pages indexed with matching
  canonicals. `/mac` was discovered but not crawled, so a priority indexing
  request was submitted. IndexNow accepted the changed release URLs with HTTP
  200.

## What this site does

- Communicates ClipShip's positioning (OpusClip alternative, local processing, monthly or lifetime Pro)
- Sends visitors to tracked Windows and Apple Silicon macOS downloads
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

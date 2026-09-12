# ClipShip Landing Page

## 1.0.30 short-source guidance release - 2026-09-12

- ClipShip 1.0.30 is public for Windows x64 and Apple Silicon Mac. The release
  replaces the generic AI-analysis failure for sources with insufficient spoken
  material with duration-specific guidance and a direct recovery action.
- Exact release-content source `4cac328eebae023bc457ddd933264cb2882a3e15` is on
  remote main and its Vercel production deployment succeeded. Live `/`, `/mac`,
  `/changelog`, `/llms.txt` and `/robots.txt` return the intended 1.0.30
  content. Live `llms.txt` is plain text and matches source SHA-256
  `1b73aadf584ae9eea92ab3f3b503de460fe9a68cc0a6e79fc6420aacd6c69260`.
- The public updater manifest and tracked backend download routes point to the
  exact updater-signed 1.0.30 artifacts. D1 reports
  `latest_version=1.0.30` and retains `min_required_version=0.1.0`.
- Physical updater gates passed on both platforms. Windows updated from 1.0.29
  and then completed short-source guidance plus a full Qwen generation/export
  regression. Mac updated from notarized 1.0.28, relaunched as 1.0.30 and
  passed strict signing, Gatekeeper, stapler and no-repeat updater checks.
- Post-gate cleanup removed all 1.0.28/1.0.29 public objects and temporary
  hosted/local build artifacts. R2 now retains only 1.0.30 plus the manifest.
  Exact release, hash, notarization and test evidence is in the app repository
  `docs/RELEASING.md`.
- This release does not change pricing, subscriptions, referrals, device
  limits, customer access or ClipShip's local-processing privacy boundary.

## 1.0.28 transcription runtime release - 2026-09-12

- ClipShip 1.0.28 is public for Windows x64 and Apple Silicon Mac. The changelog
  explains the Windows transcription runtime repair, while homepage/Mac
  software metadata and `public/llms.txt` agree on the cross-platform version.
- Exact landing source `3735091576373c570d7b596309441d930368e53f` is on remote
  main and Vercel production deployment `6407330765` succeeded. Live `/`,
  `/mac`, `/changelog`, and `llms.txt` return the intended 1.0.28 content.
  Live `llms.txt` matches source SHA-256
  `dba690d79c1ea07b75fe2a9d80723b5933eecc72946f712efeff45794d1c5d9f`.
- The public updater manifest and tracked backend download routes now point to
  the exact signed 1.0.28 artifacts. Installer, signature, notarization,
  finished-runtime, model and public-byte evidence is recorded in the app
  repository `docs/RELEASING.md`.
- The release does not change pricing, subscriptions, referrals, device
  limits, customer access, or ClipShip's local-processing privacy boundary.
- Installed-app updater/relaunch checks are pending: Mac requires action-time
  approval to overwrite the current app, and Windows requires a fresh
  `PC free` window. Older rollback objects remain retained until both pass.

## 1.0.27 support release - 2026-09-10

- Public Windows and Apple Silicon Mac release is 1.0.27. The changelog,
  homepage/Mac software metadata and `public/llms.txt` describe the direct live
  support-page link from the installed Help & Support screen.
- Release source `50004e6406d0bc0ce28d19f95da22df1583d1c6d` is verified on
  remote main. Vercel production deployment `6373906431` succeeded for that
  exact source. Lint, production build and zero-vulnerability production audit
  passed before deployment.
- Live `/`, `/mac`, `/changelog`, and `llms.txt` contain 1.0.27. Live plain-text
  `llms.txt` matches source SHA-256
  `eaab061042302b9b8f6744570009fc1a65498091b51b5bde792fd06211e1b520`;
  intended crawler allowances remain present.
- The live updater manifest and tracked download routes now point to 1.0.27.
  Exact installer, updater, signing, public-byte and installed-Mac evidence is
  in the app repo `docs/RELEASING.md`. The physical Windows updater gate is
  pending a fresh `PC free` window, so 1.0.26 rollback objects remain retained.

## Newsletter placements prepared - 2026-09-09

- Approved Rohan Builds homepage-footer and product-guide invitations are
  implemented locally. Build, targeted lint, actual desktop/320px previews and
  attributed destination navigation pass. No push, deployment, signup or email.
- See `NEWSLETTER-PLACEMENTS-2026-09-09.md` for exact scope, evidence and release
  boundary. Preserve the pre-existing untracked `public/email-assets/` work.

## 1.0.26 release - 2026-09-05

- Public Windows and Apple Silicon Mac release is 1.0.26. Changelog, homepage
  software metadata, Mac FAQ/schema and `public/llms.txt` were updated together.
  The release fixes local-AI readiness handling and recovery diagnostics; do
  not claim every underlying hardware/model-load failure has been eliminated.
- Code commit `05285116d828da2e9abb6aef527f9dda5eb75dd8` is verified on remote
  main. Vercel deployment `6283668649` succeeded for that exact source:
  `https://clipship-landing-mrzcgn21d-rohansudos-projects.vercel.app`.
- Lint, full production build and browser preview passed before deployment.
  Live `/`, `/mac`, and `/changelog#v1.0.26` returned the new release content.
  Live `llms.txt` is real plain text and matches source SHA-256
  `eb72d5b09763ba040031f5f9c36527315a0b1b179433367fe2b0c78f08a1bf0a`.
  `robots.txt` still allows the intended search and answer-engine crawlers.
- Both tracked download routes resolve to 1.0.26. Pricing, referrals, license
  access, newsletter scheduling and the approved black Uneed badge are unchanged.
  Desktop test evidence and the expressly deferred physical Windows updater
  test are in the parent `HANDOFF.md` and app `docs/RELEASING.md`.

## Uneed launch preparation - 2026-09-05

- Approved homepage launch badge is live below the download buttons. It uses
  Uneed's actual black image `https://www.uneed.best/EMBED3B.png` and links to
  `https://www.uneed.best/tool/clipship`. The similarly named `EMBED3.png` is white.
- Mac structured data and FAQ were corrected to the then-current 1.0.25.
- Full lint and production build passed. Desktop and 390px mobile previews
  passed; Instagram denial and TikTok missing-parameter pages were checked.
  The old lint failures were fixed, including cleanup of OAuth status/redirect
  timers. No desktop build or Windows session was needed.
- Code commit `86e37a488683395d82342e31e1e32b06e7f72de7` is on remote main.
  Vercel deployment `7qY3gc6HNqo44qZfrwtL6hMMYgcD` completed successfully.
  Production homepage and `/mac` returned the intended new content.
- `llms.txt` was audited, with no new product facts requiring a content edit.
  Live plain text exactly matched source SHA-256
  `90d7f3f7f053bbb97612d733a60c7a4a5f290c56d042411b72e9ddc672871268`.
  Live `robots.txt` allows the intended search and answer-engine crawlers.
- Uneed launch date: September 11, 2026. Review or remove the temporary
  "Launching Soon" badge when the launch is live; no automatic badge job was
  created. Newsletter/listing completion is tracked in the parent HANDOFF.md.

## Referral release (prepared 2026-08-07)

- `/referral` explains the public lifetime referral terms.
- `/r/[code]` is a `noindex, nofollow` personal landing page. Its Windows and
  macOS downloads pass the code to the existing tracked Worker routes.
- The homepage referral band appears immediately after pricing.
- Referral allocation is one usable Lifetime discount maximum. A second and
  third cleared reward are banked device slots and activate automatically after
  the referrer owns Lifetime Pro. `/referral` is the customer claim guide.
- Production correction: commit `0f95ff7`, Vercel deployment
  `72wRGzmkL25scsBZv9GUtJJ6VMCu`. The live `/referral` page returned `200` and
  visibly contained the automatic-claim and banked-slot guidance.
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

### `llms.txt` maintenance rule

- `public/llms.txt` is a maintained product source, not a one-time SEO artifact.
- Audit and update it in the same release or site change whenever ClipShip has a significant public change, including features, positioning or use cases, pricing or plans, referrals or partner programmes, supported platforms or requirements, supported imports, privacy or data handling, the current public version, download destinations, or important documentation URLs.
- After every edit, run the production build, deploy the landing site, and verify `https://clipship.co/llms.txt` contains the new facts. Also confirm `robots.txt` still allows the intended search and answer-engine crawlers.

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

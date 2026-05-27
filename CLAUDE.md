# ClipShip Landing Page

**This is the landing page / marketing site for ClipShip** — Rohan's AI video repurposing product. Live at https://clipship.co.

## Status

- **Tech:** Next.js (App Router) + TypeScript + Tailwind. Created via `create-next-app`.
- **Hosted at:** clipship.co (verify deployment target in Vercel dashboard)
- **Phase:** Public v1.0.0 launch completed 2026-05-20/21. Site is in public download/pricing mode, not waitlist mode.
- **Download entrypoint:** `https://api.clipship.co/download/windows`.
- **Launch signal:** Weak activation so far. D1 download tracking is more reliable than GA4 download_click.
- **SEO/AIO state:** Three focused local/no-upload SEO pages are live. Cluster was strengthened and deployed on 2026-05-27 in commit `c869a30`.

## SEO/AIO cluster status

Live high-intent pages:
- `/no-upload-opusclip-alternative`
- `/local-ai-video-clip-generator`
- `/youtube-to-shorts-clip-maker`
- `/vs/opus-clip`

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

IndexNow:
- Key file: `public/b7d4d3b0cf594c4fa5e37cc4b7c0b62a.txt`
- Key URL: `https://clipship.co/b7d4d3b0cf594c4fa5e37cc4b7c0b62a.txt`
- Use this to submit fresh ClipShip URLs to IndexNow/Bing after deploy.

## What this site does

- Communicates ClipShip's positioning (OpusClip alternative, local processing, one-time lifetime purchase)
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

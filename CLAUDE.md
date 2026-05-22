# ClipShip Landing Page

**This is the landing page / marketing site for ClipShip** — Rohan's AI video repurposing product. Live at https://clipship.co.

## Status

- **Tech:** Next.js (App Router) + TypeScript + Tailwind. Created via `create-next-app`.
- **Hosted at:** clipship.co (verify deployment target in Vercel dashboard)
- **Phase:** Public v1.0.0 launch completed 2026-05-20/21. Site is in public download/pricing mode, not waitlist mode.
- **Download entrypoint:** `https://api.clipship.co/download/windows`.
- **Launch signal:** Weak activation so far. D1 download tracking is more reliable than GA4 download_click.
- **SEO/AIO state:** Local SEO recovery changes were made on 2026-05-21 but intentionally not pushed yet. Rohan wants to preview them first next session.

## Pending SEO/AIO changes from 2026-05-21

Local-only changes in this repo:
- Added `/local-ai-video-clip-generator`
- Added `/no-upload-opusclip-alternative`
- Added `/youtube-to-shorts-clip-maker`
- Updated `src/app/sitemap.ts`
- Updated `public/llms.txt`
- Updated `src/app/layout.tsx` structured data
- Updated homepage internal links in `src/app/page.tsx`

Validation already done:
- Targeted ESLint on new/modified SEO files passed.
- `npm run build` passed.
- Full `npm run lint` still has pre-existing unrelated lint errors in old files, so do not treat that as caused by these SEO pages.

Next steps:
1. Run/confirm local preview at `http://localhost:3000`.
2. Let Rohan preview the three new pages.
3. If approved, commit and push the landing changes.
4. After deploy, submit `https://clipship.co/sitemap.xml` in Search Console and request indexing for the new URLs.
5. Fix Cloudflare Managed robots.txt settings because live `robots.txt` currently injects Cloudflare blocks for some AI crawlers above our origin allow rules.

IndexNow:
- Key file: `public/b7d4d3b0cf594c4fa5e37cc4b7c0b62a.txt`
- Key URL: `https://clipship.co/b7d4d3b0cf594c4fa5e37cc4b7c0b62a.txt`
- Use this to submit fresh ClipShip URLs to IndexNow/Bing after deploy.

## What this site does

- Communicates ClipShip's positioning (OpusClip alternative, local processing, one-time lifetime purchase)
- Collects email signups for the waitlist
- Shows demo / pricing / FAQ

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

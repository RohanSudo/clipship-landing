# Rohan Builds newsletter placements

September 9, 2026. Local implementation only. Nothing was committed, pushed,
deployed, subscribed, or emailed by this pass.

## Approved scope

- Homepage footer: `Rohan Builds newsletter`, beneath the existing product
  description, before the existing social links.
- `/how-clipship-works`: a quiet end-of-guide invitation after related reading.
  Copy: `Useful tools, build notes, videos and subscriber discounts. From the
  person building this.` The existing download call to action remains primary.
- Both links use
  `https://rohanbuilds.com/newsletter?utm_source=clipship&utm_medium=referral&utm_campaign=newsletter`.
- No new form, popup, signup requirement, automatic enrollment, account action,
  product fact, pricing change, or email was introduced.

## Verification

- Public homepage and guide were inspected before editing; neither had the
  proposed newsletter invitation.
- `npm run build` and targeted ESLint for both changed files passed.
- `git diff --check` passed.
- Actual production-build preview at `http://127.0.0.1:3006/` and
  `/how-clipship-works` checked in the in-app browser at 1280x900 and 320x740.
  Both pages' document scroll widths equal their viewport widths. The link and
  guide description fit the existing grid, and the footer link has visible
  keyboard focus. Viewport override was reset afterward.
- An actual click opened the existing Rohan Builds newsletter page, retaining
  all three attribution values and showing its newsletter-only signup form.
  No form was submitted.
- Design-quality-gate, Impeccable polish, and fixing-accessibility preserved the
  incumbent styling. The one mechanical detector pass reported five existing
  homepage palette warnings outside these additions, not new structural issues.
  The guide addition produced no warning. No brand redesign was attempted.
- `llms.txt` was audited. This placement changes no product capabilities or
  requirements; its existing content was left unchanged. Live file still returns
  genuine `text/plain`, not an HTML fallback.

## Approved email logo included in the release candidate

The lead subsequently requested the one existing, previously approved email
asset be included in the same scoped release: `public/email-assets/clipship-symbol.png`.
It is referenced by the approved shared welcome template at
`model-roll/marketing/templates/listmonk-welcome.html` and by its asset exporter.
No other untracked asset is part of the candidate.

- Exact icon source: `src/app/icon.svg`, SHA-256
  `d80aba16852c1c8bfc79effdd7ddae57ef5fc68af9db2e500b3c84a0a5f1fbf4`.
- Reproducing the export in memory from that icon matches the existing PNG
  byte-for-byte: 192x192 RGBA, 3,517 bytes, SHA-256
  `9676c7b3924ebfffdc6ea34aca51be4c6d032289e028c9ef5dde8662fa0c5f26`.
- The local production server serves exact bytes with `image/png` and HTTP 200.
  The canonical live URL still returns 404, so publication and live hash verification
  are required before activating the new shared email template.
- The existing asset was verified, not redrawn or overwritten.

## Release handoff

- Candidate: `src/app/HomePageClient.tsx`,
  `src/app/how-clipship-works/page.tsx`, the exact email PNG above, this note and
  its CLAUDE pointer.
- Starting branch `main`, HEAD `08ac0f7`. Pre-existing untracked
  `public/email-assets/` was not changed. The exact verified PNG is now expressly
  included in the candidate by the lead; there are no other files in that folder.
- Preview server is the scoped Next production server on port 3006. A visible
  subagent browser is unsupported, so the lead should open that URL for the final
  user-visible review before the separately controlled publication step.
- Publish only reviewed changes through the current verified Vercel workflow,
  then read back both live invitations and their destination URLs.

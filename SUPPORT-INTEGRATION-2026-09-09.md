# ClipShip public support integration

## September 10: bounded local recovery integration

Support Control resumed local work only. Reviewed final `INTAKE.md` at
`b2746fe01f0a211d1bd5932d866b8ad24d4fd604`. No deployment, credential setup,
activation, live ticket/mail test, native build or PC work is authorized here.

- Added explicit customer acknowledgment followed by “Support confirmed this
  request” dismissal after support communicates its disposition. Only the
  matching local marker is removed; draft is reset, focus returns to status,
  and no server request, ticket closure/deletion or server authorization claim
  occurs. The UI cannot independently verify an operator conversation.
- Marker parsing accepts exact opaque UUIDv4 keys/references only. Delayed
  responses check the matching key before automatic write/removal so they do
  not overwrite or clear a different current request's marker.
- Added specific first-attempt 408/413/415 guidance per final contract while
  preserving the lock/key after any earlier uncertain result.
- Local verification: 7 unit tests, lint and production build pass. Independent
  reviewer reran 7/7 and found no remaining blocker in this narrow patch.
  Browser fixture verifies disabled dismissal before acknowledgment, keyboard
  activation, focus restoration, refresh recovery, local-marker-only removal,
  390/1280px layouts and zero API calls during dismissal.
- Intake remains OFF by default. `llms.txt` audited: no public fact or availability
  changed by this local recovery patch, so September 9 candidate text is retained.
- Local implementation is ready for the support owner's activation review, not
  a public-ready/live-service claim. Remaining gates belong to Support Control:
  approved infrastructure/credentials/caps, native receipt/privacy/isolation,
  operator reconciliation readback, real CS ticket/email acceptance and explicit
  website deployment/activation authority. Do not push main; Vercel auto-deploys.

The older stop checkpoint below records the previous night, not today's local
resumption. Its no-publication boundary remains in force.

## STOP checkpoint: September 9, 2026

Rohan requested sleep/pack-up. Origin explicitly instructed no further
implementation, deployment, sending, publication or activation after checkpoint.
All code below is **local only**. No support site release, production configuration,
Jira ticket, customer receipt or desktop update was performed. The production
`/support` route has not been fixed by this checkpoint.

Verified: final lint, 3 response tests, production build, local browser privacy/
failure/reload tests, and HTTP smoke across 27 sitemap pages passed. Local support
returns 200 with the form disabled; OAuth remains noindex, actual unknown route
returns 404, image assets and support canonical metadata pass. Local `llms.txt`
matches SHA-256 `317158fba68e8bec9b778784546e20a9a8ad460c8407be779393f8ecb3f7de5a`.

Both task-owned preview servers (4186 and4187) and the isolated browser-test
session were stopped. The shared Mac awake helper remains on under its explicit
On/Off rule; it was not stopped or given a timer.

Local checkpoint commit only: pushing main would trigger Vercel publication,
which the latest instruction prohibits. Unrelated newsletter edits in `CLAUDE.md`
and `NEWSLETTER-PLACEMENTS-2026-09-09.md` remain unstaged and unchanged by this task.

**Tomorrow's exact first step:** read this checkpoint and ask the coordinating
task for the shared backend's final contract/activation status. Resolve its
operator reconciliation/unlock procedure and finish review of the pending marker.
With fresh resumed publication authority, either deploy the verified email-fallback
page with the intake gate off, or complete the accepted backend activation and
live private-ticket/receipt tests before enabling the form. Do not treat mocked
browser tests as live ticket evidence or push main while this stop is in force.

## Authorized outcome and boundaries

Rohan's request, relayed by the website/launch task on September 9, is to
publish the missing `/support` route, connect accepted privacy-safe ticket
intake, remove obsolete public no-ticket claims, update public metadata and
`llms.txt`, and verify the actual customer flow before calling it complete.
No personal Jira portal URL, internal diagnostics, credentials, unrelated
newsletter work, or desktop installer release is included.

## Source-of-truth checks

- Product context: `../clipship/CLAUDE.md` and `../clipship/HANDOFF.md`.
- Intake ownership: `../support-control/ACCEPTANCE.md`, `HANDOFF.md`, and
  `agent-workspace/login-free-intake-check-20260909.md`.
- The support owner confirmed there is no deployed first-party intake endpoint
  or accepted shared contract at support-control commit
  `210a369e34c3fd3ecd607e725c3b73f3d9874b20`.
- The temporary native Jira submission stopped at a human CAPTCHA with no
  matching ticket or receipt. Access was restored to Restricted and global
  login-free intake disabled. That portal is not an accepted public destination.
- Existing app support remains `HelpSupportModal.tsx` plus `support-report.ts`,
  the crash-report actions and startup email fallback. No second modal or native
  build is needed to publish the website page.

## Work and verification board

| Requirement | Owner | State / evidence |
| --- | --- | --- |
| Public page and existing-design integration | ClipShip lead | Implemented `/support` in established design, existing email fallback |
| Accepted intake contract and cutover | Support Control + origin | Origin commissioned local candidate; not deployed or activated; website form gate OFF |
| Privacy and flow review | review_support_integration | Reviewed; refresh duplicate edge case fixed and browser-tested |
| FAQ, discoverability, metadata and llms.txt | ClipShip lead | Updated, no ticket/delivery promise |
| UI/build/live deployment checks | ClipShip lead | Lint, 3 unit tests, build, and browser cases pass; live publication pending |

## Existing work to preserve

At start, landing `CLAUDE.md` and `NEWSLETTER-PLACEMENTS-2026-09-09.md`
contained unrelated uncommitted newsletter closeout notes. The separate API
repository also has newsletter edits. Do not stage or deploy those changes as
part of this task. Preserve the existing released newsletter links and assets.

This record is not a claim that public ticket intake or a support form works.

## Implementation and local evidence

- Separate `(site)` and `(support)` root layouts force a new document across the
  support boundary. Existing site routes/components were moved mechanically with
  their imports intact. Metadata asset routes, OAuth routes, referral/download
  destinations and released newsletter placements are preserved.
- No GA, Clarity or download attribution mounts on support. Browser checks cover
  direct/query-bearing support, homepage arrival, back/forward, 390px/1280px,
  keyboard skip link, canonical metadata, email fallback and no public Jira URL.
- The candidate form is **off by default**. Activation requires
  `CLIPSHIP_SUPPORT_INTAKE_ENABLED=true` and the public widget sitekey in
  `CLIPSHIP_SUPPORT_TURNSTILE_SITE_KEY`, plus a new verified build/deployment.
  No values or credentials have been configured in production for this task.
- Draft contract owner: Support Control `intake/`. Direct HTTPS JSON POST to
  `https://support-api.brandjetmedia.com/v1/support/requests`, product `clipship`,
  exact ClipShip origins, credentials omitted, no proxy, no automatic diagnostics
  or attachments. Turnstile action `support_intake`, cData `clipship`.
- Created is displayed only for an exact 200/201 created response; it does not
  imply receipt delivery. 202/network/server ambiguity preserves an immutable
  key/body for a deliberate retry with a fresh challenge. No automatic retry.
- Only a pending key/reference is stored locally, before sending. Email/message
  are never persisted. Refresh with an unresolved marker blocks new submissions
  and shows the correlation ID for email/operator reconciliation. There is no
  public status lookup; operator resolution/unlock procedure remains an activation
  dependency. Never clear an uncertain marker merely to allow another Send.
- Local fixtures passed: 202 then deliberate 201 retry uses identical key/body
  and a new challenge; no auto retry; network failure then rejection retains key;
  reload blocks a new send; first definite rejection permits edits. All endpoint
  responses and challenge tokens in these tests were mocked, not live Jira proof.
- Local screenshots: ignored `output/playwright/support-desktop.png`,
  `support-mobile.png`, `support-form-fixture-mobile.png`.
- Repeat checks: `npm run lint`, `npm run build`,
  `node --experimental-strip-types --test tests/support-response.test.mjs`,
  `node tests/support-page-smoke.mjs`. Public-only smoke checks accept
  `SUPPORT_CHECK_BASE=https://clipship.co` after deployment.

## Remaining acceptance

The first-party page/email fallback can remove the 404 independently. The full
ticket-intake outcome remains incomplete until the shared backend is approved,
deployed and proven: real private CS ticket routing, authorized receipt delivery,
customer-isolation/privacy, abuse limits, failure/reconciliation, and activated
website form behavior. This work neither changes nor releases the desktop app.

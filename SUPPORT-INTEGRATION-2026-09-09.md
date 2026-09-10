# ClipShip public support integration

## September 10: default-off founder acceptance preparation

Support Control supplied the dedicated ClipShip public Turnstile site key. It
is now the website's tested default site key, while the form remains absent
unless `CLIPSHIP_SUPPORT_INTAKE_ENABLED` is exactly `true`. An explicit invalid
site-key override fails closed. The public key is not a secret; no Turnstile
secret, Jira credential or backend key is present in this repository.

The exact pre-creation response `403 {"error":"reporter_not_allowed"}` now
shows a generic controlled-test message and the existing ClipShip support email.
It does not name founder accounts or the allowlist. Because Support Control
returns this before a claim or Jira action, a first-attempt response is treated
as a definite rejection: its matching local marker is removed and the form can
be edited. An unknown 403 remains uncertain and retains duplicate protection.

Local preparation only: no push, Vercel deployment, backend deployment, form
activation, production request, Jira ticket or email occurred. Public mode is
not proposed or authorized.

Verification for this preparation: 11 focused configuration/pending/response
tests pass; lint and the production build pass. A temporary enabled local build
rendered the form with the exact dedicated site key and no GA/Clarity. The final
default-off build passed the 27-page HTTP smoke check with no form or Turnstile
on `/support`, the email fallback present, and unchanged `llms.txt` hash
`317158fba68e8bec9b778784546e20a9a8ad460c8407be779393f8ecb3f7de5a`.

### Bounded production-origin founder acceptance proposal

This is a proposal for a separately authorized test window, not an executed
rollout. Keep the API in `founder_acceptance`; do not change it to `public`.
Before any production change, the action packet must name the exact reviewed
40-character backend and landing Git SHAs; deploy only those revisions. The
window is capped at 20 minutes from the first production change. If Rohan is
interrupted at a Turnstile or other user-only step, or the cap is reached,
rollback immediately rather than leaving the founder form enabled.

1. Support Control deploys one reviewed backend revision on
   `support-api.brandjetmedia.com` with source mode `founder_acceptance`, matching
   runtime mode, all existing safety flags/bindings/credentials verified, and
   only the two documented founder recipient addresses allowed.
2. Deploy one exact reviewed landing commit with
   `CLIPSHIP_SUPPORT_INTAKE_ENABLED=true`. The committed dedicated public key is
   used unless the same exact key is explicitly configured as an override.
   Verify `https://clipship.co/support` from a fresh private window: the form and
   Turnstile load, while GA/Clarity remain absent and email fallback remains.
3. Rohan completes the production-origin Turnstile challenge himself. First use
   the founder-controlled but non-allowlisted address
   `rohankumarvg+clipship-intake-rejection@gmail.com`, subject
   `ClipShip support founder rejection check 2026-09-10`, and details
   `Controlled rejection check. Do not create a Jira request.` Leave optional
   fields blank. Submit once. Require the generic controlled-test UI message,
   editable form, no local pending marker, and no claim/Jira request/receipt.
4. In a new private window, use the allowed address `rohankumarvg@gmail.com`,
   subject `ClipShip support founder acceptance 2026-09-10`, and details
   `Controlled founder acceptance from the production ClipShip support page. No customer data.`
   Leave optional fields blank and submit once. Do not retry a created result.
   If the result is 202/network/unknown, preserve its exact submission ID/body
   and follow the existing reconciliation protocol before any deliberate retry.
5. Acceptance requires the browser's exact created reference to match the D1
   claim and one private ClipShip Jira request, correct request type/route/
   reporter/body rendering, no exposed customer history, and the actual branded
   receipt in Inbox or Spam. After separate content-bound send approval, reply
   only inside that exact branded receipt email thread whose reference matches
   the created request, with the literal body `Founder acceptance reply check
   received. No customer action is required.` Verify one message attaches to
   that same existing Jira request; do not create a new email thread. Record
   request/message IDs privately, not in Git. A successful API response alone
   is insufficient.
6. Roll back immediately after evidence capture. First set the landing enable
   flag false or remove it and deploy; verify the production support page has no
   form or Turnstile and retains the email fallback. Then set backend runtime
   `INTAKE_ENABLED=false` and `INTAKE_MODE=disabled`. Verify a bounded POST from
   the production origin returns 503 before provider/database/Jira work and no
   additional claim, ticket or mail appears. If urgent containment is needed,
   disable the backend first, then hide the form. Preserve unresolved markers
   and claims; never delete them or force a new request as rollback.

The test fails and rolls back if the challenge cannot bind to the production
hostname/action/cData, a disallowed address reaches a claim/Jira/mail step, the
allowed request cannot be reconciled end to end, analytics appears on support,
receipt/isolation evidence is missing, or any result is ambiguous. Public intake
still requires a separate source/runtime mode review and explicit approval.


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
- The candidate form is **off by default**. The dedicated public widget site key
  is committed and tested; an optional `CLIPSHIP_SUPPORT_TURNSTILE_SITE_KEY`
  override must pass validation. Activation still requires the exact
  `CLIPSHIP_SUPPORT_INTAKE_ENABLED=true` gate plus a new verified build/deployment.
  No secret, credential or production activation was configured by this task.
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
  `node --experimental-strip-types --test tests/support-response.test.mjs tests/support-pending.test.mjs tests/support-intake-config.test.mjs`,
  `node tests/support-page-smoke.mjs`. Public-only smoke checks accept
  `SUPPORT_CHECK_BASE=https://clipship.co` after deployment.

## Remaining acceptance

The first-party page/email fallback can remove the 404 independently. The full
ticket-intake outcome remains incomplete until the shared backend is approved,
deployed and proven: real private CS ticket routing, authorized receipt delivery,
customer-isolation/privacy, abuse limits, failure/reconciliation, and activated
website form behavior. This work neither changes nor releases the desktop app.

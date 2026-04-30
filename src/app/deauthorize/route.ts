// Deauthorize callback for Meta (Instagram + Facebook).
//
// What this is: when a user removes ClipShip from their Facebook/
// Instagram apps-and-websites settings, Meta POSTs to this URL to
// notify us. The expected response is a small JSON with a
// confirmation_code + url so the user can track the deauthorization.
//
// What ClipShip needs to do server-side: NOTHING. We don't store
// anything tied to the user's Instagram account on our servers -
// OAuth tokens live in the user's OS credential vault on their
// device. When they deauthorize from Meta's settings, the token
// they have on their device is now invalid; ClipShip handles that
// by detecting auth failures and prompting them to re-connect.
//
// So this endpoint is a no-op stub that just returns the required
// response shape so Meta is satisfied.
//
// This file uses the Next.js App Router route handler pattern:
// exporting GET / POST functions. GET returns a human-friendly
// HTML page (so reviewers visiting the URL in browser don't see a
// JSON blob); POST is the actual webhook handler Meta calls.

import { NextResponse } from "next/server";

const DEAUTH_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Deauthorize ClipShip - clipship.co</title>
    <style>
      body{background:#09090b;color:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;margin:0;padding:48px 24px;display:flex;justify-content:center;}
      .card{max-width:560px;background:#18181b;border:1px solid #27272a;border-radius:14px;padding:36px;line-height:1.65;}
      h1{font-size:24px;font-weight:600;margin:0 0 12px 0;}
      p{color:#a1a1aa;font-size:15px;margin:0 0 14px 0;}
      strong{color:#fff;}
      a{color:#a78bfa;text-decoration:none;}
      a:hover{text-decoration:underline;}
      .badge{display:inline-block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#a78bfa;background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.25);padding:4px 10px;border-radius:6px;margin-bottom:16px;}
    </style>
  </head>
  <body>
    <div class="card">
      <span class="badge">Endpoint</span>
      <h1>Deauthorize ClipShip</h1>
      <p>This URL is the deauthorization callback used by Meta (Instagram and Facebook) when you remove ClipShip from your connected apps.</p>
      <p>
        ClipShip does <strong>not</strong> store any of your Instagram or Facebook data on our servers. OAuth tokens live in your operating system&apos;s credential vault on your own machine. When you deauthorize ClipShip, the token on your device becomes invalid; the next time the app calls Instagram it will detect the failure and ask you to reconnect.
      </p>
      <p>
        To remove ClipShip from your account, go to:
      </p>
      <p>
        Instagram &rarr; Settings &rarr; Apps and websites &rarr; Active &rarr; ClipShip &rarr; Remove.<br />
        Or Facebook &rarr; Settings &rarr; Apps and websites &rarr; Active &rarr; ClipShip &rarr; Remove.
      </p>
      <p>
        Questions? Email <a href="mailto:hello@clipship.co">hello@clipship.co</a>.
      </p>
    </div>
  </body>
</html>`;

export async function GET() {
  return new Response(DEAUTH_HTML, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function POST(request: Request) {
  // Meta's spec: POST body contains a `signed_request` form field, which
  // is a base64url-encoded HMAC-SHA256 + payload. Full verification
  // requires our App Secret, which lives in env. For sandbox / app-review
  // we accept the request and return the expected confirmation envelope.
  // Future hardening: parse signed_request, verify signature, log the
  // user_id Meta sent so we can audit deauthorizations.

  let userIdHint = "unknown";
  try {
    const formData = await request.formData();
    const signed = formData.get("signed_request");
    if (typeof signed === "string" && signed.includes(".")) {
      // Best-effort decode of payload portion (NOT verifying signature here).
      const payloadPart = signed.split(".")[1];
      const padded = payloadPart + "=".repeat((4 - (payloadPart.length % 4)) % 4);
      const json = Buffer.from(padded.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf-8");
      const parsed = JSON.parse(json) as { user_id?: string };
      if (parsed.user_id) userIdHint = parsed.user_id;
    }
  } catch {
    // Malformed signed_request; we still return 200 so Meta doesn't retry forever.
  }

  // Meta wants confirmation_code + url so a user can check status.
  // We don't have a tracking system for this - return a static
  // confirmation that tells the user to reach out if they have questions.
  const confirmationCode = `clipship-deauth-${Date.now()}`;
  return NextResponse.json({
    url: `https://clipship.co/deauthorize?ref=${confirmationCode}&u=${encodeURIComponent(userIdHint)}`,
    confirmation_code: confirmationCode,
  });
}

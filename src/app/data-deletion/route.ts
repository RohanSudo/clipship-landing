// Data deletion request URL for Meta (and a user-facing instructions
// page when visited via GET).
//
// What this is: Meta's user data deletion compliance endpoint. When
// a user requests data deletion via Meta's interface, Meta POSTs to
// this URL with a signed_request payload. We're expected to respond
// with a confirmation_code + url so the user can track status.
//
// What ClipShip actually has to delete: not much. We don't store
// Instagram-bound user content on our servers. The only ClipShip-
// associated server-side data is:
//   - The user's email address (if they signed up for our app)
//   - Their hardware fingerprint + device list (anti-piracy)
//   - Their license key + payment record (Dodo Payments side)
//
// None of that is keyed off Meta's user_id, so a Meta-initiated
// deletion request is effectively a no-op for us. We respond with
// confirmation that there's nothing to delete on our end. If the
// user ALSO wants their ClipShip account deleted, they can email
// hello@clipship.co separately - that flow is documented on the GET
// page below.

import { NextResponse } from "next/server";

const DATA_DELETION_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Data deletion - ClipShip</title>
    <style>
      body{background:#09090b;color:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;margin:0;padding:48px 24px;display:flex;justify-content:center;}
      .card{max-width:600px;background:#18181b;border:1px solid #27272a;border-radius:14px;padding:36px;line-height:1.65;}
      h1{font-size:24px;font-weight:600;margin:0 0 12px 0;}
      h2{font-size:17px;font-weight:600;margin:24px 0 8px 0;color:#fff;}
      p{color:#a1a1aa;font-size:15px;margin:0 0 14px 0;}
      ul{color:#a1a1aa;font-size:15px;line-height:1.8;padding-left:22px;margin:0 0 14px 0;}
      strong{color:#fff;}
      a{color:#a78bfa;text-decoration:none;}
      a:hover{text-decoration:underline;}
      .badge{display:inline-block;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#a78bfa;background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.25);padding:4px 10px;border-radius:6px;margin-bottom:16px;}
    </style>
  </head>
  <body>
    <div class="card">
      <span class="badge">Privacy</span>
      <h1>How to delete your data</h1>
      <p>
        ClipShip is built around your data <strong>staying on your computer</strong>. Your videos, transcripts, captions, and OAuth tokens never leave your device. There is very little ClipShip-specific data on our servers to begin with.
      </p>

      <h2>What ClipShip stores on its servers</h2>
      <ul>
        <li>Your email address (if you signed up for the app)</li>
        <li>Your license key and device list (for anti-piracy enforcement)</li>
        <li>Your payment record (held by our payment processor, Dodo Payments)</li>
      </ul>
      <p>
        We do not store: your videos, your transcripts, your social media OAuth tokens, your Instagram/YouTube/TikTok data of any kind.
      </p>

      <h2>To delete your data</h2>
      <p>
        Email <a href="mailto:hello@clipship.co">hello@clipship.co</a> from the address you signed up with. We will:
      </p>
      <ul>
        <li>Delete your account and license records within 30 days</li>
        <li>Confirm the deletion via reply email</li>
        <li>Forward your request to Dodo Payments to remove the payment record (subject to their retention policy and applicable tax law for invoices)</li>
      </ul>

      <h2>If you connected ClipShip via Meta (Instagram / Facebook)</h2>
      <p>
        Disconnect ClipShip from Meta&apos;s side at any time:
      </p>
      <ul>
        <li>Instagram &rarr; Settings &rarr; Apps and websites &rarr; Active &rarr; ClipShip &rarr; Remove</li>
        <li>Facebook &rarr; Settings &rarr; Apps and websites &rarr; Active &rarr; ClipShip &rarr; Remove</li>
      </ul>
      <p>
        This invalidates the OAuth token on your device. ClipShip never stored that token on our servers, so there is nothing for us to delete on the Meta side.
      </p>

      <p style="margin-top:24px;font-size:13px;color:#52525b;">
        Questions? <a href="mailto:hello@clipship.co">hello@clipship.co</a>
      </p>
    </div>
  </body>
</html>`;

export async function GET() {
  return new Response(DATA_DELETION_HTML, {
    status: 200,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export async function POST(request: Request) {
  // Meta sends signed_request in the form body when initiating a
  // user-data deletion request. We do best-effort decode (no signature
  // verification yet - that needs the App Secret in env) so we can
  // surface the user_id in the confirmation URL for audit purposes.
  let userIdHint = "unknown";
  try {
    const formData = await request.formData();
    const signed = formData.get("signed_request");
    if (typeof signed === "string" && signed.includes(".")) {
      const payloadPart = signed.split(".")[1];
      const padded = payloadPart + "=".repeat((4 - (payloadPart.length % 4)) % 4);
      const json = Buffer.from(padded.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf-8");
      const parsed = JSON.parse(json) as { user_id?: string };
      if (parsed.user_id) userIdHint = parsed.user_id;
    }
  } catch {
    // Ignore - still return 200.
  }

  const confirmationCode = `clipship-data-deletion-${Date.now()}`;
  return NextResponse.json({
    url: `https://clipship.co/data-deletion?ref=${confirmationCode}&u=${encodeURIComponent(userIdHint)}`,
    confirmation_code: confirmationCode,
  });
}

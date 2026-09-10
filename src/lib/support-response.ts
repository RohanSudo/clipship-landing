export type SupportOutcome =
  | { kind: "created"; reference: string }
  | { kind: "unconfirmed"; reference: string }
  | { kind: "rejected"; message: string }
  | { kind: "uncertain"; message: string };

export function interpretSupportResponse(status: number, body: unknown): SupportOutcome {
  const value = body && typeof body === "object" ? body as Record<string, unknown> : {};
  const validReference = typeof value.reference === "string" && /^SC-[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(value.reference);
  if (validReference && value.receipt === "not_verified") {
    if ((status === 200 || status === 201) && value.status === "created") return { kind: "created", reference: value.reference as string };
    if (status === 202 && value.status === "unconfirmed") return { kind: "unconfirmed", reference: value.reference as string };
  }
  if (status === 400 && value.error === "sensitive_content") return { kind: "rejected", message: "Remove private file paths, passwords, keys, or other sensitive details, then try again." };
  if (status === 400 && value.error === "invalid_request") return { kind: "rejected", message: "Check the email address and field lengths. Remove unusual control characters before trying again." };
  if (status === 413 && value.error === "payload_too_large") return { kind: "rejected", message: "The message is too large to send. Shorten it before trying again, or email support." };
  if (status === 408 && value.error === "request_timeout") return { kind: "rejected", message: "The message upload timed out. Check your connection before trying again, or email support." };
  if (status === 415 && value.error === "invalid_request") return { kind: "rejected", message: "The request format was not accepted. Please email hello@clipship.co for help." };
  if (status === 403 && value.error === "verification_failed") return { kind: "rejected", message: "The security check could not be verified. Complete a new check, then try again." };
  if (status === 429 && value.error === "rate_limited") return { kind: "rejected", message: "Support submissions are temporarily limited. Wait before trying again, or email hello@clipship.co." };
  return { kind: "uncertain", message: "We could not confirm the result. Keep this page open. You can check the same submission again or email support; do not start another request for this issue." };
}

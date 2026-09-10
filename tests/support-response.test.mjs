import assert from "node:assert/strict";
import test from "node:test";
import { interpretSupportResponse } from "../src/lib/support-response.ts";

const reference = "SC-123e4567-e89b-42d3-a456-426614174000";
test("only an exact confirmed response shows ticket creation, never receipt delivery", () => {
  for (const status of [200, 201]) assert.deepEqual(interpretSupportResponse(status, { status: "created", reference, receipt: "not_verified" }), { kind: "created", reference });
  for (const body of [null, {}, { status: "created", reference: "CS-12", receipt: "not_verified" }, { status: "created", reference, receipt: "sent" }]) assert.equal(interpretSupportResponse(201, body).kind, "uncertain");
});
test("accepted but unconfirmed does not become a success", () => {
  assert.deepEqual(interpretSupportResponse(202, { status: "unconfirmed", reference, receipt: "not_verified" }), { kind: "unconfirmed", reference });
  assert.equal(interpretSupportResponse(202, { status: "created", reference, receipt: "not_verified" }).kind, "uncertain");
});
test("only known pre-creation rejections permit editing; ambiguous errors preserve the request", () => {
  for (const [status, error] of [[400, "invalid_request"], [400, "sensitive_content"], [403, "reporter_not_allowed"], [403, "verification_failed"], [408, "request_timeout"], [413, "payload_too_large"], [415, "invalid_request"], [429, "rate_limited"]]) assert.equal(interpretSupportResponse(status, { error }).kind, "rejected");
  for (const status of [409, 500, 502, 503, 504]) assert.equal(interpretSupportResponse(status, { error: "anything" }).kind, "uncertain");
  assert.equal(interpretSupportResponse(403, { error: "internal credentials or account details" }).kind, "uncertain");
});
test("founder-only rejection is explained without exposing allowed accounts", () => {
  const outcome = interpretSupportResponse(403, { error: "reporter_not_allowed" });
  assert.equal(outcome.kind, "rejected");
  assert.match(outcome.message, /controlled test/i);
  assert.match(outcome.message, /hello@clipship\.co/i);
  assert.doesNotMatch(outcome.message, /rohan|gmail|allowlist|founder/i);
});

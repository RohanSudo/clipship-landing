import assert from "node:assert/strict";
import test from "node:test";
import { defaultSupportTurnstileSiteKey, resolveSupportIntakeConfig } from "../src/lib/support-intake-config-core.ts";

const endpoint = "https://support-api.brandjetmedia.com/v1/support/requests";

test("support intake remains off unless the gate is exactly true", () => {
  for (const enabled of [undefined, "", "false", "TRUE", "1"]) {
    assert.equal(resolveSupportIntakeConfig({ enabled }), null);
  }
});

test("the exact gate uses the dedicated public site key", () => {
  assert.equal(defaultSupportTurnstileSiteKey, "0x4AAAAAAEuphyomXd-bemJI");
  assert.deepEqual(resolveSupportIntakeConfig({ enabled: "true" }), {
    endpoint,
    siteKey: defaultSupportTurnstileSiteKey,
  });
});

test("an explicit override must still be a valid public site key", () => {
  assert.equal(resolveSupportIntakeConfig({ enabled: "true", siteKey: "invalid key" }), null);
  assert.deepEqual(resolveSupportIntakeConfig({ enabled: "true", siteKey: "0x4AAAAAAAAAAAAAAAAAAAAA" }), {
    endpoint,
    siteKey: "0x4AAAAAAAAAAAAAAAAAAAAA",
  });
});

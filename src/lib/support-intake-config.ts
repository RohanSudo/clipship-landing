import "server-only";
import { resolveSupportIntakeConfig } from "./support-intake-config-core";

// Activation is a separate release gate, not implied by building this page.
// The backend and its Turnstile hostname/receipt/privacy checks must pass first.
export function supportIntakeConfig() {
  return resolveSupportIntakeConfig({
    enabled: process.env.CLIPSHIP_SUPPORT_INTAKE_ENABLED,
    siteKey: process.env.CLIPSHIP_SUPPORT_TURNSTILE_SITE_KEY,
  });
}

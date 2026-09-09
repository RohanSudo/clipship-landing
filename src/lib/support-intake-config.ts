import "server-only";

// Activation is a separate release gate, not implied by building this page.
// The backend and its Turnstile hostname/receipt/privacy checks must pass first.
export function supportIntakeConfig() {
  const siteKey = process.env.CLIPSHIP_SUPPORT_TURNSTILE_SITE_KEY;
  if (process.env.CLIPSHIP_SUPPORT_INTAKE_ENABLED !== "true" || !siteKey || !/^[a-zA-Z0-9_-]{10,100}$/.test(siteKey)) return null;
  return { endpoint: "https://support-api.brandjetmedia.com/v1/support/requests", siteKey };
}

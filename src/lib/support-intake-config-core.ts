export const defaultSupportTurnstileSiteKey = "0x4AAAAAAEuphyomXd-bemJI";

const siteKeyPattern = /^[a-zA-Z0-9_-]{10,100}$/;

export function resolveSupportIntakeConfig({
  enabled,
  siteKey = defaultSupportTurnstileSiteKey,
}: {
  enabled?: string;
  siteKey?: string;
}) {
  if (enabled !== "true" || !siteKeyPattern.test(siteKey)) return null;
  return {
    endpoint: "https://support-api.brandjetmedia.com/v1/support/requests",
    siteKey,
  };
}

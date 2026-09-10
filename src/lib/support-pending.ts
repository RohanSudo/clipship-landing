export const pendingSupportKey = "clipship_pending_support_v1";
export type PendingMarker = { key: string; reference?: string };
const uuid = "[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}";

export function parsePendingMarker(raw: string): PendingMarker {
  const value = JSON.parse(raw);
  if (!value || typeof value !== "object" || Array.isArray(value) ||
    typeof value.key !== "string" || !new RegExp(`^\\d{13}\\.${uuid}$`).test(value.key) ||
    (value.reference !== undefined && (typeof value.reference !== "string" || !new RegExp(`^SC-${uuid}$`).test(value.reference)))) {
    throw new Error("Invalid pending marker");
  }
  return { key: value.key, ...(value.reference ? { reference: value.reference } : {}) };
}

// This only dismisses browser state after the customer acknowledges support's
// disposition. It neither verifies operator action nor deletes a server claim.
export function dismissConfirmedPending(storage: Pick<Storage, "getItem" | "removeItem">, expectedKey: string, acknowledged: boolean) {
  if (!acknowledged) throw new Error("Support confirmation must be acknowledged");
  if (!removeMatchingPending(storage, expectedKey)) throw new Error("Pending request changed");
}

export function removeMatchingPending(storage: Pick<Storage, "getItem" | "removeItem">, expectedKey: string) {
  const raw = storage.getItem(pendingSupportKey);
  if (!raw || parsePendingMarker(raw).key !== expectedKey) return false;
  storage.removeItem(pendingSupportKey);
  return true;
}

export function writeMatchingPending(storage: Pick<Storage, "getItem" | "setItem">, marker: PendingMarker) {
  const safe = parsePendingMarker(JSON.stringify(marker));
  const raw = storage.getItem(pendingSupportKey);
  if (raw && parsePendingMarker(raw).key !== safe.key) return false;
  storage.setItem(pendingSupportKey, JSON.stringify(safe));
  return true;
}

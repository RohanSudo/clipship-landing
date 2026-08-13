import type { Metadata } from "next";
import PartnerPortal from "./PartnerPortal";

export const metadata: Metadata = {
  title: "Creator Partner Portal - ClipShip",
  description: "Track verified ClipShip creator link clicks, attributed accounts, paid conversions, commission, and payouts.",
  robots: { index: false, follow: false },
};

export default function PartnersPage() {
  return <PartnerPortal />;
}

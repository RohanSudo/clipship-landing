import type { Metadata } from "next";
import CheckoutStatusPage from "../components/CheckoutStatusPage";

export const metadata: Metadata = {
  title: "Checkout cancelled | ClipShip",
  description: "Your ClipShip checkout was cancelled. No purchase was completed and your current plan did not change.",
  alternates: { canonical: "https://clipship.co/cancelled" },
  robots: { index: false, follow: false },
};

export default function CancelledPage() {
  return <CheckoutStatusPage variant="cancelled" />;
}

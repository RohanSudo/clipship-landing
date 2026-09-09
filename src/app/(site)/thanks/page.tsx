import type { Metadata } from "next";
import CheckoutStatusPage from "../components/CheckoutStatusPage";

export const metadata: Metadata = {
  title: "Payment received | ClipShip",
  description: "Your ClipShip payment was received. Return to the desktop app while your plan refreshes.",
  alternates: { canonical: "https://clipship.co/thanks" },
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return <CheckoutStatusPage variant="success" />;
}

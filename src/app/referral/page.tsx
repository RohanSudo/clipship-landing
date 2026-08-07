import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "ClipShip Referral Program: Give 20%, Get 20%",
  description: "Refer a creator to ClipShip Lifetime Pro. They get 20% off, and you earn 20% off lifetime or an extra device slot.",
  alternates: { canonical: "https://clipship.co/referral" },
};

export default function ReferralPage() {
  return (
    <ContentPage
      title="Give 20%. Get 20%."
      description="Help another creator own their clipping software, and ClipShip rewards both of you."
      badge="Referral program"
      cta={{
        title: "Your referral link is inside ClipShip",
        description: "Open Settings, find Referral program, and copy your personal link. The app also shows your successful referrals and available rewards.",
        label: "Download ClipShip",
        href: "/#downloads",
      }}
    >
      <h2>How it works</h2>
      <ol>
        <li>Open ClipShip Settings and copy your personal referral link.</li>
        <li>Your friend downloads ClipShip through that link and creates their account.</li>
        <li>When they choose Lifetime Pro, ClipShip applies 20% off the $99 price.</li>
        <li>After their seven-day refund window, your reward becomes available automatically.</li>
      </ol>

      <h2>What you earn</h2>
      <table>
        <thead>
          <tr><th>Your current plan</th><th>Your reward</th></tr>
        </thead>
        <tbody>
          <tr><td>Free or Trial</td><td>20% off your Lifetime Pro purchase</td></tr>
          <tr><td>Pro Monthly</td><td>20% off when you switch to Lifetime Pro</td></tr>
          <tr><td>Pro Lifetime</td><td>One permanent extra device slot, normally $25</td></tr>
        </tbody>
      </table>

      <h2>What your friend gets</h2>
      <p>
        Your friend receives 20% off their first Lifetime Pro purchase. The referral does not discount
        the $5 monthly plan or extra device slots, and it cannot be combined with another ClipShip discount.
      </p>

      <h2>Fair-use rules</h2>
      <ul>
        <li>Up to three successful referral rewards per account.</li>
        <li>No self-referrals or referrals between accounts on the same device.</li>
        <li>The referred account must be a new Lifetime Pro buyer.</li>
        <li>Rewards clear after the seven-day refund window.</li>
        <li>Refunded, disputed, or charged-back purchases do not earn rewards.</li>
      </ul>
    </ContentPage>
  );
}

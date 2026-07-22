import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Terms of Service - ClipShip",
  description: "ClipShip terms of service. Fair usage, licensing, and what you agree to when using ClipShip.",
  alternates: {
    canonical: "https://clipship.co/terms",
  },
};

export default function Terms() {
  return (
    <ContentPage title="Terms of Service" description="Last updated: May 2026" badge="Legal">
      <h2>Agreement</h2>
      <p>
        By downloading, installing, or using ClipShip, you agree to these terms. If you do not agree,
        do not use the software.
      </p>

      <h2>What ClipShip is</h2>
      <p>
        ClipShip is a desktop application that processes video files locally on your computer using AI.
        It helps creators edit talking-head videos and extract clips for short-form platforms.
      </p>

      <h2>Plans and free trial</h2>
      <p>
        ClipShip offers a free tier and a paid Pro tier. The free tier is always available at no
        cost. Every new install gets a 7-day free trial of the Pro tier, no credit card required.
        After the trial, ClipShip downgrades to the free tier automatically until you upgrade.
      </p>
      <p>
        <strong>The free trial is one per computer, not one per account.</strong> Trials are bound
        to your hardware fingerprint, so creating a new email account on the same machine does not
        grant a fresh trial. This is the same per-device rule that applies to refunds, and exists
        for the same reason: to keep the trial a real evaluation period rather than an
        indefinite loop.
      </p>

      <h2>License terms (Pro)</h2>
      <p>
        A ClipShip Pro purchase entitles you to use the software on ONE active device per license.
        You may switch which device is active at any time from within the app (the deactivated device
        loses access until you switch back). Additional device slots can be purchased separately as
        an add-on; each slot adds one concurrent active device to your account.
      </p>
      <p>
        Your license key is unique to your account and may not be shared, transferred, or used by
        another person. License sharing is detected automatically (devices bound to mismatched accounts)
        and may result in suspension of your license without refund.
      </p>

      <h2>Internet use and what data we collect</h2>
      <p>
        ClipShip does its video work entirely on your computer. Your videos, transcripts, clips,
        captions, and edits never leave your machine and we never see them. The processing is local
        because that&apos;s the whole point of the product.
      </p>
      <p>
        ClipShip does communicate with our server in a small number of cases, all related to license
        enforcement and the platform features you choose to use:
      </p>
      <ul>
        <li><strong>Sign-in.</strong> When you first sign in, ClipShip authenticates you with our
          license server. The request sends your email, a hashed hardware fingerprint, your installed
          app version, and your license status. It does not send any video, audio, or transcript data.</li>
        <li><strong>Daily license check.</strong> Once per day in the background, ClipShip re-confirms
          your license with the same endpoint, sending the same minimal data. If your computer is
          offline when this happens, ClipShip continues to work using a locally cached verdict for up
          to 7 days, then prompts you to reconnect.</li>
        <li><strong>Switching devices.</strong> When you deactivate one device and activate another
          from inside the app, both calls go through our license server.</li>
        <li><strong>Auto-updates.</strong> ClipShip checks for new versions and downloads them from
          our update server.</li>
        <li><strong>Platform posting.</strong> When you click &quot;post&quot; on a clip, that clip
          goes directly to YouTube or wherever you chose. It does not pass through our servers. The
          platform&apos;s own account (yours) is used.</li>
        <li><strong>Using a third-party AI provider.</strong> If you opt to use OpenAI, Claude, Gemini,
          Groq, or OpenRouter for clip selection instead of the bundled local model, ClipShip sends
          the transcript text (not the video) to that provider&apos;s API using your own API key.</li>
      </ul>
      <p>
        The license-related calls exist to prevent piracy and abuse. They do not constitute
        &quot;uploading your footage.&quot; If at any point you want all of the data we hold about
        you deleted, email <a href="mailto:hello@clipship.co">hello@clipship.co</a> and we&apos;ll
        wipe it within 24 hours.
      </p>

      <h2>Your content</h2>
      <p>
        You own everything you create with ClipShip. Your videos, clips, captions, and edits belong
        to you. We claim no rights over your content. Since processing happens on your computer,
        we never have access to your content in the first place.
      </p>

      <h2>AI-generated output</h2>
      <p>
        ClipShip uses AI to make editing decisions (where to cut, which clips to extract, caption timing).
        These are suggestions and automated decisions, not guaranteed to be optimal. You can modify
        or override any AI decision. AI confidence scores are estimates, not guarantees of performance.
      </p>

      <h2>API key usage (third-party AI providers)</h2>
      <p>
        If you connect a third-party AI service (OpenAI, Claude, Gemini, Groq, OpenRouter), you are
        responsible for your usage and costs with that provider. ClipShip stores your key in your
        operating system&apos;s secure keychain and sends it directly to the provider. We do not see,
        collect, or store your key on our servers.
      </p>

      <h2>Connected social media accounts (YouTube, Instagram, TikTok)</h2>
      <p>
        ClipShip can publish your edited clips to YouTube, Instagram, and TikTok via each platform&apos;s
        official API once you authorize the app via OAuth. By connecting an account, you agree that:
      </p>
      <ul>
        <li>You are responsible for ensuring the content you publish complies with that platform&apos;s
          community guidelines and terms of service. ClipShip does not pre-moderate content.</li>
        <li>You comply with each platform&apos;s terms in addition to these ClipShip terms:
          <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer"> YouTube ToS</a>,
          <a href="https://help.instagram.com/581066165581870" target="_blank" rel="noopener noreferrer"> Instagram ToS</a>,
          <a href="https://www.tiktok.com/legal/page/us/terms-of-service/en" target="_blank" rel="noopener noreferrer"> TikTok ToS</a>.</li>
        <li>Each platform may impose rate limits, content restrictions, or other rules that ClipShip
          cannot override. If a platform rejects, removes, or limits your post, that is between you
          and the platform.</li>
        <li>You can disconnect any social account at any time from ClipShip Settings → Social Accounts.</li>
      </ul>
      <p>
        ClipShip does not use any data from your connected social accounts for advertising, AI/ML
        model training, or analytics. We only use the access you grant to publish the specific clips
        you initiate posting for via an explicit user click.
      </p>

      <h2>Refunds</h2>
      <p>
        ClipShip Pro is available as a monthly subscription or a one-time purchase. We want you to
        be happy with it, so if it&apos;s not working out for you, here&apos;s how refunds work.
      </p>
      <p>
        <strong>Refund window.</strong> You can request a refund within 7 days of your purchase.
        After 7 days, we don&apos;t issue refunds except in unusual circumstances. If you&apos;re
        past the window and something genuinely went wrong, email
        <a href="mailto:hello@clipship.co"> hello@clipship.co</a> and we&apos;ll take a look.
      </p>
      <p>
        <strong>One refund per device.</strong> We only offer one refund per computer, ever. This is
        a strict rule. If you&apos;ve already received a refund on this computer, even under a
        different email address, you won&apos;t be eligible for another refund on the same machine.
        We track this by hardware fingerprint, not by email or account, so creating a new account on
        the same computer does not reset eligibility.
      </p>
      <p>
        <strong>How to request a refund.</strong> Email
        <a href="mailto:hello@clipship.co"> hello@clipship.co</a> from the address you used to buy
        ClipShip. We process refund requests within 2-3 business days and the money usually hits
        your card in 3 to 5 business days via Dodo Payments (our payment processor).
      </p>
      <p>
        <strong>What happens after a refund.</strong> Your license downgrades to the free tier. You
        can keep ClipShip installed and use the free features. Pro features stop working immediately.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        ClipShip is provided "as is." We are not responsible for any lost content, missed uploads,
        incorrect edits, or other issues arising from the use of the software. Always keep backups
        of your original recordings.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms. Significant changes will be communicated through the app or via email
        to registered users. Continued use of ClipShip after changes constitutes acceptance.
      </p>

      <h2>Contact</h2>
      <p>Questions? Email hello@clipship.co.</p>
    </ContentPage>
  );
}

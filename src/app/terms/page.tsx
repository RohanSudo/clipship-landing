import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Terms of Service - ClipShip",
  description: "ClipShip terms of service. Fair usage, licensing, and what you agree to when using ClipShip.",
};

export default function Terms() {
  return (
    <ContentPage title="Terms of Service" description="Last updated: April 2026" badge="Legal">
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

      <h2>Plans</h2>
      <p>
        ClipShip offers a free tier and a paid Pro tier. Specific features, export quality,
        and pricing for each tier will be announced at launch. The free tier will always be
        available at no cost with unlimited video processing.
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
        Pro tier purchases include a 14-day money-back guarantee. If the software does not work as
        described, contact <a href="mailto:hello@clipship.co">hello@clipship.co</a> for a full refund.
        Refunds are processed via Dodo Payments (our payment processor) and typically credit to your
        original payment method within 5-10 business days.
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

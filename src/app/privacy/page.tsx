import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Privacy Policy - ClipShip",
  description: "ClipShip privacy policy. Your videos stay on your computer. We do not collect or transmit your content.",
};

export default function Privacy() {
  return (
    <ContentPage title="Privacy Policy" description="Last updated: April 2026">
      <h2>The short version</h2>
      <p>
        ClipShip processes your videos entirely on your computer. Your footage, audio, and transcripts
        never leave your machine. We do not upload, store, or access your content.
      </p>

      <h2>What ClipShip collects</h2>
      <p><strong>When using the desktop app (ClipShip Local):</strong></p>
      <ul>
        <li>No video or audio content is transmitted anywhere</li>
        <li>No transcripts are sent to our servers</li>
        <li>If you opt in to anonymous analytics, we collect: app version, OS, basic usage counts (videos processed). No content, no identifying information.</li>
        <li>If you use the "Connect your AI account" option, your API key is stored in your operating system's secure keychain (Windows Credential Manager). The key is sent directly from your computer to the AI provider (OpenAI, Claude, Gemini, Groq, or OpenRouter). We never see, collect, or transmit your key.</li>
      </ul>

      <p><strong>When using clipship.co (this website):</strong></p>
      <ul>
        <li>If you join the waitlist, we collect your name and email address</li>
        <li>We use Microsoft Clarity for anonymous website analytics (page views, scroll depth). No personal data is shared.</li>
        <li>We use Cloudflare Turnstile for spam protection on forms</li>
      </ul>

      <h2>How we use your data</h2>
      <ul>
        <li>Waitlist emails: only to notify you when ClipShip is ready for download. No spam, no selling to third parties.</li>
        <li>Analytics: to understand which features matter most. Aggregate and anonymous.</li>
      </ul>

      <h2>Third-party services</h2>
      <ul>
        <li><strong>Microsoft Clarity</strong> (website analytics)</li>
        <li><strong>Cloudflare</strong> (DNS, CDN, spam protection)</li>
        <li><strong>Vercel</strong> (website hosting)</li>
        <li><strong>Google Sheets</strong> (waitlist storage via n8n automation)</li>
      </ul>
      <p>None of these services have access to your video content or editing data.</p>

      <h2>Your rights</h2>
      <p>
        You can request deletion of your waitlist data at any time by emailing hello@clipship.co.
        Since the desktop app processes everything locally, there is no server-side data to delete.
      </p>

      <h2>Contact</h2>
      <p>Questions about privacy? Email hello@clipship.co.</p>
    </ContentPage>
  );
}

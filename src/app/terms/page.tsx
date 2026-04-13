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

      <h2>Free tier</h2>
      <ul>
        <li>Available to everyone at no cost</li>
        <li>Unlimited video processing</li>
        <li>720p maximum export resolution</li>
        <li>Includes a "Edited with ClipShip" watermark on exports</li>
        <li>YouTube upload via your own OAuth account</li>
      </ul>

      <h2>Pro tier</h2>
      <ul>
        <li>One-time purchase, no recurring subscription</li>
        <li>License is tied to your account and can be activated on up to 3 devices</li>
        <li>Includes all future updates</li>
        <li>1080p and 4K export, no watermark</li>
        <li>All platform uploads (YouTube, Instagram, TikTok, LinkedIn)</li>
      </ul>

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

      <h2>API key usage</h2>
      <p>
        If you connect a third-party AI service (OpenAI, Claude, Gemini, Groq, OpenRouter), you are
        responsible for your usage and costs with that provider. ClipShip stores your key in your
        operating system's secure keychain and sends it directly to the provider. We do not see,
        collect, or store your key on our servers.
      </p>

      <h2>Refunds</h2>
      <p>
        Pro tier purchases include a 14-day money-back guarantee. If the software does not work as
        described, contact hello@clipship.co for a full refund.
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

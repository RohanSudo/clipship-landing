import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentPage from "../../components/ContentPage";
import CreatorDownloadButtons from "../../components/CreatorDownloadButtons";

type CreatorLandingProps = {
  params: Promise<{ slug: string }>;
};

type PublicCreator = {
  code: string;
  slug: string;
  displayName: string;
  trialDays: number;
};

export const metadata: Metadata = {
  title: "Try ClipShip Through a Creator Partner",
  description: "Download ClipShip for Windows or macOS through an approved creator partner.",
  robots: { index: false, follow: false },
};

async function getCreator(slug: string): Promise<PublicCreator | null> {
  if (!/^[a-z0-9](?:[a-z0-9-]{1,46}[a-z0-9])?$/.test(slug)) return null;
  const response = await fetch(`https://api.clipship.co/creator/public/${encodeURIComponent(slug)}`, {
    cache: "no-store",
  });
  if (!response.ok) return null;
  return response.json() as Promise<PublicCreator>;
}

export default async function CreatorLanding({ params }: CreatorLandingProps) {
  const creator = await getCreator((await params).slug.toLowerCase());
  if (!creator) notFound();

  return (
    <ContentPage
      title={`Try ClipShip through ${creator.displayName}.`}
      description={`Download ClipShip and get ${creator.trialDays} days of Pro access before deciding whether it belongs in your workflow.`}
      badge="ClipShip creator partner"
      cta={{
        title: "What happens after the trial?",
        description: "Keep using the free plan, subscribe monthly, or buy the lifetime license. No purchase is required to start.",
        label: "See ClipShip pricing",
        href: "/#pricing",
      }}
    >
      <h2>Choose your computer</h2>
      <p>
        ClipShip runs on Windows 10 or 11 and Apple Silicon Macs running macOS 15 or newer.
        In Local AI mode, your source footage stays on your computer.
      </p>
      <div className="not-prose my-10">
        <CreatorDownloadButtons creatorCode={creator.code} creatorSlug={creator.slug} />
      </div>
      <h2>How the creator offer works</h2>
      <p>
        Download from this page and finish account setup in ClipShip. The creator code is linked to
        your first account automatically when the download can be matched unambiguously. If it cannot,
        enter the code shown below during signup. Creating extra accounts on the same computer does not
        restart the {creator.trialDays}-day Pro trial.
      </p>
      <p><strong>Creator code:</strong> {creator.code}</p>
    </ContentPage>
  );
}

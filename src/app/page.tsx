import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://clipship.co",
  },
};

export default function HomePage() {
  return <HomePageClient />;
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.clipship.co" }],
        destination: "https://clipship.co/:path*",
        permanent: true,
      },
      {
        source: "/ai-video-clipper-without-credits",
        destination: "/opusclip-alternative-free-no-watermark",
        permanent: true,
      },
      {
        source: "/no-upload-podcast-clipper-windows",
        destination: "/podcast-to-shorts-ai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

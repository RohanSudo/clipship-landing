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
    ];
  },
};

export default nextConfig;

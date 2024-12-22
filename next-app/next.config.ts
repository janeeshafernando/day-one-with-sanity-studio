import type { NextConfig } from "next";
//Load images from external URL's using the image component Next.js supplies, those domains will need to be listed in the Next.js config.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
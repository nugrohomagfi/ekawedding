import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
    ],
  },
  experimental: {
    // Allow dev server to be previewed across origins (required for remote previews)
    // allowedHosts handled by platform; remove invalid key for Next 15
  },
};

export default nextConfig;

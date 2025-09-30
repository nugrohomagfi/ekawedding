import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Allow dev server to be previewed across origins (required for remote previews)
    allowedDevOrigins: true,
  },
};

export default nextConfig;

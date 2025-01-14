import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static site export
  images: {
    unoptimized: true, // Required for GitHub Pages to work with next/image
  },
  trailingSlash: true, // Ensures URLs end with a slash for proper GitHub Pages routing
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static site export
  images: {
    unoptimized: true, // Disables Next.js image optimization (GitHub Pages does not support it)
  },
  trailingSlash: true, // Ensures URLs end with a slash for proper GitHub Pages routing
  basePath: "/BrandNav_landing-page", // GitHub Pages serves files under this path
  assetPrefix: "/BrandNav_landing-page/", // Fixes static asset loading
};

export default nextConfig;

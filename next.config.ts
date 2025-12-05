import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Optional: Uncomment if you need to set a base path for subdirectory deployments
  // basePath: '/your-subdirectory',

  // Optional: Uncomment if deploying to GitHub Pages or similar
  // trailingSlash: true,
};

export default nextConfig;

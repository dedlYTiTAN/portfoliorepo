import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfoliorepo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

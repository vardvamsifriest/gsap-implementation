import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/gsap-implementation",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
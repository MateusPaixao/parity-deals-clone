import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/parity-deals-clone',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const config = {
  images: {
    unoptimized: true,
  },
  output: "export",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
} satisfies NextConfig;

export default config;

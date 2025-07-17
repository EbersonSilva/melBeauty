import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/melBeauty",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

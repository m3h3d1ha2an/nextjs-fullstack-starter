import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typedRoutes: true,
  // images: { remotePatterns: [{ protocol: "https", hostname: "*" }] },w
};

export default nextConfig;

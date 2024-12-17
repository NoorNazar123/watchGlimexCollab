import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    manualClientBasePath: true
}
};

export default nextConfig;

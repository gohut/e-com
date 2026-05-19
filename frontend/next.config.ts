import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/policy",
        destination: "/ReturnExchangePolicy",
        permanent: false,
      },
      {
        source: "/ReturnExhangePolicy",
        destination: "/ReturnExchangePolicy",
        permanent: false,
      },
      {
        source: "/privacyPolicy",
        destination: "/privacypolicy",
        permanent: false,
      },
      {
        source: "/PrivacyPolicy",
        destination: "/privacypolicy",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

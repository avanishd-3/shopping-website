import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://fakestoreapi.com/img/*"), // Allow all images from fake store API
    ],
  }
};

export default nextConfig;

import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // pre-renders every page to static HTML in /out (fast, SEO-friendly, any host)
  trailingSlash: true,     // /services/it-solutions/ -> services/it-solutions/index.html
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias["@"] = root;
    return config;
  },
};
export default nextConfig;

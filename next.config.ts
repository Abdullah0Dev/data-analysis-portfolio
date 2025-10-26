import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactCompiler: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
            },
            {
                protocol: "https",
                hostname: "media.brightdata.com",
            },
            {
                protocol: "https",
                hostname: "www.shutterstock.com",
            },
            {
                protocol: "https",
                hostname: "boostlabs.com",
            },
            {
                protocol: "https",
                hostname: "cdn-icons-png.flaticon.com",
            },
        ],
    },
};

export default nextConfig;

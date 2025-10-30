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
                hostname: "pbs.twimg.com",
            },
            {
                protocol: "https",
                hostname: "boostlabs.com",
            },
            {
                protocol: "https",
                hostname: "blog.coupler.io",
            },
            {
                protocol: "https",
                hostname: "cdn.activestate.com",
            },
            {
                protocol: "https",
                hostname: "digitalfloats.com",
            },
            {
                protocol: "https",
                hostname: "softwaretechnologyconsultants.com",
            },
            {
                protocol: "https",
                hostname: "github-production-user-asset-6210df.s3.amazonaws.com",
            },
            {
                protocol: "https",
                hostname: "cdn-icons-png.flaticon.com",
            },
            {
                protocol: "https",
                hostname: "github.com",
            },
            {
                protocol: "https",
                hostname: "abdallahnasser.netlify.app",
            },
            {
                protocol: "https",
                hostname: "cdn.mavenanalytics.io",
            },
            {
                protocol: "https",
                hostname: "randomuser.me",
            },
            {
                protocol: "https",
                hostname: "raw.githubusercontent.com",
            },
            {
                protocol: "https",
                hostname: "mavenanalyticsio-upload-bucket-prod.s3.us-west-2.amazonaws.com",
            },
        ],
    },
};

export default nextConfig;

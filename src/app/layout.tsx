import type { Metadata } from "next";
import { Roboto } from "next/font/google"; // Importing Roboto font
import "./globals.css";
import {
    metadataTemplate,
    OWNER_NAME,
    socialMedia,
    WEBSITE_ADDRESS,
} from "@/constants";

// Apply Roboto font globally
const roboto = Roboto({
    weight: ["400", "500", "700"], // Include different font weights
    subsets: ["latin"],
    variable: "--font-roboto",
});

export const metadata: Metadata = metadataTemplate;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* SEO meta tags */}
                <meta name="robots" content="index, follow" />
                <meta name="author" content={OWNER_NAME} />
                <meta name="designer" content="Dev Minds" />
                <meta name="developer" content="Dev Minds" />
                <meta name="theme-color" content="#FFFFFF" />
                {/* 🧠 Favicons and PWA support */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />

                {/* Structured data for social links */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: OWNER_NAME,
                            jobTitle: "Data Analyst",
                            url: WEBSITE_ADDRESS,
                            sameAs: socialMedia.map((item) => item.link),
                            creator: {
                                "@type": "Organization",
                                name: "Dev Minds",
                                url: "https://devmindslab.com/",
                            },
                        }),
                    }}
                />
            </head>
            <body className={`${roboto.variable} antialiased`}>{children}</body>
        </html>
    );
}

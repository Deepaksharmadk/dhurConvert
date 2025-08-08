
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import Footer from "@/footer/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dhur Converter - Land Measurement Calculator",
    description:
        "Convert Dhur to Katha, Bigha, and other land measurement units instantly. Free online Dhur conversion tool.",
    keywords: [
        "Dhur to Katha",
        "Dhur Converter",
        "Bigha Converter",
        "Land measurement Bihar",
        "Dhur calculation"
    ],
    authors: [{ name: "Deepak Sharma" }],
    openGraph: {
        title: "Dhur Converter - Land Measurement Calculator",
        description:
            "Free online tool to convert Dhur to Katha, Bigha, and other units instantly.",
        url: "https://dhurconvert.vercel.app",
        siteName: "Dhur Converter",
        images: [
            {
                url: "https://dhurconvert.vercel.app/og-image.jpg", // public में डालना
                width: 1200,
                height: 630,
                alt: "Dhur Converter",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <MantineProvider defaultColorScheme="light">
                    {children}
                    <Footer />
                </MantineProvider>
            </body>
        </html>
    );
}

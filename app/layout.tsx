import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guy Stitt - Enterprise Architect Who Still Codes",
  description: "Executive Director & Principal Architect with 10+ years leading high-performing teams. Impacting 10,000+ engineers and driving measurable business results at enterprise scale.",
  keywords: ["Enterprise Architecture", "Executive Leadership", "Technical Director", "CVS Health", "API Architecture", "Team Leadership", "Denver Tech"],
  authors: [{ name: "Guy Stitt" }],
  creator: "Guy Stitt",
  openGraph: {
    title: "Guy Stitt - Enterprise Architect Who Still Codes",
    description: "Executive Director & Principal Architect with 10+ years leading high-performing teams. Impacting 10,000+ engineers and driving measurable business results at enterprise scale.",
    url: "https://guystitt.com",
    siteName: "Guy Stitt",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guy Stitt - Enterprise Architect Who Still Codes",
    description: "Executive Director & Principal Architect with 10+ years leading high-performing teams. Impacting 10,000+ engineers and driving measurable business results at enterprise scale.",
    creator: "@guystitt",
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
        {children}
      </body>
    </html>
  );
}

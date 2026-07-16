import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dhruvmochi.com"),
  title: {
    default: "Dhruv Mochi | Full Stack Developer",
    template: "%s | Dhruv Mochi",
  },
  description: "Senior Full Stack Developer specializing in React, Next.js, and modern web technologies. Building scalable and user-focused web experiences.",
  keywords: ["Full Stack Developer", "Frontend Engineer", "React Developer", "Next.js", "TypeScript", "Dhruv Mochi"],
  authors: [{ name: "Dhruv Mochi", url: "https://dhruvmochi.com" }],
  creator: "Dhruv Mochi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhruvmochi.com",
    title: "Dhruv Mochi | Full Stack Developer",
    description: "Senior Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Dhruv Mochi Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dhruv Mochi - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Mochi | Full Stack Developer",
    description: "Senior Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    creator: "@dhruvmochi",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://dhruvmochi.com",
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

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dhruv Mochi",
    jobTitle: "Full Stack Developer",
    url: "https://dhruvmochi.com",
    sameAs: [
      "https://github.com/dhruvmochi",
      "https://linkedin.com/in/dhruvmochi",
    ],
    knowsAbout: ["Web Development", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-black text-black dark:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-right" richColors theme="system" />
      </body>
    </html>
  );
}

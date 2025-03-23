import type { Metadata } from "next";
import { Rubik, JetBrains_Mono } from "next/font/google";

import * as config from "@/lib/constants";

import "./globals.css";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark-dimmed.css";

import NavMenu from "./nav-menu";
import Footer from "./_components/footer";

const rubik = Rubik({
  weight: ["400", "700", "800", "900"],
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: config.title,
    description: config.description,
    keywords: ["Perfect Line", "PerfectLine", "C++", "C++ Courses"],
    authors: [{ name: "Ethan Okamura" }],
    openGraph: {
      title: config.title,
      description: config.description,
      url: "https://perfectline.io/",
      siteName: "Perfect Line",
      images: [
        {
          url: "https://perfectline.io/imgs/shared_image.png",
          width: 1200,
          height: 630,
          alt: "Perfect Line Preview",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: ["https://perfectline.io/imgs/shared_image.png"],
    },
    icons: {
      icon: "/favicon.svg",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${rubik.variable} ${jetbrains.variable}`}>
      <body >
        <NavMenu />
        {children}
        <Footer name={config.title} />
      </body>
    </html>
  );
}

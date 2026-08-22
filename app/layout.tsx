import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kishanbaghel.dev"),
  title: {
    default: `${site.name} | ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.bio,
  keywords: [
    "software engineer",
    "full-stack developer",
    "React",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: `${site.name} | ${site.role}`,
    description: site.bio,
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: site.photoPath,
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.role}`,
    description: site.bio,
    images: [site.photoPath],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mono.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only absolute left-3 top-3 z-[60] rounded-full bg-white px-4 py-2 text-sm font-semibold text-black focus:not-sr-only"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

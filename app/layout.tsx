import type { Metadata } from "next";
import "./globals.css";

/** Production site URL for canonical links and Open Graph. Prefer this on a custom domain; Vercel sets VERCEL_URL at build time. */
function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

const metadataBase = new URL(`${siteUrl()}/`);

const defaultTitle = "Issei Hasegawa | Portfolio";
const description =
  "Computer Science student at Allegheny College interested in distributed systems, operating systems, and reliable backend infrastructure.";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: defaultTitle,
    template: "%s | Issei Hasegawa",
  },
  description,
  keywords: [
    "Issei Hasegawa",
    "Computer Science",
    "distributed systems",
    "Allegheny College",
    "portfolio",
  ],
  authors: [{ name: "Issei Hasegawa", url: "https://github.com/IsseiHasegawa" }],
  creator: "Issei Hasegawa",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    url: "/",
    siteName: "Issei Hasegawa",
    title: defaultTitle,
    description,
  },
  twitter: {
    card: "summary",
    title: defaultTitle,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

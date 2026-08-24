import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

/**
 * Self-hosted at build time by next/font, so the page never calls
 * fonts.googleapis.com at runtime — that host is unreachable from mainland China.
 */
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-serif",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://earlyaccess.go2china.space";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VisePanda — Early Access",
  description:
    "VisePanda validates, optimises and sequences your China trip, so the plan you leave home with actually works. Join the early access list.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VisePanda — Early Access",
    description:
      "China, perfectly connected. Join the VisePanda early access list — iOS and Android apps in development.",
    url: siteUrl,
    siteName: "VisePanda",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={serif.variable}>
      <body>{children}</body>
    </html>
  );
}

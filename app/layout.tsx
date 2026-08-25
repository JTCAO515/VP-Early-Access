import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://earlyaccess.go2china.space";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VisePanda | Early Access",
  description:
    "VisePanda keeps routes, daily plans and practical travel details in one place. Join the Early Access list for an invitation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "VisePanda | Early Access",
    description:
      "Plan China without the loose ends. VisePanda for iOS and Android is in development. Join the Early Access list.",
    url: siteUrl,
    siteName: "VisePanda",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

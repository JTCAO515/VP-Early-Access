import type { Metadata } from "next";
import StandaloneDemoPage from "@/components/StandaloneDemoPage";

export const metadata: Metadata = {
  title: "VisePanda Demo",
  description: "Open the VisePanda product demo and explore Trip Canvas, Copilot, Tools, Explore and Today.",
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "VisePanda Demo",
    description: "A shareable VisePanda product demo with prepared travel-planning states.",
    url: "/demo",
    type: "website",
  },
};

export default function DemoPage() {
  return <StandaloneDemoPage />;
}

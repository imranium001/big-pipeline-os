import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Big Pipeline — Agentic Growth for Funded B2B",
  description:
    "Go from unpredictable pipeline to a growth system you can run — in 90 days or less — using agentic growth consulting. Book a free GrowthView Direction Session.",
  metadataBase: new URL("https://bigpipeline.io"),
  openGraph: {
    title: "Big Pipeline — Agentic Growth for Funded B2B",
    description:
      "Install a pipeline system — not another agency scramble. Free GrowthView Direction Session.",
    url: "https://bigpipeline.io",
    siteName: "Big Pipeline",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Pipeline — Agentic Growth for Funded B2B",
    description:
      "From feast-or-famine pipeline to a measurable Validation engine in 90 days.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

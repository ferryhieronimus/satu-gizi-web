import type { Metadata } from "next";
import "../globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Satu Gizi",
  description:
    "Satu Gizi is an expert system based on Retrieval-Augmented Generation AI that empowers communities and government to monitor program Makan Bergizi Gratis, asses service unit performance, and optimize budget allocation, using AI-driven nutrition predictions on food served directly to children in schools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}

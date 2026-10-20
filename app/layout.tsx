import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Relume – Websites designed & built faster with AI",
  description: "Generate sitemaps and wireframes for marketing websites in minutes.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

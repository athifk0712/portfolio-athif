import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Athif — Portfolio",
  description: "Young entrepreneur, AI enthusiast & founder of Moeland.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

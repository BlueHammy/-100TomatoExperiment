import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buy a Tomato for £100",
  description: "Buy one digital tomato for £100. Yes, really.",
  openGraph: {
    title: "Buy a Tomato for £100",
    description: "Buy one digital tomato for £100. Yes, really.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}

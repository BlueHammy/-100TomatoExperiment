import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const PRODUCT = {
  name: "One Tomato",
  price: 100,
  currency: "GBP",
  description:
    "One digital tomato. A novelty purchase — you receive a digital tomato image after payment.",
} as const;

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export function getTomatoImagePath(): string {
  const jpgPath = path.join(process.cwd(), "public", "tomato.jpg");
  return fs.existsSync(jpgPath) ? "/tomato.jpg" : "/tomato.svg";
}

export function getTomatoImageUrl(): string {
  return `${getSiteUrl()}${getTomatoImagePath()}`;
}

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${getSiteUrl()}${path || "/"}`;
  const image = getTomatoImageUrl();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "en_GB",
      siteName: "£100 Tomato",
      images: [{ url: image, alt: "One Tomato" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

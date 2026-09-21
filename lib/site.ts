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

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

function isLocalhostUrl(url: string): boolean {
  try {
    const { hostname } = new URL(url);
    return hostname === "localhost" || hostname === "127.0.0.1";
  } catch {
    return false;
  }
}

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
    ? normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined;

  // Ignore localhost env on Vercel — common copy-paste from .env.example
  if (explicit && !(process.env.VERCEL === "1" && isLocalhostUrl(explicit))) {
    return explicit;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return normalizeSiteUrl(
      `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    );
  }

  if (process.env.VERCEL_URL) {
    return normalizeSiteUrl(`https://${process.env.VERCEL_URL}`);
  }

  return explicit ?? "http://localhost:3000";
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

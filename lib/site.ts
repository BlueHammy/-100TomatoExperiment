import fs from "fs";
import path from "path";
import type { Metadata } from "next";

export const SITE_NAME = "The £100 Tomato";

export const PRODUCT = {
  name: "One Tomato",
  price: 100,
  currency: "GBP",
  description:
    "One digital tomato for £100. You receive a digital image after payment.",
} as const;

export function pageTitle(primary: string): string {
  return `${primary} | ${SITE_NAME}`;
}

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

/** Public preview only (OG / schema). The paid photo is not in /public. */
export function getTomatoImagePath(): string {
  return "/tomato.svg";
}

export function getTomatoImageUrl(): string {
  return `${getSiteUrl()}${getTomatoImagePath()}`;
}

export function getPaidTomatoImagePath(sessionId: string): string {
  return `/api/tomato?session_id=${encodeURIComponent(sessionId)}`;
}

export function createMetadata({
  title,
  description,
  path = "",
  index = true,
}: {
  title: string;
  description: string;
  path?: string;
  index?: boolean;
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
      siteName: SITE_NAME,
      images: [{ url: image, alt: "One Tomato" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index,
      follow: true,
    },
  };
}

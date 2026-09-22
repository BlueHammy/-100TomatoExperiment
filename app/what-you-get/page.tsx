import { ContentPage } from "@/components/ContentPage";
import Link from "next/link";
import { createMetadata, pageTitle } from "@/lib/site";

export const metadata = createMetadata({
  title: pageTitle("What Do You Get for £100?"),
  description:
    "What you actually get when you buy a tomato for £100 on this website. One digital tomato. No delivery.",
  path: "/what-you-get",
});

export default function WhatYouGetPage() {
  return (
    <ContentPage title="What do you get for £100?">
      <p>
        When you buy a tomato for £100 here, you get one digital tomato. That
        is a picture of a tomato on your screen.
      </p>
      <p>
        There is no box. There is no delivery. No tomato arrives at your
        house. No tomato plant. No crate of tomatoes. No subscription. No secret
        tomato empire.
      </p>
      <p>The tomato is not shipped to you. There is no physical tomato.</p>
      <p>
        You receive the image on the success page and a Stripe receipt. That is
        the full product.
      </p>

      <p className="content-links">
        <Link href="/why">Why £100?</Link>
        {" · "}
        <Link href="/faq">FAQ</Link>
        {" · "}
        <Link href="/">Buy the tomato</Link>
      </p>
    </ContentPage>
  );
}

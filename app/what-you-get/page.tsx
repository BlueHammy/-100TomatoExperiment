import { ContentPage } from "@/components/ContentPage";
import Link from "next/link";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "What You Get",
  description: "What you receive when you buy one digital tomato for £100.",
  path: "/what-you-get",
});

export default function WhatYouGetPage() {
  return (
    <ContentPage title="What you get">
      <p>You get a digital image of a tomato.</p>
      <p>That&apos;s it.</p>
      <p>The tomato is not shipped to you.</p>
      <p>There is no tomato delivery.</p>
      <p>There is no tomato box.</p>
      <p>There is no tomato.</p>

      <p className="content-links">
        <Link href="/faq">FAQ</Link>
        {" · "}
        <Link href="/">Buy the tomato</Link>
      </p>
    </ContentPage>
  );
}

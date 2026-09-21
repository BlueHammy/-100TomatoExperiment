import { ContentPage } from "@/components/ContentPage";
import Link from "next/link";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "The £100 Tomato",
  description:
    "A website where you can buy one digital tomato for £100.",
  path: "/100-pound-tomato",
});

export default function HundredPoundTomatoPage() {
  return (
    <ContentPage title="The £100 tomato">
      <p>
        This is a website where you can buy a digital tomato for £100.
      </p>
      <p>
        You may have found this page by searching for a hundred pound tomato,
        a £100 tomato, or the phrase &ldquo;buy a tomato for £100&rdquo;.
      </p>
      <p>It exists.</p>
      <p>The tomato is digital. Payment is processed by Stripe.</p>

      <p className="content-links">
        <Link href="/why">Why £100?</Link>
        {" · "}
        <Link href="/what-you-get">What you get</Link>
        {" · "}
        <Link href="/faq">FAQ</Link>
        {" · "}
        <Link href="/">Buy the tomato</Link>
      </p>
    </ContentPage>
  );
}

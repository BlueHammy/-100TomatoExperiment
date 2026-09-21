import { ContentPage } from "@/components/ContentPage";
import Link from "next/link";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Why Is It £100?",
  description: "Why one digital tomato costs one hundred pounds.",
  path: "/why",
});

export default function WhyPage() {
  return (
    <ContentPage title="Why is it £100?">
      <p>Because £100 is a lot of money for a picture of a tomato.</p>
      <p>We thought this was interesting.</p>
      <p>There is no complex pricing model.</p>
      <p>There is no premium tier.</p>
      <p>There is no subscription.</p>
      <p>It is simply £100.</p>

      <p className="content-links">
        <Link href="/what-you-get">What you get</Link>
        {" · "}
        <Link href="/faq">FAQ</Link>
        {" · "}
        <Link href="/">Buy the tomato</Link>
      </p>
    </ContentPage>
  );
}

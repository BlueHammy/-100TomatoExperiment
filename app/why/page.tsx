import { ContentPage } from "@/components/ContentPage";
import Link from "next/link";
import { createMetadata, pageTitle } from "@/lib/site";

export const metadata = createMetadata({
  title: pageTitle("Why Is This Tomato £100?"),
  description:
    "Why is there a £100 tomato? A short explanation of the hundred pound tomato on this website.",
  path: "/why",
});

export default function WhyPage() {
  return (
    <ContentPage title="Why is this tomato £100?">
      <p>Because £100 was funnier than £1.</p>
      <p>
        This is a website where you can buy a digital tomato for £100. One
        tomato. One hundred pounds. It is an experiment involving a tomato that
        costs £100.
      </p>
      <p>
        There is no complex pricing model. There is no premium tier. There is
        no subscription. It is simply a £100 tomato.
      </p>
      <p>
        If you searched for a hundred pound tomato or wondered why such a thing
        exists, you have found it.
      </p>

      <p className="content-links">
        <Link href="/what-you-get">What you get for £100</Link>
        {" · "}
        <Link href="/faq">FAQ</Link>
        {" · "}
        <Link href="/">Buy the tomato</Link>
      </p>
    </ContentPage>
  );
}

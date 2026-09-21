import { ContentPage } from "@/components/ContentPage";
import Link from "next/link";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "The £100 Tomato Experiment",
  description:
    "A small internet experiment: a website where you can buy one digital tomato for £100. Yes, really.",
  path: "/100-pound-tomato",
});

export default function HundredPoundTomatoPage() {
  return (
    <ContentPage title="The £100 tomato experiment">
      <p>
        This is a website where you can buy a tomato for £100. One tomato. One
        hundred pounds. That is the entire thing.
      </p>
      <p>
        It started as a simple question: what happens if you treat an obviously
        ridiculous product with complete seriousness? So we built the smallest
        possible shop, put one tomato in it, and set the price at £100.
      </p>
      <p>
        You might find this page by searching for a hundred pound tomato, a £100
        tomato website, or the phrase &ldquo;buy a tomato for £100&rdquo; and
        wondering whether such a thing actually exists. It does. You are on it.
      </p>
      <p>
        The tomato is digital. The payment is real. There is no grand mission,
        no startup pitch, and no plan to scale into a tomato marketplace. It is
        a tiny, deliberately stupid corner of the internet.
      </p>
      <p>
        If that sounds like something you want to participate in — voluntarily,
        with full awareness of what you are doing — the button is on the{" "}
        <Link href="/">homepage</Link>.
      </p>

      <p className="content-links">
        <Link href="/why">Why £100?</Link>
        {" · "}
        <Link href="/what-you-get">What you get</Link>
        {" · "}
        <Link href="/faq">FAQ</Link>
      </p>
    </ContentPage>
  );
}

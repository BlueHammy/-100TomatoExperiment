import { ContentPage } from "@/components/ContentPage";
import Link from "next/link";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Why Is This Tomato £100?",
  description:
    "An explanation of why one digital tomato costs one hundred pounds. Spoiler: that is the entire concept.",
  path: "/why",
});

export default function WhyPage() {
  return (
    <ContentPage title="Why is this tomato £100?">
      <p>
        Because that is what it costs. This website sells exactly one thing: a
        single digital tomato, for exactly one hundred pounds.
      </p>
      <p>
        There is no hidden meaning, no exclusive membership, and no artisanal
        growing process. The tomato is not hand-reared. It is not rare. It is a
        tomato.
      </p>
      <p>
        The price is the joke. You are paying £100 for something that cannot be
        eaten, planted, or displayed on a mantelpiece without printing it
        yourself. What you receive is a digital tomato image and the quiet
        knowledge that you chose to do this.
      </p>
      <p>
        If you were hoping for a discount, a bundle deal, or a logical
        explanation involving supply chains — this is the wrong website.
      </p>
      <p className="content-links">
        Still curious? Read{" "}
        <Link href="/what-you-get">what you actually get</Link>, browse the{" "}
        <Link href="/faq">FAQ</Link>, learn about{" "}
        <Link href="/100-pound-tomato">the experiment</Link>, or{" "}
        <Link href="/">buy the tomato</Link>.
      </p>
    </ContentPage>
  );
}

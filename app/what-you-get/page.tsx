import { ContentPage } from "@/components/ContentPage";
import Link from "next/link";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "What Do You Get for £100?",
  description:
    "Exactly what you receive when you buy one digital tomato for £100. No physical delivery. Full transparency.",
  path: "/what-you-get",
});

export default function WhatYouGetPage() {
  return (
    <ContentPage title="What do you get for £100?">
      <p>
        Here is everything included in your purchase. We are being completely
        transparent because there is not much to hide.
      </p>

      <h2>One digital tomato</h2>
      <p>
        After payment, you are taken to a success page where your tomato is
        displayed. This is the product. It is an image of a tomato.
      </p>

      <h2>The tomato image</h2>
      <p>
        You see the tomato on screen. You may look at it, admire it, or close
        the tab. We recommend at least acknowledging that you paid £100 for it.
      </p>

      <h2>Purchase confirmation</h2>
      <p>
        Stripe sends you a receipt for £100.00. That receipt is probably the
        most tangible thing you will receive.
      </p>

      <h2>What you do not get</h2>
      <ul>
        <li>A physical tomato</li>
        <li>A tomato plant</li>
        <li>100 tomatoes</li>
        <li>A subscription</li>
        <li>Customer support for tomato-related queries</li>
      </ul>

      <p>
        This is a digital novelty purchase. The humour is in the premise. The
        payment is real.
      </p>

      <p className="content-links">
        Questions? See the <Link href="/faq">FAQ</Link>. Background? Read about{" "}
        <Link href="/100-pound-tomato">the experiment</Link>. Ready?{" "}
        <Link href="/">Buy the tomato</Link>.
      </p>
    </ContentPage>
  );
}

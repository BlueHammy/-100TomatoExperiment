import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/faq";
import { getFaqSchema } from "@/lib/schema";
import { createMetadata, pageTitle } from "@/lib/site";

export const metadata = createMetadata({
  title: pageTitle("FAQ"),
  description:
    "Questions about the £100 tomato: price, delivery, refunds, and what you actually receive.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={getFaqSchema(FAQ_ITEMS)} />
      <ContentPage title="FAQ">
        <ul className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <li key={item.question} className="faq-item">
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </li>
          ))}
        </ul>

        <p className="content-links">
          <Link href="/why">Why £100?</Link>
          {" · "}
          <Link href="/what-you-get">What you get</Link>
          {" · "}
          <Link href="/">Buy the tomato</Link>
        </p>
      </ContentPage>
    </>
  );
}

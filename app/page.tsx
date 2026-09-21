import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { CancelledBanner } from "./CancelledBanner";
import { HomeBuyButton } from "./HomeBuyButton";
import { getProductSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getProductSchema()} />
      <div className="page-home">
        <main>
          <CancelledBanner />

          <h1 className="hero-title">Buy a tomato for £100</h1>
          <p className="lead">It&apos;s a tomato.</p>
          <p className="price-line">£100</p>

          <HomeBuyButton />

          <p className="fine-print">
            Digital tomato. No physical tomato will be sent.
          </p>

          <SiteFooter />
        </main>
      </div>
    </>
  );
}

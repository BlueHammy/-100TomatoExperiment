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

          <p className="site-badge">£100 Tomato</p>

          <h1 className="hero-title">
            Buy a tomato for <span className="price">£100</span>
          </h1>
          <p className="lead">Yes. A tomato.</p>

          <div className="disclaimer">
            <p>«Not a tomato plant.</p>
            <p>Not 100 tomatoes.</p>
            <p>Not a tomato subscription.</p>
            <p>One tomato. £100.»</p>
          </div>

          <HomeBuyButton />

          <p className="warning">«You have been warned.»</p>

          <SiteFooter />
        </main>
      </div>
    </>
  );
}

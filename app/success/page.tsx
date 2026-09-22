import Link from "next/link";
import { redirect } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { TomatoImage } from "@/components/TomatoImage";
import { getStripe } from "@/lib/stripe";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "Thank You",
  description: "You bought one digital tomato for £100.",
  path: "/success",
  index: false,
});

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/");
  }

  const stripe = getStripe();
  let paid = false;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    paid = session.payment_status === "paid";
  } catch {
    redirect("/");
  }

  if (!paid) {
    redirect("/");
  }

  return (
    <div className="page-success">
      <main>
        <h1>Thank you.</h1>

        <TomatoImage
          size="large"
          alt="Your digital tomato"
          priority
        />

        <p className="subtext">You bought a tomato for £100.</p>

        <dl className="receipt">
          <div className="receipt-header">Receipt</div>
          <dt>Item: </dt>
          <dd>One tomato</dd>
          <dt>Price: </dt>
          <dd>£100.00</dd>
          <dt>Quantity: </dt>
          <dd>1</dd>
          <dt>Regrets: </dt>
          <dd>Pending</dd>
        </dl>

        <Link className="buy-button" href="/">
          Buy another tomato
        </Link>

        <SiteFooter />
      </main>
    </div>
  );
}

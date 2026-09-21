import Link from "next/link";
import { redirect } from "next/navigation";
import { getStripe } from "@/lib/stripe";

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
    <main>
      <h1>Congratulations.</h1>

      <div className="tomato-hero">
        {/* Swap /tomato.svg for /tomato.jpg when you have a real photo */}
        <img src="/tomato.svg" alt="Your tomato" width={560} height={560} />
      </div>

      <div className="tomato-emoji" aria-hidden="true">
        🍅
      </div>

      <p className="subtext">You bought a tomato for £100.</p>
      <p className="subtext">«Please enjoy your tomato.»</p>

      <dl className="receipt">
        <dt>Tomato: </dt>
        <dd>1</dd>
        <dt>Paid: </dt>
        <dd>£100.00</dd>
        <dt>Regrets: </dt>
        <dd>Pending</dd>
      </dl>

      <Link className="buy-button" href="/">
        Buy another tomato
      </Link>
    </main>
  );
}

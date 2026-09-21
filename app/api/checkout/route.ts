import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getSiteUrl } from "@/lib/site";
import { getStripe, getStripeSecretKey } from "@/lib/stripe";

export async function POST() {
  const key = getStripeSecretKey();

  if (!key) {
    return NextResponse.json(
      { error: "Stripe is not configured on the server." },
      { status: 503 }
    );
  }

  if (!key.startsWith("sk_")) {
    return NextResponse.json(
      {
        error:
          "Invalid Stripe key. Use your secret key (sk_test_... or sk_live_...), not the publishable key (pk_...).",
      },
      { status: 503 }
    );
  }

  try {
    const stripe = getStripe();
    const siteUrl = getSiteUrl();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: 10000,
            product_data: {
              name: "One Tomato",
              description:
                "Digital tomato. You receive a digital image after payment.",
            },
          },
        },
      ],
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/?cancelled=true`,
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Could not create checkout session." },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);

    if (err instanceof Stripe.errors.StripeAuthenticationError) {
      return NextResponse.json(
        { error: "Stripe rejected the API key. Check it in Vercel and redeploy." },
        { status: 503 }
      );
    }

    if (err instanceof Stripe.errors.StripeError) {
      return NextResponse.json({ error: err.message }, { status: 503 });
    }

    return NextResponse.json(
      { error: "Checkout unavailable." },
      { status: 500 }
    );
  }
}

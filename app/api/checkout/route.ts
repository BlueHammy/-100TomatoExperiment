import { NextResponse } from "next/server";
import { getSiteUrl, getStripe } from "@/lib/stripe";

export async function POST() {
  try {
    const stripe = getStripe();
    const siteUrl = getSiteUrl();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: 10000,
            product_data: {
              name: "One Tomato",
              description:
                "Digital novelty purchase. You receive a digital tomato image after payment.",
              images: [`${siteUrl}/tomato.svg`],
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
    console.error(err);
    return NextResponse.json(
      { error: "Checkout unavailable." },
      { status: 500 }
    );
  }
}

import Stripe from "stripe";

export function getStripeSecretKey(): string | undefined {
  return process.env.STRIPE_SECRET_KEY?.trim();
}

export function getStripe() {
  const key = getStripeSecretKey();
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  if (!key.startsWith("sk_")) {
    throw new Error("STRIPE_SECRET_KEY must be a secret key (sk_...)");
  }
  return new Stripe(key);
}

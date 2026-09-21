import Stripe from "stripe";

export function getStripeSecretKey(): string | undefined {
  const raw = process.env.STRIPE_SECRET_KEY?.trim();
  if (!raw) return undefined;
  return raw.replace(/^["']|["']$/g, "");
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

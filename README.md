# £100 Tomato

You can buy one digital tomato for £100. That's the whole website.

## Setup

```bash
npm install
cp .env.example .env.local
```

Add your [Stripe](https://stripe.com) secret key to `.env.local`:

```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Drop the product photo at `/private/tomato.jpg`. It is only served after a verified Stripe payment (not from `/public`).

## Pages

- `/` — buy the tomato
- `/why` — why it costs £100
- `/what-you-get` — what you receive
- `/faq` — frequently asked questions
- `/100-pound-tomato` — about the site

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Use Stripe test card `4242 4242 4242 4242`, any future expiry, any CVC.

## Deploy

Set `STRIPE_SECRET_KEY` in your host's environment variables.

On Vercel, the site URL is auto-detected for sitemap, canonicals, and Stripe redirects. Optionally set `NEXT_PUBLIC_SITE_URL` to your custom domain — do **not** set it to `localhost` on Vercel.

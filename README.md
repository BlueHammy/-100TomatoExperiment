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

Drop a photo at `/public/tomato.jpg` — the site auto-detects it and falls back to `/public/tomato.svg` if missing.

## Pages

- `/` — buy the tomato
- `/why` — why it costs £100
- `/what-you-get` — what you receive
- `/faq` — frequently asked questions
- `/100-pound-tomato` — about the experiment

## Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Use Stripe test card `4242 4242 4242 4242`, any future expiry, any CVC.

## Deploy

Set `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_SITE_URL` (your production URL) in your host's environment variables.

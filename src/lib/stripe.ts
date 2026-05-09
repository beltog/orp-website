import Stripe from "stripe";

// Stripe is initialized lazily to avoid build-time connection errors
let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error("STRIPE_SECRET_KEY is not set");
    }
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-04-30.basil",
      typescript: true,
    });
  }
  return _stripe;
}

// Price IDs for Fine Art prints (will be created in Stripe Dashboard)
export const STRIPE_PRICES = {
  PRINT_40x60: process.env.STRIPE_PRICE_40x60 || "price_placeholder_40x60",
  PRINT_50x70: process.env.STRIPE_PRICE_50x70 || "price_placeholder_50x70",
  PRINT_70x100: process.env.STRIPE_PRICE_70x100 || "price_placeholder_70x100",
} as const;

export const STRIPE_SHIPPING_FRANCE = process.env.STRIPE_SHIPPING_FRANCE || "price_shipping_france";

export async function createPaymentIntent(amount: number, metadata?: Record<string, string>) {
  const stripe = getStripe();
  return stripe.paymentIntents.create({
    amount: Math.round(amount * 100), // Convert to cents
    currency: "eur",
    automatic_payment_methods: { enabled: true },
    metadata,
  });
}

export async function createCheckoutSession(items: { priceId: string; quantity: number }[], successUrl: string, cancelUrl: string, metadata?: Record<string, string>) {
  const stripe = getStripe();
  return stripe.checkout.sessions.create({
    mode: "payment",
    line_items: items.map((item) => ({
      price: item.priceId,
      quantity: item.quantity,
    })),
    success_url: successUrl,
    cancel_url: cancelUrl,
    metadata,
    shipping_address_collection: {
      allowed_countries: ["FR", "BE", "CH", "LU", "MC"],
    },
    payment_method_types: ["card", "paypal", "apple_pay", "google_pay"],
  });
}
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// Stripe webhook handler
export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  // In production, verify with STRIPE_WEBHOOK_SECRET
  // For now, parse the event
  let event;
  try {
    event = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  const prisma = getPrisma();

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        const orderId = session.metadata?.orderId;
        const customerEmail = session.customer_details?.email;

        if (orderId) {
          await prisma.order.update({
            where: { id: orderId },
            data: {
              status: "PAID",
              paymentStatus: "PAID",
              stripeSessionId: session.id,
              paidAt: new Date(),
            },
          });
        }

        // Create or update customer
        if (customerEmail) {
          await prisma.customer.upsert({
            where: { email: customerEmail },
            update: { stripeCustomerId: session.customer as string },
            create: {
              email: customerEmail,
              name: session.customer_details?.name || "",
              stripeCustomerId: session.customer as string,
            },
          });
        }
        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object;
        const orderId = paymentIntent.metadata?.orderId;
        if (orderId) {
          await prisma.order.update({
            where: { id: orderId },
            data: { paymentStatus: "FAILED" },
          });
        }
        break;
      }

      default:
        // Unhandled event type
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
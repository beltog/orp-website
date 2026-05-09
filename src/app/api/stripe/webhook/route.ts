import { NextRequest, NextResponse } from "next/server";

// Stripe webhook handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    // TODO: Vérifier signature Stripe avec STRIPE_WEBHOOK_SECRET
    // TODO: Parser l'événement
    // TODO: Selon le type d'événement :
    //   - checkout.session.completed → créer commande DB + PrivateAccess si galerie privée
    //   - payment_intent.succeeded → update Payment status
    //   - payment_intent.payment_failed → update Payment status
    //   - charge.refunded → update Payment + Order status
    // TODO: Sync Évoliz (créer client + facture)

    console.log("[Stripe Webhook] Received");

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[Stripe Webhook] Error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
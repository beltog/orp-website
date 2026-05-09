import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Nom trop court"),
  email: z.string().email("Email invalide"),
  service: z.string().min(1, "Choisissez un type de prestation"),
  message: z.string().min(10, "Message trop court (10 caractères minimum)"),
  phone: z.string().optional(),
  company: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    // TODO: Sauvegarder dans la DB via Prisma
    // TODO: Envoyer un email via Resend
    // TODO: Sync Évoliz si client professionnel

    console.log("[Contact]", {
      name: data.name,
      email: data.email,
      service: data.service,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Erreur interne" },
      { status: 500 }
    );
  }
}
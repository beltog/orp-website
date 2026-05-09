import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getPrisma } from "@/lib/prisma-lazy";

export const dynamic = "force-dynamic";

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

    const submission = await getPrisma().contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        service: data.service,
        message: data.message,
        phone: data.phone,
        company: data.company,
        source: "website",
      },
    });

    // TODO: Envoyer email via Resend
    // TODO: Sync Évoliz si client professionnel

    return NextResponse.json({ success: true, id: submission.id });
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
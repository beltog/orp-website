import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const verifySchema = z.object({
  code: z.string().min(1, "Code requis"),
  password: z.string().min(1, "Mot de passe requis"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = verifySchema.parse(body);

    // TODO: Vérifier dans la DB via Prisma
    // - Chercher PrivateAccess par accessCode
    // - Comparer password avec bcrypt
    // - Vérifier expiration
    // - Vérifier si requireApproval (isApproved)
    // - Vérifier si requirePayment (orderId lié + status PAID)
    // - Incrémenter viewCount

    console.log("[PrivateAccess] Tentative:", data.code);

    return NextResponse.json(
      { success: false, error: "Code non reconnu" },
      { status: 401 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Erreur interne" },
      { status: 500 }
    );
  }
}
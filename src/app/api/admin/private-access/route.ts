import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Private access management — CRUD + conditional access

const privateAccessSchema = z.object({
  galleryId: z.string(),
  clientName: z.string().optional(),
  clientEmail: z.string().email().optional(),
  requirePayment: z.boolean().default(false),
  requireApproval: z.boolean().default(false),
  watermarkEnabled: z.boolean().default(true),
  downloadLimit: z.number().nullable().optional(),
  disableRightClick: z.boolean().default(true),
  autoExpireDays: z.number().default(90),
});

export async function GET() {
  // TODO: Prisma privateAccess findMany with gallery include
  return NextResponse.json({ accesses: [] });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = privateAccessSchema.parse(body);

    // TODO: Generate secure password (16 chars)
    // TODO: Hash password with bcrypt
    // TODO: Generate unique accessCode from clientName
    // TODO: Prisma privateAccess create
    // TODO: If clientEmail, send email with Resend

    return NextResponse.json({
      success: true,
      access: {
        ...data,
        accessCode: "generated-code",
        password: "generated-16-char-password",
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: "Erreur interne" }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;
    // TODO: Prisma privateAccess update
    // Actions: approve, revoke, change expiration, toggle options
    return NextResponse.json({ success: true, id });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Erreur interne" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    // TODO: Prisma privateAccess delete
    return NextResponse.json({ success: true, id });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Erreur interne" }, { status: 500 });
  }
}
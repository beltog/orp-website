import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Galeries CRUD — sera connecté à Prisma

const gallerySchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  galleryType: z.enum(["PUBLIC", "PRIVATE", "FINE_ART", "VIDEO", "BLOG", "IMMOBILIER"]),
  isPublic: z.boolean().default(true),
  isPrivate: z.boolean().default(false),
});

export async function GET() {
  // TODO: Prisma gallery findMany
  return NextResponse.json({ galleries: [] });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = gallerySchema.parse(body);
    // TODO: Prisma gallery create
    return NextResponse.json({ success: true, gallery: data });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: "Erreur interne" }, { status: 500 });
  }
}
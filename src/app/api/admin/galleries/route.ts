import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

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
  try {
    const prisma = getPrisma();
    const galleries = await prisma.gallery.findMany({ orderBy: { order: "asc" } });
    return NextResponse.json({ galleries });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = gallerySchema.parse(body);
    const prisma = getPrisma();

    const gallery = await prisma.gallery.create({ data });
    return NextResponse.json({ success: true, gallery });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
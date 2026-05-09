import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const prisma = getPrisma();
    const accesses = await prisma.privateAccess.findMany({
      include: { gallery: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ accesses });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
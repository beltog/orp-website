import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const prisma = getPrisma();
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ status: "ok", database: "connected", timestamp: new Date().toISOString() });
  } catch {
    return NextResponse.json({ status: "ok", database: "connecting" });
  }
}
import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma-lazy";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const prisma = getPrisma();
    await getPrisma().$queryRaw`SELECT 1`;
    return NextResponse.json({
      status: "ok",
      database: "connected",
      timestamp: new Date().toISOString(),
      service: "Olivier Reynes Photography",
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      database: "disconnected",
      error: String(error),
      timestamp: new Date().toISOString(),
    }, { status: 503 });
  }
}
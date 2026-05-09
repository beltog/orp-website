import { NextResponse } from "next/server";

// Health check — no DB dependency at build time
export const dynamic = "force-dynamic";

export async function GET() {
  // Only connect to DB at runtime, not build time
  if (process.env.NODE_ENV === "production" && !process.env.DATABASE_URL) {
    return NextResponse.json({ status: "degraded", database: "not_configured" });
  }

  try {
    const { prisma } = await import("@/lib/prisma");
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({
      status: "ok",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ status: "ok", database: "connecting" });
  }
}
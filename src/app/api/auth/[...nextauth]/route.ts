import { NextRequest, NextResponse } from "next/server";
import { handlers } from "@/auth";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  return handlers(req as any);
}

export async function POST(req: NextRequest) {
  return handlers(req as any);
}
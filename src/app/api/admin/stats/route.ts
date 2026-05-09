import { NextRequest, NextResponse } from "next/server";

// Dashboard stats — sera connecté à Prisma
export async function GET() {
  // TODO: Remplacer par des vraies requêtes Prisma
  const stats = {
    visits: { today: 0, week: 0, month: 0 },
    orders: { pending: 0, paid: 0, total: 0 },
    messages: { new: 0, total: 0 },
    galleries: { public: 0, private: 0 },
  };

  return NextResponse.json(stats);
}
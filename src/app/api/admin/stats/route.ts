import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const prisma = getPrisma();
    const [galleryCount, orderCount, contactCount] = await Promise.all([
      prisma.gallery.count(),
      prisma.order.count(),
      prisma.contactSubmission.count(),
    ]);
    const pendingOrders = await prisma.order.count({ where: { status: "PENDING" } });
    const newMessages = await prisma.contactSubmission.count({ where: { status: "NEW" } });
    const publicGalleries = await prisma.gallery.count({ where: { isPublic: true } });
    const privateGalleries = await prisma.gallery.count({ where: { isPrivate: true } });

    return NextResponse.json({
      visits: { today: 0, week: 0, month: 0 },
      orders: { pending: pendingOrders, paid: orderCount - pendingOrders, total: orderCount },
      messages: { new: newMessages, total: contactCount },
      galleries: { public: publicGalleries, private: privateGalleries, total: galleryCount },
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
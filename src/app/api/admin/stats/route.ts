import { NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma-lazy";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const prisma = getPrisma();
    const [galleryCount, orderCount, contactCount] = await Promise.all([
      getPrisma().gallery.count(),
      getPrisma().order.count(),
      getPrisma().contactSubmission.count(),
    ]);

    const pendingOrders = await getPrisma().order.count({ where: { status: "PENDING" } });
    const newMessages = await getPrisma().contactSubmission.count({ where: { status: "NEW" } });
    const publicGalleries = await getPrisma().gallery.count({ where: { isPublic: true } });
    const privateGalleries = await getPrisma().gallery.count({ where: { isPrivate: true } });

    return NextResponse.json({
      visits: { today: 0, week: 0, month: 0 }, // TODO: Vercel Analytics
      orders: { pending: pendingOrders, paid: orderCount - pendingOrders, total: orderCount },
      messages: { new: newMessages, total: contactCount },
      galleries: { public: publicGalleries, private: privateGalleries, total: galleryCount },
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
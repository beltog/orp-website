import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// Upload endpoint — receives Cloudinary public_id + metadata and creates a GalleryImage record
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { galleryId, publicId, url, width, height, alt, order, isCover } = body;

    if (!galleryId || !publicId || !url) {
      return NextResponse.json(
        { success: false, error: "Missing required fields: galleryId, publicId, url" },
        { status: 400 }
      );
    }

    const prisma = getPrisma();

    const image = await prisma.galleryImage.create({
      data: {
        galleryId,
        url,
        publicId,
        width: width || 0,
        height: height || 0,
        alt: alt || "",
        order: order || 0,
        isCover: isCover || false,
      },
    });

    return NextResponse.json({ success: true, image });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

// List images for a gallery
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const galleryId = searchParams.get("galleryId");

    if (!galleryId) {
      return NextResponse.json(
        { success: false, error: "galleryId required" },
        { status: 400 }
      );
    }

    const prisma = getPrisma();
    const images = await prisma.galleryImage.findMany({
      where: { galleryId },
      orderBy: { order: "asc" },
    });

    return NextResponse.json({ success: true, images });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
// Lazy Prisma singleton — Prisma 7 compatible
let _prisma: any = null;

export async function getPrisma() {
  if (!_prisma) {
    const { PrismaClient } = await import("@prisma/client");
    _prisma = new PrismaClient();
  }
  return _prisma;
}
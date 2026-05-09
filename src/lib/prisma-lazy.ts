// Lazy Prisma singleton — avoids connection at build time
// Prisma 7 uses dynamic import

let _prisma: any = null;

export async function getPrisma() {
  if (!_prisma) {
    const mod = await import("@prisma/client");
    const PrismaClient = mod.PrismaClient || mod.default?.PrismaClient;
    if (!PrismaClient) {
      // Fallback: try require
      const req = require("@prisma/client");
      _prisma = new req.PrismaClient();
    } else {
      _prisma = new PrismaClient();
    }
  }
  return _prisma;
}

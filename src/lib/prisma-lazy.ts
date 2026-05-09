// Lazy Prisma singleton — avoids connection at build time
let _prisma: any = null;

export function getPrisma() {
  if (!_prisma) {
    // Dynamic import to avoid build-time connection
    const { PrismaClient } = require("@prisma/client");
    _prisma = new PrismaClient();
  }
  return _prisma;
}
// Prisma client — only connects at runtime, never at build time
// This file MUST use dynamic imports in route handlers

const globalForPrisma = globalThis as unknown as { prisma: any };

export function getPrisma() {
  if (!globalForPrisma.prisma) {
    // Dynamic require — only runs at request time, never at build time
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { PrismaClient } = require("@prisma/client");
    globalForPrisma.prisma = new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["error"] : ["error"],
    });
  }
  return globalForPrisma.prisma;
}
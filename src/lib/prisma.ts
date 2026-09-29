// Prisma Client Singleton
// Ready for database connection when DATABASE_URL is configured

// Safe fallback for build time when prisma client isn't generated yet
let prismaInstance: any = null;

try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { PrismaClient } = require('@prisma/client');
  const globalForPrisma = globalThis as unknown as { prisma: any };
  prismaInstance =
    globalForPrisma.prisma ||
    new PrismaClient({
      log: process.env.NODE_ENV === 'development' ? ['query'] : [],
    });
  if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prismaInstance;
  }
} catch {
  // Prisma client not yet generated or DB not configured
  prismaInstance = null;
}

export const prisma = prismaInstance;

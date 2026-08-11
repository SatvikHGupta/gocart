import { PrismaClient } from "@prisma/client";

// Next.js dev mode mein hot-reload har baar naya PrismaClient bana deta hai,
// jisse "too many connections" error aata hai. Isliye globalThis par cache karte hain.
const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

import { PrismaClient } from "@prisma/client";

// Use a global variable to prevent multiple instances of PrismaClient in development
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // Enable logging for debugging
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// export const prisma = globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export default prisma;
// export default prisma;
// export const prisma = new PrismaClient({
//   log: ["query", "info", "warn", "error"], // Enable logging for debugging
// });
// export default prisma;
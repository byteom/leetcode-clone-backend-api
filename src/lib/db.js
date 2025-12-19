import { PrismaClient } from '../generated/prisma/client.js';


const globalForPrisma = globalThis;
export const db = globalForPrisma.prisma || new PrismaClient({
    log: ["query", "info", "warn", "error"],


})


//this will check if we are in development mode and if we are, it will attach the prisma client to the global object
//and this will prevent multiple instances of the prisma client from being created during hot reloading
if(process.env.NODE_ENV === "development"){
    globalForPrisma.prisma = db;
}
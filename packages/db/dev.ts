import { drizzle } from "drizzle-orm/node-postgres";
export const pg = drizzle(process.env.DATABASE_URL as string);

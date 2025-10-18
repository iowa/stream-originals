import "dotenv/config";
import { relations } from "./ relations.js";
import { drizzle } from 'drizzle-orm/node-postgres';

export const dbDrizzle = drizzle(process.env.POSTGRES_URL!, { relations });
export type DbDrizzle = typeof dbDrizzle;
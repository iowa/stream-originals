import "dotenv/config";
import { relations } from "./ relations.js";
import { drizzle } from 'drizzle-orm/node-postgres';

export const db = drizzle(process.env.POSTGRES_URL!, { relations });
export type Db = typeof db;
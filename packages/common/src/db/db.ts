import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { titlesMediaTable, titlesTable } from "./schema";
import "dotenv/config";

export const db = drizzle({
  client: new Pool({
    connectionString: process.env.POSTGRES_URL,
  }),
  schema: { titlesTable, titlesMediaTable },
});

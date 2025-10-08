import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import "dotenv/config";
import { titlesMediaTable, titlesTable } from "./schema.js";

export const db = drizzle({
  client: new Pool({
    connectionString: process.env.POSTGRES_URL,
  }),
  schema: { titlesTable, titlesMediaTable },
});

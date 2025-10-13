import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import "dotenv/config";
import { titleImagesTable, titlesTable } from "./schema.js";
import { relations } from "./ relations.js";

export const db = drizzle({
  client: new Pool({
    connectionString: process.env.POSTGRES_URL,
  }),
  schema: { titlesTable, titleImagesTable },
  relations: relations
});

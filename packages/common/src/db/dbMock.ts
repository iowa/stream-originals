import "dotenv/config";
import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "drizzle-orm/pglite/migrator";
import path from "node:path";
import { relations } from "./ relations.js";


async function getDbMock() {
  const client = new PGlite();
  const db = drizzle(client, { relations });
  const migrationsFolder = path.resolve(__dirname, '../../drizzle');
  await migrate(db, { migrationsFolder: migrationsFolder });
  return { db, client };
}

export { getDbMock }
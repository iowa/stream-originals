import { db } from "../db/db.js";
import { count } from "drizzle-orm";
import { interestsTable } from "../db/schema.js";
import { Interests } from "../db/dbTypes.js";

export class InterestsRepository {
  private readonly db

  constructor(dbInstance = db) {
    this.db = dbInstance
  }

  async getAllIds(): Promise<string[]> {
    const result = await this.db
    .select({ id: interestsTable.id })
    .from(interestsTable);
    return result.map(row => row.id);
  }

  async getCount(): Promise<number> {
    const result = await this.db
    .select({ count: count() })
    .from(interestsTable)
    return result[0]?.count ?? 0;
  }

  insert(entity: Interests) {
    return this.db.insert(interestsTable).values(entity)
  }

}
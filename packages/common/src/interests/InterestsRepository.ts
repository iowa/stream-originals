import { dbDrizzle } from "../db/dbDrizzle.js";
import { count } from "drizzle-orm";
import { interestsTable } from "../db/schema.js";
import { Interest } from "../db/dbTypes.js";

export class InterestsRepository {
  private readonly db

  constructor(dbInstance = dbDrizzle) {
    this.db = dbInstance
  }

  getAll(): Promise<Interest[]> {
    return this.db.query.interestsTable.findMany();
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

  insert(entity: Interest) {
    return this.db.insert(interestsTable).values(entity)
  }



}
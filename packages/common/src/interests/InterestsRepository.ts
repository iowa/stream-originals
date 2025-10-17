import { db } from "../db/db.js";
import { and, count, eq, inArray } from "drizzle-orm";
import { interestsTable, titleInterestsTable } from "../db/schema.js";
import { Interest } from "../db/dbTypes.js";

export class InterestsRepository {
  private readonly db

  constructor(dbInstance = db) {
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

  async refresh(titleId: string, o: Interest[], u: Interest[]) {
    const currentIds = o.map(i => i.id);
    const newIds = u.map(i => i.id);

    const toDelete = currentIds.filter(id => !newIds.includes(id));
    if (toDelete.length) {
      await this.db.delete(titleInterestsTable).where(
        and(
          eq(titleInterestsTable.titleId, titleId),
          inArray(titleInterestsTable.interestId, toDelete)
        )
      );
    }

    const toInsert = newIds.filter(id => !currentIds.includes(id));
    if (toInsert.length) {
      await this.db.insert(titleInterestsTable).values(
        toInsert.map(interestId => ({ titleId, interestId }))
      );
    }
  }

}
import { db } from "../db/db.js";
import { count, eq } from "drizzle-orm";
import { interestsTable, titlesToInterests } from "../db/schema.js";
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

  async refresh(titleId: string, o: Interest[], u: Interest[],) {
    const currentIds = o.map(i => i.id)
    const newIds = new Set(u.map(i => i.id));

    // Interests to delete
    const toDelete = [...currentIds].filter(id => !newIds.has(id));
    if (toDelete.length) {
      await this.db.delete(titlesToInterests)
      .where(
        eq(titlesToInterests.titleId, titleId)
        // @ts-ignore: Drizzle may need an 'in' helper here
        && titlesToInterests.interestId.in(toDelete)
      );
    }

    // Interests to insert
    const toInsert = [...newIds].filter(id => !currentIds.includes(id));
    if (toInsert.length) {
      const insertRows = toInsert.map(interestId => ({
        titleId: titleId,
        interestId
      }));
      await this.db.insert(titlesToInterests).values(insertRows);
    }
  }


}
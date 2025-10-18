import { dbDrizzle } from "../db/dbDrizzle.js";
import { creditsTable, interestsTable } from "../db/schema.js";
import { Credit } from "../db/dbTypes.js";

export class CreditsRepository {
  private readonly db

  constructor(dbInstance = dbDrizzle) {
    this.db = dbInstance
  }

  async getAllIds(): Promise<Set<string>> {
    const result = await this.db.query.creditsTable.findMany({
      columns: {
        id: true
      },
    });
    return new Set(result.map(row => row.id));
  }

  insert(entity: Credit) {
    return this.db.insert(creditsTable).values(entity)
  }


}
import { dbDrizzle } from "../db/dbDrizzle.js";
import { creditsTable } from "../db/schema.js";
import { Credit } from "../db/dbTypes.js";

export class CreditsRepository {
  private readonly db

  constructor(dbInstance = dbDrizzle) {
    this.db = dbInstance
  }

  getAll(): Promise<Credit[]> {
    return this.db.query.creditsTable.findMany();
  }

  insert(entity: Credit) {
    return this.db.insert(creditsTable).values(entity)
  }



}
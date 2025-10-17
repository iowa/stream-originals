import { db } from "../db/db.js";
import { creditsTable, titleCreditsTable } from "../db/schema.js";
import { Credit, CreditRole, TitleCredit } from "../db/dbTypes.js";

export class CreditsRepository {
  private readonly db

  constructor(dbInstance = db) {
    this.db = dbInstance
  }

  getAll(): Promise<Credit[]> {
    return this.db.query.creditsTable.findMany();
  }

  insert(entity: Credit) {
    return this.db.insert(creditsTable).values(entity)
  }

  async refresh(titleId: string, credits: { creditId: string; role: CreditRole }[]) {
    if (credits.length > 0) {
      let value = credits.map(c => ({
        titleId,
        creditId: c.creditId,
        role: c.role,
      }) as TitleCredit);
      await this.db.insert(titleCreditsTable).values(value);
    }
  }

}
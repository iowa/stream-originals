import { dbDrizzle } from "../db/dbDrizzle.js";
import { creditsTable } from "../db/schema.js";
import { Credit } from "../db/dbTypes.js";
import { CreditDto } from "../dto/dtoTypes.js";

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

  async getCreditDto(creditId: string): Promise<CreditDto | undefined> {
    return this.db.query.creditsTable.findFirst({
      with: {
        titles: true
      },
      where: {
        id: creditId
      }
    })
  }

}
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { TitleMedia } from "../db/dbTypes.js";
import { titlesMediaTable } from "../db/schema.js";

export class TitlesMediaRepository {
  private readonly db: NodePgDatabase

  constructor(dbInstance: any = db) {
    this.db = dbInstance
  }

  insert(media: TitleMedia) {
    return this.db.insert(titlesMediaTable).values(media).onConflictDoNothing().returning({ insertedId: titlesMediaTable.id });
  }

  getByTitleId(titleId: string) {
    return this.db.select().from(titlesMediaTable).where(eq(titlesMediaTable.titleId, titleId));
  }

}
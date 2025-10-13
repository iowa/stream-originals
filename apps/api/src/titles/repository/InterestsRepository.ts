import { db, interestsTable, Tnterest } from "@repo/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";

export class InterestsRepository {
  private readonly db: NodePgDatabase

  constructor(dbInstance: any = db) {
    this.db = dbInstance
  }

  insert(interset: Tnterest) {
    return this.db.insert(interestsTable).values(interset).onConflictDoNothing().returning({ insertedId: interestsTable.id });
  }

  getByTitleId(titleId: string) {
    return this.db.select().from(interestsTable).where(eq(interestsTable.titleId, titleId));
  }

}
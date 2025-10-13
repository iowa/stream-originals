import { db, TitleMediaInsert, titlesMediaTable } from "@repo/common";

export class TitlesMediaRepository {
  private readonly db

  constructor(dbInstance = db) {
    this.db = dbInstance
  }

  insert(media: TitleMediaInsert) {
    return this.db.insert(titlesMediaTable).values(media).onConflictDoNothing().returning({ insertedId: titlesMediaTable.id });
  }

}
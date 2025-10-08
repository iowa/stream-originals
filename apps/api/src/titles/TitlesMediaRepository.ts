import { db, TitleMedia, titlesMediaTable } from "@repo/common";

export class TitlesMediaRepository {

  static async insert(media: TitleMedia) {
    return db.insert(titlesMediaTable).values(media).onConflictDoNothing().returning({ insertedId: titlesMediaTable.id });
  }

}
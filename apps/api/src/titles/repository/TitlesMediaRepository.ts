import { db, TitleMedia, TitleMediaInsert, titlesMediaTable } from "@repo/common";

export class TitlesMediaRepository {

  static async insert(media: TitleMediaInsert) {
    return db.insert(titlesMediaTable).values(media).onConflictDoNothing().returning({ insertedId: titlesMediaTable.id });
  }

}
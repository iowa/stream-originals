import { db, TitleMediaInsert, titlesMediaTable } from "@repo/common";

export class TitlesMediaRepository {

    insert(media: TitleMediaInsert) {
    return db.insert(titlesMediaTable).values(media).onConflictDoNothing().returning({ insertedId: titlesMediaTable.id });
  }

}
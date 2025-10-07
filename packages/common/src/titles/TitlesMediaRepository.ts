import { TitleMedia } from "../db/dbTypes";
import { db } from "@repo/common";
import { titlesMediaTable } from "../db/schema";

export class TitlesMediaRepository {

  static async insert(media: TitleMedia) {
    return db.insert(titlesMediaTable).values(media).onConflictDoNothing().returning({ insertedId: titlesMediaTable.id });
  }

}
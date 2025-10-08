import { db } from "../db/db.js";
import { TitleMedia } from "../db/dbTypes.js";
import { titlesMediaTable } from "../db/schema.js";

export class TitlesMediaRepository {

  static async insert(media: TitleMedia) {
    return db.insert(titlesMediaTable).values(media).onConflictDoNothing().returning({ insertedId: titlesMediaTable.id });
  }

}
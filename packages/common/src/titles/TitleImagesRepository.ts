import { eq } from "drizzle-orm";
import { db } from "../db/db.js";
import { TitleImage } from "../db/dbTypes.js";
import { titleImagesTable } from "../db/schema.js";

export class TitleImagesRepository {
  private readonly db

  constructor(dbInstance = db) {
    this.db = dbInstance
  }

  insert(image: TitleImage) {
    return this.db.insert(titleImagesTable).values(image).onConflictDoNothing().returning({ insertedId: titleImagesTable.id });
  }

  getByTitleId(titleId: string) {
    return this.db.select().from(titleImagesTable).where(eq(titleImagesTable.titleId, titleId));
  }

}
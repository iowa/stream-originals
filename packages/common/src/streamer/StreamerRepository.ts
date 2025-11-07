import { dbDrizzle } from "../db/dbDrizzle.js";
import { interestsTable, titleInterestsTable, titlesTable } from "../db/schema.js";
import { eq, sql } from "drizzle-orm";
import { Streamer } from "../db/dbTypes.js";
import { TitleTypeChart } from "../dto/dtoTypes.js";

export class StreamerRepository {
  private readonly db

  constructor(dbInstance = dbDrizzle) {
    this.db = dbInstance
  }

  titleTypes(streamer: Streamer): Promise<TitleTypeChart[]> {
    return this.db
    .select({
      type: titlesTable.type,
      typeCount: sql<number>`count(
      ${titlesTable.type}
      )`
    })
    .from(titlesTable)
    .where(eq(titlesTable.streamer, streamer))
    .groupBy(titlesTable.type)
    .orderBy(sql`count(
    ${titlesTable.type}
    )
    DESC`)
  }

  titlesGroupedByInterests(streamer: Streamer): Promise<TitleTypeChart[]> {
    return this.db
    .select({
      type: interestsTable.category,
      typeCount: sql<number>`count(
      ${interestsTable.name}
      )`
    })
    .from(titleInterestsTable)
    .innerJoin(titlesTable, eq(titleInterestsTable.titleId, titlesTable.id))
    .innerJoin(interestsTable, eq(titleInterestsTable.interestId, interestsTable.id))
    .where(eq(titlesTable.streamer, streamer))
    .groupBy(interestsTable.category)
  }

}
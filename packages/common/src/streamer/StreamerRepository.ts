import { dbDrizzle } from "../db/dbDrizzle.js";
import { interestsTable, titleInterestsTable, titlesTable } from "../db/schema.js";
import { asc, desc, eq, sql } from "drizzle-orm";
import { Streamer } from "../db/dbTypes.js";
import { ChartDataDto } from "../dto/dtoTypes.js";

export class StreamerRepository {
  private readonly db

  constructor(dbInstance = dbDrizzle) {
    this.db = dbInstance
  }

  titlesByType(streamer: Streamer): Promise<ChartDataDto[]> {
    return this.db
    .select({
      label: titlesTable.type,
      count: sql<number>`count(
      ${titlesTable.type}
      )`
    })
    .from(titlesTable)
    .where(eq(titlesTable.streamer, streamer))
    .groupBy(titlesTable.type)
    .orderBy(
      sql`count(
      ${titlesTable.type}
      )
      DESC`,
      asc(titlesTable.type)
    )
  }

  titleByCategory(streamer: Streamer): Promise<ChartDataDto[]> {
    return this.db
    .select({
      label: interestsTable.category,
      count: sql<number>`count(
      ${interestsTable.category}
      )`
    })
    .from(titleInterestsTable)
    .innerJoin(titlesTable, eq(titleInterestsTable.titleId, titlesTable.id))
    .innerJoin(interestsTable, eq(titleInterestsTable.interestId, interestsTable.id))
    .where(eq(titlesTable.streamer, streamer))
    .groupBy(interestsTable.category)
    .orderBy(
      sql`count(
      ${interestsTable.category}
      )
      DESC`,
      asc(interestsTable.category)
    )
  }

}
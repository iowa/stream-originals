import { db } from "../db/db.js";
import { Streamer, Title, TitleDto } from "../db/dbTypes.js";
import { titlesTable } from "../db/schema.js";
import { and, count, eq, isNotNull } from "drizzle-orm";

export class TitlesRepository {
  private readonly db

  constructor(dbInstance = db) {
    this.db = dbInstance
  }

  get(streamer: Streamer): Promise<Title[]> {
    return this.db
    .select()
    .from(titlesTable)
    .where(eq(titlesTable.streamer, streamer));
  }

  async getCount(
    streamer: Streamer,
    withImdbId?: boolean,
  ): Promise<number> {
    const result = await this.db
    .select({ count: count() })
    .from(titlesTable)
    .where(() => {
      const base = eq(titlesTable.streamer, streamer);
      if (withImdbId) {
        return and(base, isNotNull(titlesTable.imdbId));
      }
      return base;
    });

    return result[0]?.count ?? 0;
  }

  insert(title: Title) {
    return this.db
    .insert(titlesTable)
    .values(title)
    .onConflictDoNothing()
    .returning({ insertedId: titlesTable.id });
  }

  getWithRelations(streamer: Streamer, page?: number, pageSize?: number): Promise<TitleDto[]> {
    return this.db.query.titlesTable.findMany({
      with: {
        images: true,
        interests: true,
      },
      where: {
        streamer: streamer,
        imdbId: { isNotNull: true }
      },
      limit: pageSize,
      offset: (page && pageSize) ? ((page - 1) * pageSize) : undefined,
    })
  }

}

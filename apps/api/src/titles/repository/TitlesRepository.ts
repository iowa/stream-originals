import { and, count, eq, isNotNull } from "drizzle-orm";
import { db, Streamer, Title, titlesTable } from "@repo/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";


export class TitlesRepository {
  private readonly db: NodePgDatabase

  constructor(dbInstance: any = db) {
    this.db = dbInstance
  }

  get(streamer: Streamer, withImdbId?: boolean): Promise<Title[]> {
    return this.db
    .select()
    .from(titlesTable)
    .where(() => {
      const base = eq(titlesTable.streamer, streamer);
      if (withImdbId) {
        return and(base, isNotNull(titlesTable.imdbId));
      }
      return base;
    });
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
}

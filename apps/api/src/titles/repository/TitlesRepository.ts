import { and, count, eq, isNotNull } from "drizzle-orm";
import { db, Streamer, Title, titlesTable } from "@repo/common";


export class TitlesRepository {
  getTitles(streamer: Streamer): Promise<Title[]> {
    return db
    .select()
    .from(titlesTable)
    .where(eq(titlesTable.streamer, streamer));
  }

  async getTitlesCount(
    streamer: Streamer,
    withImdbId?: boolean,
  ): Promise<number> {
    const result = await db
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

  insertTitle(title: Title) {
    return db
    .insert(titlesTable)
    .values(title)
    .onConflictDoNothing()
    .returning({ insertedId: titlesTable.id });
  }
}

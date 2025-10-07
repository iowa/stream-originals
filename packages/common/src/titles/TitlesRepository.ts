import { and, count, eq, isNotNull } from "drizzle-orm";
import { db, type Streamer, type Title, titlesTable } from "@repo/common";

export class TitlesRepository {
  static async getTitles(): Promise<Title[]> {
    return db.query.titlesTable.findMany();
  }

  static async getTitlesCount(
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

  static async findUnique(
    name: string,
    streamer: Streamer,
  ): Promise<Title | undefined> {
    const result = await db
    .select()
    .from(titlesTable)
    .where(and(eq(titlesTable.name, name), eq(titlesTable.streamer, streamer)))
    .limit(1);

    return result[0];
  }

  static async insertTitle(title: Title) {
    return db
    .insert(titlesTable)
    .values(title)
    .onConflictDoNothing()
    .returning({ insertedId: titlesTable.id });
  }
}

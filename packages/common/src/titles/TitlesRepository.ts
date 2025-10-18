import { dbDrizzle } from "../db/dbDrizzle.js";
import { Streamer, Title } from "../db/dbTypes.js";
import { titlesTable } from "../db/schema.js";
import { and, count, eq, isNotNull } from "drizzle-orm";
import { TitlePatchDto } from "../dto/dtoTypes.js";

export class TitlesRepository {
  private readonly db

  constructor(dbInstance = dbDrizzle) {
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


  getTitlePatchDtos(streamer: Streamer, page?: number, pageSize?: number): Promise<TitlePatchDto[]> {
    return this.db.query.titlesTable.findMany({
      with: {
        interests: {
          columns: {
            id: true,
            name: true,
          }
        },
        credits: {
          columns: {
            id: true,
            name: true,
          },
          with: {
            credit: {
              columns: {
                role: true
              },
            }
          }
        }
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

import { dbDrizzle } from "../db/dbDrizzle.js";
import { Streamer, Title } from "../db/dbTypes.js";
import { titlesTable } from "../db/schema.js";
import { count, eq } from "drizzle-orm";
import { TitleListDto, TitlePatchDto } from "../dto/dtoTypes.js";

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
    streamer: Streamer
  ): Promise<number> {
    const result = await this.db
    .select({ count: count() })
    .from(titlesTable)
    .where(() => {
      return eq(titlesTable.streamer, streamer);
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
        interests: { columns: { id: true, name: true } },
        stars: { columns: {}, with: { credit: { columns: { id: true, name: true } } } },
        directors: { columns: {}, with: { credit: { columns: { id: true, name: true } } } },
        writers: { columns: {}, with: { credit: { columns: { id: true, name: true } } } },
      },
      limit: pageSize,
      offset: page && pageSize ? (page - 1) * pageSize : undefined,
    });
  }

  getTitleListDto(streamer: Streamer, page?: number, pageSize?: number): Promise<TitleListDto[]> {
    return this.db.query.titlesTable.findMany({
      with: {
        images: true,
        interests: { columns: { id: true, name: true, isSubgenre: true } },
        stars: { columns: {}, with: { credit: { columns: { id: true, name: true } } } },
        directors: { columns: {}, with: { credit: { columns: { id: true, name: true } } } },
        writers: { columns: {}, with: { credit: { columns: { id: true, name: true } } } },
      },
      limit: pageSize,
      offset: page && pageSize ? (page - 1) * pageSize : undefined,
    });
  }

}

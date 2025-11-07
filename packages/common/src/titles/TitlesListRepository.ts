import { Streamer } from "../db/dbTypes.js";
import { TitleListDto } from "../dto/dtoTypes.js";
import { titleRatingsTable, titlesTable } from "../db/schema.js";
import { desc, eq } from "drizzle-orm";
import { dbDrizzle } from "../db/dbDrizzle.js";

export class TitlesListRepository {
  private readonly db

  constructor(dbInstance = dbDrizzle) {
    this.db = dbInstance
  }

  async getTitles(streamer: Streamer, page: number, pageSize: number): Promise<TitleListDto[]> {
    const allTitleIds = await this.db
    .select({ titleId: titlesTable.id })
    .from(titlesTable)
    .innerJoin(titleRatingsTable, eq(titlesTable.id, titleRatingsTable.titleId))
    .where(eq(titlesTable.streamer, streamer))
    .orderBy(desc(titleRatingsTable.voteCount))
    .then(results => results.map(t => t.titleId));

    const pageTitleIds = allTitleIds.slice((page - 1) * pageSize, page * pageSize);

    const titles = await this.db.query.titlesTable.findMany({
      with: {
        interests: { columns: { id: true, name: true, isSubgenre: true } },
        stars: { with: { credit: { columns: { id: true, name: true } } } },
        directors: { with: { credit: { columns: { id: true, name: true } } } },
        writers: { with: { credit: { columns: { id: true, name: true } } } },
        ratings: { columns: { type: true, total: true, voteCount: true } }
      },
      where: {
        streamer,
        id: { in: pageTitleIds },
      }
    });
    const idToTitle = new Map(titles.map(t => [t.id, t]));
    return pageTitleIds.map(id => idToTitle.get(id)).filter(Boolean) as TitleListDto[];
  }
}
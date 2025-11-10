import {dbDrizzle} from '../db/dbDrizzle.js';
import {
  interestsTable,
  titleInterestsTable,
  titleRatingsTable,
  titlesTable,
} from '../db/schema.js';
import {and, asc, eq, gt, sql} from 'drizzle-orm';
import {Streamer} from '../db/dbTypes.js';
import {ChartDataDto, TitleStats} from '../dto/dtoTypes.js';

export class StreamerRepository {
  private readonly db;

  constructor(dbInstance = dbDrizzle) {
    this.db = dbInstance;
  }

  async titlesStats(streamer: Streamer): Promise<TitleStats> {
    const avgRatingQuery = this.db
    .select({
      avgRating: sql<number>`ROUND(avg(${titleRatingsTable.total}), 1)`,
    })
    .from(titleRatingsTable)
    .innerJoin(titlesTable, eq(titleRatingsTable.titleId, titlesTable.id))
    .where(
      and(
        eq(titlesTable.streamer, streamer),
        gt(titleRatingsTable.voteCount, 1000),
      ),
    );

    const totalQuery = this.db
    .select({
      total: sql<number>`count(*)`,
      totalEpisodes: sql<number>`SUM(${titlesTable.episodes})`,
    })
    .from(titleRatingsTable)
    .innerJoin(titlesTable, eq(titleRatingsTable.titleId, titlesTable.id))
    .where(eq(titlesTable.streamer, streamer));

    const [[resultAvg], [resultTotal]] = await Promise.all([avgRatingQuery, totalQuery]);

    return {
      total: resultTotal.total,
      totalEpisodes: resultTotal.totalEpisodes,
      avgRating: resultAvg.avgRating,
    };
  }

  titlesByType(streamer: Streamer): Promise<ChartDataDto[]> {
    return this.db
      .select({
        label: titlesTable.type,
        count: sql<number>`count(
      ${titlesTable.type}
      )`,
      })
      .from(titlesTable)
      .where(eq(titlesTable.streamer, streamer))
      .groupBy(titlesTable.type)
      .orderBy(sql`count(${titlesTable.type})DESC`, asc(titlesTable.type));
  }

  async titleByCategoryTopN(
    streamer: Streamer,
    n: number,
  ): Promise<ChartDataDto[]> {
    const results = await this.db
      .select({
        label: interestsTable.category,
        count: sql<number>`count(
        ${interestsTable.category}
        )`,
      })
      .from(titleInterestsTable)
      .innerJoin(titlesTable, eq(titleInterestsTable.titleId, titlesTable.id))
      .innerJoin(
        interestsTable,
        eq(titleInterestsTable.interestId, interestsTable.id),
      )
      .where(eq(titlesTable.streamer, streamer))
      .groupBy(interestsTable.category)
      .orderBy(
        sql`count(${interestsTable.category})DESC`,
        asc(interestsTable.category),
      );

    const topN = results.slice(0, n);
    const other = results.slice(n);

    if (other.length > 0) {
      const otherCount = other.reduce(
        (sum, item) => Number(sum) + Number(item.count),
        0,
      );
      topN.push({label: 'Other', count: otherCount});
    }

    return topN;
  }
}

import { dbDrizzle } from "../db/dbDrizzle.js";
import {
  Streamer,
  Title,
  TitleCredit,
  TitleDraft,
  TitleInsertDraft,
  TitleInterest,
  TitleRating
} from "../db/dbTypes.js";
import {
  titleCreditsTable,
  titleDraftsTable,
  titleInterestsTable,
  titleRatingsTable,
  titlesTable
} from "../db/schema.js";
import { count, eq } from "drizzle-orm";
import { TitleDto, TitlePatchDto } from "../dto/dtoTypes.js";

export class TitlesRepository {
  private readonly db

  constructor(dbInstance = dbDrizzle) {
    this.db = dbInstance
  }

  async getCounts() {
    return await this.db
    .select({ streamer: titlesTable.streamer, count: count() })
    .from(titlesTable)
    .groupBy(titlesTable.streamer);
  }

  async getCount(streamer: Streamer): Promise<number> {
    const result = await this.db
    .select({ count: count() })
    .from(titlesTable)
    .where(() => {
      return eq(titlesTable.streamer, streamer);
    });

    return result[0]?.count ?? 0;
  }

  async getDraftCount(streamer: Streamer): Promise<number> {
    const result = await this.db
    .select({ count: count() })
    .from(titleDraftsTable)
    .where(() => {
      return eq(titleDraftsTable.streamer, streamer);
    });

    return result[0]?.count ?? 0;
  }

  get(streamer: Streamer): Promise<Title[]> {
    return this.db
    .select()
    .from(titlesTable)
    .where(eq(titlesTable.streamer, streamer));
  }

  getDrafts(streamer: Streamer): Promise<TitleDraft[]> {
    return this.db.query.titleDraftsTable.findMany({
      where: {
        streamer: streamer
      }
    })
  }

  getTitleDto(titleId: string): Promise<TitleDto | undefined> {
    return this.db.query.titlesTable.findFirst({
      with: {
        ratings: { columns: { type: true, total: true, voteCount: true } },
        interests: { columns: { id: true, name: true, isSubgenre: true } },
        stars: { with: { credit: true } },
        directors: { with: { credit: true } },
        writers: { with: { credit: true } },
      },
      where: {
        id: titleId
      }
    })
  }

  getTitlePatchDtos(streamer: Streamer, page?: number, pageSize?: number): Promise<TitlePatchDto[]> {
    return this.db.query.titlesTable.findMany({
      with: {
        interests: { columns: { id: true, name: true } },
        stars: { columns: {}, with: { credit: { columns: { id: true, name: true } } } },
        directors: { columns: {}, with: { credit: { columns: { id: true, name: true } } } },
        writers: { columns: {}, with: { credit: { columns: { id: true, name: true } } } },
        ratings: { columns: { type: true, total: true, voteCount: true } }
      },
      where: {
        streamer: streamer,
      },
      limit: pageSize,
      offset: page && pageSize ? (page - 1) * pageSize : undefined,
    });
  }

  deleteDraft(titleDraft: TitleDraft) {
    return this.db.delete(titleDraftsTable).where(eq(titleDraftsTable.id, titleDraft.id));
  }

  async insert(title: Title) {
    return this.db
    .insert(titlesTable)
    .values(title)
    .onConflictDoNothing()
  }

  insertDraft(titleDraft: TitleInsertDraft) {
    return this.db
    .insert(titleDraftsTable)
    .values(titleDraft)
  }

  insertTitleRating(entity: TitleRating) {
    return this.db.insert(titleRatingsTable).values(entity)
  }

  insertTitleCredit(entity: TitleCredit) {
    return this.db.insert(titleCreditsTable).values(entity)
  }

  insertTitleInterest(entity: TitleInterest) {
    return this.db.insert(titleInterestsTable).values(entity)
  }

  updateTitle(entity: Title) {
    return this.db
    .update(titlesTable)
    .set(entity)
    .where(eq(titlesTable.id, entity.id))
  }
}

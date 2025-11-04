import { dbDrizzle } from "../db/dbDrizzle.js";
import {
  Streamer,
  Title,
  TitleDraft,
  TitleImage,
  TitleInsertDraft,
  TitleRating
} from "../db/dbTypes.js";
import {
  titleDraftsTable,
  titleImagesTable,
  titleRatingsTable,
  titlesTable
} from "../db/schema.js";
import { count, eq } from "drizzle-orm";
import { TitleDto, TitleListDto, TitlePatchDto } from "../dto/dtoTypes.js";
import { TitlesGetCountsResponse } from "./titleTypes.js";
import * as p from "drizzle-orm/pg-core";

export class TitlesRepository {
  private readonly db

  constructor(dbInstance = dbDrizzle) {
    this.db = dbInstance
  }

  async getCounts(): Promise<TitlesGetCountsResponse> {
    const results = await this.db
    .select({ streamer: titlesTable.streamer, count: count() })
    .from(titlesTable)
    .groupBy(titlesTable.streamer);

    return results.reduce((acc, { streamer, count }) => {
      acc[streamer as keyof TitlesGetCountsResponse] = count;
      return acc;
    }, {} as TitlesGetCountsResponse);
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

  getImageByTitleId(titleId: string) {
    return this.db.select().from(titleImagesTable).where(eq(titleImagesTable.titleId, titleId));
  }

  getTitleDto(titleId: string): Promise<TitleDto | undefined> {
    return this.db.query.titlesTable.findFirst({
      with: {
        images: true,
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

  geTitleListDtos(streamer: Streamer, page?: number, pageSize?: number): Promise<TitleListDto[]> {
    return this.db.query.titlesTable.findMany({
      with: {
        images: true,
        interests: { columns: { id: true, name: true, isSubgenre: true } },
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
    const result = await this.db
    .insert(titlesTable)
    .values(title)
    .onConflictDoNothing()
    .returning({ insertedId: titlesTable.id });

    return result[0]?.insertedId;
  }

  insertDraft(titleDraft: TitleInsertDraft) {
    return this.db
    .insert(titleDraftsTable)
    .values(titleDraft)
  }

  insertImage(image: TitleImage) {
    return this.db.insert(titleImagesTable).values(image).onConflictDoNothing().returning({ insertedId: titleImagesTable.id });
  }

  insertRating(entity: TitleRating) {
    return this.db.insert(titleRatingsTable).values(entity)
  }

  updateTitle(entity: Title) {
    return this.db
    .update(titlesTable)
    .set(entity)
    .where(eq(titlesTable.id, entity.id))
  }
}

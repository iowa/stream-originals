import {
  CreditPatchDto,
  InterestPatchDto,
  TitleRatingPatchDto,
  TitlePatchDto
} from "../dto/dtoTypes.js";
import { dbDrizzle } from "../db/dbDrizzle.js";
import { titleRatingsTable, titleCreditsTable, titleInterestsTable, titlesTable } from "../db/schema.js";
import { and, eq, inArray } from "drizzle-orm";
import { CreditRole, TitleCredit } from "../db/dbTypes.js";

export class TitlesMerger {

  constructor(
    private readonly db = dbDrizzle,
  ) {
  }

  async merge(original: TitlePatchDto, updated: TitlePatchDto): Promise<void> {
    await this.mergeTitle(original, updated);
    await this.mergeInterests(original.id, original.interests, updated.interests)
    await this.mergeCredits(original.id, original.stars, updated.stars, 'star')
    await this.mergeCredits(original.id, original.directors, updated.directors, 'director')
    await this.mergeCredits(original.id, original.writers, updated.writers, 'writer')
    await this.mergeRatings(original.id, original.ratings, updated.ratings)
  }

  async mergeTitle(o: TitlePatchDto, u: TitlePatchDto) {
    if (o.plot !== u.plot) {
      await this.db
      .update(titlesTable)
      .set({ plot: u.plot ? u.plot : null })
      .where(eq(titlesTable.id, o.id))
    }
  }

  async mergeInterests(titleId: string, o: InterestPatchDto[], u: InterestPatchDto[]) {
    const currentIds = o.map(i => i.id);
    const newIds = u.map(i => i.id);

    const toDelete = currentIds.filter(id => !newIds.includes(id));
    if (toDelete.length) {
      await this.db.delete(titleInterestsTable).where(
        and(
          eq(titleInterestsTable.titleId, titleId),
          inArray(titleInterestsTable.interestId, toDelete)
        )
      );
    }

    const toInsert = newIds.filter(id => !currentIds.includes(id));
    if (toInsert.length) {
      await this.db.insert(titleInterestsTable).values(
        toInsert.map(interestId => ({ titleId, interestId }))
      );
    }
  }

  async mergeCredits(titleId: string, o: CreditPatchDto[], u: CreditPatchDto[], role: CreditRole) {
    const currentIds = o.map(i => i.credit.id);
    const newIds = u.map(i => i.credit.id);

    const toDelete = currentIds.filter(id => !newIds.includes(id));
    if (toDelete.length) {
      await this.db.delete(titleCreditsTable).where(
        and(
          eq(titleCreditsTable.titleId, titleId),
          inArray(titleCreditsTable.creditId, toDelete)
        )
      );
    }

    const toInsert = newIds.filter(id => !currentIds.includes(id));
    if (toInsert.length) {
      await this.db.insert(titleCreditsTable).values(
        toInsert.map(creditId => ({
          titleId: titleId,
          creditId: creditId,
          role: role
        } as TitleCredit))
      );
    }
  }

  private async mergeRatings(titleId: string, o: TitleRatingPatchDto[], u: TitleRatingPatchDto[]) {
    const currentTypes = new Set(o.map(r => r.type));
    const newTypes = new Set(u.map(r => r.type));

    const toDelete = [...currentTypes].filter(type => !newTypes.has(type));
    if (toDelete.length) {
      await this.db.delete(titleRatingsTable).where(
        and(eq(titleRatingsTable.titleId, titleId), inArray(titleRatingsTable.type, toDelete))
      );
    }

    const toInsert = u.filter(r => !currentTypes.has(r.type));
    if (toInsert.length) {
      await this.db.insert(titleRatingsTable).values(
        toInsert.map(({ type, total, voteCount }) => ({ titleId, type, total, voteCount }))
      );
    }

    const toUpdate = u.filter(r => {
      const orig = o.find(or => or.type === r.type);
      return orig && (orig.total !== r.total || orig.voteCount !== r.voteCount);
    });
    for (const { type, total, voteCount } of toUpdate) {
      await this.db.update(titleRatingsTable)
      .set({ total, voteCount })
      .where(and(eq(titleRatingsTable.titleId, titleId), eq(titleRatingsTable.type, type)));
    }
  }

}
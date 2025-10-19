import { CreditPatchDto, InterestPatchDto, TitlePatchDto } from "../dto/dtoTypes.js";
import { dbDrizzle } from "../db/dbDrizzle.js";
import { titleCreditsTable, titleInterestsTable, titlesTable } from "../db/schema.js";
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
  }

  async mergeTitle(original: TitlePatchDto, updated: TitlePatchDto) {
    if (original.plot !== updated.plot) {
      await this.db
      .update(titlesTable)
      .set({ plot: updated.plot ? updated.plot : null })
      .where(eq(titlesTable.id, original.id))
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

}
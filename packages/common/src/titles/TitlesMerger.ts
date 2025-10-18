import { CreditPatchDto, InterestPatchDto, TitlePatchDto } from "../dto/dtoTypes.js";
import { dbDrizzle } from "../db/dbDrizzle.js";
import { titleCreditsTable, titleInterestsTable, titlesTable } from "../db/schema.js";
import { and, eq, inArray } from "drizzle-orm";

export class TitlesMerger {

  constructor(
    private readonly db = dbDrizzle,
  ) {
  }

  async merge(original: TitlePatchDto, updated: TitlePatchDto): Promise<void> {
    await this.mergeTitle(original, updated);
    await this.mergeInterest(original.id, original.interests, updated.interests)
    await this.mergeCredits(original.id, original.credits, updated.credits)
  }

  async mergeTitle(original: TitlePatchDto, updated: TitlePatchDto) {
    if (original.plot !== updated.plot) {
      await this.db
      .update(titlesTable)
      .set({ plot: updated.plot ? updated.plot : null })
      .where(eq(titlesTable.id, original.id))
    }
  }

  async mergeInterest(titleId: string, o: InterestPatchDto[], u: InterestPatchDto[]) {
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

  async mergeCredits(titleId: string, o: CreditPatchDto[], u: CreditPatchDto[]) {
    const currentPairs = o.map(c => `${c.id}:${c.credit.role}`);
    const newPairs = u.map(c => `${c.id}:${c.credit.role}`);

    const toDelete = currentPairs.filter(pair => !newPairs.includes(pair));
    if (toDelete.length) {
      const toDeleteCredits = toDelete.map(pair => {
        const [creditId, role] = pair.split(':');
        return { creditId, role };
      });
      await this.db.delete(titleCreditsTable).where(
        and(
          eq(titleCreditsTable.titleId, titleId),
          inArray(titleCreditsTable.creditId, toDeleteCredits.map(c => c.creditId)),
        )
      );
    }

    const toInsert = u.filter(c => !currentPairs.includes(`${c.id}:${c.credit.role}`));
    if (toInsert.length) {
      await this.db.insert(titleCreditsTable).values(
        toInsert.map(c => ({
          titleId,
          creditId: c.id,
          role: c.credit.role
        }))
      );
    }
  }

}
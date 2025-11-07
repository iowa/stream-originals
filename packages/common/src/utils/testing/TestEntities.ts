import { CreditWithRole, Interest, Title, TitleRating } from "../../db/dbTypes.js";
import { TitlesRepository } from "../../titles/TitlesRepository.js";
import { InterestsRepository } from "../../interests/InterestsRepository.js";
import { CreditsRepository } from "../../credits/CreditsRepository.js";


export type TestTitle = {
  title: Title,
  ratings: TitleRating[],
  credits: CreditWithRole[],
  interests: Interest[],
}

export class TestEntities {

  constructor(
    private readonly titlesRepository: TitlesRepository,
    private readonly interestsRepository: InterestsRepository | undefined,
    private readonly creditsRepository: CreditsRepository | undefined
  ) {
  }

  async insertTitle(testTitle: TestTitle) {
    await this.titlesRepository.insert(testTitle.title);
    if (this.interestsRepository) {
      for (const interest of testTitle.interests) {
        await this.interestsRepository.insert(interest)
        await this.titlesRepository.insertTitleInterest({
          titleId: testTitle.title.id,
          interestId: interest.id
        })
      }
    }
    for (const rating of testTitle.ratings) {
      await this.titlesRepository.insertTitleRating(rating)
    }
    if (this.creditsRepository) {
      for (const credit of testTitle.credits) {
        await this.creditsRepository.insert(credit)
        await this.titlesRepository.insertTitleCredit({
          titleId: testTitle.title.id,
          creditId: credit.id,
          role: credit.role
        })
      }
    }
  }

}

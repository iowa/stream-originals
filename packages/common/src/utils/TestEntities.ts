import { Credit, Interest, Title, TitleCredit, TitleInterest, TitleRating } from "../db/dbTypes.js";
import { TitlesRepository } from "../titles/TitlesRepository.js";
import { CreditsRepository } from "../credits/CreditsRepository.js";
import { InterestsRepository } from "../interests/InterestsRepository.js";

export type TestTitle = {
  title: Title,
  titleRatings: TitleRating[],
  credits: Credit[],
  titleCredits: TitleCredit[],
  interests: Interest[],
  titleInterests: TitleInterest[]
}

export class TestEntities {

  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly interestsRepository: InterestsRepository = new InterestsRepository(),
    private readonly creditsRepository: CreditsRepository = new CreditsRepository(),
  ) {
  }

  async insertTitle(testTitle: TestTitle) {
    await this.titlesRepository.insert(testTitle.title);
    for (const interest of testTitle.interests) {
      await this.interestsRepository.insert(interest)
    }
    for (const credit of testTitle.credits) {
      await this.creditsRepository.insert(credit)
    }
    for (const interest of testTitle.titleInterests) {
      await this.titlesRepository.insertTitleInterest(interest)
    }
    for (const rating of testTitle.titleRatings) {
      await this.titlesRepository.insertTitleRating(rating)
    }
    for (const credit of testTitle.titleCredits) {
      await this.titlesRepository.insertTitleCredit(credit)
    }
  }

}
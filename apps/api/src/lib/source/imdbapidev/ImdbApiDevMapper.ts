import { ImdbapiInterest, ImdbapiName, ImdbapiTitle } from "./generated/index.js";
import {
  Credit,
  CreditPatchDto,
  Interest,
  InterestPatchDto,
  InterestsRepository,
  TitlePatchDto
} from "@repo/common";
import { CreditsRepository } from "@repo/common/credits/CreditsRepository";

export class ImdbApiDevMapper {

  constructor(
    private readonly interestsRepository: InterestsRepository = new InterestsRepository(),
    private readonly creditsRepository: CreditsRepository = new CreditsRepository(),
  ) {
  }

  async mapTitle(dbTitle: TitlePatchDto,
           apiTitle: ImdbapiTitle,
           interestsIds: Set<string>,
           creditIds: Set<string>): Promise<TitlePatchDto> {
    const interests: InterestPatchDto[] = [];
    if (apiTitle.interests) {
      for (const apiInterest of apiTitle.interests) {
        const interest = this.mapInterest('', apiInterest);
        if (!interestsIds.has(interest.id)) {
          await this.interestsRepository.insert(interest);
          interestsIds.add(interest.id);
        }
        interests.push(interest)
      }
    }
    const credits: CreditPatchDto[] = [];
    for (const apiStar of apiTitle.stars || []) {
      const credit = this.mapCredit(apiStar);
      if (!creditIds.has(credit.id)) {
        await this.creditsRepository.insert(credit);
        creditIds.add(credit.id);
      }
      credits.push({
        id: credit.id,
        name: credit.name,
        credit: {
          role: 'star'
        }
      })
    }
    return {
      ...dbTitle,
      plot: apiTitle.plot,
      interests: interests,
      credits: credits
    } as TitlePatchDto;
  }

  mapInterest(category: string, apiInterest: ImdbapiInterest): Interest {
    return {
      id: apiInterest.id!,
      name: apiInterest.name!,
      isSubgenre: apiInterest.isSubgenre!,
      description: apiInterest.description ?? null,
      category: category
    }
  }

  mapCredit(apiCredit: ImdbapiName): Credit {
    return {
      id: apiCredit.id!,
      name: apiCredit.displayName!,
      primaryImageUrl: apiCredit.primaryImage?.url || null,
      primaryImageWidth: apiCredit.primaryImage?.width || null,
      primaryImageHeight: apiCredit.primaryImage?.height || null,
    }
  }


}
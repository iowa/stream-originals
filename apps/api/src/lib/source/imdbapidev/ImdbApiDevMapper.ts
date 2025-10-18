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

  async mapTitle(
    dbTitle: TitlePatchDto,
    apiTitle: ImdbapiTitle,
    interestsIds: Set<string>,
    creditIds: Set<string>
  ): Promise<TitlePatchDto> {
    const interests = await this.mapAndInsertInterests(apiTitle.interests, interestsIds);
    const credits = await this.mapAndInsertCredits(apiTitle, creditIds);

    return {
      ...dbTitle,
      plot: apiTitle.plot,
      interests,
      credits,
    } as TitlePatchDto;
  }

  private async mapAndInsertInterests(
    apiInterests: ImdbapiInterest[] | undefined,
    interestsIds: Set<string>
  ): Promise<InterestPatchDto[]> {
    const interests: InterestPatchDto[] = [];
    if (apiInterests) {
      for (const apiInterest of apiInterests) {
        const interest = this.mapInterest('', apiInterest);
        if (!interestsIds.has(interest.id)) {
          await this.interestsRepository.insert(interest);
          interestsIds.add(interest.id);
        }
        interests.push(interest);
      }
    }
    return interests;
  }

  private async mapAndInsertCredits(
    apiTitle: ImdbapiTitle,
    creditIds: Set<string>
  ): Promise<CreditPatchDto[]> {
    const roles = ['stars', 'directors', 'writers'] as const;
    const roleNames = ['star', 'director', 'writer'] as const;

    const credits: CreditPatchDto[] = [];
    for (let i = 0; i < roles.length; i++) {
      const role = roles[i];
      const roleName = roleNames[i];
      for (const apiPerson of apiTitle[role] || []) {
        const credit = this.mapCredit(apiPerson);
        if (!creditIds.has(credit.id)) {
          await this.creditsRepository.insert(credit);
          creditIds.add(credit.id);
        }
        credits.push({
          id: credit.id,
          name: credit.name,
          credit: { role: roleName },
        });
      }
    }
    return credits;
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
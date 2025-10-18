import { ImdbapiInterest, ImdbapiName, ImdbapiTitle } from "./generated/index.js";
import { Credit, CreditPatchDto, Interest, InterestPatchDto, TitlePatchDto } from "@repo/common";

export class ImdbApiDevMapper {

  mapTitle(dbTitle: TitlePatchDto, apiTitle: ImdbapiTitle): TitlePatchDto {
    const interests: InterestPatchDto[] = [];
    if (apiTitle.interests) {
      for (const apiInterest of apiTitle.interests) {
        interests.push(this.mapInterest('', apiInterest))
      }
      const credits: CreditPatchDto[] = [];
      for (const apiStar of apiTitle.stars || []) {

      }
    }
    return {
      ...dbTitle,
      plot: apiTitle.plot,
      interests: interests
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
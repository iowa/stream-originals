import type { ImdbapiInterest, ImdbapiTitle } from "./generated/index.js";
import { Interest, TitleDto } from "@repo/common";

export class ImdbApiDevMapper {

  mapTitle(dbTitle: TitleDto, apiTitle: ImdbapiTitle): TitleDto {
    const interests: Interest[] = [];
    if (apiTitle.interests) {
      for (const apiInterest of apiTitle.interests) {
        interests.push(this.mapInterest('', apiInterest))
      }
    }
    return {
      ...dbTitle,
      plot: apiTitle.plot,
      interests: interests
    } as TitleDto;
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

}
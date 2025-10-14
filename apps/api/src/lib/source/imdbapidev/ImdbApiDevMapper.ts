import type { ImdbapiInterest, ImdbapiTitle } from "./generated/index.js";
import { Interests, Title } from "@repo/common";

export class ImdbApiDevMapper {

  mapTitle(dbTitle: Title, apiTitle: ImdbapiTitle) {
  }

  mapInterest(category: string, apiInterest: ImdbapiInterest): Interests {
    return {
      id: apiInterest.id!,
      name: apiInterest.name!,
      isSubgenre: apiInterest.isSubgenre!,
      description: apiInterest.description ?? null,
      category: category
    }
  }

}
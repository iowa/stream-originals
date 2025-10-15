import type { ImdbapiInterest, ImdbapiTitle } from "./generated/index.js";
import { Interest, TitleDto } from "@repo/common";

export class ImdbApiDevMapper {

  mapTitle(dbTitle: TitleDto, apiTitle: ImdbapiTitle) {
    console.log(JSON.stringify(dbTitle));
    console.log(JSON.stringify(apiTitle));
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
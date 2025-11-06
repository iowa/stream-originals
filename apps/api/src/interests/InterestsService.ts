import { InterestsRepository } from "@repo/common";
import { ImdbApiDevRestClient } from "../lib/source/imdbapidev/ImdbApiDevRestClient.js";
import { ImdbApiDevMapper } from "../lib/source/imdbapidev/ImdbApiDevMapper.js";
import { InteretsCreateResponse } from "./interestsTypes.js";

export class InterestsService {
  constructor(
    private readonly imdbApiDevRestClient = new ImdbApiDevRestClient(),
    private readonly interestsRepository = new InterestsRepository(),
    private readonly imdbApiDevMapper = new ImdbApiDevMapper(),
  ) {
  }

  async create(): Promise<InteretsCreateResponse> {
    const response = this.buildCreateResponse();
    const { categories } = await this.imdbApiDevRestClient.getInterests();
    const dbInterestsIds: Set<string> = await this.interestsRepository.getAllIds();
    if (categories) {
      for (const { category, interests } of categories) {
        if (interests) {
          for (const interest of interests) {
            if (interest.id && !dbInterestsIds.has(interest.id)) {
              await this.interestsRepository.insert(
                this.imdbApiDevMapper.mapInterest(category!, interest)
              );
            }
          }
          response.totalInApi += interests.length;
        }
      }
    }
    response.totalInDatabase = await this.interestsRepository.getCount();
    return response;
  }

  private buildCreateResponse(): InteretsCreateResponse {
    return { totalInDatabase: 0, totalInApi: 0 };
  }
}
